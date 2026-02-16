import { Award, Target, Eye, Users, Zap, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => (
  <div className="container py-8 max-w-4xl">
    <div className="text-center mb-12">
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">About CloudZen</h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        We're on a mission to make Cloud and DevOps education accessible, practical, and career-focused for students and freshers everywhere.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6 mb-12">
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

    <Card className="mb-12">
      <CardContent className="p-6">
        <h2 className="font-display text-xl font-bold mb-4">Why CloudZen?</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: Zap, text: "Hands-on projects that simulate real-world scenarios" },
            { icon: Award, text: "Open Badge 3.0 compliant digital credentials" },
            { icon: Users, text: "Expert instructors with industry experience" },
            { icon: CheckCircle2, text: "Structured learning paths from beginner to job-ready" },
          ].map((item) => (
            <div key={item.text} className="flex items-start gap-3">
              <item.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <p className="text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>

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
