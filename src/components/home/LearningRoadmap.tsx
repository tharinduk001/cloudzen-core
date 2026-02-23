import { motion, useScroll, useTransform } from "framer-motion";
import { BookOpen, Play, Code, Award, Briefcase, Rocket, CheckCircle2 } from "lucide-react";
import { useRef, useState } from "react";
import { roadmapSteps } from "@/data/mock-data";

const iconMap: Record<string, React.ElementType> = {
  BookOpen, Play, Code, Award, Briefcase,
};

const stepColors = [
  "from-blue-500 to-cyan-400",
  "from-cyan-400 to-teal-400",
  "from-teal-400 to-emerald-400",
  "from-emerald-400 to-amber-400",
  "from-amber-400 to-orange-400",
];

const LearningRoadmap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="min-h-screen snap-start relative flex items-center overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 roadmap-perspective-bg" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/25"
            style={{
              left: `${8 + (i * 6.2) % 84}%`,
              top: `${5 + (i * 11) % 90}%`,
            }}
            animate={{ y: [0, -40, 0], opacity: [0.15, 0.5, 0.15], scale: [1, 1.8, 1] }}
            transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-base font-medium mb-5">
            <Rocket className="h-5 w-5" />
            Interactive Roadmap
          </div>
          <h2 className="font-display text-6xl lg:text-7xl font-bold mb-6">Your Path to Success</h2>
          <p className="text-2xl text-muted-foreground">Follow the journey thousands of students have taken.</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto" style={{ perspective: "1200px" }}>
          <motion.div
            initial={{ rotateX: 6, opacity: 0 }}
            whileInView={{ rotateX: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 rounded-full overflow-hidden">
              <div className="w-full h-full bg-border/30" />
              <motion.div
                className="absolute top-0 left-0 w-full rounded-full timeline-line-3d"
                style={{ height: lineHeight }}
              />
            </div>

            <div className="space-y-12">
              {roadmapSteps.map((step, i) => {
                const Icon = iconMap[step.icon] || BookOpen;
                const isRight = i % 2 === 1;
                const isHovered = hoveredStep === i;

                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: isRight ? 80 : -80, rotateY: isRight ? -10 : 10 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.12, duration: 0.7, ease: "easeOut" }}
                    onMouseEnter={() => setHoveredStep(i)}
                    onMouseLeave={() => setHoveredStep(null)}
                    className={`relative flex items-start ${isRight ? "flex-row-reverse" : ""}`}
                  >
                    <div className={`flex-1 w-[calc(50%-3rem)] ${isRight ? "pl-10" : "pr-10"}`}>
                      <motion.div
                        animate={isHovered ? { scale: 1.04, y: -6 } : { scale: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className={`roadmap-card p-8 rounded-2xl border transition-all duration-300 ${
                          isHovered
                            ? "border-primary/40 shadow-lg shadow-primary/10 bg-card"
                            : "border-border/30 bg-card/70 backdrop-blur-sm"
                        }`}
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${stepColors[i]} flex items-center justify-center`}>
                            <span className="text-white text-base font-bold">{step.step}</span>
                          </div>
                          <h3 className="font-display font-bold text-2xl">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground ml-16 text-lg">{step.description}</p>

                        <div className="flex items-center gap-3 mt-5 ml-16">
                          <CheckCircle2 className="h-5 w-5 text-primary/50" />
                          <div className="flex-1 h-2.5 rounded-full bg-muted overflow-hidden">
                            <motion.div
                              className={`h-full rounded-full bg-gradient-to-r ${stepColors[i]}`}
                              initial={{ width: "0%" }}
                              whileInView={{ width: `${100 - i * 15}%` }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5 + i * 0.15, duration: 0.8 }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    <div className="relative z-10 flex-shrink-0 mt-3">
                      <motion.div
                        animate={isHovered ? { scale: 1.3 } : { scale: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="relative"
                      >
                        <motion.div
                          className={`absolute -inset-3 rounded-full bg-gradient-to-br ${stepColors[i]} opacity-20 blur-md`}
                          animate={isHovered ? { opacity: 0.5, scale: 1.6 } : { opacity: 0.2, scale: 1 }}
                        />
                        <div className={`relative h-18 w-18 rounded-full bg-gradient-to-br ${stepColors[i]} flex items-center justify-center shadow-xl roadmap-dot-3d`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute top-2 left-3 w-6 h-3 bg-white/30 rounded-full blur-sm" />
                      </motion.div>
                    </div>

                    <div className="flex-1 w-[calc(50%-3rem)]" />
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              className="flex justify-center mt-16"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-5 rounded-full border-2 border-dashed border-primary/20"
                />
                <div className="h-24 w-24 rounded-full gradient-bg flex items-center justify-center shadow-2xl timeline-dot-glow">
                  <Rocket className="h-11 w-11 text-white" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LearningRoadmap;
