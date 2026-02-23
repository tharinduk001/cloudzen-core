import { motion, useScroll, useTransform } from "framer-motion";
import { BookOpen, Play, Code, Award, Briefcase } from "lucide-react";
import { useRef } from "react";
import { roadmapSteps } from "@/data/mock-data";

const iconMap: Record<string, React.ElementType> = {
  BookOpen, Play, Code, Award, Briefcase,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const LearningRoadmap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-20 gradient-bg-subtle bg-grid overflow-hidden" ref={containerRef}>
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Your Learning Journey</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">From enrollment to employment — we've mapped every step.</p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* Animated vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2">
            <motion.div className="timeline-line w-full origin-top" style={{ height: lineHeight }} />
          </div>

          <div className="space-y-12">
            {roadmapSteps.map((step, i) => {
              const Icon = iconMap[step.icon] || BookOpen;
              const isRight = i % 2 === 1;

              return (
                <motion.div
                  key={step.step}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                  className={`relative flex items-center gap-4 md:gap-8 ${
                    isRight ? "md:flex-row-reverse md:text-right" : ""
                  }`}
                >
                  {/* Dot */}
                  <div className="relative z-10 flex-shrink-0 h-12 w-12 rounded-full bg-primary flex items-center justify-center timeline-dot-glow">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>

                  {/* Content card */}
                  <div className="flex-1 bg-card rounded-xl border border-border/50 p-4 shadow-sm">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">Step {step.step}</span>
                    <h3 className="font-display font-bold text-lg mt-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningRoadmap;
