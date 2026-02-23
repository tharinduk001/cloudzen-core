import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Clock, Star, Search, Award, ShieldCheck, Globe, CheckCircle, ArrowRight, ShoppingCart } from "lucide-react";
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
        <Card className="hover-glow hover:border-primary/30 transition-all group h-full flex flex-col overflow-hidden">
          <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center relative">
            <BookOpen className="h-10 w-10 text-muted-foreground/30" />
            <div className="absolute top-3 right-3">
              <Badge variant={course.price === "Free" ? "default" : "outline"} className="text-sm font-bold">
                {course.price === "Free" ? "Free" : `$${course.price}`}
              </Badge>
            </div>
          </div>
          <CardContent className="p-5 flex-1 flex flex-col">
            <div className="flex gap-2 mb-3 flex-wrap">
              <Badge variant="secondary" className="text-sm">{course.category}</Badge>
              <Badge variant="outline" className="text-sm">{course.level}</Badge>
            </div>
            <h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors">{course.title}</h3>
            <p className="text-base text-muted-foreground mb-4 line-clamp-2 flex-1">{course.description}</p>
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{course.duration}</span>
              <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />{course.rating}</span>
            </div>
            <Button size="default" className="w-full gradient-bg text-white border-0 h-12 text-base">
              {course.price === "Free" ? "Start Free" : <><ShoppingCart className="mr-2 h-4 w-4" />Enroll — ${course.price}</>}
            </Button>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );

  const CourseGrid = ({ type }: { type: string }) => {
    const filtered = filterCourses(type);
    return (
      <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
        {filtered.length === 0 && <p className="text-muted-foreground col-span-full text-center py-16 text-lg">No courses found.</p>}
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

  const GroupedView = () => (
    <div className="space-y-16 mt-8">
      {sections.map((section) => {
        const filtered = filterCourses(section.type);
        if (filtered.length === 0) return null;
        return (
          <div key={section.type}>
            <div className="mb-6">
              <h2 className="font-display text-3xl font-bold">{section.label}</h2>
              <p className="text-lg text-muted-foreground mt-1">{section.description}</p>
            </div>
            <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filtered.map((course, i) => (
                <CourseCard key={course.id} course={course} i={i} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="container py-12">
      {/* Hero header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="font-display text-5xl lg:text-6xl font-bold mb-4">Courses</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">Explore our catalog of cloud, DevOps, and software engineering courses.</p>
      </motion.div>

      {/* Open Badge Banner */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative rounded-2xl gradient-bg px-6 py-4 text-white mb-10 overflow-hidden border border-white/10 shadow-lg shadow-primary/10"
      >
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/5 rounded-full blur-2xl pointer-events-none" />

        <div className="relative flex items-center gap-5 flex-nowrap overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-2.5 bg-white/15 rounded-lg border border-white/20">
              <Award className="h-6 w-6 drop-shadow-sm" />
            </div>
            <div className="shrink-0">
              <span className="font-display font-bold text-base block leading-tight">Open Badge 3.0</span>
              <span className="text-xs text-white/50 leading-tight">Digital Credentials</span>
            </div>
          </div>

          <div className="w-px h-7 bg-white/20 shrink-0" />

          <p className="text-sm text-white/85 shrink-0">
            Earn <span className="font-semibold text-white">verified credentials</span> with every course
          </p>

          <div className="w-px h-7 bg-white/20 shrink-0" />

          <div className="flex items-center gap-3 shrink-0">
            {[
              { icon: ShieldCheck, text: "Verifiable" },
              { icon: Globe, text: "Global" },
              { icon: CheckCircle, text: "Shareable" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5 border border-white/10">
                <Icon className="h-3.5 w-3.5 text-white/90" />
                <span className="text-xs text-white/85 font-medium">{text}</span>
              </div>
            ))}
          </div>

          <a href="https://credentials.certdirectory.io/" target="_blank" rel="noopener noreferrer" className="ml-auto shrink-0 bg-white/10 hover:bg-white/20 transition-all rounded-lg px-4 py-2 text-center border border-white/15">
            <p className="text-xs text-white/50 leading-tight">Powered by</p>
            <p className="font-display font-bold text-sm leading-tight">CertDirectory Credentials</p>
          </a>
        </div>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="relative flex-1 min-w-[240px] max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search courses..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-12 h-12 text-base" />
        </div>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-[180px] h-12 text-base"><SelectValue placeholder="Category" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Cloud">Cloud</SelectItem>
            <SelectItem value="DevOps">DevOps</SelectItem>
            <SelectItem value="Software Engineering">Software Engineering</SelectItem>
          </SelectContent>
        </Select>
        <Select value={level} onValueChange={setLevel}>
          <SelectTrigger className="w-[180px] h-12 text-base"><SelectValue placeholder="Level" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="Beginner">Beginner</SelectItem>
            <SelectItem value="Intermediate">Intermediate</SelectItem>
            <SelectItem value="Advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="h-12">
          <TabsTrigger value="all" className="text-base px-6">All</TabsTrigger>
          <TabsTrigger value="Recorded Free" className="text-base px-6">Free</TabsTrigger>
          <TabsTrigger value="Recorded Premium" className="text-base px-6">Premium</TabsTrigger>
          <TabsTrigger value="Live" className="text-base px-6">Live</TabsTrigger>
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
