import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-purple-500/5 to-primary/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 gradient-primary rounded-full opacity-5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 gradient-hero rounded-full opacity-5 blur-3xl" />

      <div className="container mx-auto px-4 text-center relative">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 gradient-primary rounded-full mb-6">
          <Sparkles className="h-8 w-8 text-white" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Have an Idea Worth Selling?
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of innovators turning their concepts into cash. Listing is free, fast, and secure.
        </p>

        {/* CTA Button */}
        <Button variant="hero" size="hero" className="group mb-6">
          Start Selling Today
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>

        {/* Subtext */}
        <p className="text-sm text-muted-foreground">
          No credit card required • List for free • Get paid securely
        </p>
      </div>
    </section>
  );
};

export default CTA;