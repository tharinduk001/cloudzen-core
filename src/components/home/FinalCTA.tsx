import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="min-h-screen snap-start relative flex items-center justify-center overflow-hidden gradient-bg">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Animated orbs */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-white/5 blur-[100px]"
        animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "10%", left: "5%" }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full bg-white/5 blur-[80px]"
        animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{ bottom: "15%", right: "10%" }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/20"
            style={{
              left: `${5 + (i * 4.7) % 90}%`,
              top: `${5 + (i * 7.3) % 90}%`,
            }}
            animate={{ y: [0, -50, 0], opacity: [0.1, 0.5, 0.1] }}
            transition={{ duration: 5 + (i % 4), repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="container relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block mb-8"
          >
            <Rocket className="h-14 w-14 text-white/80" />
          </motion.div>

          <h2 className="font-display text-6xl lg:text-7xl font-bold mb-6">Your future starts today</h2>

          <p className="text-xl opacity-90 mb-4 max-w-2xl mx-auto">
            Join thousands of students building real skills and landing real jobs.
          </p>
          <p className="text-sm opacity-60 mb-12">
            <Sparkles className="h-4 w-4 inline mr-1" />
            No credit card required · Cancel anytime
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button size="lg" variant="secondary" className="text-lg px-12 h-16 shadow-2xl" asChild>
              <Link to="/courses">Join Now — It's Free <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
