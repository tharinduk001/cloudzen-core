import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-grid">
      <div className="container">
        <Card className="gradient-bg border-0 overflow-hidden relative">
          <div className="absolute inset-0 bg-black/10" />
          <CardContent className="relative p-8 md:p-14 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Your future starts today</h2>
              <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
                Join thousands of students building real skills and landing real jobs.
              </p>
              <Button size="lg" variant="secondary" className="text-base px-10 h-12 cta-confetti" asChild>
                <Link to="/courses">Join Now — It's Free <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FinalCTA;
