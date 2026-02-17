import { useParams, Link } from "react-router-dom";
import { Clock, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLearningPath, useCourses, useProjects } from "@/hooks/useData";

const LearningPathDetail = () => {
  const { id } = useParams();
  const { data: path, isLoading } = useLearningPath(id);
  const { data: courses = [] } = useCourses();
  const { data: projects = [] } = useProjects();

  if (isLoading) return <div className="container py-20 text-center text-muted-foreground">Loading...</div>;
  if (!path) return <div className="container py-20 text-center"><h1 className="text-2xl font-bold">Path not found</h1><Button asChild className="mt-4"><Link to="/learning-paths">Back to Paths</Link></Button></div>;

  const pathCourses = (path.course_ids as string[] || []).map((cid: string) => courses.find((c: any) => c.id === cid)).filter(Boolean);
  const pathProjects = (path.project_ids as string[] || []).map((pid: string) => projects.find((p: any) => p.id === pid)).filter(Boolean);

  return (
    <div className="container py-8 max-w-3xl">
      <Badge variant="secondary" className="mb-3">{path.level}</Badge>
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">{path.title}</h1>
      <p className="text-lg text-muted-foreground mb-4">{path.description}</p>
      <div className="flex gap-4 text-sm text-muted-foreground mb-8">
        <span>{path.steps} steps</span>
        <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{path.duration}</span>
      </div>
      <Button size="lg" className="gradient-bg text-white border-0 mb-8">Start this Path <ArrowRight className="ml-2 h-4 w-4" /></Button>
      <div className="space-y-4">
        <h2 className="font-display text-xl font-bold">Path Steps</h2>
        <div className="relative border-l-2 border-primary/20 ml-3 space-y-6 py-2">
          {pathCourses.map((course: any) => (
            <div key={course.id} className="relative pl-8">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full gradient-bg" />
              <Card className="hover-glow hover:border-primary/30 transition-all">
                <CardContent className="p-4">
                  <Badge variant="outline" className="text-xs mb-1">Course</Badge>
                  <h3 className="font-display font-semibold">{course.title}</h3>
                  <p className="text-xs text-muted-foreground">{course.duration} · {course.level}</p>
                </CardContent>
              </Card>
            </div>
          ))}
          {pathProjects.map((project: any) => (
            <div key={project.id} className="relative pl-8">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-secondary" />
              <Card className="hover-glow hover:border-secondary/30 transition-all">
                <CardContent className="p-4">
                  <Badge variant="secondary" className="text-xs mb-1">Project</Badge>
                  <h3 className="font-display font-semibold">{project.title}</h3>
                  <p className="text-xs text-muted-foreground">{project.duration} · {project.difficulty}</p>
                </CardContent>
              </Card>
            </div>
          ))}
          <div className="relative pl-8">
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-accent" />
            <Card className="gradient-bg-subtle">
              <CardContent className="p-4 flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                <div><h3 className="font-display font-semibold">Completion Badge</h3><p className="text-xs text-muted-foreground">Open Badge 3.0 compliant credential</p></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPathDetail;
