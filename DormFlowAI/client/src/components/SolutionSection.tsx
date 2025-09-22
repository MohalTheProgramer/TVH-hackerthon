import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Users, Truck, Info, MapPin } from "lucide-react";
import solutionImage from "@assets/generated_images/Township_entrepreneurs_collaborating_together_a3e433bb.png";

export default function SolutionSection() {
  const features = [
    {
      icon: <ShoppingCart className="w-8 h-8 text-primary" />,
      title: "Bulk Purchasing Power",
      description: "Pool orders with other entrepreneurs to unlock wholesale prices and better supplier terms."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Group Buying Features",
      description: "Collaborate with your community to negotiate volume discounts and share purchasing costs."
    },
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: "Shared Delivery",
      description: "Coordinate deliveries to reduce transport costs and improve efficiency for everyone."
    },
    {
      icon: <Info className="w-8 h-8 text-primary" />,
      title: "Business Support",
      description: "Access information about government funding, training programs, and networking events."
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Local Marketplace",
      description: "Connect with suppliers, share deals, and build relationships within your township network."
    }
  ];

  return (
    <section id="solution" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Solution: Unity Through Technology
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ubuntu Marketplace brings township entrepreneurs together through a digital platform 
            that makes bulk buying accessible, affordable, and community-driven.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div className="relative rounded-lg overflow-hidden max-w-4xl mx-auto">
            <img 
              src={solutionImage} 
              alt="Township entrepreneurs collaborating" 
              className="w-full h-64 md:h-80 object-cover"
              data-testid="img-solution-hero"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center p-6 hover-elevate"
              data-testid={`card-feature-${index}`}
            >
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-muted/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of township entrepreneurs who are already saving money 
            and growing their businesses through collective purchasing power.
          </p>
          <Button 
            size="lg" 
            className="px-8"
            onClick={() => console.log('Get Started clicked')}
            data-testid="button-get-started"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
}