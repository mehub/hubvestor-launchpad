import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-secondary to-accent p-12 md:p-16 lg:p-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>Join the Hubvestor Community</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Grow with Hubvestor?
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you're a founder seeking investment or an investor looking for the next big opportunity, start your journey today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 border-0 group"
              >
                Get Started Today
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
              >
                Schedule a Demo
              </Button>
            </div>

            <p className="text-sm text-white/80 mt-6">
              No credit card required • Free for 30 days • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
