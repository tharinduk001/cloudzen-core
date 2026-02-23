import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Shield, ArrowRight, Flame, Star, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { pricingPlans } from "@/data/mock-data";

const PricingTeaser = () => {
  return (
    <section className="py-24 bg-grid relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Flame className="h-4 w-4" />
            Limited Time Offer
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-3">Invest in Your Future</h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">Choose your plan and start learning today.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40, rotateY: i === 0 ? 5 : -5 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="h-full"
            >
              <Card className={`h-full flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? "border-primary/50 pricing-glow bg-card"
                  : "border-border/50 hover:border-primary/20"
              }`}>
                {plan.highlighted && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-1 gradient-bg" />
                    <Badge className="absolute -top-0.5 right-4 translate-y-[-50%] gradient-bg text-white border-0 px-3 py-1 text-xs">
                      <Crown className="h-3 w-3 mr-1" /> Best Value
                    </Badge>
                  </>
                )}
                <CardContent className="p-7 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    {plan.highlighted ? (
                      <Star className="h-5 w-5 text-primary fill-primary" />
                    ) : (
                      <Zap className="h-5 w-5 text-muted-foreground" />
                    )}
                    <h3 className="font-display font-bold text-2xl">{plan.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-5">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display font-bold text-5xl">
                        ${plan.price === "0" ? "0" : plan.price.split("/")[0]}
                      </span>
                      {plan.price !== "0" && (
                        <span className="text-muted-foreground text-base">/month</span>
                      )}
                    </div>
                    {plan.highlighted && (
                      <p className="text-xs text-primary mt-1 font-medium">🔥 Save 40% — was $32/mo</p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-primary" : "text-muted-foreground"}`} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    size="lg"
                    className={`w-full h-12 text-base ${plan.highlighted ? "gradient-bg text-white border-0 cta-confetti" : ""}`}
                    variant={plan.highlighted ? "default" : "outline"}
                    asChild
                  >
                    <Link to="/courses">
                      {plan.highlighted ? "Unlock Full Access" : "Start Free"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  {plan.highlighted && (
                    <p className="text-xs text-center text-muted-foreground mt-3">
                      Join 2,300+ Pro students
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-muted-foreground"
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
