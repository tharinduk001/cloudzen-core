import { motion } from "framer-motion";
import { Radio, BarChart3, Zap, Award, Code, TrendingUp, Gamepad2, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  { icon: Radio, label: "Live Exams", desc: "Compete in real-time exams", color: "from-blue-500/20 to-cyan-500/20" },
  { icon: BarChart3, label: "Ranking System", desc: "See where you stand", color: "from-purple-500/20 to-pink-500/20" },
  { icon: Zap, label: "Instant Marking", desc: "Get results immediately", color: "from-amber-500/20 to-orange-500/20" },
  { icon: Award, label: "Digital Badges", desc: "Open Badge 3.0 certified", color: "from-emerald-500/20 to-teal-500/20" },
  { icon: Gamepad2, label: "Gamified Learning", desc: "Earn XP & level up", color: "from-rose-500/20 to-red-500/20" },
  { icon: Target, label: "Career Paths", desc: "Clear roadmap to jobs", color: "from-indigo-500/20 to-violet-500/20" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" as const },
  }),
};

const BenefitsStrip = () => {
  return (
    <section className="py-20 bg-grid">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Why Students Choose Us</h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">Everything you need to learn, prove, and grow.</p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {benefits.map((b, i) => (
            <motion.div key={b.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Card className="text-center hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover-glow border-border/50 h-full cursor-default group">
                <CardContent className="pt-6 pb-5 flex flex-col items-center gap-3">
                  <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${b.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <b.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-sm">{b.label}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
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
