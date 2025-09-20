import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Search, SlidersHorizontal, Grid, List, Star, Eye, Heart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BrowseIdeas = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 100000]);

  const allIdeas = [
    {
      id: 1,
      title: "AI-Powered Customer Service Automation for E-commerce",
      description: "Complete SaaS automation system that integrates with Shopify/WooCommerce to handle 90% of customer inquiries automatically using advanced NLP and machine learning.",
      price: 15000,
      category: "SaaS Automation",
      level: "Beginner",
      views: 234,
      rating: 5,
      tags: ["AI", "Chatbot", "E-commerce", "Automation"],
      featured: true,
      seller: "TechInnovator",
      timePosted: "2 days ago",
    },
    {
      id: 2,
      title: "Netflix-Style Sci-Fi Thriller: The Memory Traders",
      description: "In 2045, memories can be extracted and sold like commodities. A black market memory trader discovers their own stolen childhood memories in this gripping screenplay.",
      price: 25000,
      category: "Film Plot",
      level: "Expert",
      views: 156,
      rating: 5,
      tags: ["Sci-Fi", "Thriller", "Netflix", "Screenplay"],
      featured: true,
      seller: "ScriptMaster",
      timePosted: "1 week ago",
    },
    {
      id: 3,
      title: "Social Media Analytics SaaS Platform",
      description: "Multi-platform analytics dashboard for brands and agencies. Tracks engagement, sentiment, and ROI across Instagram, TikTok, Twitter, and LinkedIn.",
      price: 22000,
      category: "Software Idea",
      level: "Intermediate",
      views: 445,
      rating: 5,
      tags: ["Analytics", "Social Media", "SaaS", "Dashboard"],
      featured: true,
      seller: "DataGuru",
      timePosted: "3 days ago",
    },
    {
      id: 4,
      title: "Sustainable Food Delivery Network",
      description: "Revolutionary zero-waste delivery system using reusable packaging and electric vehicles. Complete business model with supplier partnerships.",
      price: 18000,
      category: "Business Concept",
      level: "Intermediate",
      views: 189,
      rating: 4,
      tags: ["Sustainability", "Food", "Delivery", "Green Tech"],
      featured: false,
      seller: "EcoEntrepreneur",
      timePosted: "5 days ago",
    },
    {
      id: 5,
      title: "AR Interior Design Mobile App",
      description: "Augmented reality app that lets users visualize furniture and decor in their space before purchasing. Includes partnerships with major retailers.",
      price: 12000,
      category: "Software Idea",
      level: "Beginner",
      views: 298,
      rating: 4,
      tags: ["AR", "Mobile App", "Interior Design", "Retail"],
      featured: false,
      seller: "ARDeveloper",
      timePosted: "1 day ago",
    },
    {
      id: 6,
      title: "Blockchain-Based Voting System",
      description: "Secure, transparent voting platform using blockchain technology. Perfect for organizations, unions, and small-scale elections.",
      price: 35000,
      category: "Software Idea",
      level: "Expert",
      views: 167,
      rating: 5,
      tags: ["Blockchain", "Voting", "Security", "Democracy"],
      featured: false,
      seller: "BlockchainPro",
      timePosted: "1 week ago",
    },
  ];

  const categories = [
    "SaaS Automation",
    "Film Plot",
    "Business Concept",
    "Software Idea",
    "Marketing Strategy",
    "Company Rights",
  ];

  const levels = ["Beginner", "Intermediate", "Expert"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 space-y-6">
            <div>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </h3>
              
              {/* Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search ideas..." className="pl-10" />
              </div>

              {/* Categories */}
              <div className="space-y-3">
                <h4 className="font-medium">Categories</h4>
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox id={category} />
                    <label htmlFor={category} className="text-sm cursor-pointer">
                      {category}
                    </label>
                  </div>
                ))}
              </div>

              <Separator />

              {/* Price Range */}
              <div className="space-y-3">
                <h4 className="font-medium">Price Range</h4>
                <div className="px-2">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={100000}
                    step={1000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>${priceRange[0].toLocaleString()}</span>
                    <span>${priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Experience Level */}
              <div className="space-y-3">
                <h4 className="font-medium">Experience Level</h4>
                {levels.map((level) => (
                  <div key={level} className="flex items-center space-x-2">
                    <Checkbox id={level} />
                    <label htmlFor={level} className="text-sm cursor-pointer">
                      {level}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">Browse Ideas</h1>
                <p className="text-muted-foreground">
                  {allIdeas.length} ideas found
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Ideas Grid/List */}
            <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 gap-6' : 'space-y-4'}>
              {allIdeas.map((idea) => (
                <Card 
                  key={idea.id} 
                  className={`group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                    viewMode === 'list' ? 'flex flex-row' : ''
                  }`}
                  onClick={() => navigate(`/idea/${idea.id}`)}
                >
                  <CardHeader className={viewMode === 'list' ? 'flex-1' : ''}>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex gap-2">
                        <Badge variant={idea.level === "Expert" ? "default" : idea.level === "Intermediate" ? "secondary" : "outline"}>
                          {idea.category}
                        </Badge>
                        {idea.featured && (
                          <Badge className="gradient-primary text-white border-0">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardTitle className={`group-hover:text-primary transition-colors ${viewMode === 'list' ? 'text-lg' : 'text-xl'}`}>
                      {idea.title}
                    </CardTitle>
                    <div className="text-xs text-muted-foreground">
                      by {idea.seller} • {idea.timePosted}
                    </div>
                  </CardHeader>

                  <CardContent className={viewMode === 'list' ? 'flex-1 flex flex-col justify-between' : ''}>
                    <div>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {idea.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {idea.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {idea.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{idea.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            <span>{idea.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} className={`h-3 w-3 ${i < idea.rating ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-primary">
                          ${idea.price.toLocaleString()}
                          <span className="text-sm font-normal text-muted-foreground ml-1">
                            negotiable
                          </span>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                Load More Ideas
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BrowseIdeas;