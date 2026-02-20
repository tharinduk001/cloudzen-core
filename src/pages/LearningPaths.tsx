import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { TrendingUp, Clock, ArrowRight, Map } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { learningPaths, roadmaps } from "@/data/mock-data";

const LearningPaths = () => {
  const location = useLocation();
  const defaultTab = location.hash === "#roadmaps" ? "roadmaps" : "paths";

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Paths & Roadmaps</h1>
        <p className="text-muted-foreground">Structured journeys and visual career guides to reach your goals.</p>
      </div>

      <Tabs defaultValue={defaultTab} className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="paths" className="gap-2">
            <TrendingUp className="h-4 w-4" />
            Learning Paths
          </TabsTrigger>
          <TabsTrigger value="roadmaps" className="gap-2">
            <Map className="h-4 w-4" />
            Career Roadmaps
          </TabsTrigger>
        </TabsList>

        <TabsContent value="paths">
          <div className="grid sm:grid-cols-2 gap-6">
            {learningPaths.map((path, i) => (
              <motion.div key={path.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Link to={`/learning-paths/${path.id}`}>
                  <Card className="hover-glow hover:border-primary/30 transition-all group h-full">
                    <CardContent className="p-6">
                      <div className="h-12 w-12 rounded-xl gradient-bg flex items-center justify-center text-white mb-4">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary" className="mb-2">{path.level}</Badge>
                      <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">{path.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{path.description}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{path.steps} steps</span>
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{path.duration}</span>
                      </div>
                      <Button variant="link" className="mt-3 p-0 h-auto text-primary">
                        Start this path <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="roadmaps">
          <div className="grid md:grid-cols-3 gap-6">
            {roadmaps.map((rm, i) => (
              <motion.div key={rm.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Link to={`/roadmaps/${rm.id}`}>
                  <Card className="hover-glow hover:border-primary/30 transition-all group h-full">
                    <CardContent className="p-6">
                      <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">{rm.role}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{rm.description}</p>
                      <div className="space-y-2 mb-4">
                        {rm.milestones.map((m, j) => (
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LearningPaths;
