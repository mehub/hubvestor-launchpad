import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { BrandsGrid } from "@/components/ui/brands";
import { Features } from "@/components/ui/features-4";
import { Testimonials } from "@/components/ui/testimonials";
import { CTASection } from "@/components/ui/cta-with-rectangle";
import { Footer } from "@/components/ui/footer-section";

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

const testimonials = [
  {
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop',
    text: 'Hubvestor connected me with investors who truly understood my vision. Raised $1.5M in just 2 months!',
    name: 'Sarah Chen',
    username: '@sarahchen',
    social: 'https://twitter.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop',
    text: 'The all-in-one platform saved us months of work. Banking, insurance, and investor connections in one place.',
    name: 'Michael Rodriguez',
    username: '@mrodriguez',
    social: 'https://twitter.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1780&auto=format&fit=crop',
    text: 'As an investor, Hubvestor gives me access to vetted, high-quality opportunities. The due diligence support is outstanding.',
    name: 'Emily Watson',
    username: '@emilywatson',
    social: 'https://twitter.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1780&auto=format&fit=crop',
    text: 'The patenting support was invaluable in protecting our IP. Hubvestor truly understands what founders need.',
    name: 'David Kim',
    username: '@davidkim',
    social: 'https://twitter.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1780&auto=format&fit=crop',
    text: 'Found the perfect banking partner through Hubvestor. They streamlined what could have been a nightmare process.',
    name: 'Jessica Martinez',
    username: '@jmartinez',
    social: 'https://twitter.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1780&auto=format&fit=crop',
    text: 'Hubvestor\'s network is incredible. Met my co-founder and lead investor all through this platform.',
    name: 'James Thompson',
    username: '@jthompson',
    social: 'https://twitter.com'
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-black dark">
      <Navigation />
      <Hero />
      <BrandsGrid
        brands={brands}
        title="Trusted by leading financial partners"
      />
      <Features />
      <Testimonials 
        testimonials={testimonials}
        title="Success Stories from Our Community"
        description="Join thousands of founders and investors who have achieved their goals with Hubvestor"
        maxDisplayed={6}
        className="container py-16 md:py-24"
      />
      <CTASection
        badge={{
          text: "Get Started Today"
        }}
        title="Ready to Transform Your Business?"
        description="Join hundreds of founders and investors who are building the future with Hubvestor"
        action={{
          text: "Start Your Journey",
          href: "#signup",
          variant: "cta"
        }}
      />
      <Footer />
    </div>
  );
};

export default Index;
