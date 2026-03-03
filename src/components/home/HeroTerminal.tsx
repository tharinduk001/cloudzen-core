import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const techLogos = [
  { name: "Kubernetes", icon: "⎈", color: "#326CE5", bg: "#326CE520" },
  { name: "Docker", icon: "🐳", color: "#2496ED", bg: "#2496ED20" },
  { name: "Git", icon: "", color: "#F05032", bg: "#F0503220" },
  { name: "Linux", icon: "🐧", color: "#FCC624", bg: "#FCC62420" },
  { name: "AWS", icon: "☁", color: "#FF9900", bg: "#FF990020" },
  { name: "Terraform", icon: "⬡", color: "#7B42BC", bg: "#7B42BC20" },
  { name: "Ansible", icon: "⚙", color: "#EE0000", bg: "#EE000020" },
  { name: "Jenkins", icon: "⚡", color: "#D24939", bg: "#D2493920" },
];

const DitherOverlay = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let frame = 0;
    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      for (let y = 0; y < h; y += 4) {
        for (let x = 0; x < w; x += 4) {
          const noise = Math.sin(x * 0.015 + frame * 0.012) * Math.cos(y * 0.015 + frame * 0.01);
          const dist = Math.sqrt((x - w / 2) ** 2 + (y - h / 2) ** 2) / (w * 0.6);
          const threshold = noise * 0.5 + (1 - dist) * 0.3;

          if (threshold > 0.1 + Math.random() * 0.35) {
            const alpha = Math.max(0.03, Math.min(0.2, threshold * 0.25));
            ctx.fillStyle = `rgba(100, 160, 255, ${alpha})`;
            ctx.fillRect(x, y, 3, 3);
          }
        }
      }

      frame++;
      requestAnimationFrame(draw);
    };

    const id = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
};

const HeroTerminal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % techLogos.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const visibleLogos = [
    techLogos[currentIndex],
    techLogos[(currentIndex + 1) % techLogos.length],
    techLogos[(currentIndex + 2) % techLogos.length],
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="relative w-full max-w-xl mx-auto"
    >
      <div className="rounded-xl border border-border bg-card/80 backdrop-blur-sm shadow-2xl overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-destructive/70" />
            <span className="w-3 h-3 rounded-full bg-accent/70" />
            <span className="w-3 h-3 rounded-full bg-primary/50" />
          </div>
          <span className="text-xs font-mono text-muted-foreground ml-2">cloudzen ~ / devops-stack</span>
        </div>

        {/* Terminal content - enlarged */}
        <div className="relative h-[420px] bg-background/50 overflow-hidden">
          <DitherOverlay />

          {/* Sliding full-size logos */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <AnimatePresence mode="popLayout">
              {visibleLogos.map((logo, i) => (
                <motion.div
                  key={`${logo.name}-${(currentIndex + i) % techLogos.length}`}
                  initial={{ x: 200, opacity: 0, scale: 0.7 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  exit={{ x: -200, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="flex flex-col items-center justify-center mx-4"
                >
                  <div
                    className="w-24 h-24 md:w-28 md:h-28 rounded-2xl flex items-center justify-center border border-border/50 backdrop-blur-sm shadow-lg"
                    style={{ background: logo.bg }}
                  >
                    <span className="text-5xl md:text-6xl select-none" style={{ filter: "contrast(1.2)" }}>
                      {logo.icon}
                    </span>
                  </div>
                  <span
                    className="mt-3 text-sm font-mono font-semibold tracking-wide"
                    style={{ color: logo.color }}
                  >
                    {logo.name}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10">
            {techLogos.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "bg-primary w-4" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Terminal prompt */}
        <div className="px-4 py-3 border-t border-border bg-muted/30">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-primary">$</span>
            <motion.span
              className="text-muted-foreground"
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              kubectl get pods --all-namespaces
            </motion.span>
            <motion.span
              className="w-2 h-4 bg-primary/70"
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroTerminal;
