import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Github, Linkedin, Twitter, MapPin, Send } from "lucide-react";

const Contact = () => (
  <div className="container py-12 max-w-5xl">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12"
    >
      <h1 className="font-display text-5xl lg:text-6xl font-bold mb-4">Contact Us</h1>
      <p className="text-xl text-muted-foreground">Have a question? We'd love to hear from you.</p>
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-10 mb-16">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
        <Card className="hover-glow transition-shadow">
          <CardContent className="p-8">
            <h2 className="font-display text-2xl font-bold mb-6">Send a Message</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div><Label htmlFor="name" className="text-base">Name</Label><Input id="name" placeholder="Your name" className="h-12 text-base mt-2" /></div>
                <div><Label htmlFor="email" className="text-base">Email</Label><Input id="email" type="email" placeholder="your@email.com" className="h-12 text-base mt-2" /></div>
              </div>
              <div><Label htmlFor="subject" className="text-base">Subject</Label><Input id="subject" placeholder="What's this about?" className="h-12 text-base mt-2" /></div>
              <div><Label htmlFor="message" className="text-base">Message</Label><Textarea id="message" placeholder="Your message..." rows={5} className="text-base mt-2" /></div>
              <Button className="w-full gradient-bg text-white border-0 h-14 text-lg">
                <Send className="mr-2 h-5 w-5" /> Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      <div className="space-y-8">
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <Card className="hover-glow transition-shadow">
            <CardContent className="p-8 space-y-5">
              <h2 className="font-display text-2xl font-bold">Get in Touch</h2>
              <div className="flex items-center gap-4 text-base"><Mail className="h-5 w-5 text-primary" />hello@cloudzen.dev</div>
              <div className="flex items-center gap-4 text-base"><MapPin className="h-5 w-5 text-primary" />Colombo, Sri Lanka</div>
              <div className="flex gap-3 pt-3">
                <Button variant="ghost" size="icon" className="h-12 w-12"><Github className="h-5 w-5" /></Button>
                <Button variant="ghost" size="icon" className="h-12 w-12"><Linkedin className="h-5 w-5" /></Button>
                <Button variant="ghost" size="icon" className="h-12 w-12"><Twitter className="h-5 w-5" /></Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <Card className="hover-glow transition-shadow">
            <CardContent className="p-8">
              <h2 className="font-display text-2xl font-bold mb-5">FAQ</h2>
              <Accordion type="multiple" className="space-y-3">
                {[
                  { q: "How do I enroll in a course?", a: "Simply navigate to the course page and click 'Enroll'. Free courses are instantly accessible." },
                  { q: "Are certificates included?", a: "Yes! All courses include Open Badge 3.0 compliant digital credentials upon completion." },
                  { q: "Do you offer team/university plans?", a: "Yes, we offer custom plans for universities and teams. Contact us for details." },
                  { q: "How can I become an instructor?", a: "Visit our Instructors page and click 'Become an Instructor' to apply." },
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border rounded-xl px-5">
                    <AccordionTrigger className="text-base font-medium">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  </div>
);

export default Contact;
