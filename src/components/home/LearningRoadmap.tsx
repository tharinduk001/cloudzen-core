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
    offset: ["start 0.85", "end 0.5"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="py-24 overflow-hidden relative" ref={containerRef}>
      {/* 3D perspective background */}
      <div className="absolute inset-0 roadmap-perspective-bg" />
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${10 + (i * 7.5) % 80}%`,
              top: `${5 + (i * 13) % 90}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Rocket className="h-4 w-4" />
            Interactive Roadmap
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Your Path to Success</h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">Follow the journey thousands of students have taken.</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto" style={{ perspective: "1200px" }}>
          {/* 3D tilted container */}
          <motion.div
            initial={{ rotateX: 8, opacity: 0 }}
            whileInView={{ rotateX: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Central animated line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 rounded-full overflow-hidden">
              <div className="w-full h-full bg-border/40" />
              <motion.div
                className="absolute top-0 left-0 w-full rounded-full timeline-line-3d"
                style={{ height: lineHeight }}
              />
            </div>

            <div className="space-y-6 md:space-y-8">
              {roadmapSteps.map((step, i) => {
                const Icon = iconMap[step.icon] || BookOpen;
                const isRight = i % 2 === 1;
                const isHovered = hoveredStep === i;

                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: isRight ? 60 : -60, rotateY: isRight ? -8 : 8 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
                    onMouseEnter={() => setHoveredStep(i)}
                    onMouseLeave={() => setHoveredStep(null)}
                    className={`relative flex items-start gap-4 md:gap-0 ${
                      isRight ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content card - left/right */}
                    <div className={`flex-1 md:w-[calc(50%-2rem)] ${isRight ? "md:pl-8" : "md:pr-8"} ${!isRight ? "" : "md:text-left"}`}>
                      <motion.div
                        animate={isHovered ? { scale: 1.03, y: -4 } : { scale: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className={`roadmap-card p-5 rounded-2xl border transition-all duration-300 ${
                          isHovered
                            ? "border-primary/40 shadow-lg shadow-primary/10 bg-card"
                            : "border-border/40 bg-card/80 backdrop-blur-sm"
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${stepColors[i]} flex items-center justify-center`}>
                            <span className="text-white text-xs font-bold">{step.step}</span>
                          </div>
                          <h3 className="font-display font-bold text-lg">{step.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground ml-11">{step.description}</p>
                        
                        {/* Progress indicator */}
                        <div className="flex items-center gap-2 mt-3 ml-11">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary/50" />
                          <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
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

                    {/* Center dot with 3D glow */}
                    <div className="relative z-10 flex-shrink-0 mt-4 md:mt-3">
                      <motion.div
                        animate={isHovered ? { scale: 1.3 } : { scale: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="relative"
                      >
                        {/* Outer glow ring */}
                        <motion.div
                          className={`absolute -inset-2 rounded-full bg-gradient-to-br ${stepColors[i]} opacity-20 blur-md`}
                          animate={isHovered ? { opacity: 0.4, scale: 1.5 } : { opacity: 0.2, scale: 1 }}
                        />
                        {/* Main dot */}
                        <div className={`relative h-14 w-14 rounded-full bg-gradient-to-br ${stepColors[i]} flex items-center justify-center shadow-lg roadmap-dot-3d`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        {/* Inner shine */}
                        <div className="absolute top-1 left-2 w-4 h-2 bg-white/30 rounded-full blur-sm" />
                      </motion.div>
                    </div>

                    {/* Empty spacer for alternating layout */}
                    <div className="hidden md:block flex-1 md:w-[calc(50%-2rem)]" />
                  </motion.div>
                );
              })}
            </div>

            {/* Final achievement badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              className="flex justify-center mt-10"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/20"
                />
                <div className="h-16 w-16 rounded-full gradient-bg flex items-center justify-center shadow-xl timeline-dot-glow">
                  <Rocket className="h-7 w-7 text-white" />
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
