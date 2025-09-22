import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp } from "lucide-react";
import heroImage from "@assets/generated_images/Township_entrepreneur_at_spaza_shop_c282212f.png";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background to-muted min-h-[600px] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <Users className="w-4 h-4 mr-2" />
            Empowering Township Entrepreneurs
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Ubuntu Marketplace
            <span className="block text-primary mt-2">Unite. Buy. Grow.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Join South Africa's leading bulk-buying platform where township entrepreneurs 
            pool orders, share costs, and build stronger businesses together. 
            Breaking the cycle of dependency, one community at a time.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 text-primary mr-2" />
              <span className="text-sm font-medium">40% Cost Savings</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-primary mr-2" />
              <span className="text-sm font-medium">Community Powered</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => console.log('Join the Movement clicked')}
              data-testid="button-join-movement"
            >
              Join the Movement
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 backdrop-blur-sm"
              onClick={() => console.log('Learn More clicked')}
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}