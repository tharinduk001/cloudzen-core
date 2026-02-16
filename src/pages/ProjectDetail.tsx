import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Clock, Wrench, CheckCircle2, Copy, Check, AlertTriangle, BookOpen, Download, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { projects } from "@/data/mock-data";
import { cn } from "@/lib/utils";

const sidebarSections = ["Overview", "Steps", "Code", "Diagrams", "Troubleshooting", "Resources"];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [active, setActive] = useState("Overview");
  const [copied, setCopied] = useState(false);
  const [checklist, setChecklist] = useState<boolean[]>([false, false, false, false, false]);

  if (!project) return <div className="container py-20 text-center"><h1 className="text-2xl font-bold">Project not found</h1><Button asChild className="mt-4"><Link to="/projects">Back to Projects</Link></Button></div>;

  const handleCopy = () => { navigator.clipboard.writeText("docker run -d -p 80:80 nginx"); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  const toggleCheck = (i: number) => setChecklist((prev) => prev.map((v, j) => (j === i ? !v : v)));

  return (
    <div className="container py-8">
      <div className="grid lg:grid-cols-[240px_1fr] gap-8">
        {/* Sticky Sidebar */}
        <aside className="hidden lg:block">
          <nav className="sticky top-24 space-y-1">
            {sidebarSections.map((s) => (
              <button key={s} onClick={() => setActive(s)} className={cn("block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors", active === s ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted")}>
                {s}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="space-y-8">
          <div>
            <div className="flex gap-2 mb-3 flex-wrap">
              <Badge variant="outline">{project.category}</Badge>
              <Badge variant={project.difficulty === "Easy" ? "secondary" : project.difficulty === "Medium" ? "default" : "destructive"}>{project.difficulty}</Badge>
            </div>
            <h1 className="font-display text-3xl font-bold mb-3">{project.title}</h1>
            <p className="text-lg text-muted-foreground mb-4">{project.description}</p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{project.duration}</span>
              <span className="flex items-center gap-1"><Wrench className="h-4 w-4" />{project.tools.join(", ")}</span>
            </div>
          </div>

          {/* Steps & Progress */}
          <Card>
            <CardContent className="p-6">
              <h2 className="font-display text-xl font-bold mb-4">Progress Checklist</h2>
              <div className="space-y-3">
                {["Set up development environment", "Configure initial resources", "Implement core functionality", "Test and validate", "Document and clean up"].map((step, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer">
                    <button onClick={() => toggleCheck(i)} className={cn("h-5 w-5 rounded border flex items-center justify-center transition-colors", checklist[i] ? "bg-primary border-primary text-primary-foreground" : "border-border")}>
                      {checklist[i] && <Check className="h-3 w-3" />}
                    </button>
                    <span className={cn("text-sm", checklist[i] && "line-through text-muted-foreground")}>{step}</span>
                  </label>
                ))}
              </div>
              <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full gradient-bg transition-all" style={{ width: `${(checklist.filter(Boolean).length / checklist.length) * 100}%` }} />
              </div>
            </CardContent>
          </Card>

          {/* Code Snippet */}
          <Card>
            <CardContent className="p-6">
              <h2 className="font-display text-xl font-bold mb-4">Code Snippets</h2>
              <div className="relative bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-foreground">docker run -d -p 80:80 nginx</pre>
                <Button size="icon" variant="ghost" className="absolute top-2 right-2 h-8 w-8" onClick={handleCopy}>
                  {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Diagrams Placeholder */}
          <Card>
            <CardContent className="p-6">
              <h2 className="font-display text-xl font-bold mb-4">Architecture Diagram</h2>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Diagram placeholder</p>
              </div>
            </CardContent>
          </Card>

          {/* Common Errors */}
          <div>
            <h2 className="font-display text-xl font-bold mb-4">Common Errors</h2>
            <Accordion type="multiple" className="space-y-2">
              {[
                { q: "Permission denied error", a: "Make sure you're running the command with appropriate permissions. Try using sudo or check your IAM roles." },
                { q: "Connection timeout", a: "Check your security group/firewall rules. Ensure the correct ports are open and the service is running." },
                { q: "Resource not found", a: "Verify the resource name and region. Make sure the resource has been created before referencing it." },
              ].map((err, i) => (
                <AccordionItem key={i} value={`err-${i}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-sm font-medium"><span className="flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-destructive" />{err.q}</span></AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">{err.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* What You Learned */}
          <Card className="gradient-bg-subtle">
            <CardContent className="p-6">
              <h2 className="font-display text-xl font-bold mb-4">What You Learned</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Infrastructure provisioning", "Configuration management", "Security best practices", "Monitoring and logging"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" />{item}</div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Button className="gradient-bg text-white border-0"><BookOpen className="mr-2 h-4 w-4" />Start Project</Button>
            <Button variant="outline"><Download className="mr-2 h-4 w-4" />Download Resources</Button>
            <Button variant="outline"><MessageSquare className="mr-2 h-4 w-4" />Discuss in Community</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
