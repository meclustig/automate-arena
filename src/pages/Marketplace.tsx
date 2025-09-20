import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, TrendingUp, Star, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Marketplace = () => {
  const navigate = useNavigate();

  const featuredIdeas = [
    {
      id: 1,
      title: "AI-Powered Customer Service Automation",
      description: "Complete SaaS automation system for e-commerce platforms",
      price: "$15,000",
      category: "SaaS Automation",
      views: 234,
      rating: 5,
      featured: true,
    },
    {
      id: 2,
      title: "Netflix-Style Sci-Fi Thriller Script",
      description: "Memory trading in 2045 - complete screenplay ready for production",
      price: "$25,000",
      category: "Film Plot",
      views: 156,
      rating: 5,
      featured: true,
    },
    {
      id: 3,
      title: "Social Media Analytics Platform",
      description: "Multi-platform analytics dashboard for brands and agencies",
      price: "$22,000",
      category: "Software Idea",
      views: 445,
      rating: 5,
      featured: false,
    },
    {
      id: 4,
      title: "Sustainable Food Delivery Network",
      description: "Zero-waste delivery system with reusable packaging",
      price: "$18,000",
      category: "Business Concept",
      views: 189,
      rating: 4,
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-purple-500/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover Breakthrough <span className="gradient-primary bg-clip-text text-transparent">Ideas</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse thousands of innovative concepts from verified creators across all industries
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  placeholder="Search ideas, categories, or keywords..." 
                  className="pl-10"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="saas">SaaS Automation</SelectItem>
                  <SelectItem value="film">Film Plots</SelectItem>
                  <SelectItem value="business">Business Concepts</SelectItem>
                  <SelectItem value="software">Software Ideas</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under-10k">Under $10k</SelectItem>
                  <SelectItem value="10k-25k">$10k - $25k</SelectItem>
                  <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                  <SelectItem value="over-50k">Over $50k</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ideas Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Featured Ideas</h2>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Trending Now</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredIdeas.map((idea) => (
              <Card key={idea.id} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant={idea.featured ? "default" : "outline"}>
                      {idea.category}
                    </Badge>
                    {idea.featured && (
                      <Badge className="gradient-primary text-white border-0">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {idea.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    {idea.description}
                  </p>
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
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-xl font-bold text-primary">
                      {idea.price}
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => navigate(`/idea/${idea.id}`)}
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" onClick={() => navigate('/browse')}>
              Load More Ideas
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Marketplace;