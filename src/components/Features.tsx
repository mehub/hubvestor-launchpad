import { Card } from "@/components/ui/card";
import { Users, FileText, Shield, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Access to Investors",
      description: "Connect with verified investors actively seeking opportunities in your industry. Build relationships that drive your business forward.",
      color: "from-primary to-primary-glow"
    },
    {
      icon: FileText,
      title: "Patenting & Legal Support",
      description: "Protect your innovations with expert patent filing and legal guidance. Navigate intellectual property with confidence.",
      color: "from-secondary to-purple-400"
    },
    {
      icon: Shield,
      title: "Insurance & Risk Management",
      description: "Comprehensive insurance solutions tailored for startups and growing businesses. Protect what you build from day one.",
      color: "from-accent to-cyan-400"
    },
    {
      icon: TrendingUp,
      title: "Banking & Growth Tools",
      description: "Access business banking, credit lines, and financial tools designed to scale with your company's success.",
      color: "from-green-500 to-emerald-400"
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-background dark:bg-card">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support for every stage of your business journey, all in one integrated platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 hover:border-primary/20 bg-card h-full">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
