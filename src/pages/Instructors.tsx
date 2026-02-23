import { motion } from "framer-motion";
import { Users, Star, BookOpen, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { instructors } from "@/data/mock-data";

const Instructors = () => (
  <div className="container py-12">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12"
    >
      <h1 className="font-display text-5xl lg:text-6xl font-bold mb-4">Our Instructors</h1>
      <p className="text-xl text-muted-foreground">Learn from industry professionals with real-world experience.</p>
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-8 mb-16">
      {instructors.map((inst, i) => (
        <motion.div key={inst.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
          <Card className="hover-glow hover:border-primary/30 transition-all h-full">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="h-24 w-24 rounded-2xl bg-muted flex items-center justify-center flex-shrink-0">
                  <Users className="h-10 w-10 text-muted-foreground/30" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-2xl mb-1">{inst.name}</h3>
                  <p className="text-base text-primary font-medium mb-3">{inst.title}</p>
                  <p className="text-base text-muted-foreground mb-4 leading-relaxed">{inst.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {inst.expertise.map((e) => (
                      <Badge key={e} variant="secondary" className="text-sm">{e}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-6 text-base text-muted-foreground">
                    <span className="flex items-center gap-1.5"><BookOpen className="h-4 w-4" />{inst.courses} courses</span>
                    <span className="flex items-center gap-1.5"><Users className="h-4 w-4" />{inst.students.toLocaleString()} students</span>
                    <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />{inst.rating}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <Card className="gradient-bg-subtle">
        <CardContent className="p-12 text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Become an Instructor</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-md mx-auto">Share your expertise with thousands of learners. Join our instructor community.</p>
          <Button size="lg" className="gradient-bg text-white border-0 h-14 text-lg px-8">
            Apply to Teach <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  </div>
);

export default Instructors;
