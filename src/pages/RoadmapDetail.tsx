import { useParams, Link } from "react-router-dom";
import { CheckCircle2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { roadmaps } from "@/data/mock-data";

const RoadmapDetail = () => {
  const { id } = useParams();
  const roadmap = roadmaps.find((r) => r.id === id);

  if (!roadmap) return <div className="container py-20 text-center"><h1 className="text-2xl font-bold">Roadmap not found</h1><Button asChild className="mt-4"><Link to="/roadmaps">Back to Roadmaps</Link></Button></div>;

  return (
    <div className="container py-8 max-w-3xl">
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">{roadmap.role} Roadmap</h1>
      <p className="text-lg text-muted-foreground mb-8">{roadmap.description}</p>

      <Button variant="outline" className="mb-8"><Download className="mr-2 h-4 w-4" />Download PDF (Coming Soon)</Button>

      <div className="relative border-l-2 border-primary/20 ml-4 space-y-8 py-2">
        {roadmap.milestones.map((milestone, i) => (
          <div key={i} className="relative pl-10">
            <div className="absolute -left-[13px] top-0 h-6 w-6 rounded-full gradient-bg flex items-center justify-center text-white text-xs font-bold">{i + 1}</div>
            <Card>
              <CardContent className="p-5">
                <h3 className="font-display text-lg font-bold mb-3">{milestone.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {milestone.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapDetail;
