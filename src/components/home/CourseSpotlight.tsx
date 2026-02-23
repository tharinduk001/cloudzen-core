import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Star, ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { courses } from "@/data/mock-data";

const CourseSpotlight = () => {
  const featured = courses.slice(0, 3);

  return (
    <section className="min-h-screen snap-start relative flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-6xl lg:text-7xl font-bold mb-6">Popular Courses</h2>
          <p className="text-2xl text-muted-foreground">Start learning with our top-rated courses.</p>
        </motion.div>

        <div className="grid grid-cols-3 gap-10 max-w-6xl mx-auto" style={{ perspective: "1000px" }}>
          {featured.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50, rotateY: i === 0 ? 5 : i === 2 ? -5 : 0 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group"
            >
              <div className="p-10 rounded-2xl border border-border/40 bg-card/80 backdrop-blur-sm hover-glow hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                {/* Category & Price */}
                <div className="flex gap-2 mb-8">
                  <Badge variant="secondary" className="text-base px-3 py-1">{course.category}</Badge>
                  {course.price === "Free" ? (
                    <Badge className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 text-base px-3 py-1">Free</Badge>
                  ) : (
                    <Badge variant="outline" className="text-base px-3 py-1">${course.price}</Badge>
                  )}
                </div>

                <h3 className="font-display font-bold text-3xl mb-4 group-hover:text-primary transition-colors">{course.title}</h3>
                <p className="text-lg text-muted-foreground mb-8 flex-1 leading-relaxed">{course.description}</p>

                <div className="flex items-center justify-between text-base text-muted-foreground mb-8">
                  <span className="flex items-center gap-2"><Clock className="h-5 w-5" />{course.duration}</span>
                  <span className="flex items-center gap-2"><Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />{course.rating}</span>
                </div>

                <Button className="w-full gradient-bg text-white border-0 h-14 text-lg" asChild>
                  <Link to={`/courses/${course.id}`}>Start Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-14"
        >
          <Button variant="ghost" size="lg" className="text-xl" asChild>
            <Link to="/courses">View All Courses <ArrowRight className="ml-2 h-6 w-6" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseSpotlight;
