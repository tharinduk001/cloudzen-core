import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Calendar, MessageSquare, FileText, Target, Code } from "lucide-react";

const services = [
  { icon: Target, title: "Cloud Roadmap", desc: "Custom learning plan for cloud certifications." },
  { icon: FileText, title: "CV Review", desc: "Expert review of your technical resume." },
  { icon: MessageSquare, title: "Mock Interviews", desc: "Practice with real interview scenarios." },
  { icon: Code, title: "Architecture Guidance", desc: "Design review for your cloud projects." },
];

const Consultations = () => {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Consultations</h1>
        <p className="text-muted-foreground">Get personalized guidance from our expert instructors.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {services.map((service) => (
          <Card key={service.title} className="hover-glow hover:border-primary/30 transition-all">
            <CardContent className="p-5">
              <service.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-display font-semibold mb-1">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.desc}</p>
            </CardContent>
          </Card>
        ))}
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
              <div>
                <Label>Service</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                  <SelectContent>
                    {services.map((s) => <SelectItem key={s.title} value={s.title}>{s.title}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
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
    </div>
  );
};

export default Consultations;
