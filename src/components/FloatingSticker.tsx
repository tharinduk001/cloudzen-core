import { motion } from "framer-motion";
import { TgsPlayer } from "@/components/TgsPlayer";

interface FloatingStickerProps {
  src: string;
  className?: string;
  scrollTo?: string;
}

export function FloatingSticker({ src, className = "", scrollTo }: FloatingStickerProps) {
  const handleClick = () => {
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className={`pointer-events-auto fixed z-50 cursor-pointer ${className}`}
      animate={{
        y: [0, -18, 0],
        rotate: [0, 6, -6, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      onClick={handleClick}
      title="View courses"
    >
      <TgsPlayer src={src} className="w-full h-full" />
    </motion.div>
  );
}
