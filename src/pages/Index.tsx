import Navigation from "@/components/Navigation";
import NeuralNetworkHero from "@/components/ui/neural-network-hero";
import { BrandsGrid } from "@/components/ui/brands";
import { Features } from "@/components/ui/features-4";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const brands = [
  {
    name: "Chase Bank",
    logo: "https://assets.rapidui.dev/brands/chase.svg",
  },
  {
    name: "Goldman Sachs",
    logo: "https://assets.rapidui.dev/brands/goldman-sachs.svg",
  },
  {
    name: "AIG Insurance",
    logo: "https://assets.rapidui.dev/brands/aig.svg",
  },
  {
    name: "State Farm",
    logo: "https://assets.rapidui.dev/brands/state-farm.svg",
  },
  {
    name: "Morgan Stanley",
    logo: "https://assets.rapidui.dev/brands/morgan-stanley.svg",
  },
  {
    name: "Wells Fargo",
    logo: "https://assets.rapidui.dev/brands/wells-fargo.svg",
  },
];

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
      <BrandsGrid 
        brands={brands}
        title="Trusted by leading financial partners"
      />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
