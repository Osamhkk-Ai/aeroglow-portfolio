import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for individuals and small projects",
      features: [
        "Up to 5 projects",
        "10GB storage",
        "Basic analytics",
        "Email support",
        "99.9% uptime SLA",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$99",
      description: "For growing teams and businesses",
      features: [
        "Unlimited projects",
        "100GB storage",
        "Advanced analytics",
        "Priority support",
        "99.99% uptime SLA",
        "Custom integrations",
        "Team collaboration",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with specific needs",
      features: [
        "Everything in Professional",
        "Unlimited storage",
        "Dedicated support",
        "Custom SLA",
        "On-premise deployment",
        "Advanced security",
        "Training & onboarding",
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-6 relative">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute bottom-1/3 left-1/2 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-glow">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`glass-strong p-8 rounded-2xl hover-elevate transition-all duration-300 ${
                plan.highlighted ? "ring-2 ring-primary glow scale-105" : ""
              }`}
              data-testid={`card-pricing-${plan.name.toLowerCase()}`}
            >
              {plan.highlighted && (
                <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-foreground/60 text-sm mb-6">{plan.description}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && (
                  <span className="text-foreground/60">/month</span>
                )}
              </div>
              <Button
                className={`w-full mb-8 ${plan.highlighted ? "glow" : ""}`}
                variant={plan.highlighted ? "default" : "outline"}
                data-testid={`button-pricing-${plan.name.toLowerCase()}`}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
              </Button>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}