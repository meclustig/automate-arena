import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Star } from "lucide-react";

const FeaturedIdeas = () => {
  const ideas = [
    {
      id: 1,
      title: "AI-Powered Customer Service Automation for E-commerce",
      description: "Complete SaaS automation system that integrates with Shopify/WooCommerce to handle 90% of customer inquiries automatically.",
      price: "$15,000",
      category: "SaaS Automation",
      level: "Beginner",
      views: 234,
      rating: 5,
      tags: ["AI", "Chatbot", "E-commerce"],
      featured: true,
    },
    {
      id: 2,
      title: "Netflix-Style Sci-Fi Thriller: The Memory Traders",
      description: "In 2045, memories can be extracted and sold like commodities. A black market memory trader discovers their own stolen childhood memories.",
      price: "$25,000",
      category: "Film Plot",
      level: "Expert",
      views: 156,
      rating: 5,
      tags: ["Sci-Fi", "Thriller", "Netflix"],
      featured: true,
    },
    {
      id: 3,
      title: "Social Media Analytics SaaS Platform",
      description: "Multi-platform analytics dashboard for brands and agencies. Tracks engagement, sentiment, and ROI across Instagram, TikTok, Twitter, and LinkedIn.",
      price: "$22,000",
      category: "Software Idea",
      level: "Intermediate",
      views: 445,
      rating: 5,
      tags: ["Analytics", "Social Media", "SaaS"],
      featured: true,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="h-5 w-5 text-primary" />
            <span className="text-primary font-semibold">Featured Ideas</span>
            <Star className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Handpicked breakthrough concepts from verified innovators
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover premium intellectual property that's ready to transform into your next big venture.
          </p>
        </div>

        {/* Ideas grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {ideas.map((idea) => (
            <Card key={idea.id} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-card border-border/50">
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <Badge 
                    variant={idea.level === "Expert" ? "default" : idea.level === "Intermediate" ? "secondary" : "outline"}
                    className="text-xs"
                  >
                    {idea.category}
                  </Badge>
                  {idea.featured && (
                    <Badge className="gradient-primary text-white border-0">
                      Featured
                    </Badge>
                  )}
                </div>
                <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                  {idea.title}
                </h3>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                  {idea.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {idea.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs px-2 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{idea.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between pt-4">
                <div className="text-2xl font-bold text-primary">
                  {idea.price}
                  <span className="text-sm font-normal text-muted-foreground ml-1">
                    negotiable
                  </span>
                </div>
                <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white transition-all">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Explore All Ideas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedIdeas;