import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Users, BookOpen, Linkedin, Github, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { instructors } from "@/data/mock-data";

const Instructors = () => (
  <div className="container py-8">
    <div className="mb-8">
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Our Instructors</h1>
      <p className="text-muted-foreground">Learn from industry professionals with real-world experience.</p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {instructors.map((inst, i) => (
        <motion.div key={inst.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
          <Link to={`/instructors/${inst.id}`}>
            <Card className="hover-glow hover:border-primary/30 transition-all group h-full text-center">
              <CardContent className="p-5">
                <div className="h-20 w-20 rounded-full bg-muted mx-auto mb-3 flex items-center justify-center">
                  <Users className="h-8 w-8 text-muted-foreground/40" />
                </div>
                <h3 className="font-display font-semibold group-hover:text-primary transition-colors">{inst.name}</h3>
                <p className="text-xs text-muted-foreground mb-2">{inst.title}</p>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>

    <Card className="gradient-bg-subtle">
      <CardContent className="p-8 text-center">
        <h2 className="font-display text-2xl font-bold mb-2">Become an Instructor</h2>
        <p className="text-muted-foreground mb-4 max-w-md mx-auto">Share your expertise with thousands of learners. Join our instructor community.</p>
        <Button className="gradient-bg text-white border-0">Apply to Teach</Button>
      </CardContent>
    </Card>
  </div>
);

export default Instructors;
