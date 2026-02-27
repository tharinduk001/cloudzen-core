import { motion } from "framer-motion";
import { TgsPlayer } from "@/components/TgsPlayer";

interface FloatingStickerProps {
  src: string;
  className?: string;
}

export function FloatingSticker({ src, className = "" }: FloatingStickerProps) {
  return (
    <motion.div
      className={`pointer-events-none fixed z-50 ${className}`}
      animate={{
        y: [0, -18, 0],
        rotate: [0, 6, -6, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <TgsPlayer src={src} className="w-full h-full" />
    </motion.div>
  );
}
