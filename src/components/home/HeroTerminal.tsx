import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const techLogos = [
  { name: "Kubernetes", icon: "⎈", color: "hsl(210, 90%, 58%)" },
  { name: "Docker", icon: "🐳", color: "hsl(200, 80%, 50%)" },
  { name: "Git", icon: "", color: "hsl(12, 80%, 55%)" },
  { name: "Linux", icon: "🐧", color: "hsl(45, 80%, 55%)" },
  { name: "AWS", icon: "☁", color: "hsl(30, 90%, 55%)" },
  { name: "Terraform", icon: "⬡", color: "hsl(265, 60%, 58%)" },
  { name: "Ansible", icon: "⚙", color: "hsl(0, 0%, 75%)" },
  { name: "Jenkins", icon: "⚡", color: "hsl(0, 65%, 50%)" },
];

const DitherCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = 400;
    const h = 320;
    canvas.width = w;
    canvas.height = h;

    let frame = 0;

    const drawDither = () => {
      ctx.clearRect(0, 0, w, h);

      // Dithering background pattern
      for (let y = 0; y < h; y += 3) {
        for (let x = 0; x < w; x += 3) {
          const noise = Math.sin(x * 0.02 + frame * 0.02) * Math.cos(y * 0.02 + frame * 0.015);
          const dist = Math.sqrt((x - w / 2) ** 2 + (y - h / 2) ** 2) / (w * 0.5);
          const threshold = noise * 0.5 + (1 - dist) * 0.4;

          if (threshold > 0.15 + Math.random() * 0.3) {
            const alpha = Math.max(0.05, Math.min(0.35, threshold * 0.4));
            ctx.fillStyle = `hsla(210, 90%, 58%, ${alpha})`;
            ctx.fillRect(x, y, 2, 2);
          }
        }
      }

      // Draw tech logo circles with dither halos
      techLogos.forEach((logo, i) => {
        const angle = (i / techLogos.length) * Math.PI * 2 + frame * 0.005;
        const rx = 120 + Math.sin(frame * 0.008 + i) * 20;
        const ry = 90 + Math.cos(frame * 0.008 + i) * 15;
        const cx = w / 2 + Math.cos(angle) * rx;
        const cy = h / 2 + Math.sin(angle) * ry;

        // Dither halo around each logo
        for (let r = 30; r > 0; r -= 2) {
          const ditherChance = (30 - r) / 30;
          for (let a = 0; a < Math.PI * 2; a += 0.3) {
            if (Math.random() < ditherChance * 0.6) {
              const px = cx + Math.cos(a) * r + (Math.random() - 0.5) * 4;
              const py = cy + Math.sin(a) * r + (Math.random() - 0.5) * 4;
              ctx.fillStyle = logo.color.replace(")", ", 0.15)").replace("hsl(", "hsla(");
              ctx.fillRect(px, py, 2, 2);
            }
          }
        }

        // Logo background circle
        ctx.beginPath();
        ctx.arc(cx, cy, 18, 0, Math.PI * 2);
        ctx.fillStyle = logo.color.replace(")", ", 0.12)").replace("hsl(", "hsla(");
        ctx.fill();

        ctx.beginPath();
        ctx.arc(cx, cy, 18, 0, Math.PI * 2);
        ctx.strokeStyle = logo.color.replace(")", ", 0.4)").replace("hsl(", "hsla(");
        ctx.lineWidth = 1;
        ctx.stroke();

        // Icon text
        ctx.font = "16px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = logo.color;
        ctx.fillText(logo.icon, cx, cy);
      });

      // Connecting lines between logos
      ctx.strokeStyle = "hsla(210, 90%, 58%, 0.08)";
      ctx.lineWidth = 1;
      techLogos.forEach((_, i) => {
        const angle1 = (i / techLogos.length) * Math.PI * 2 + frame * 0.005;
        const rx1 = 120 + Math.sin(frame * 0.008 + i) * 20;
        const ry1 = 90 + Math.cos(frame * 0.008 + i) * 15;
        const cx1 = w / 2 + Math.cos(angle1) * rx1;
        const cy1 = h / 2 + Math.sin(angle1) * ry1;

        const j = (i + 1) % techLogos.length;
        const angle2 = (j / techLogos.length) * Math.PI * 2 + frame * 0.005;
        const rx2 = 120 + Math.sin(frame * 0.008 + j) * 20;
        const ry2 = 90 + Math.cos(frame * 0.008 + j) * 15;
        const cx2 = w / 2 + Math.cos(angle2) * rx2;
        const cy2 = h / 2 + Math.sin(angle2) * ry2;

        ctx.beginPath();
        ctx.setLineDash([4, 4]);
        ctx.moveTo(cx1, cy1);
        ctx.lineTo(cx2, cy2);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      frame++;
      requestAnimationFrame(drawDither);
    };

    const animId = requestAnimationFrame(drawDither);
    return () => cancelAnimationFrame(animId);
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

const HeroTerminal = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="relative w-full max-w-lg mx-auto"
    >
      {/* Terminal frame */}
      <div className="rounded-xl border border-border bg-card/80 backdrop-blur-sm shadow-xl overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-muted/50">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-destructive/70" />
            <span className="w-3 h-3 rounded-full bg-accent/70" />
            <span className="w-3 h-3 rounded-full bg-primary/50" />
          </div>
          <span className="text-xs font-mono text-muted-foreground ml-2">cloudzen ~ / devops-stack</span>
        </div>

        {/* Terminal content */}
        <div className="relative h-[320px] bg-background/50">
          <DitherCanvas />

          {/* Overlay labels */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-4 pointer-events-none">
            <div className="flex flex-wrap justify-center gap-2 px-4">
              {techLogos.map((logo, i) => (
                <motion.span
                  key={logo.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.08 }}
                  className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-border bg-card/80 text-muted-foreground"
                >
                  {logo.name}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Terminal prompt */}
        <div className="px-4 py-2.5 border-t border-border bg-muted/30">
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
