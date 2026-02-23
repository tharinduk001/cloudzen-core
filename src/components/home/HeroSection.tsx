import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight, Sparkles, Users, BookOpen, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef } from "react";

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
  { label: "Live Exams", delay: 0, x: -20, y: -10 },
  { label: "Instant Results", delay: 1.5, x: 20, y: 10 },
  { label: "Digital Badges", delay: 3, x: -15, y: 15 },
];

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 gradient-bg-subtle bg-grid overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
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
            <Badge variant="secondary" className="px-3 py-1.5 text-xs shadow-lg backdrop-blur-sm border border-border/50">
              <Sparkles className="h-3 w-3 mr-1 text-primary" />
              {badge.label}
            </Badge>
          </motion.div>
        ))}
      </div>

      <div className="container relative">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-medium">
            <Sparkles className="h-3.5 w-3.5 mr-1.5 text-primary" /> Start Free — No Credit Card Needed
          </Badge>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Master Cloud Skills.{" "}
            <span className="gradient-text">Land Your Dream Job.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Live exams, instant results, digital badges, and hands-on projects — everything you need to go from beginner to hired.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Button size="lg" className="gradient-bg text-white border-0 text-base px-8 h-12 cta-confetti" asChild>
              <Link to="/courses">Start Free <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 h-12" asChild>
              <Link to="/courses">Explore Courses</Link>
            </Button>
          </div>

          {/* Animated counters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2 text-primary">
                <Users className="h-5 w-5" />
                <AnimatedCounter target={5000} suffix="+" />
              </div>
              <span className="text-sm text-muted-foreground">Students</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2 text-primary">
                <BookOpen className="h-5 w-5" />
                <AnimatedCounter target={18} />
              </div>
              <span className="text-sm text-muted-foreground">Courses</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2 text-primary">
                <TrendingUp className="h-5 w-5" />
                <AnimatedCounter target={95} suffix="%" />
              </div>
              <span className="text-sm text-muted-foreground">Pass Rate</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
