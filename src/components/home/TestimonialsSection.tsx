import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Star, Quote, Users, BookOpen, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/mock-data";
import { useEffect } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const StatCounter = ({ target, suffix, label, icon: Icon }: { target: number; suffix: string; label: string; icon: React.ElementType }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => {
    if (target >= 1000) return Math.round(v).toLocaleString();
    return v.toFixed(1);
  });

  useEffect(() => {
    const controls = animate(count, target, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [target, count]);

  return (
    <div className="flex flex-col items-center gap-1">
      <Icon className="h-5 w-5 text-primary mb-1" />
      <span className="font-bold text-2xl md:text-3xl text-foreground">
        <motion.span>{rounded}</motion.span>{suffix}
      </span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-20 gradient-bg-subtle bg-grid">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Why Students Love Us</h2>
          <p className="text-muted-foreground">Hear from our growing community.</p>
        </div>

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-10 md:gap-16 mb-14 py-6 px-4 rounded-2xl bg-card/50 border border-border/40 backdrop-blur-sm"
        >
          <StatCounter target={5000} suffix="+" label="Students" icon={Users} />
          <StatCounter target={18} suffix="" label="Courses" icon={BookOpen} />
          <StatCounter target={4.8} suffix="" label="Avg Rating" icon={TrendingUp} />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="h-full">
              <Card className="h-full flex flex-col hover-glow transition-shadow">
                <CardContent className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className={`h-4 w-4 ${j < t.rating ? "text-yellow-500 fill-yellow-500" : "text-muted"}`} />
                    ))}
                  </div>
                  <Quote className="h-4 w-4 text-primary/30 mb-2" />
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{t.quote}</p>
                  <div className="mt-auto">
                    <p className="text-base font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.university}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
