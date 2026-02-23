import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-grid relative">
      <div className="container">
        <Card className="gradient-bg border-0 overflow-hidden relative">
          <div className="absolute inset-0 bg-black/10" />
          {/* Animated orbs */}
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          
          <CardContent className="relative p-10 md:p-16 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="inline-block mb-4"
              >
                <Rocket className="h-10 w-10 text-white/80" />
              </motion.div>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Your future starts today</h2>
              <p className="text-lg opacity-90 mb-4 max-w-xl mx-auto">
                Join thousands of students building real skills and landing real jobs.
              </p>
              <p className="text-sm opacity-70 mb-8">
                <Sparkles className="h-3.5 w-3.5 inline mr-1" />
                No credit card required · Cancel anytime
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" variant="secondary" className="text-base px-10 h-13 text-lg shadow-xl" asChild>
                  <Link to="/courses">Join Now — It's Free <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8 h-13 border-white/30 bg-white/10 text-white hover:bg-white/20" asChild>
                  <Link to="/consultations">Talk to Us</Link>
                </Button>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FinalCTA;
