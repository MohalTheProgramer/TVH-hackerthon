import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, DollarSign, Users, Briefcase, Heart, Globe } from "lucide-react";
import benefitsImage from "@assets/generated_images/Township_marketplace_with_vendors_30ee8ffd.png";

export default function BenefitsSection() {
  const benefits = [
    {
      category: "For Entrepreneurs",
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      items: [
        "Lower purchasing costs & higher profit margins",
        "Access to quality suppliers and wholesale networks",
        "Reduced business risks through shared resources",
        "Educational support and funding information"
      ]
    },
    {
      category: "For Suppliers",
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      items: [
        "Direct access to township markets",
        "Stable, predictable customer relationships",
        "Larger order volumes from group purchasing",
        "Reduced marketing and distribution costs"
      ]
    },
    {
      category: "For Communities",
      icon: <Heart className="w-8 h-8 text-primary" />,
      items: [
        "Job creation and local economic growth",
        "Stronger township business ecosystem",
        "Reduced dependency on foreign-owned businesses",
        "Community collaboration and Ubuntu spirit"
      ]
    }
  ];

  const stats = [
    { number: "40%", label: "Average Cost Savings", icon: <DollarSign className="w-6 h-6" /> },
    { number: "3x", label: "Faster Business Growth", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "500+", label: "Jobs Created", icon: <Users className="w-6 h-6" /> },
    { number: "50+", label: "Partner Suppliers", icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <section id="benefits" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Building Stronger Communities Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            When entrepreneurs unite through Ubuntu Marketplace, everyone benefits – 
            from individual businesses to entire communities.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6" data-testid={`card-stat-${index}`}>
              <CardContent className="pt-6">
                <div className="flex justify-center text-primary mb-2">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Image and Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={benefitsImage} 
                alt="Township marketplace with vendors" 
                className="w-full h-64 md:h-80 object-cover"
                data-testid="img-benefits-marketplace"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>

          {/* Benefits */}
          <div className="order-1 lg:order-2 space-y-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6" data-testid={`card-benefit-category-${index}`}>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {benefit.icon}
                    <h3 className="text-xl font-semibold text-foreground ml-3">
                      {benefit.category}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2.5 flex-shrink-0"></div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Story */}
        <div className="mt-16 bg-muted/30 rounded-lg p-8 text-center">
          <blockquote className="text-lg italic text-muted-foreground mb-4">
            "Since joining Ubuntu Marketplace, I've reduced my stock costs by 35% and my customer base has grown significantly. 
            The community support has been incredible – we're stronger together."
          </blockquote>
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-foreground">Nomsa Mbeki</div>
              <div className="text-sm text-muted-foreground">Spaza Shop Owner, Soweto</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}