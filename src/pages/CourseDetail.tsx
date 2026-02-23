import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Clock, Star, Users, Award, CheckCircle2, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { courses, instructors } from "@/data/mock-data";

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) return (
    <div className="container py-20 text-center">
      <h1 className="text-3xl font-bold font-display">Course not found</h1>
      <Button asChild className="mt-6" size="lg"><Link to="/courses">Back to Courses</Link></Button>
    </div>
  );

  const instructor = instructors.find((i) => i.name === course.instructor);

  return (
    <div className="container py-12">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex gap-3 mb-4 flex-wrap">
              <Badge variant="secondary" className="text-sm">{course.category}</Badge>
              <Badge variant="outline" className="text-sm">{course.level}</Badge>
              <Badge className="text-sm">{course.type}</Badge>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{course.description}</p>
            <div className="flex flex-wrap items-center gap-5 text-base text-muted-foreground">
              <span className="flex items-center gap-2"><Clock className="h-5 w-5" />{course.duration}</span>
              <span className="flex items-center gap-2"><Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />{course.rating}</span>
              <span className="flex items-center gap-2"><Users className="h-5 w-5" />{course.students} students</span>
              <span className="flex items-center gap-2"><Award className="h-5 w-5 text-primary" />{course.badge} badge</span>
            </div>
          </motion.div>

          {/* Outcomes */}
          <Card className="hover-glow transition-shadow">
            <CardContent className="p-8">
              <h2 className="font-display text-2xl font-bold mb-6">What You'll Learn</h2>
              <div className="grid grid-cols-2 gap-4">
                {["Core concepts and architecture", "Hands-on implementation skills", "Best practices and patterns", "Real-world project experience", "Interview preparation topics", "Open Badge 3.0 credential"].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-base"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />{item}</div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Syllabus */}
          <div>
            <h2 className="font-display text-2xl font-bold mb-6">Syllabus</h2>
            <Accordion type="multiple" className="space-y-3">
              {["Module 1: Introduction & Setup", "Module 2: Core Concepts", "Module 3: Hands-on Practice", "Module 4: Advanced Topics", "Module 5: Final Project & Assessment"].map((mod, i) => (
                <AccordionItem key={i} value={`mod-${i}`} className="border rounded-xl px-5">
                  <AccordionTrigger className="text-base font-medium py-5">{mod}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pb-5">
                    <ul className="space-y-3 list-disc list-inside">
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
            <Card className="hover-glow transition-shadow">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="h-20 w-20 rounded-2xl bg-muted flex items-center justify-center shrink-0">
                  <Users className="h-8 w-8 text-muted-foreground/30" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl">{instructor.name}</h3>
                  <p className="text-base text-primary font-medium mb-3">{instructor.title}</p>
                  <p className="text-base text-muted-foreground leading-relaxed">{instructor.bio}</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* FAQ */}
          <div>
            <h2 className="font-display text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <Accordion type="multiple" className="space-y-3">
              {[
                { q: "Do I need prior experience?", a: `This course is designed for ${course.level.toLowerCase()} level learners. Check the prerequisites for details.` },
                { q: "How long do I have access?", a: "You get lifetime access to all recorded content after enrollment." },
                { q: "Is there a certificate?", a: "Yes! You'll receive an Open Badge 3.0 compliant digital credential upon completion." },
                { q: "Can I get a refund?", a: "We offer a 30-day money-back guarantee for premium courses." },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border rounded-xl px-5">
                  <AccordionTrigger className="text-base font-medium py-5">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pb-5">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24 hover-glow transition-shadow">
            <CardContent className="p-8 space-y-6">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-muted-foreground/30" />
              </div>
              <div className="text-4xl font-display font-bold">
                {course.price === "Free" ? "Free" : `$${course.price}`}
              </div>

              {course.price !== "Free" ? (
                <div className="space-y-3">
                  <Button className="w-full gradient-bg text-white border-0 h-14 text-lg">
                    <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                  </Button>
                  <Button variant="outline" className="w-full h-14 text-lg">
                    Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              ) : (
                <Button className="w-full gradient-bg text-white border-0 h-14 text-lg">
                  Enroll for Free
                </Button>
              )}

              <div className="space-y-4 text-base">
                <div className="flex justify-between"><span className="text-muted-foreground">Duration</span><span className="font-medium">{course.duration}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Level</span><span className="font-medium">{course.level}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Type</span><span className="font-medium">{course.type}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Students</span><span className="font-medium">{course.students}</span></div>
              </div>
              <div className="border-t border-border pt-5">
                <div className="flex items-center gap-3 text-base text-primary">
                  <Award className="h-5 w-5" />
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
