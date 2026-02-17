import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Users, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useInstructors } from "@/hooks/useData";

const Instructors = () => {
  const { data: instructors = [], isLoading } = useInstructors();

  if (isLoading) return <div className="container py-20 text-center text-muted-foreground">Loading...</div>;

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Our Instructors</h1>
        <p className="text-muted-foreground">Learn from industry professionals with real-world experience.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {instructors.map((inst: any, i: number) => (
          <motion.div key={inst.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <Link to={`/instructors/${inst.id}`}>
              <Card className="hover-glow hover:border-primary/30 transition-all group h-full text-center">
                <CardContent className="p-5">
                  <div className="h-20 w-20 rounded-full bg-muted mx-auto mb-3 flex items-center justify-center"><Users className="h-8 w-8 text-muted-foreground/40" /></div>
                  <h3 className="font-display font-semibold group-hover:text-primary transition-colors">{inst.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{inst.title}</p>
                  <div className="flex items-center justify-center gap-1 mb-2"><Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" /><span className="text-sm font-medium">{inst.rating}</span></div>
                  <div className="flex flex-wrap justify-center gap-1">
                    {inst.expertise?.map((e: string) => <Badge key={e} variant="secondary" className="text-xs">{e}</Badge>)}
                  </div>
                  <div className="mt-3 text-xs text-muted-foreground">{inst.courses_count} courses · {inst.students_count} students</div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
      <Card className="gradient-bg-subtle">
        <CardContent className="p-8 text-center">
          <h2 className="font-display text-2xl font-bold mb-2">Become an Instructor</h2>
          <p className="text-muted-foreground mb-4 max-w-md mx-auto">Share your expertise with thousands of learners.</p>
          <Button className="gradient-bg text-white border-0">Apply to Teach</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Instructors;
