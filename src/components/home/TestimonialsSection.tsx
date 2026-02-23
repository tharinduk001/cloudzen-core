import { motion, AnimatePresence } from "framer-motion";
import { Quote, Users, BookOpen, TrendingUp } from "lucide-react";
import { testimonials } from "@/data/mock-data";
import { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <section className="min-h-screen snap-start relative flex items-center overflow-hidden">
      <div className="absolute inset-0 gradient-bg-subtle" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Floating stat orbs */}
      <motion.div
        className="absolute top-[15%] left-[10%] flex flex-col items-center gap-1 px-6 py-4 rounded-2xl bg-card/60 backdrop-blur-md border border-border/30"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Users className="h-5 w-5 text-primary mb-1" />
        <span className="font-bold text-3xl text-foreground">5,000+</span>
        <span className="text-sm text-muted-foreground">Students</span>
      </motion.div>

      <motion.div
        className="absolute top-[20%] right-[10%] flex flex-col items-center gap-1 px-6 py-4 rounded-2xl bg-card/60 backdrop-blur-md border border-border/30"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <BookOpen className="h-5 w-5 text-primary mb-1" />
        <span className="font-bold text-3xl text-foreground">18</span>
        <span className="text-sm text-muted-foreground">Courses</span>
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] right-[15%] flex flex-col items-center gap-1 px-6 py-4 rounded-2xl bg-card/60 backdrop-blur-md border border-border/30"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <TrendingUp className="h-5 w-5 text-primary mb-1" />
        <span className="font-bold text-3xl text-foreground">4.8</span>
        <span className="text-sm text-muted-foreground">Avg Rating</span>
      </motion.div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl lg:text-6xl font-bold mb-4">Why Students Love Us</h2>
        </motion.div>

        {/* Cinematic featured quote */}
        <div className="max-w-3xl mx-auto text-center" style={{ perspective: "800px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30, rotateX: 5 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -30, rotateX: -5 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <Quote className="h-12 w-12 text-primary/20 mx-auto" />
              <p className="text-2xl lg:text-3xl text-foreground leading-relaxed font-display font-medium">
                "{active.quote}"
              </p>
              <div>
                <p className="text-xl font-bold">{active.name}</p>
                <p className="text-muted-foreground">{active.university}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-10 bg-primary" : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
