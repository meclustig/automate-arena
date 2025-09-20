import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah L.",
      role: "Screenwriter",
      avatar: "SL",
      rating: 5,
      content: "IPMarket changed the game for me. I sold my sci-fi plot script within a month to a major production house. The process was seamless and professional.",
    },
    {
      name: "Mike R.",
      role: "SaaS Founder",
      avatar: "MR",
      rating: 5,
      content: "I sold the rights to an early-stage SaaS product I didn't have time to develop. The capital I received funded my next big venture. Incredible platform!",
    },
    {
      name: "Jessica Chen",
      role: "Venture Capitalist",
      avatar: "JC",
      rating: 5,
      content: "As a buyer, IPMarket is a goldmine for sourcing innovative, pre-vetted business concepts. We've already funded two projects discovered here.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Innovators
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear what our community of sellers and buyers has to say.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-medium transition-all duration-300 bg-card border-border/50">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="" alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;