import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, BookOpen, TrendingUp, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef } from "react";
import { useMotionValue, useTransform, animate } from "framer-motion";

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, target, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [target, count]);

  return (
    <span className="font-bold text-2xl md:text-3xl text-foreground">
      <motion.span ref={ref}>{rounded}</motion.span>{suffix}
    </span>
  );
};

const floatingBadges = [
  { label: "🏆 Live Exams", delay: 0, x: -20, y: -10 },
  { label: "⚡ Instant Results", delay: 1.5, x: 20, y: 10 },
  { label: "🎖️ Digital Badges", delay: 3, x: -15, y: 15 },
];

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 gradient-bg-subtle bg-grid overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        {/* Extra depth orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Floating badges */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        {floatingBadges.map((badge, i) => (
          <motion.div
            key={badge.label}
            className="absolute"
            style={{ top: `${25 + i * 20}%`, right: `${8 + i * 5}%` }}
            animate={{ y: [badge.y, -badge.y, badge.y], x: [badge.x, -badge.x, badge.x] }}
            transition={{ duration: 6, repeat: Infinity, delay: badge.delay, ease: "easeInOut" }}
          >
            <Badge variant="secondary" className="px-4 py-2 text-sm shadow-lg backdrop-blur-md border border-border/50 bg-card/80">
              {badge.label}
            </Badge>
          </motion.div>
        ))}
      </div>

      <div className="container relative">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto text-center">
          {/* Social proof badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 shadow-sm mb-8"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-6 w-6 rounded-full bg-gradient-to-br from-primary/60 to-accent/60 border-2 border-background" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">5,000+</span> students already learning
            </span>
          </motion.div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Learn. Compete.{" "}
            <span className="gradient-text">Get Hired.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Live exams, instant results, ranking system, and digital badges — the platform built to make you job-ready.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Button size="lg" className="gradient-bg text-white border-0 text-base px-8 h-13 text-lg cta-confetti shadow-lg shadow-primary/20" asChild>
              <Link to="/courses">Start Free Today <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 h-13 text-lg" asChild>
              <Link to="/courses">Explore Courses</Link>
            </Button>
          </div>

          {/* Animated counters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-3 gap-4 max-w-md mx-auto"
          >
            {[
              { icon: Users, target: 5000, suffix: "+", label: "Students" },
              { icon: BookOpen, target: 18, suffix: "", label: "Courses" },
              { icon: Trophy, target: 95, suffix: "%", label: "Pass Rate" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border/30">
                <stat.icon className="h-4 w-4 text-primary mb-1" />
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
