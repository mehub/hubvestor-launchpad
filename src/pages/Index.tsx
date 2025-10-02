import Navigation from "@/components/Navigation";
import NeuralNetworkHero from "@/components/ui/neural-network-hero";
import TrustedBrands from "@/components/TrustedBrands";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NeuralNetworkHero 
        title="Connecting Founders with Investors to Build Tomorrow's Businesses"
        description="Hubvestor helps SMB founders access investors, patenting, insurance, and banking support in one place. Everything you need to launch and grow your business."
        badgeText="Innovation Platform"
        badgeLabel="New"
        ctaButtons={[
          { text: "Join as Founder", href: "#founders", primary: true },
          { text: "Join as Investor", href: "#investors" }
        ]}
        microDetails={["Trusted by 500+ Founders", "$50M+ Funded", "200+ Investors"]}
      />
      <Navigation />
      <TrustedBrands />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
