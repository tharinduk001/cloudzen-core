import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Clock, Star, Search, Filter, Award, ShieldCheck, Globe, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { courses } from "@/data/mock-data";

const Courses = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [level, setLevel] = useState("all");

  const filterCourses = (type: string) => {
    return courses.filter((c) => {
      const matchType = type === "all" || c.type === type;
      const matchSearch = !search || c.title.toLowerCase().includes(search.toLowerCase()) || c.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      const matchCategory = category === "all" || c.category === category;
      const matchLevel = level === "all" || c.level === level;
      return matchType && matchSearch && matchCategory && matchLevel;
    });
  };

  const CourseCard = ({ course, i }: { course: typeof courses[0]; i: number }) => (
    <motion.div key={course.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="h-full">
      <Link to={`/courses/${course.id}`} className="block h-full">
        <Card className="hover-glow hover:border-primary/30 transition-all group h-full flex flex-col">
          <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
            <BookOpen className="h-8 w-8 text-muted-foreground/40" />
          </div>
          <CardContent className="p-4 flex-1 flex flex-col">
            <div className="flex gap-2 mb-2 flex-wrap">
              <Badge variant="secondary" className="text-sm">{course.category}</Badge>
              <Badge variant="outline" className="text-sm">{course.level}</Badge>
              <Badge variant={course.price === "Free" ? "default" : "outline"} className="text-sm">
                {course.price === "Free" ? "Free" : `$${course.price}`}
              </Badge>
            </div>
            <h3 className="font-display font-semibold text-base mb-1 group-hover:text-primary transition-colors">{course.title}</h3>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2 flex-1">{course.description}</p>
            <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto">
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{course.duration}</span>
              <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-yellow-500" />{course.rating}</span>
            </div>
            <Button size="sm" className="w-full mt-3 gradient-bg text-white border-0">Enroll</Button>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );

  const CourseGrid = ({ type }: { type: string }) => {
    const filtered = filterCourses(type);
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {filtered.length === 0 && <p className="text-muted-foreground col-span-full text-center py-12">No courses found.</p>}
        {filtered.map((course, i) => (
          <CourseCard key={course.id} course={course} i={i} />
        ))}
      </div>
    );
  };

  const sections = [
    { type: "Recorded Free", label: "Free Courses", description: "Start learning at no cost" },
    { type: "Recorded Premium", label: "Premium Courses", description: "In-depth, expert-led content" },
    { type: "Live", label: "Live Workshops", description: "Interactive sessions with instructors" },
  ];

  const GroupedView = () => {
    return (
      <div className="space-y-12 mt-6">
        {sections.map((section) => {
          const filtered = filterCourses(section.type);
          if (filtered.length === 0) return null;
          return (
            <div key={section.type}>
              <div className="mb-4">
                <h2 className="font-display text-xl md:text-2xl font-bold">{section.label}</h2>
                <p className="text-sm text-muted-foreground">{section.description}</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((course, i) => (
                  <CourseCard key={course.id} course={course} i={i} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Courses</h1>
        <p className="text-muted-foreground">Explore our catalog of cloud, DevOps, and software engineering courses.</p>
      </div>

      {/* Open Badge Banner */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="rounded-xl gradient-bg px-4 py-3 text-white mb-8 overflow-hidden"
      >
        <div className="flex items-center gap-4 flex-nowrap overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 shrink-0">
            <div className="p-2 bg-white/20 rounded-lg">
              <Award className="h-5 w-5" />
            </div>
            <span className="font-display font-bold text-sm whitespace-nowrap">Open Badge 3.0</span>
          </div>

          <span className="hidden sm:inline text-white/40">|</span>

          <p className="text-xs text-white/80 shrink-0 whitespace-nowrap hidden sm:block">
            Earn <strong>verified digital credentials</strong> with every course
          </p>

          <span className="hidden md:inline text-white/40">|</span>

          <div className="hidden md:flex items-center gap-3 shrink-0">
            {[
              { icon: ShieldCheck, text: "Verifiable" },
              { icon: Globe, text: "Global" },
              { icon: CheckCircle, text: "Shareable" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1">
                <Icon className="h-3.5 w-3.5 text-white/90" />
                <span className="text-xs text-white/80">{text}</span>
              </div>
            ))}
          </div>

          <a href="https://credentials.certdirectory.io/" target="_blank" rel="noopener noreferrer" className="ml-auto shrink-0 bg-white/10 hover:bg-white/15 transition-colors rounded-md px-3 py-1.5 text-center">
            <p className="text-[9px] text-white/50 leading-tight">Powered by</p>
            <p className="font-display font-bold text-[11px] leading-tight">CertDirectory Credentials</p>
          </a>
        </div>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search courses..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
        </div>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-[160px]"><SelectValue placeholder="Category" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Cloud">Cloud</SelectItem>
            <SelectItem value="DevOps">DevOps</SelectItem>
            <SelectItem value="Software Engineering">Software Engineering</SelectItem>
          </SelectContent>
        </Select>
        <Select value={level} onValueChange={setLevel}>
          <SelectTrigger className="w-[160px]"><SelectValue placeholder="Level" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="Beginner">Beginner</SelectItem>
            <SelectItem value="Intermediate">Intermediate</SelectItem>
            <SelectItem value="Advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="Recorded Free">Free</TabsTrigger>
          <TabsTrigger value="Recorded Premium">Premium</TabsTrigger>
          <TabsTrigger value="Live">Live</TabsTrigger>
        </TabsList>
        <TabsContent value="all"><GroupedView /></TabsContent>
        <TabsContent value="Recorded Free"><CourseGrid type="Recorded Free" /></TabsContent>
        <TabsContent value="Recorded Premium"><CourseGrid type="Recorded Premium" /></TabsContent>
        <TabsContent value="Live"><CourseGrid type="Live" /></TabsContent>
      </Tabs>
    </div>
  );
};

export default Courses;
