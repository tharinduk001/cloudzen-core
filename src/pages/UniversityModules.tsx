import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Clock, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { universityModules } from "@/data/mock-data";

const semesters = [...new Set(universityModules.map((m) => m.semester))];

const UniversityModules = () => (
  <div className="container py-8">
    <div className="mb-8">
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">University Modules</h1>
      <p className="text-muted-foreground">Module-based mini courses designed for undergraduates.</p>
    </div>
    {semesters.map((semester) => (
      <div key={semester} className="mb-10">
        <h2 className="font-display text-2xl font-bold mb-4">{semester}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {universityModules.filter((m) => m.semester === semester).map((mod, i) => (
            <motion.div key={mod.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Card className="hover-glow hover:border-primary/30 transition-all h-full">
                <CardContent className="p-5">
                  <Badge variant="secondary" className="mb-2">{mod.semester}</Badge>
                  <h3 className="font-display font-semibold text-lg mb-2">{mod.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{mod.description}</p>
                  <div className="flex gap-3 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" />{mod.lessons} lessons</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{mod.duration}</span>
                  </div>
                  <div className="space-y-1.5 mb-4">
                    {mod.outcomes.map((o) => (
                      <div key={o} className="flex items-start gap-2 text-xs"><CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />{o}</div>
                    ))}
                  </div>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="lessons" className="border-0">
                      <AccordionTrigger className="text-xs text-primary py-2">View Lesson List</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-1 text-xs text-muted-foreground">
                          {Array.from({ length: mod.lessons }, (_, j) => (
                            <li key={j}>Lesson {j + 1}: Topic placeholder</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default UniversityModules;
