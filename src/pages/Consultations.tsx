import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Send } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { question: "What topics do your courses cover?", answer: "Our courses cover a wide range of Cloud & DevOps topics including AWS, Azure, GCP, Docker, Kubernetes, Terraform, CI/CD pipelines, Linux administration, and more." },
  { question: "Are the courses suitable for beginners?", answer: "Yes! We offer courses for all skill levels — from absolute beginners to advanced practitioners. Each course clearly indicates the difficulty level." },
  { question: "How do I access the course materials?", answer: "Once enrolled, you can access all course materials directly through our platform. Recorded courses are available on-demand." },
  { question: "Do you offer certificates upon completion?", answer: "Yes, upon successfully completing a course you will receive a verifiable digital certificate that you can share on LinkedIn." },
  { question: "What is your refund policy?", answer: "We offer a hassle-free refund policy. If you're not satisfied with a course, you can request a refund within 7 days of purchase." },
  { question: "How can I contact support?", answer: "You can reach us by filling out the contact form on this page, or email us directly. We typically respond within 24 hours." },
];

const Consultations = () => {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="font-display text-5xl lg:text-6xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-muted-foreground">Get personalized guidance from our expert instructors.</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
          <Card className="hover-glow transition-shadow">
            <CardContent className="p-8">
              <h2 className="font-display text-2xl font-bold mb-6">Request a Call</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base">Name</Label>
                    <Input id="name" placeholder="Your name" className="h-12 text-base" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="h-12 text-base" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-base">Current Role / Goal</Label>
                  <Input id="role" placeholder="e.g. Student, Junior Dev" className="h-12 text-base" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time" className="text-base">Preferred Time</Label>
                  <Input id="time" placeholder="e.g. Weekdays 6-8 PM" className="h-12 text-base" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your goals..." rows={4} className="text-base" />
                </div>
                <Button className="w-full gradient-bg text-white border-0 h-14 text-lg">
                  <Send className="mr-2 h-5 w-5" /> Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <Card className="gradient-bg-subtle h-fit hover-glow transition-shadow">
            <CardContent className="p-8">
              <Calendar className="h-12 w-12 text-primary mb-5" />
              <h2 className="font-display text-2xl font-bold mb-3">Calendar Scheduling</h2>
              <p className="text-lg text-muted-foreground mb-6">Direct calendar booking integration coming soon. For now, submit the form and we'll reach out within 24 hours.</p>
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
                <p className="text-lg text-muted-foreground">Calendar integration coming soon</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-16"
      >
        <h2 className="font-display text-4xl font-bold mb-3">Frequently Asked Questions</h2>
        <p className="text-lg text-muted-foreground mb-8">Find answers to common questions about our platform and courses.</p>
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="border rounded-xl px-5">
              <AccordionTrigger className="text-left text-base font-medium py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
};

export default Consultations;
