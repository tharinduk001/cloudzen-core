import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What topics do your courses cover?",
    answer: "Our courses cover a wide range of Cloud & DevOps topics including AWS, Azure, GCP, Docker, Kubernetes, Terraform, CI/CD pipelines, Linux administration, and more.",
  },
  {
    question: "Are the courses suitable for beginners?",
    answer: "Yes! We offer courses for all skill levels — from absolute beginners to advanced practitioners. Each course clearly indicates the difficulty level so you can choose the right one.",
  },
  {
    question: "How do I access the course materials?",
    answer: "Once enrolled, you can access all course materials directly through our platform. Recorded courses are available on-demand, and live workshops are scheduled at specific times.",
  },
  {
    question: "Do you offer certificates upon completion?",
    answer: "Yes, upon successfully completing a course you will receive a verifiable digital certificate that you can share on LinkedIn and other professional platforms.",
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a hassle-free refund policy. If you're not satisfied with a course, you can request a refund within 7 days of purchase. Please visit our Refund & Returns page for full details.",
  },
  {
    question: "How can I contact support?",
    answer: "You can reach us by filling out the contact form on this page, or email us directly. We typically respond within 24 hours on business days.",
  },
];

const Consultations = () => {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-muted-foreground">Get personalized guidance from our expert instructors.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="font-display text-xl font-bold mb-4">Request a Call</h2>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label htmlFor="name">Name</Label><Input id="name" placeholder="Your name" /></div>
                <div><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="your@email.com" /></div>
              </div>
              <div><Label htmlFor="role">Current Role / Goal</Label><Input id="role" placeholder="e.g. Student, Junior Dev" /></div>
              <div><Label htmlFor="time">Preferred Time</Label><Input id="time" placeholder="e.g. Weekdays 6-8 PM" /></div>
              <div><Label htmlFor="message">Message</Label><Textarea id="message" placeholder="Tell us about your goals..." rows={4} /></div>
              <Button className="w-full gradient-bg text-white border-0">Submit Request</Button>
            </form>
          </CardContent>
        </Card>

        <Card className="gradient-bg-subtle h-fit">
          <CardContent className="p-6">
            <Calendar className="h-10 w-10 text-primary mb-4" />
            <h2 className="font-display text-xl font-bold mb-2">Calendar Scheduling</h2>
            <p className="text-muted-foreground mb-4">Direct calendar booking integration coming soon. For now, submit the form and we'll reach out within 24 hours.</p>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground text-sm">Calendar integration coming soon</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">Frequently Asked Questions</h2>
        <p className="text-muted-foreground mb-8">Find answers to common questions about our platform and courses.</p>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Consultations;
