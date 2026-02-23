import { motion } from "framer-motion";
import { Award, Target, Eye, Linkedin, Twitter, Github, Users, BookOpen, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const teamMembers = [
  { name: "Aisha Rahman", role: "Lead Instructor – Cloud Architecture", image: "", initials: "AR" },
  { name: "Vikram Patel", role: "DevOps Curriculum Lead", image: "", initials: "VP" },
  { name: "Fatima Noor", role: "Community & Student Success Manager", image: "", initials: "FN" },
  { name: "Raj Menon", role: "Platform Engineer", image: "", initials: "RM" },
];

const stats = [
  { icon: Users, value: "5,000+", label: "Active Students" },
  { icon: BookOpen, value: "18", label: "Expert Courses" },
  { icon: Trophy, value: "95%", label: "Success Rate" },
];

const About = () => (
  <div className="container py-12">
    {/* Hero Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-16"
    >
      <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">About CloudZen</h1>
      <p className="text-xl text-muted-foreground max-w-3xl">
        Bridging the gap between academic learning and industry readiness through hands-on, project-based education.
      </p>
    </motion.div>

    {/* Stats */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="grid grid-cols-3 gap-8 mb-16 max-w-3xl"
    >
      {stats.map((stat) => (
        <div key={stat.label} className="flex items-center gap-4 p-6 rounded-2xl border border-border/40 bg-card/80">
          <div className="h-14 w-14 rounded-xl gradient-bg flex items-center justify-center">
            <stat.icon className="h-7 w-7 text-white" />
          </div>
          <div>
            <p className="font-display text-3xl font-bold">{stat.value}</p>
            <p className="text-base text-muted-foreground">{stat.label}</p>
          </div>
        </div>
      ))}
    </motion.div>

    {/* Mission & Vision */}
    <div className="grid lg:grid-cols-2 gap-8 mb-16">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
        <Card className="h-full hover-glow transition-shadow">
          <CardContent className="p-8">
            <Target className="h-10 w-10 text-primary mb-4" />
            <h2 className="font-display text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">To bridge the gap between academic learning and industry readiness by providing hands-on, project-based education in Cloud, DevOps, and Software Engineering.</p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
        <Card className="h-full hover-glow transition-shadow">
          <CardContent className="p-8">
            <Eye className="h-10 w-10 text-primary mb-4" />
            <h2 className="font-display text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">To become the leading platform for practical tech education in South Asia and beyond, empowering the next generation of cloud-native engineers.</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>

    <Separator className="mb-16" />

    {/* Founder's Message */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mb-16"
    >
      <h2 className="font-display text-4xl font-bold mb-10 text-center">Our Founder</h2>
      <div className="grid lg:grid-cols-5 gap-10 items-center">
        <div className="lg:col-span-2 flex justify-center">
          <div className="relative w-72 h-80 rounded-2xl overflow-hidden bg-muted border-2 border-border/40 shadow-xl">
            <img src="/placeholder.svg" alt="Founder portrait" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-3">
          <h3 className="font-display text-2xl font-bold mb-1">Mohammed Hasan</h3>
          <p className="text-base text-primary font-medium mb-6">Founder & CEO, CloudZen</p>
          <blockquote className="border-l-4 border-primary pl-6 text-lg text-muted-foreground italic leading-relaxed space-y-4">
            <p>"I started CloudZen because I saw too many talented students struggling to break into the tech industry — not because they lacked potential, but because they lacked access to practical, industry-aligned education."</p>
            <p>"Our goal is simple: give every learner the hands-on experience and credentials they need to land their first cloud or DevOps role with confidence."</p>
          </blockquote>
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-6 w-6" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-6 w-6" /></a>
          </div>
        </div>
      </div>
    </motion.div>

    <Separator className="mb-16" />

    {/* Team Members */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mb-16"
    >
      <h2 className="font-display text-4xl font-bold mb-3 text-center">Our Team</h2>
      <p className="text-lg text-muted-foreground text-center mb-10 max-w-lg mx-auto">
        Meet the passionate people behind CloudZen who are dedicated to your success.
      </p>
      <div className="grid lg:grid-cols-4 gap-8">
        {teamMembers.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
          >
            <Card className="text-center hover-glow transition-shadow h-full">
              <CardContent className="p-8 flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-5">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="text-xl font-semibold bg-primary/10 text-primary">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-display font-bold text-xl">{member.name}</h3>
                <p className="text-base text-muted-foreground mt-2">{member.role}</p>
                <div className="flex gap-3 mt-4">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github className="h-5 w-5" /></a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>

    <Separator className="mb-16" />

    {/* Open Badge */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="gradient-bg-subtle rounded-2xl p-12 text-center"
    >
      <Award className="h-16 w-16 text-primary mx-auto mb-6" />
      <h2 className="font-display text-3xl font-bold mb-4">Open Badge 3.0 Compliant</h2>
      <p className="text-lg text-muted-foreground max-w-xl mx-auto">
        All our credentials follow the Open Badge 3.0 standard, ensuring your achievements are verifiable, portable, and recognized globally by employers and institutions.
      </p>
    </motion.div>
  </div>
);

export default About;
