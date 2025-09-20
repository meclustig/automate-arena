import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Star, 
  DollarSign, 
  Eye, 
  Edit,
  CheckCircle,
  Award,
  TrendingUp,
  MessageCircle
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const userProfile = {
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    joinedDate: "January 2023",
    avatar: "AJ",
    verified: true,
    bio: "Senior software architect with 10+ years experience in AI and e-commerce solutions. Previously worked at Google and Amazon. Passionate about creating innovative solutions that solve real-world problems.",
    stats: {
      totalSales: 23,
      totalEarnings: 145000,
      averageRating: 4.9,
      totalViews: 12450,
      activeListings: 5
    },
    badges: [
      { name: "Top Seller", icon: Award, color: "text-yellow-500" },
      { name: "Verified", icon: CheckCircle, color: "text-green-500" },
      { name: "Rising Star", icon: TrendingUp, color: "text-blue-500" }
    ]
  };

  const recentIdeas = [
    {
      id: 1,
      title: "AI-Powered Customer Service Automation",
      price: 15000,
      views: 234,
      status: "Active",
      rating: 5
    },
    {
      id: 2,
      title: "Social Media Analytics Platform",
      price: 22000,
      views: 445,
      status: "Sold",
      rating: 5
    },
    {
      id: 3,
      title: "E-commerce Inventory Management",
      price: 18000,
      views: 189,
      status: "Active",
      rating: 4
    }
  ];

  const reviews = [
    {
      id: 1,
      buyer: "TechStartup",
      rating: 5,
      comment: "Excellent idea with detailed documentation. Alex was very helpful throughout the process.",
      date: "2 weeks ago",
      idea: "AI Customer Service"
    },
    {
      id: 2,
      buyer: "InnovativeCorp",
      rating: 5,
      comment: "Outstanding concept and execution. Would definitely work with Alex again.",
      date: "1 month ago",
      idea: "Analytics Platform"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <Card>
              <CardHeader className="text-center">
                <div className="relative inline-block">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src="" alt={userProfile.name} />
                    <AvatarFallback className="text-2xl">{userProfile.avatar}</AvatarFallback>
                  </Avatar>
                  <Button 
                    size="icon" 
                    variant="outline" 
                    className="absolute -bottom-2 -right-2 rounded-full"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h2 className="text-2xl font-bold">{userProfile.name}</h2>
                  {userProfile.verified && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </div>
                <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-4">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span>{userProfile.stats.averageRating}</span>
                  <span>•</span>
                  <span>{userProfile.stats.totalSales} sales</span>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {userProfile.badges.map((badge) => {
                    const Icon = badge.icon;
                    return (
                      <Badge key={badge.name} variant="outline" className="flex items-center gap-1">
                        <Icon className={`h-3 w-3 ${badge.color}`} />
                        {badge.name}
                      </Badge>
                    );
                  })}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  {userProfile.bio}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{userProfile.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{userProfile.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{userProfile.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Joined {userProfile.joinedDate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Earnings</span>
                  <span className="font-semibold text-green-600">
                    ${userProfile.stats.totalEarnings.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Sales</span>
                  <span className="font-semibold">{userProfile.stats.totalSales}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Profile Views</span>
                  <span className="font-semibold">{userProfile.stats.totalViews.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Active Listings</span>
                  <span className="font-semibold">{userProfile.stats.activeListings}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="ideas" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="ideas">My Ideas</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="ideas" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">My Ideas</h3>
                  <Button onClick={() => navigate('/sell')}>
                    <Plus className="h-4 w-4 mr-2" />
                    List New Idea
                  </Button>
                </div>

                <div className="space-y-4">
                  {recentIdeas.map((idea) => (
                    <Card key={idea.id} className="hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold text-lg">{idea.title}</h4>
                              <Badge variant={idea.status === 'Active' ? 'default' : 'secondary'}>
                                {idea.status}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Eye className="h-4 w-4" />
                                <span>{idea.views} views</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-primary text-primary" />
                                <span>{idea.rating}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary mb-2">
                              ${idea.price.toLocaleString()}
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                Edit
                              </Button>
                              <Button variant="outline" size="sm">
                                View
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <h3 className="text-2xl font-bold">Customer Reviews</h3>
                
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold">{review.buyer}</h4>
                              <div className="flex items-center gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`h-4 w-4 ${i < review.rating ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {review.date} • {review.idea}
                            </p>
                          </div>
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Profile Settings</h3>
                  <Button 
                    variant={isEditing ? "default" : "outline"}
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    {isEditing ? "Save Changes" : "Edit Profile"}
                  </Button>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName" 
                          defaultValue="Alex" 
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName" 
                          defaultValue="Johnson" 
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        defaultValue={userProfile.email} 
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input 
                        id="phone" 
                        defaultValue={userProfile.phone} 
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input 
                        id="location" 
                        defaultValue={userProfile.location} 
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea 
                        id="bio" 
                        defaultValue={userProfile.bio} 
                        disabled={!isEditing}
                        rows={4}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Email Notifications</h4>
                        <p className="text-sm text-muted-foreground">Receive updates about your ideas and sales</p>
                      </div>
                      <input type="checkbox" defaultChecked disabled={!isEditing} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Marketing Emails</h4>
                        <p className="text-sm text-muted-foreground">Receive tips and platform updates</p>
                      </div>
                      <input type="checkbox" disabled={!isEditing} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">SMS Notifications</h4>
                        <p className="text-sm text-muted-foreground">Get instant alerts for important updates</p>
                      </div>
                      <input type="checkbox" defaultChecked disabled={!isEditing} />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;