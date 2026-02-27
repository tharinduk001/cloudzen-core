import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cloud, Settings, Code, GitBranch, RefreshCw, Box, Layers } from "lucide-react";
import { categories } from "@/data/mock-data";

const iconMap: Record<string, React.ElementType> = {
  Cloud, Settings, Code, GitBranch, RefreshCw, Box, Layers,
};

export function OrbitCategories() {
  const count = categories.length;

  return (
    <div className="relative w-[340px] h-[340px] md:w-[480px] md:h-[480px] mx-auto">
      {/* Orbit ring */}
      <div className="absolute inset-4 md:inset-8 rounded-full border border-dashed border-primary/20 animate-[spin_60s_linear_infinite]" />
      <div className="absolute inset-12 md:inset-20 rounded-full border border-dashed border-primary/10 animate-[spin_45s_linear_infinite_reverse]" />

      {/* Category items orbiting */}
      {categories.map((cat, i) => {
        const angle = (360 / count) * i - 90; // start from top
        const radius = 42; // percentage from center
        const radians = (angle * Math.PI) / 180;
        const x = 50 + radius * Math.cos(radians);
        const y = 50 + radius * Math.sin(radians);
        const Icon = iconMap[cat.icon] || Cloud;

        return (
          <motion.div
            key={cat.name}
            className="absolute z-10"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.12, duration: 0.5, type: "spring" }}
          >
            <Link to="/courses" className="group flex flex-col items-center gap-1.5">
              <motion.div
                className={`h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow`}
                whileHover={{ scale: 1.18, rotate: 8 }}
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  y: { duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <Icon className="h-5 w-5 md:h-6 md:w-6" />
              </motion.div>
              <span className="text-[10px] md:text-xs font-semibold text-foreground/80 text-center max-w-[70px] leading-tight group-hover:text-primary transition-colors">
                {cat.name}
              </span>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
