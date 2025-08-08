import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in [animation-delay:0.2s] hover-scale">
                🎯 Unified Business Platform
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in [animation-delay:0.3s]">
                One System for{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  eCommerce & Inventory
                </span>{" "}
                Management
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in [animation-delay:0.4s]">
                Why juggle multiple tools? INVENZO unifies your online store and inventory 
                management in one powerful platform. Sell online, track stock, analyze sales, 
                and manage everything from a single dashboard.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:0.5s]">
              <Button variant="hero" size="lg" className="group button-hover">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-spring" />
              </Button>
              <Button variant="premium" size="lg" className="group button-hover">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-spring" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground animate-fade-in [animation-delay:0.6s]">
              <div className="flex items-center space-x-2 hover-scale">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
                <span>No Setup Fees</span>
              </div>
              <div className="flex items-center space-x-2 hover-scale">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow [animation-delay:0.5s]"></div>
                <span>14-Day Free Trial</span>
              </div>
              <div className="flex items-center space-x-2 hover-scale">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow [animation-delay:1s]"></div>
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in [animation-delay:0.4s]">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="InvenPro Dashboard Interface"
                className="w-full h-auto rounded-2xl shadow-large hover-glow animate-float"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-2xl blur-2xl transform scale-105"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;