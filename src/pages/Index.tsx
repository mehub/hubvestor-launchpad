import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustedBrands from "@/components/TrustedBrands";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustedBrands />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
