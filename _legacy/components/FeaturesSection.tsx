import { Zap, Shield, Layers, Globe, Sparkles, Lock } from "lucide-react";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience blazing fast performance with our optimized infrastructure and cutting-edge technology stack.",
    },
    {
      icon: Shield,
      title: "Secure by Default",
      description: "Enterprise-grade security measures protect your data with end-to-end encryption and advanced protocols.",
    },
    {
      icon: Layers,
      title: "Modular Architecture",
      description: "Build and scale with our flexible, component-based system that adapts to your unique needs.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Powered by a worldwide network of servers ensuring low latency and high availability everywhere.",
    },
    {
      icon: Sparkles,
      title: "AI-Powered",
      description: "Leverage machine learning and artificial intelligence to automate and enhance your workflows.",
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Your data belongs to you. We never sell or share your information with third parties.",
    },
  ];

  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 right-1/3 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-glow">
            Powerful Features
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Everything you need to build the future, all in one elegant platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}