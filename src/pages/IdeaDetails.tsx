import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Star, 
  Eye, 
  Heart, 
  Share2, 
  MessageCircle, 
  Shield, 
  CheckCircle, 
  Clock,
  DollarSign,
  User,
  Calendar,
  Tag,
  FileText,
  Download
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const IdeaDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  // Mock data - in real app, this would come from API
  const idea = {
    id: 1,
    title: "AI-Powered Customer Service Automation for E-commerce",
    description: "Complete SaaS automation system that integrates with Shopify/WooCommerce to handle 90% of customer inquiries automatically using advanced NLP and machine learning. This comprehensive solution includes chatbot integration, sentiment analysis, automated ticket routing, and real-time analytics dashboard.",
    fullDescription: `This revolutionary customer service automation platform leverages cutting-edge AI technology to transform how e-commerce businesses handle customer support. The system integrates seamlessly with popular platforms like Shopify, WooCommerce, and Magento.

Key Features:
• Advanced Natural Language Processing for understanding customer queries
• Multi-language support (15+ languages)
• Sentiment analysis for priority routing
• Automated ticket categorization and routing
• Real-time analytics and reporting dashboard
• Integration with popular helpdesk systems
• Mobile-responsive admin interface
• API for custom integrations

The system has been tested with over 50 e-commerce stores and shows an average of 87% reduction in support ticket volume and 65% improvement in customer satisfaction scores.

Market Opportunity:
The global customer service automation market is expected to reach $58.8 billion by 2030, growing at a CAGR of 23.6%. This solution targets the $12 billion e-commerce segment specifically.

Technical Implementation:
Built using Python/Django backend with React frontend. Uses TensorFlow for ML models and integrates with major cloud providers (AWS, Google Cloud, Azure).`,
    price: 15000,
    category: "SaaS Automation",
    level: "Beginner",
    views: 234,
    rating: 5,
    tags: ["AI", "Chatbot", "E-commerce", "Automation", "SaaS", "Customer Service"],
    featured: true,
    seller: {
      name: "TechInnovator",
      avatar: "TI",
      rating: 4.9,
      totalSales: 23,
      joinedDate: "2022",
      verified: true,
      bio: "Senior software architect with 10+ years experience in AI and e-commerce solutions. Previously worked at Google and Amazon."
    },
    timePosted: "2 days ago",
    lastUpdated: "1 day ago",
    files: [
      { name: "Technical_Specification.pdf", size: "2.3 MB", type: "pdf" },
      { name: "Market_Research.docx", size: "1.8 MB", type: "doc" },
      { name: "UI_Mockups.zip", size: "15.2 MB", type: "zip" },
      { name: "Demo_Video.mp4", size: "45.6 MB", type: "video" }
    ],
    features: [
      "Complete source code and documentation",
      "Database schema and setup scripts",
      "API documentation and examples",
      "Deployment guides for major cloud platforms",
      "3 months of technical support",
      "Commercial license included"
    ],
    licensing: {
      exclusive: true,
      commercial: true,
      resale: false,
      modifications: true
    }
  };

  const relatedIdeas = [
    {
      id: 2,
      title: "Social Media Analytics Platform",
      price: 22000,
      category: "Software Idea",
      rating: 5
    },
    {
      id: 3,
      title: "E-commerce Inventory Management",
      price: 18000,
      category: "SaaS Automation",
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-2 mb-3">
                  <Badge variant="default">{idea.category}</Badge>
                  {idea.featured && (
                    <Badge className="gradient-primary text-white border-0">
                      Featured
                    </Badge>
                  )}
                  <Badge variant="outline">{idea.level}</Badge>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setIsLiked(!isLiked)}
                  >
                    <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{idea.title}</h1>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span>{idea.views} views</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>Posted {idea.timePosted}</span>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                  <span className="ml-1">({idea.rating})</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {idea.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="files">Files</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {idea.description}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>What's Included</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {idea.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="details" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Full Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-sm max-w-none">
                      <pre className="whitespace-pre-wrap text-sm text-muted-foreground leading-relaxed">
                        {idea.fullDescription}
                      </pre>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Licensing Terms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center justify-between">
                        <span>Exclusive Rights</span>
                        <CheckCircle className={`h-4 w-4 ${idea.licensing.exclusive ? 'text-green-500' : 'text-muted-foreground'}`} />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Commercial Use</span>
                        <CheckCircle className={`h-4 w-4 ${idea.licensing.commercial ? 'text-green-500' : 'text-muted-foreground'}`} />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Resale Rights</span>
                        <CheckCircle className={`h-4 w-4 ${idea.licensing.resale ? 'text-green-500' : 'text-muted-foreground'}`} />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Modifications</span>
                        <CheckCircle className={`h-4 w-4 ${idea.licensing.modifications ? 'text-green-500' : 'text-muted-foreground'}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="files" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Supporting Files
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {idea.files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                              <FileText className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium text-sm">{file.name}</p>
                              <p className="text-xs text-muted-foreground">{file.size}</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      * Full files available after purchase
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Reviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">No reviews yet. Be the first to purchase and review this idea!</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Purchase Card */}
            <Card className="sticky top-24">
              <CardHeader>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    ${idea.price.toLocaleString()}
                  </div>
                  <p className="text-sm text-muted-foreground">One-time payment</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button size="lg" className="w-full">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Purchase Now
                </Button>
                <Button size="lg" variant="outline" className="w-full">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contact Seller
                </Button>
                
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Shield className="h-4 w-4" />
                  <span>Secure payment with buyer protection</span>
                </div>
              </CardContent>
            </Card>

            {/* Seller Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Seller Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src="" alt={idea.seller.name} />
                    <AvatarFallback>{idea.seller.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{idea.seller.name}</h4>
                      {idea.seller.verified && (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="h-3 w-3 fill-primary text-primary" />
                      <span>{idea.seller.rating}</span>
                      <span>•</span>
                      <span>{idea.seller.totalSales} sales</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {idea.seller.bio}
                </p>
                
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>Member since {idea.seller.joinedDate}</span>
                </div>
              </CardContent>
            </Card>

            {/* Related Ideas */}
            <Card>
              <CardHeader>
                <CardTitle>Related Ideas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {relatedIdeas.map((relatedIdea) => (
                  <div 
                    key={relatedIdea.id}
                    className="p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => navigate(`/idea/${relatedIdea.id}`)}
                  >
                    <h4 className="font-medium text-sm mb-1">{relatedIdea.title}</h4>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {relatedIdea.category}
                      </Badge>
                      <span className="text-sm font-semibold text-primary">
                        ${relatedIdea.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IdeaDetails;