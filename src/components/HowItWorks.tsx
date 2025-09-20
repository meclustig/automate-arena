import { UserPlus, Upload, MessageSquare } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Your Profile",
      description: "Sign up and build your verified seller profile in minutes. Showcase your expertise and build trust with buyers.",
    },
    {
      icon: Upload,
      title: "List Your Idea",
      description: "Use our intuitive dashboard to list your intellectual property. Add details, set your price, and go live.",
    },
    {
      icon: MessageSquare,
      title: "Negotiate & Sell",
      description: "Receive proposals, negotiate terms through our secure messaging, and finalize the deal to get paid.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A simple, three-step process to monetize your intellectual property.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  {/* Step number */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  
                  {/* Icon container */}
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-background shadow-soft group-hover:shadow-medium transition-all duration-300 group-hover:scale-110">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  
                  {/* Connector line (hidden on last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-border transform -translate-y-1/2" 
                         style={{ width: 'calc(100% - 2.5rem)' }} />
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;