import { Card } from "@/components/ui/card";
import { 
  Package, 
  ShoppingCart, 
  BarChart3, 
  Globe, 
  Users, 
  CreditCard,
  TrendingUp,
  Shield
} from "lucide-react";
import posImage from "@/assets/pos-interface.jpg";
import ecommerceImage from "@/assets/ecommerce-site.jpg";
import analyticsImage from "@/assets/analytics-dashboard.jpg";

const Features = () => {
  const mainFeatures = [
    {
      icon: Package,
      title: "Product & Stock Management",
      description: "Add, edit, and manage products with real-time quantity tracking and automatic stock deduction on each sale.",
      image: posImage
    },
    {
      icon: ShoppingCart,
      title: "Order Management with Payment Tracking",
      description: "Create customer orders using a cart-style interface, choose between payment methods (Cash, Online, or Credit), and track all sales status.",
      image: posImage
    },
    {
      icon: BarChart3,
      title: "Sales Dashboard",
      description: "Get instant access to sales metrics like total revenue, profit, and sales counts — filterable by user and date.",
      image: analyticsImage
    },
    {
      icon: Globe,
      title: "eCommerce Storefront",
      description: "Showcase products online with an integrated eCommerce site where customers can browse and place orders directly.",
      image: ecommerceImage
    }
  ];

  const additionalFeatures = [
    {
      icon: Users,
      title: "User Roles & Access",
      description: "Designed for teams — superadmins, admins, and regular users can manage the system based on their permissions."
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Methods",
      description: "Accept cash, online payments, and credit transactions with comprehensive payment tracking."
    },
    {
      icon: TrendingUp,
      title: "Real-time Analytics",
      description: "Monitor your business performance with real-time insights and detailed reporting."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with reliable data backup and system uptime guarantee."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Manage Your Business
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform combines all essential business tools in one place,
            from inventory management to online sales.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-medium transition-smooth border-border">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-smooth"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalFeatures.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-soft transition-smooth border-border group">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-primary transition-smooth">
                <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-smooth" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;