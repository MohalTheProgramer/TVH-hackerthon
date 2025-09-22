import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, DollarSign } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-destructive" />,
      title: "Foreign-Owned Dominance",
      description: "Most local markets and spaza shops in townships are foreign-owned, limiting opportunities for local entrepreneurs."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-destructive" />,
      title: "High Stock Costs",
      description: "Individual entrepreneurs struggle with expensive purchasing, lacking access to bulk discounts and supplier networks."
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-destructive" />,
      title: "Limited Growth",
      description: "Higher costs lead to smaller profit margins, slower business growth, and reduced competitiveness in the market."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Challenge Facing Our Communities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Township entrepreneurs face systemic barriers that prevent them from competing 
            effectively in their own communities. It's time for change.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="text-center p-6 hover-elevate"
              data-testid={`card-problem-${index}`}
            >
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg font-medium text-foreground">
            Together, we can build a stronger, more equitable economy for all.
          </p>
        </div>
      </div>
    </section>
  );
}