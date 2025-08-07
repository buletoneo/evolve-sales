import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, ArrowRight } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small businesses just getting started",
      features: [
        "Up to 1,000 products",
        "Basic POS system",
        "Simple inventory tracking",
        "Basic sales reports",
        "Email support",
        "Mobile app access"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "premium" as const,
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "per month",
      description: "Ideal for growing businesses with multiple locations",
      features: [
        "Unlimited products",
        "Advanced POS system",
        "Real-time inventory sync",
        "Advanced analytics & reports",
        "eCommerce integration",
        "Multi-user access",
        "Priority support",
        "Custom branding"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "hero" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large businesses with complex requirements",
      features: [
        "Everything in Professional",
        "Advanced user permissions",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
        "Custom training",
        "SLA guarantee",
        "White-label solution"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "premium" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your business size. All plans include a 14-day free trial
            with no setup fees or hidden costs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-8 group card-hover animate-fade-in ${
                plan.popular 
                  ? 'border-primary shadow-medium ring-2 ring-primary/20 hover:shadow-glow' 
                  : 'border-border'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-pulse-glow">
                  <span className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center shadow-elegant">
                    <Star className="h-4 w-4 mr-1 animate-pulse" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2 transition-colors group-hover:text-primary">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-4 transition-colors group-hover:text-foreground">
                  {plan.description}
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground transition-colors group-hover:text-primary">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    {plan.period}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3 hover-scale">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                    <span className="text-muted-foreground transition-colors group-hover:text-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.buttonVariant} 
                className="w-full group button-hover"
                size="lg"
              >
                {plan.buttonText}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-spring" />
              </Button>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-secondary rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                Can I switch plans anytime?
              </h4>
              <p className="text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                Is there a setup fee?
              </h4>
              <p className="text-muted-foreground">
                No setup fees, no hidden costs. You only pay for your monthly subscription.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                What payment methods do you accept?
              </h4>
              <p className="text-muted-foreground">
                We accept all major credit cards and offer secure payment processing.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                Do you offer refunds?
              </h4>
              <p className="text-muted-foreground">
                Yes, we offer a 30-day money-back guarantee if you're not satisfied.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;