import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  DollarSign, 
  Clock, 
  Target, 
  Smartphone, 
  HeadphonesIcon,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "MVP Solution",
      description: "Get your business operational immediately with our ready-to-use, battle-tested platform that's already helping businesses succeed.",
      color: "text-yellow-500"
    },
    {
      icon: DollarSign,
      title: "Cost-Effective",
      description: "Replace multiple expensive tools with one affordable solution. Save thousands on separate POS, inventory, and eCommerce systems.",
      color: "text-green-500"
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Streamline operations with automated inventory tracking, integrated sales reporting, and synchronized online/offline management.",
      color: "text-blue-500"
    },
    {
      icon: Target,
      title: "Designed for SMBs",
      description: "Built specifically for small businesses and startups. No complex enterprise features you don't need - just what works.",
      color: "text-purple-500"
    },
    {
      icon: Smartphone,
      title: "Mobile-Friendly",
      description: "Manage your business from anywhere with our responsive design that works perfectly on all devices.",
      color: "text-pink-500"
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support",
      description: "Get help when you need it with our responsive customer support team that understands your business needs.",
      color: "text-orange-500"
    }
  ];

  const stats = [
    { number: "All-in-One", label: "Unified Platform" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Customer Support" },
    { number: "14 Days", label: "Free Trial" }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              InvenPro
            </span>
            ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another software solution. We're your business partner,
            designed to grow with you from day one.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-6 border-border group card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 group-hover:shadow-glow transition-spring">
                  <benefit.icon className="h-6 w-6 text-primary-foreground transition-transform group-hover:rotate-12" />
                </div>
                <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed transition-colors group-hover:text-foreground">
                  {benefit.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-background rounded-2xl p-8 shadow-soft border border-border mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-background rounded-2xl p-8 shadow-medium border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Join hundreds of successful businesses that have streamlined their operations with InvenPro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button variant="premium" size="lg">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;