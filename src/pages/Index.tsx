import { useState } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeaturedIdeas from "@/components/FeaturedIdeas";
import Categories from "@/components/Categories";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { MarketplacePage } from "@/components/marketplace/MarketplacePage";
import { NetworkingPage } from "@/components/networking/NetworkingPage";
import { ListIdeaForm } from "@/components/ideas/ListIdeaForm";

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'marketplace':
        return <MarketplacePage />;
      case 'networking':
        return <NetworkingPage />;
      case 'list-idea':
        return <ListIdeaForm />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <Stats />
            <FeaturedIdeas />
            <div id="how-it-works">
              <Categories />
              <HowItWorks />
            </div>
            <div id="pro-features">
              <Testimonials />
              <CTA />
            </div>
          </>
        );
    }
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-background">
        <Header onNavigate={handleNavigation} />
        <main>
          {renderCurrentPage()}
        </main>
        {currentPage === 'home' && <Footer />}
      </div>
    </AuthProvider>
  );
};

export default Index;
