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
        className="absolute top-[15%] left-[10%] flex flex-col items-center gap-2 px-8 py-5 rounded-2xl bg-card/60 backdrop-blur-md border border-border/30"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Users className="h-6 w-6 text-primary mb-1" />
        <span className="font-bold text-4xl text-foreground">5,000+</span>
        <span className="text-base text-muted-foreground">Students</span>
      </motion.div>

      <motion.div
        className="absolute top-[20%] right-[10%] flex flex-col items-center gap-2 px-8 py-5 rounded-2xl bg-card/60 backdrop-blur-md border border-border/30"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <BookOpen className="h-6 w-6 text-primary mb-1" />
        <span className="font-bold text-4xl text-foreground">18</span>
        <span className="text-base text-muted-foreground">Courses</span>
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] right-[15%] flex flex-col items-center gap-2 px-8 py-5 rounded-2xl bg-card/60 backdrop-blur-md border border-border/30"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <TrendingUp className="h-6 w-6 text-primary mb-1" />
        <span className="font-bold text-4xl text-foreground">4.8</span>
        <span className="text-base text-muted-foreground">Avg Rating</span>
      </motion.div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-6xl lg:text-7xl font-bold mb-6">Why Students Love Us</h2>
        </motion.div>

        {/* Cinematic featured quote */}
        <div className="max-w-4xl mx-auto text-center" style={{ perspective: "800px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30, rotateX: 5 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -30, rotateX: -5 }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              <Quote className="h-16 w-16 text-primary/20 mx-auto" />
              <p className="text-3xl lg:text-4xl text-foreground leading-relaxed font-display font-medium">
                "{active.quote}"
              </p>
              <div>
                <p className="text-2xl font-bold">{active.name}</p>
                <p className="text-lg text-muted-foreground">{active.university}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-14">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-12 bg-primary" : "w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
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
