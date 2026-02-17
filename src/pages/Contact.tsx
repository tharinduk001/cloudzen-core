import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Github, Linkedin, Twitter, MapPin } from "lucide-react";

const Contact = () => (
  <div className="container py-8 max-w-4xl">
    <div className="mb-8">
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Contact Us</h1>
      <p className="text-muted-foreground">Have a question? We'd love to hear from you.</p>
    </div>

    <div className="grid lg:grid-cols-2 gap-8 mb-12">
      <Card>
        <CardContent className="p-6">
          <h2 className="font-display text-xl font-bold mb-4">Send a Message</h2>
          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div><Label htmlFor="name">Name</Label><Input id="name" placeholder="Your name" /></div>
              <div><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="your@email.com" /></div>
            </div>
            <div><Label htmlFor="subject">Subject</Label><Input id="subject" placeholder="What's this about?" /></div>
            <div><Label htmlFor="message">Message</Label><Textarea id="message" placeholder="Your message..." rows={5} /></div>
            <Button className="w-full gradient-bg text-white border-0">Send Message</Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="font-display text-xl font-bold">Get in Touch</h2>
            <div className="flex items-center gap-3 text-sm"><Mail className="h-4 w-4 text-primary" />hello@cloudzen.dev</div>
            <div className="flex items-center gap-3 text-sm"><MapPin className="h-4 w-4 text-primary" />Colombo, Sri Lanka</div>
            <div className="flex gap-2 pt-2">
              <Button variant="ghost" size="icon"><Github className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon"><Linkedin className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon"><Twitter className="h-4 w-4" /></Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="font-display text-xl font-bold mb-4">FAQ</h2>
            <Accordion type="multiple" className="space-y-2">
              {[
                { q: "How do I enroll in a course?", a: "Simply navigate to the course page and click 'Enroll'. Free courses are instantly accessible." },
                { q: "Are certificates included?", a: "Yes! All courses include Open Badge 3.0 compliant digital credentials upon completion." },
                { q: "Do you offer team/university plans?", a: "Yes, we offer custom plans for universities and teams. Contact us for details." },
                { q: "How can I become an instructor?", a: "Visit our Instructors page and click 'Become an Instructor' to apply." },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-sm font-medium">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

export default Contact;
