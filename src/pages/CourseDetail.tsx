import { useParams, Link } from "react-router-dom";
import { BookOpen, Clock, Star, Users, Award, CheckCircle2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { courses, instructors } from "@/data/mock-data";

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) return <div className="container py-20 text-center"><h1 className="text-2xl font-bold">Course not found</h1><Button asChild className="mt-4"><Link to="/courses">Back to Courses</Link></Button></div>;

  const instructor = instructors.find((i) => i.name === course.instructor);

  return (
    <div className="container py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="flex gap-2 mb-3 flex-wrap">
              <Badge variant="secondary">{course.category}</Badge>
              <Badge variant="outline">{course.level}</Badge>
              <Badge>{course.type}</Badge>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">{course.title}</h1>
            <p className="text-lg text-muted-foreground mb-4">{course.description}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{course.duration}</span>
              <span className="flex items-center gap-1"><Star className="h-4 w-4 text-yellow-500" />{course.rating}</span>
              <span className="flex items-center gap-1"><Users className="h-4 w-4" />{course.students} students</span>
              <span className="flex items-center gap-1"><Award className="h-4 w-4 text-primary" />{course.badge} badge</span>
            </div>
          </div>

          {/* Outcomes */}
          <Card>
            <CardContent className="p-6">
              <h2 className="font-display text-xl font-bold mb-4">What You'll Learn</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Core concepts and architecture", "Hands-on implementation skills", "Best practices and patterns", "Real-world project experience", "Interview preparation topics", "Open Badge 3.0 credential"].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />{item}</div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Syllabus */}
          <div>
            <h2 className="font-display text-xl font-bold mb-4">Syllabus</h2>
            <Accordion type="multiple" className="space-y-2">
              {["Module 1: Introduction & Setup", "Module 2: Core Concepts", "Module 3: Hands-on Practice", "Module 4: Advanced Topics", "Module 5: Final Project & Assessment"].map((mod, i) => (
                <AccordionItem key={i} value={`mod-${i}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-sm font-medium">{mod}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Lesson {i * 3 + 1}: Overview and key concepts</li>
                      <li>Lesson {i * 3 + 2}: Practical exercises</li>
                      <li>Lesson {i * 3 + 3}: Quiz and review</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Instructor */}
          {instructor && (
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <Users className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold">{instructor.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{instructor.title}</p>
                  <p className="text-sm">{instructor.bio}</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* FAQ */}
          <div>
            <h2 className="font-display text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <Accordion type="multiple" className="space-y-2">
              {[
                { q: "Do I need prior experience?", a: `This course is designed for ${course.level.toLowerCase()} level learners. Check the prerequisites for details.` },
                { q: "How long do I have access?", a: "You get lifetime access to all recorded content after enrollment." },
                { q: "Is there a certificate?", a: "Yes! You'll receive an Open Badge 3.0 compliant digital credential upon completion." },
                { q: "Can I get a refund?", a: "We offer a 30-day money-back guarantee for premium courses." },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-sm font-medium">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardContent className="p-6 space-y-4">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <BookOpen className="h-10 w-10 text-muted-foreground/40" />
              </div>
              <div className="text-3xl font-display font-bold">
                {course.price === "Free" ? "Free" : `$${course.price}`}
              </div>
              <Button className="w-full gradient-bg text-white border-0" size="lg">
                {course.price === "Free" ? "Enroll for Free" : "Enroll Now"}
              </Button>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Duration</span><span className="font-medium">{course.duration}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Level</span><span className="font-medium">{course.level}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Type</span><span className="font-medium">{course.type}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Students</span><span className="font-medium">{course.students}</span></div>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Award className="h-4 w-4" />
                  <span className="font-medium">Open Badge 3.0 credential on completion</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
