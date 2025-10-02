import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder, TechStart",
      initials: "SC",
      color: "from-blue-500 to-blue-600",
      text: "Hubvestor connected me with the perfect investors who understood my vision. The patenting support was invaluable in protecting my IP.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "CEO, GrowthLabs",
      initials: "MR",
      color: "from-purple-500 to-purple-600",
      text: "The all-in-one platform saved us months of work. From banking to insurance, everything we needed was right there.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Investor",
      initials: "EW",
      color: "from-green-500 to-green-600",
      text: "As an investor, Hubvestor gives me access to vetted, high-quality opportunities. The due diligence support is outstanding.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Founder, InnovateCo",
      initials: "DK",
      color: "from-orange-500 to-orange-600",
      text: "Raised our first $2M through Hubvestor in just 3 months. The platform streamlined what could have been a year-long process.",
      rating: 5
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Success Stories from Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Community
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of founders and investors who have achieved their goals with Hubvestor
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarFallback className={`bg-gradient-to-br ${testimonial.color} text-white font-semibold`}>
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
