import { motion } from "framer-motion";
import { Radio, BarChart3, Zap, Award, Code, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  { icon: Radio, label: "Live Exams", desc: "Real-time competitive exams" },
  { icon: BarChart3, label: "Ranking System", desc: "See where you stand" },
  { icon: Zap, label: "Instant Marking", desc: "Get results immediately" },
  { icon: Award, label: "Digital Badges", desc: "Open Badge 3.0 certified" },
  { icon: Code, label: "Hands-on Projects", desc: "Build real things" },
  { icon: TrendingUp, label: "Career Roadmaps", desc: "Clear path forward" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
};

const BenefitsStrip = () => {
  return (
    <section className="py-16 bg-grid">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Why Students Choose Us</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Everything you need to learn, prove, and grow.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {benefits.map((b, i) => (
            <motion.div key={b.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Card className="text-center hover:scale-105 transition-transform duration-200 hover-glow border-border/50 h-full">
                <CardContent className="pt-6 pb-4 flex flex-col items-center gap-2">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <b.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-sm">{b.label}</h3>
                  <p className="text-xs text-muted-foreground">{b.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsStrip;
