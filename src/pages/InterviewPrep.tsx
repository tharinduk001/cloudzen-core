import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, AlertTriangle, Shuffle, ArrowRight } from "lucide-react";
import { interviewQuestions } from "@/data/mock-data";

const roles = ["Software Engineer", "DevOps Engineer", "Cloud Engineer"];

const InterviewPrep = () => {
  const [practiceMode, setPracticeMode] = useState(false);
  const [practiceQuestions, setPracticeQuestions] = useState<typeof interviewQuestions>([]);

  const startPractice = (role: string) => {
    const roleQs = interviewQuestions.filter((q) => q.role === role);
    const shuffled = [...roleQs].sort(() => Math.random() - 0.5).slice(0, Math.min(10, roleQs.length));
    setPracticeQuestions(shuffled);
    setPracticeMode(true);
  };

  const QuestionsSection = ({ role }: { role: string }) => {
    const questions = interviewQuestions.filter((q) => q.role === role);
    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <p className="text-base text-muted-foreground">{questions.length} questions</p>
          <Button variant="outline" size="lg" className="h-12 text-base" onClick={() => startPractice(role)}>
            <Shuffle className="mr-2 h-5 w-5" />Quick Practice
          </Button>
        </div>
        <Accordion type="multiple" className="space-y-3">
          {questions.map((q) => (
            <AccordionItem key={q.id} value={q.id} className="border rounded-xl px-5">
              <AccordionTrigger className="text-base font-medium text-left py-5">
                <div className="flex items-center gap-3 mr-4">
                  <Badge variant={q.difficulty === "Easy" ? "secondary" : q.difficulty === "Medium" ? "default" : "destructive"} className="text-sm shrink-0">{q.difficulty}</Badge>
                  <span>{q.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground pb-5">
                <Badge variant="outline" className="text-sm mb-3">{q.category}</Badge>
                <p className="leading-relaxed">{q.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="grid lg:grid-cols-2 gap-8 mt-10">
          <Card className="hover-glow transition-shadow">
            <CardContent className="p-8">
              <h3 className="font-display font-bold text-xl mb-4">Mock Interview Checklist</h3>
              <div className="space-y-3">
                {["Research the company", "Review fundamentals", "Practice whiteboard coding", "Prepare STAR answers", "Test your setup (for virtual)"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-base"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" />{item}</div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="hover-glow transition-shadow">
            <CardContent className="p-8">
              <h3 className="font-display font-bold text-xl mb-4">Common Mistakes</h3>
              <div className="space-y-3">
                {["Not asking clarifying questions", "Jumping to code without planning", "Ignoring edge cases", "Not explaining your thought process", "Forgetting to test your solution"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-base"><AlertTriangle className="h-5 w-5 text-destructive shrink-0" />{item}</div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="gradient-bg-subtle">
          <CardContent className="p-10 text-center">
            <h3 className="font-display font-bold text-2xl mb-3">Want personalized prep?</h3>
            <p className="text-lg text-muted-foreground mb-5">Book a 1:1 interview prep session with our experts.</p>
            <Button asChild size="lg" className="gradient-bg text-white border-0 h-14 text-lg px-8">
              <Link to="/consultations">Book a Session <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  };

  if (practiceMode) {
    return (
      <div className="container py-12 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-3xl font-bold">Quick Practice Mode</h1>
          <Button variant="outline" size="lg" className="h-12 text-base" onClick={() => setPracticeMode(false)}>Exit Practice</Button>
        </div>
        <p className="text-lg text-muted-foreground mb-8">{practiceQuestions.length} random questions. Reveal answers when ready.</p>
        <Accordion type="multiple" className="space-y-3">
          {practiceQuestions.map((q, i) => (
            <AccordionItem key={q.id} value={q.id} className="border rounded-xl px-5">
              <AccordionTrigger className="text-base font-medium text-left py-5">
                <span className="mr-3 text-muted-foreground">Q{i + 1}.</span> {q.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground pb-5">{q.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="font-display text-5xl lg:text-6xl font-bold mb-4">Interview Prep</h1>
        <p className="text-xl text-muted-foreground">Prepare for your next tech interview with curated questions and answers.</p>
      </motion.div>

      <Tabs defaultValue="Software Engineer">
        <TabsList className="h-12">
          {roles.map((role) => <TabsTrigger key={role} value={role} className="text-base px-6">{role}</TabsTrigger>)}
        </TabsList>
        {roles.map((role) => (
          <TabsContent key={role} value={role} className="mt-8"><QuestionsSection role={role} /></TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default InterviewPrep;
