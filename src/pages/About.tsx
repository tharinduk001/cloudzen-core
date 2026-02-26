import { Award, Target, Eye, Linkedin, Twitter, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const teamMembers = [
  { name: "Aisha Rahman", role: "Lead Instructor – Cloud Architecture", image: "", initials: "AR" },
  { name: "Vikram Patel", role: "DevOps Curriculum Lead", image: "", initials: "VP" },
  { name: "Fatima Noor", role: "Community & Student Success Manager", image: "", initials: "FN" },
  { name: "Raj Menon", role: "Platform Engineer", image: "", initials: "RM" },
];

const About = () => (
  <div className="container py-8">
    {/* Header */}
    <div className="mb-12">
      <h1 className="font-display text-3xl md:text-4xl font-bold">About CloudZen</h1>
    </div>

    {/* Mission & Vision */}
    <p className="text-muted-foreground mb-6">What drives us every day — our purpose and the future we're building together.</p>
    <div className="grid md:grid-cols-2 gap-6 mb-16">
      <Card>
        <CardContent className="p-6">
          <Target className="h-8 w-8 text-primary mb-3" />
          <h2 className="font-display text-xl font-bold mb-2">Our Mission</h2>
          <p className="text-muted-foreground">To bridge the gap between academic learning and industry readiness by providing hands-on, project-based education in Cloud, DevOps, and Software Engineering.</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <Eye className="h-8 w-8 text-primary mb-3" />
          <h2 className="font-display text-xl font-bold mb-2">Our Vision</h2>
          <p className="text-muted-foreground">To become the leading platform for practical tech education in South Asia and beyond, empowering the next generation of cloud-native engineers.</p>
        </CardContent>
      </Card>
    </div>

    <Separator className="mb-16" />

    {/* Founder's Message */}
    <div className="mb-16">
      <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center">Our Founder</h2>
      <div className="grid md:grid-cols-5 gap-8 items-center">
        <div className="md:col-span-2 flex justify-center">
          <div className="relative w-64 h-72 rounded-2xl overflow-hidden bg-muted border">
            <img src="/placeholder.svg" alt="Founder portrait" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-3">
          <h3 className="font-display text-xl font-bold mb-1">Mohammed Hasan</h3>
          <p className="text-sm text-primary font-medium mb-4">Founder & CEO, CloudZen</p>
          <blockquote className="border-l-4 border-primary pl-4 text-muted-foreground italic leading-relaxed space-y-3">
            <p>"I started CloudZen because I saw too many talented students struggling to break into the tech industry — not because they lacked potential, but because they lacked access to practical, industry-aligned education."</p>
            <p>"Our goal is simple: give every learner the hands-on experience and credentials they need to land their first cloud or DevOps role with confidence. We believe education should be a launchpad, not a barrier."</p>
          </blockquote>
          <div className="flex gap-3 mt-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </div>

    <Separator className="mb-16" />

    {/* Team Members */}
    <div className="mb-16">
      <h2 className="font-display text-2xl md:text-3xl font-bold mb-2 text-center">Our Team</h2>
      <p className="text-muted-foreground text-center mb-8 max-w-lg mx-auto">
        Meet the passionate people behind CloudZen who are dedicated to your success.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <Card key={member.name} className="text-center">
            <CardContent className="p-6 flex flex-col items-center">
              <Avatar className="h-20 w-20 mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-display font-bold">{member.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
              <div className="flex gap-2 mt-3">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-4 w-4" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github className="h-4 w-4" /></a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>

    <Separator className="mb-16" />

    {/* Open Badge */}
    <div className="gradient-bg-subtle rounded-2xl p-8 text-center">
      <Award className="h-12 w-12 text-primary mx-auto mb-4" />
      <h2 className="font-display text-2xl font-bold mb-2">Open Badge 3.0 Compliant</h2>
      <p className="text-muted-foreground max-w-lg mx-auto">
        All our credentials follow the Open Badge 3.0 standard, ensuring your achievements are verifiable, portable, and recognized globally by employers and institutions.
      </p>
    </div>
  </div>
);

export default About;
