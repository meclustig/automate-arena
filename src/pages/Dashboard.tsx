import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  DollarSign, 
  TrendingUp, 
  Eye, 
  MessageCircle, 
  Plus, 
  Star,
  Calendar,
  Users,
  ShoppingCart,
  BarChart3,
  Bell,
  Filter
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Total Earnings",
      value: "$145,230",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-green-500"
    },
    {
      title: "Active Ideas",
      value: "8",
      change: "+2",
      icon: TrendingUp,
      color: "text-blue-500"
    },
    {
      title: "Total Views",
      value: "12,450",
      change: "+8.2%",
      icon: Eye,
      color: "text-purple-500"
    },
    {
      title: "Messages",
      value: "23",
      change: "+5",
      icon: MessageCircle,
      color: "text-orange-500"
    }
  ];

  const recentActivity = [
    {
      type: "sale",
      title: "AI Customer Service Automation sold",
      amount: "$15,000",
      time: "2 hours ago",
      buyer: "TechStartup Inc."
    },
    {
      type: "message",
      title: "New message from buyer",
      time: "4 hours ago",
      idea: "Social Media Analytics Platform"
    },
    {
      type: "view",
      title: "Your idea received 50+ views",
      time: "6 hours ago",
      idea: "E-commerce Inventory System"
    },
    {
      type: "listing",
      title: "New idea listed successfully",
      time: "1 day ago",
      idea: "Blockchain Voting System"
    }
  ];

  const activeIdeas = [
    {
      id: 1,
      title: "AI-Powered Customer Service Automation",
      price: 15000,
      views: 234,
      messages: 12,
      status: "Active",
      progress: 75
    },
    {
      id: 2,
      title: "Social Media Analytics Platform",
      price: 22000,
      views: 445,
      messages: 8,
      status: "Negotiating",
      progress: 90
    },
    {
      id: 3,
      title: "E-commerce Inventory Management",
      price: 18000,
      views: 189,
      messages: 5,
      status: "Active",
      progress: 45
    }
  ];

  const upcomingTasks = [
    {
      task: "Respond to buyer inquiry",
      idea: "AI Customer Service",
      priority: "High",
      dueDate: "Today"
    },
    {
      task: "Update idea documentation",
      idea: "Analytics Platform",
      priority: "Medium",
      dueDate: "Tomorrow"
    },
    {
      task: "Review contract terms",
      idea: "Inventory System",
      priority: "Low",
      dueDate: "This week"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back! Here's what's happening with your ideas.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
            <Button onClick={() => navigate('/sell')}>
              <Plus className="h-4 w-4 mr-2" />
              List New Idea
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className={`text-xs ${stat.color}`}>
                        {stat.change} from last month
                      </p>
                    </div>
                    <div className={`p-3 rounded-full bg-muted ${stat.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Ideas */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Active Ideas
                </CardTitle>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeIdeas.map((idea) => (
                    <div key={idea.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{idea.title}</h4>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              <span>{idea.views} views</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageCircle className="h-4 w-4" />
                              <span>{idea.messages} messages</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary mb-1">
                            ${idea.price.toLocaleString()}
                          </div>
                          <Badge variant={idea.status === 'Negotiating' ? 'default' : 'secondary'}>
                            {idea.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Interest Level</span>
                          <span>{idea.progress}%</span>
                        </div>
                        <Progress value={idea.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 pb-3 border-b last:border-b-0">
                      <div className={`p-2 rounded-full ${
                        activity.type === 'sale' ? 'bg-green-100 text-green-600' :
                        activity.type === 'message' ? 'bg-blue-100 text-blue-600' :
                        activity.type === 'view' ? 'bg-purple-100 text-purple-600' :
                        'bg-orange-100 text-orange-600'
                      }`}>
                        {activity.type === 'sale' && <DollarSign className="h-4 w-4" />}
                        {activity.type === 'message' && <MessageCircle className="h-4 w-4" />}
                        {activity.type === 'view' && <Eye className="h-4 w-4" />}
                        {activity.type === 'listing' && <Plus className="h-4 w-4" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{activity.title}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{activity.time}</span>
                          {activity.buyer && <span>• {activity.buyer}</span>}
                          {activity.idea && <span>• {activity.idea}</span>}
                        </div>
                        {activity.amount && (
                          <p className="text-sm font-semibold text-green-600 mt-1">
                            {activity.amount}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" onClick={() => navigate('/sell')}>
                  <Plus className="h-4 w-4 mr-2" />
                  List New Idea
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Check Messages
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/profile')}>
                  <Users className="h-4 w-4 mr-2" />
                  View Profile
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/browse')}>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Browse Ideas
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Tasks */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingTasks.map((task, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-sm">{task.task}</h4>
                        <Badge 
                          variant={
                            task.priority === 'High' ? 'destructive' :
                            task.priority === 'Medium' ? 'default' : 'secondary'
                          }
                          className="text-xs"
                        >
                          {task.priority}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{task.idea}</p>
                      <p className="text-xs text-muted-foreground">Due: {task.dueDate}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Performance Insights */}
            <Card>
              <CardHeader>
                <CardTitle>This Month</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Profile Views</span>
                  <span className="font-semibold">1,234</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Idea Views</span>
                  <span className="font-semibold">5,678</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Messages</span>
                  <span className="font-semibold">89</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Conversion Rate</span>
                  <span className="font-semibold text-green-600">12.5%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;