import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRoadmaps } from "@/hooks/useData";

const Roadmaps = () => {
  const { data: roadmaps = [], isLoading } = useRoadmaps();

  if (isLoading) return <div className="container py-20 text-center text-muted-foreground">Loading...</div>;

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Career Roadmaps</h1>
        <p className="text-muted-foreground">Visual guides to your dream tech role.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {roadmaps.map((rm: any, i: number) => (
          <motion.div key={rm.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <Link to={`/roadmaps/${rm.id}`}>
              <Card className="hover-glow hover:border-primary/30 transition-all group h-full">
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">{rm.role}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{rm.description}</p>
                  <div className="space-y-2 mb-4">
                    {(rm.milestones as any[])?.map((m: any, j: number) => (
                      <div key={j} className="flex items-center gap-2 text-sm">
                        <div className="h-2 w-2 rounded-full gradient-bg shrink-0" />
                        {m.title}
                      </div>
                    ))}
                  </div>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    View Roadmap <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Roadmaps;
