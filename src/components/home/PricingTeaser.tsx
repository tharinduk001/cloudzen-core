import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { pricingPlans } from "@/data/mock-data";

const PricingTeaser = () => {
  return (
    <section className="py-20 bg-grid">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Start free, upgrade when you're ready. No surprises.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <Card className={`h-full flex flex-col relative ${plan.highlighted ? "border-primary/50 pricing-glow" : "border-border/50"}`}>
                {plan.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-bg text-white border-0 px-4">
                    Most Popular
                  </Badge>
                )}
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display font-bold text-xl mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="font-display font-bold text-4xl">${plan.price === "0" ? "0" : plan.price.split("/")[0]}</span>
                    {plan.price !== "0" && <span className="text-muted-foreground text-sm">/mo</span>}
                  </div>
                  <ul className="space-y-3 mb-6 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.highlighted ? "gradient-bg text-white border-0" : ""}`}
                    variant={plan.highlighted ? "default" : "outline"}
                    asChild
                  >
                    <Link to="/courses">
                      {plan.highlighted ? "Unlock Full Access" : "Get Started"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-8 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Shield className="h-4 w-4" /> Cancel anytime</span>
          <span>•</span>
          <span>7-day money back guarantee</span>
        </div>
      </div>
    </section>
  );
};

export default PricingTeaser;
