import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Wrench, Search, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { projects } from "@/data/mock-data";

const Projects = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [difficulty, setDifficulty] = useState("all");

  const filtered = projects.filter((p) => {
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "all" || p.category === category;
    const matchDiff = difficulty === "all" || p.difficulty === difficulty;
    return matchSearch && matchCat && matchDiff;
  });

  const allCategories = [...new Set(projects.map((p) => p.category))];

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="font-display text-5xl lg:text-6xl font-bold mb-4">Hands-on Projects</h1>
        <p className="text-xl text-muted-foreground">Build real skills with guided, practical projects.</p>
      </motion.div>

      <div className="flex flex-wrap gap-4 mb-10">
        <div className="relative flex-1 min-w-[240px] max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search projects..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-12 h-12 text-base" />
        </div>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-[200px] h-12 text-base"><SelectValue placeholder="Category" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {allCategories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={difficulty} onValueChange={setDifficulty}>
          <SelectTrigger className="w-[180px] h-12 text-base"><SelectValue placeholder="Difficulty" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="Easy">Easy</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="Hard">Hard</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {filtered.map((project, i) => (
          <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
            <Link to={`/projects/${project.id}`}>
              <Card className="hover-glow hover:border-primary/30 transition-all group h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <Badge variant="outline" className="text-sm">{project.category}</Badge>
                    <Badge variant={project.difficulty === "Easy" ? "secondary" : project.difficulty === "Medium" ? "default" : "destructive"} className="text-sm">{project.difficulty}</Badge>
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-base text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex items-center gap-5 text-base text-muted-foreground">
                    <span className="flex items-center gap-2"><Clock className="h-4 w-4" />{project.duration}</span>
                    <span className="flex items-center gap-2"><Wrench className="h-4 w-4" />{project.tools.length} tools</span>
                  </div>
                  <Button variant="ghost" className="mt-4 text-base p-0 h-auto text-primary">
                    Start Project <ArrowRight className="ml-2 h-4 w-4" />
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

export default Projects;
