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
    <div className="relative">
      {/* Open Badge - Fixed in right margin, only on 2xl+ screens */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="hidden 2xl:block fixed right-4 top-28 w-[240px] z-30"
      >
        <div className="rounded-xl gradient-bg p-5 text-white shadow-lg">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-sm leading-tight">Open Badge 3.0</h3>
              <p className="text-white/60 text-[10px]">Globally Recognized</p>
            </div>
          </div>

          <p className="text-xs text-white/80 mb-3 leading-relaxed">
            Earn a <strong>verified digital credential</strong> with every course — recognized worldwide.
          </p>

          <div className="space-y-2 mb-4">
            {[
              { icon: ShieldCheck, text: "Verifiable & tamper-proof" },
              { icon: Globe, text: "Accepted globally" },
              { icon: CheckCircle, text: "Share on LinkedIn" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-2">
                <Icon className="h-3.5 w-3.5 mt-0.5 text-white/90 shrink-0" />
                <span className="text-[11px] text-white/80">{text}</span>
              </div>
            ))}
          </div>

          <a href="https://credentials.certdirectory.io/" target="_blank" rel="noopener noreferrer" className="block bg-white/10 hover:bg-white/15 transition-colors rounded-lg p-2.5 text-center">
            <p className="text-[9px] text-white/50">Powered by</p>
            <p className="font-display font-bold text-[11px]">CertDirectory</p>
          </a>
        </div>

        <Card className="mt-3 border-primary/20">
          <CardContent className="p-3">
            <h4 className="font-semibold text-xs mb-1.5 flex items-center gap-1.5">
              <Award className="h-3.5 w-3.5 text-primary" />
              How It Works
            </h4>
            <ol className="text-[11px] text-muted-foreground space-y-1.5">
              <li className="flex gap-1.5"><span className="font-bold text-primary">1.</span> Complete a course</li>
              <li className="flex gap-1.5"><span className="font-bold text-primary">2.</span> Get your digital badge</li>
              <li className="flex gap-1.5"><span className="font-bold text-primary">3.</span> Share anywhere</li>
            </ol>
          </CardContent>
        </Card>
      </motion.div>

      <div className="container py-8">
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Courses</h1>
          <p className="text-muted-foreground">Explore our catalog of cloud, DevOps, and software engineering courses.</p>
        </div>

        {/* Badge banner for smaller screens (below 2xl) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="2xl:hidden rounded-xl gradient-bg p-5 text-white mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-3 shrink-0">
              <div className="p-2 bg-white/20 rounded-lg">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base leading-tight">Open Badge 3.0 Certified</h3>
                <p className="text-white/60 text-xs">Globally Recognized Credentials</p>
              </div>
            </div>
            <p className="text-sm text-white/80 sm:flex-1">
              Earn verified digital credentials with every course — recognized by employers worldwide.
            </p>
            <a href="https://credentials.certdirectory.io/" target="_blank" rel="noopener noreferrer" className="shrink-0 bg-white/10 hover:bg-white/15 transition-colors rounded-lg px-4 py-2 text-center">
              <p className="text-[10px] text-white/50">Powered by</p>
              <p className="font-display font-bold text-xs">CertDirectory</p>
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
    </div>
  );
};

export default Courses;
