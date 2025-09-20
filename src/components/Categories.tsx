import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  Film, 
  Lightbulb, 
  Building, 
  Code, 
  TrendingUp,
  ArrowRight 
} from "lucide-react";

const Categories = () => {
  const categories = [
    {
      icon: Zap,
      title: "SaaS Automation",
      description: "Workflow automations, API integrations, and efficiency tools",
      count: "150+",
      iconColor: "text-blue-500",
      iconBg: "bg-blue-500/10",
    },
    {
      icon: Film,
      title: "Film Plots",
      description: "Original screenplays, story concepts, and character development",
      count: "80+",
      iconColor: "text-purple-500",
      iconBg: "bg-purple-500/10",
    },
    {
      icon: Lightbulb,
      title: "Business Concepts",
      description: "Startup ideas, business models, and market opportunities",
      count: "200+",
      iconColor: "text-green-500",
      iconBg: "bg-green-500/10",
    },
    {
      icon: Building,
      title: "Company Rights",
      description: "Intellectual property, patents, and licensing opportunities",
      count: "60+",
      iconColor: "text-orange-500",
      iconBg: "bg-orange-500/10",
    },
    {
      icon: Code,
      title: "Software Ideas",
      description: "App concepts, software solutions, and tech innovations",
      count: "120+",
      iconColor: "text-indigo-500",
      iconBg: "bg-indigo-500/10",
    },
    {
      icon: TrendingUp,
      title: "Marketing Strategy",
      description: "Campaign concepts, growth hacks, and brand strategies",
      count: "90+",
      iconColor: "text-pink-500",
      iconBg: "bg-pink-500/10",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore by <span className="gradient-primary bg-clip-text text-transparent">Category</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover breakthrough ideas across all industries and expertise levels
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-card border-border/50">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${category.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-6 w-6 ${category.iconColor}`} />
                    </div>
                    <span className="text-sm font-semibold text-muted-foreground">
                      {category.count}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary group">
                    Browse Ideas
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="group">
            View All Categories
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;