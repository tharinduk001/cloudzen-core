import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, AlertTriangle, Shuffle } from "lucide-react";
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
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{questions.length} questions</p>
          <Button variant="outline" size="sm" onClick={() => startPractice(role)}>
            <Shuffle className="mr-2 h-4 w-4" />Quick Practice
          </Button>
        </div>
        <Accordion type="multiple" className="space-y-2">
          {questions.map((q) => (
            <AccordionItem key={q.id} value={q.id} className="border rounded-lg px-4">
              <AccordionTrigger className="text-sm font-medium text-left">
                <div className="flex items-center gap-2 mr-4">
                  <Badge variant={q.difficulty === "Easy" ? "secondary" : q.difficulty === "Medium" ? "default" : "destructive"} className="text-xs shrink-0">{q.difficulty}</Badge>
                  <span>{q.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4">
                <Badge variant="outline" className="text-xs mb-2">{q.category}</Badge>
                <p>{q.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Checklist & Mistakes */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card>
            <CardContent className="p-5">
              <h3 className="font-display font-semibold mb-3">Mock Interview Checklist</h3>
              <div className="space-y-2">
                {["Research the company", "Review fundamentals", "Practice whiteboard coding", "Prepare STAR answers", "Test your setup (for virtual)"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" />{item}</div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <h3 className="font-display font-semibold mb-3">Common Mistakes</h3>
              <div className="space-y-2">
                {["Not asking clarifying questions", "Jumping to code without planning", "Ignoring edge cases", "Not explaining your thought process", "Forgetting to test your solution"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm"><AlertTriangle className="h-4 w-4 text-destructive shrink-0" />{item}</div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="gradient-bg-subtle">
          <CardContent className="p-5 text-center">
            <h3 className="font-display font-semibold mb-2">Want personalized prep?</h3>
            <p className="text-sm text-muted-foreground mb-3">Book a 1:1 interview prep session with our experts.</p>
            <Button asChild className="gradient-bg text-white border-0"><Link to="/consultations">Book a Session</Link></Button>
          </CardContent>
        </Card>
      </div>
    );
  };

  if (practiceMode) {
    return (
      <div className="container py-8 max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-display text-2xl font-bold">Quick Practice Mode</h1>
          <Button variant="outline" onClick={() => setPracticeMode(false)}>Exit Practice</Button>
        </div>
        <p className="text-sm text-muted-foreground mb-6">{practiceQuestions.length} random questions. Reveal answers when ready.</p>
        <Accordion type="multiple" className="space-y-2">
          {practiceQuestions.map((q, i) => (
            <AccordionItem key={q.id} value={q.id} className="border rounded-lg px-4">
              <AccordionTrigger className="text-sm font-medium text-left">
                <span className="mr-2 text-muted-foreground">Q{i + 1}.</span> {q.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{q.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Interview Prep</h1>
        <p className="text-muted-foreground">Prepare for your next tech interview with curated questions and answers.</p>
      </div>
      <Tabs defaultValue="Software Engineer">
        <TabsList>
          {roles.map((role) => <TabsTrigger key={role} value={role}>{role}</TabsTrigger>)}
        </TabsList>
        {roles.map((role) => (
          <TabsContent key={role} value={role}><QuestionsSection role={role} /></TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default InterviewPrep;
