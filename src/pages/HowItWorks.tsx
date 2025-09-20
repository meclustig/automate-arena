import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Upload, MessageSquare, DollarSign, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HowItWorks = () => {
  const navigate = useNavigate();

  const steps = [
    {
      icon: UserPlus,
      title: "Create Your Profile",
      description: "Sign up and build your verified seller profile in minutes. Showcase your expertise and build trust with buyers.",
      details: [
        "Complete profile verification",
        "Upload portfolio samples",
        "Set your expertise areas",
        "Connect social profiles"
      ]
    },
    {
      icon: Upload,
      title: "List Your Idea",
      description: "Use our intuitive dashboard to list your intellectual property. Add details, set your price, and go live.",
      details: [
        "Detailed idea description",
        "Set competitive pricing",
        "Add supporting materials",
        "Choose licensing terms"
      ]
    },
    {
      icon: MessageSquare,
      title: "Negotiate & Sell",
      description: "Receive proposals, negotiate terms through our secure messaging, and finalize the deal to get paid.",
      details: [
        "Secure messaging system",
        "Built-in negotiation tools",
        "Contract templates",
        "Escrow protection"
      ]
    },
    {
      icon: DollarSign,
      title: "Get Paid Securely",
      description: "Once the deal is complete, receive payment through our secure platform with buyer protection.",
      details: [
        "Escrow payment system",
        "Multiple payment methods",
        "Instant notifications",
        "Transaction history"
      ]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "All transactions are protected by our escrow system and verified user network."
    },
    {
      icon: CheckCircle,
      title: "Verified Users",
      description: "Every user goes through our verification process to ensure quality and trust."
    },
    {
      icon: DollarSign,
      title: "Fair Pricing",
      description: "Set your own prices and negotiate directly with interested buyers."
    }
  ];

  const faqs = [
    {
      question: "How do I protect my intellectual property?",
      answer: "We use secure NDAs and watermarking for previews. Full details are only shared after purchase agreements."
    },
    {
      question: "What types of ideas can I sell?",
      answer: "Software concepts, business plans, creative scripts, marketing strategies, patents, and more. If it's intellectual property, you can sell it here."
    },
    {
      question: "How long does it take to sell an idea?",
      answer: "It varies by category and pricing. Most ideas receive interest within the first week, with sales typically completing within 30 days."
    },
    {
      question: "What fees do you charge?",
      answer: "We charge a 5% platform fee only when you successfully sell an idea. Listing is completely free."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-purple-500/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            How <span className="gradient-primary bg-clip-text text-transparent">IPMarket</span> Works
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Turn your brilliant ideas into cash with our simple, secure, and transparent process
          </p>
          <Button size="lg" onClick={() => navigate('/auth')}>
            Get Started Today
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Four Simple Steps to Success
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process makes it easy to monetize your intellectual property
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="relative group hover:shadow-medium transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="relative mb-4">
                      <div className="absolute -top-2 -left-2 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose IPMarket?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide the tools and security you need to successfully monetize your ideas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about selling your ideas
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-purple-500/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Selling?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of innovators who have already monetized their ideas on IPMarket
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/auth')}>
              Create Account
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/marketplace')}>
              Browse Ideas
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;