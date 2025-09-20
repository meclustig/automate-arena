import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-accent/30 to-secondary/50 py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 right-20 w-72 h-72 gradient-primary rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 gradient-hero rounded-full opacity-10 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-background/80 backdrop-blur-sm shadow-soft">
            <Star className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">The Future of Intellectual Property is Here</span>
          </div>
        </div>

        {/* Main content */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            The Marketplace for{" "}
            <span className="gradient-hero bg-clip-text text-transparent">
              Brilliant Ideas
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Monetize your creativity. Buy exclusive rights to SaaS products, film scripts, business 
            concepts, and more from verified innovators.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="hero" className="group">
              Get Started Free
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Browse Marketplace
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>No listing fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-primary" />
              <span>Verified sellers</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span>Secure transactions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;