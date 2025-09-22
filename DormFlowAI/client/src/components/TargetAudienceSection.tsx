import { Card, CardContent } from "@/components/ui/card";
import { Store, Truck, Users, Building } from "lucide-react";

export default function TargetAudienceSection() {
  const audiences = [
    {
      icon: <Store className="w-10 h-10 text-primary" />,
      title: "Local Entrepreneurs",
      description: "Spaza shop owners and small business operators looking to reduce costs and increase profits.",
      examples: ["Spaza shop owners", "Street vendors", "Home-based businesses"]
    },
    {
      icon: <Truck className="w-10 h-10 text-primary" />,
      title: "Wholesalers & Farmers",
      description: "Suppliers seeking direct access to township markets and stable customer relationships.",
      examples: ["Agricultural suppliers", "Food wholesalers", "Product distributors"]
    },
    {
      icon: <Building className="w-10 h-10 text-primary" />,
      title: "Small Supermarkets",
      description: "Township-based supermarkets wanting to compete with larger chains through better pricing.",
      examples: ["Mini supermarkets", "Corner stores", "Family-owned shops"]
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Community Cooperatives",
      description: "Organized groups focused on collective economic empowerment and community development.",
      examples: ["Buying clubs", "Stokvel groups", "Community organizations"]
    }
  ];

  return (
    <section id="target" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Who We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ubuntu Marketplace brings together everyone in the township economy – 
            from entrepreneurs to suppliers to community organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {audiences.map((audience, index) => (
            <Card 
              key={index} 
              className="p-6 hover-elevate"
              data-testid={`card-audience-${index}`}
            >
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {audience.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {audience.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {audience.description}
                    </p>
                    <div className="space-y-1">
                      {audience.examples.map((example, exampleIndex) => (
                        <div 
                          key={exampleIndex}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pilot Townships */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Pilot Township Launch
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're starting with these communities to test and perfect our platform:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Soweto", "Khayelitsha", "Umlazi", "Alexandra"].map((township, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium"
                data-testid={`text-township-${index}`}
              >
                {township}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}