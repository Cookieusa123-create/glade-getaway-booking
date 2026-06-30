import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ChatbotSection from "@/components/ChatbotSection";
import About from "@/components/About";
import Features from "@/components/Features";
import WhyMatters from "@/components/WhyMatters";
import UseCases from "@/components/UseCases";
import FinalCTA from "@/components/FinalCTA";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ChatbotSection />
        <About />
        <Features />
        <WhyMatters />
        <UseCases />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
