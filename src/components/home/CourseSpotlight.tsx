import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Star, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { courses } from "@/data/mock-data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const CourseSpotlight = () => {
  const featured = courses.slice(0, 3);

  return (
    <section className="py-20 bg-grid">
      <div className="container">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">Popular Courses</h2>
            <p className="text-muted-foreground">Start learning with our top-rated courses.</p>
          </div>
          <Button variant="ghost" asChild className="hidden sm:flex">
            <Link to="/courses">View All <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((course, i) => (
            <motion.div key={course.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="h-full">
              <Card className="hover-glow hover:border-primary/30 transition-all group h-full flex flex-col">
                <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                  <BookOpen className="h-10 w-10 text-muted-foreground/30" />
                </div>
                <CardContent className="p-5 flex-1 flex flex-col">
                  <div className="flex gap-2 mb-3">
                    <Badge variant="secondary">{course.category}</Badge>
                    {course.price === "Free" ? (
                      <Badge className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20">Free</Badge>
                    ) : (
                      <Badge variant="outline">${course.price}</Badge>
                    )}
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">{course.description}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{course.duration}</span>
                    <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />{course.rating}</span>
                  </div>
                  <Button className="w-full gradient-bg text-white border-0" asChild>
                    <Link to={`/courses/${course.id}`}>Start Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSpotlight;
