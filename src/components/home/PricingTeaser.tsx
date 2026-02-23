import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Shield, ArrowRight, Star, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { pricingPlans } from "@/data/mock-data";

const PricingTeaser = () => {
  return (
    <section className="min-h-screen snap-start relative flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl lg:text-6xl font-bold mb-4">Invest in Your Future</h2>
          <p className="text-xl text-muted-foreground">Choose your plan and start learning today.</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-10 max-w-4xl mx-auto" style={{ perspective: "1000px" }}>
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50, rotateY: i === 0 ? 8 : -8 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="h-full"
            >
              <div className={`h-full rounded-2xl border p-10 flex flex-col relative overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? "border-primary/50 pricing-glow bg-card shadow-2xl"
                  : "border-border/40 bg-card/80 backdrop-blur-sm hover:border-primary/20"
              }`}>
                {plan.highlighted && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-1 gradient-bg" />
                    <Badge className="absolute top-4 right-4 gradient-bg text-white border-0 px-3 py-1">
                      <Crown className="h-3 w-3 mr-1" /> Best Value
                    </Badge>
                  </>
                )}

                <div className="flex items-center gap-2 mb-3">
                  {plan.highlighted ? (
                    <Star className="h-6 w-6 text-primary fill-primary" />
                  ) : (
                    <Zap className="h-6 w-6 text-muted-foreground" />
                  )}
                  <h3 className="font-display font-bold text-3xl">{plan.name}</h3>
                </div>
                <p className="text-muted-foreground mb-8">{plan.description}</p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display font-bold text-6xl">
                      ${plan.price === "0" ? "0" : plan.price.split("/")[0]}
                    </span>
                    {plan.price !== "0" && (
                      <span className="text-muted-foreground text-lg">/month</span>
                    )}
                  </div>
                  {plan.highlighted && (
                    <p className="text-sm text-primary mt-2 font-medium">🔥 Save 40% — was $32/mo</p>
                  )}
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-base">
                      <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-primary" : "text-muted-foreground"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className={`w-full h-14 text-lg ${plan.highlighted ? "gradient-bg text-white border-0 cta-confetti" : ""}`}
                  variant={plan.highlighted ? "default" : "outline"}
                  asChild
                >
                  <Link to="/courses">
                    {plan.highlighted ? "Unlock Full Access" : "Start Free"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-8 mt-12 text-muted-foreground"
        >
          <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-primary" /> Cancel anytime</span>
          <span className="text-border">•</span>
          <span>7-day money back guarantee</span>
          <span className="text-border">•</span>
          <span>Secure payment</span>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTeaser;
