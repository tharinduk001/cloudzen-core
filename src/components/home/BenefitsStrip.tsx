import { motion, useMotionValue, useTransform } from "framer-motion";
import { Radio, BarChart3, Zap, Award, Gamepad2, Target } from "lucide-react";
import { useRef, MouseEvent } from "react";

const benefits = [
  { icon: Radio, label: "Live Exams", desc: "Compete in real-time exams with instant ranking", color: "from-blue-500 to-cyan-400" },
  { icon: BarChart3, label: "Ranking System", desc: "See where you stand among peers", color: "from-violet-500 to-purple-400" },
  { icon: Zap, label: "Instant Marking", desc: "Get results immediately after submission", color: "from-amber-500 to-orange-400" },
  { icon: Award, label: "Digital Badges", desc: "Open Badge 3.0 certified credentials", color: "from-emerald-500 to-teal-400" },
  { icon: Gamepad2, label: "Gamified Learning", desc: "Earn XP & level up as you learn", color: "from-rose-500 to-pink-400" },
  { icon: Target, label: "Career Paths", desc: "Clear roadmap to land your dream job", color: "from-indigo-500 to-blue-400" },
];

const TiltCard = ({ benefit, index }: { benefit: typeof benefits[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const brightness = useTransform(rotateY, [-15, 0, 15], [0.95, 1, 1.05]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    rotateX.set((-y / rect.height) * 20);
    rotateY.set((x / rect.width) * 20);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      style={{ perspective: "800px" }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ translateZ: 20 }}
        className="p-10 rounded-2xl border border-border/40 bg-card/80 backdrop-blur-sm cursor-default flex flex-col items-center text-center gap-5 hover-glow transition-shadow"
      >
        <motion.div
          style={{ filter: useTransform(brightness, (b) => `brightness(${b})`) }}
          className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg`}
        >
          <benefit.icon className="h-9 w-9 text-white" />
        </motion.div>
        <h3 className="font-display font-bold text-2xl">{benefit.label}</h3>
        <p className="text-base text-muted-foreground leading-relaxed">{benefit.desc}</p>
      </motion.div>
    </motion.div>
  );
};

const BenefitsStrip = () => {
  return (
    <section className="min-h-screen snap-start relative flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 gradient-bg-subtle" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-6xl lg:text-7xl font-bold mb-6">Why Students Choose Us</h2>
          <p className="text-2xl text-muted-foreground">Everything you need to learn, prove, and grow.</p>
        </motion.div>

        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((b, i) => (
            <TiltCard key={b.label} benefit={b} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsStrip;
