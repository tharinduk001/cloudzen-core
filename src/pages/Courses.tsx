import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Clock, Star, Search, Filter } from "lucide-react";
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

  const CourseGrid = ({ type }: { type: string }) => {
    const filtered = filterCourses(type);
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {filtered.length === 0 && <p className="text-muted-foreground col-span-full text-center py-12">No courses found.</p>}
        {filtered.map((course, i) => (
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
        ))}
      </div>
    );
  };

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Courses</h1>
        <p className="text-muted-foreground">Explore our catalog of cloud, DevOps, and software engineering courses.</p>
      </div>

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
        <TabsContent value="all"><CourseGrid type="all" /></TabsContent>
        <TabsContent value="Recorded Free"><CourseGrid type="Recorded Free" /></TabsContent>
        <TabsContent value="Recorded Premium"><CourseGrid type="Recorded Premium" /></TabsContent>
        <TabsContent value="Live"><CourseGrid type="Live" /></TabsContent>
      </Tabs>
    </div>
  );
};

export default Courses;
