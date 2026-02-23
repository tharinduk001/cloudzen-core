import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight, Users, BookOpen, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, target, { duration: 2.5, ease: "easeOut" });
    return controls.stop;
  }, [target, count]);

  return (
    <span className="font-bold text-4xl text-foreground">
      <motion.span ref={ref}>{rounded}</motion.span>{suffix}
    </span>
  );
};

const HeroSection = () => {
  return (
    <section className="min-h-screen snap-start relative flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px]"
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "10%", left: "15%" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-accent/8 blur-[100px]"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ bottom: "10%", right: "10%" }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-secondary/6 blur-[80px]"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="container relative z-10" style={{ perspective: "1200px" }}>
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          <h1 className="font-display text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.05]">
            Learn. Compete.{" "}
            <span className="gradient-text">Get Hired.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-xl text-muted-foreground mb-14 max-w-2xl mx-auto leading-relaxed"
          >
            Live exams, instant results, ranking system, and digital badges — the platform built to make you job-ready.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center justify-center gap-6 mb-20"
          >
            <Button size="lg" className="gradient-bg text-white border-0 text-lg px-10 h-14 cta-confetti shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow" asChild>
              <Link to="/courses">Start Free Today <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 h-14 hover-glow" asChild>
              <Link to="/courses">Explore Courses</Link>
            </Button>
          </motion.div>

          {/* Counters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex justify-center gap-16"
          >
            {[
              { icon: Users, target: 5000, suffix: "+", label: "Students" },
              { icon: BookOpen, target: 18, suffix: "", label: "Courses" },
              { icon: Trophy, target: 95, suffix: "%", label: "Pass Rate" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2">
                <stat.icon className="h-5 w-5 text-primary mb-1" />
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
