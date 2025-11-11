import { Button } from "@/components/ui/button";
import { PricingCard } from "@/components/PricingCard";
import { FeatureCard } from "@/components/FeatureCard";
import { TeamMember } from "@/components/TeamMember";
import { Zap, Shield, DollarSign, Headphones, HardDrive, Cpu } from "lucide-react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const handleDiscord = () => {
    window.open("https://discord.gg/C8q783t8CX", "_blank");
  };

  const minecraftPlans = [
    { price: "0.80", ram: "2GB", cores: "1 Core", disk: "10GB NVMe" },
    { price: "1.50", ram: "4GB", cores: "2 Cores", disk: "20GB NVMe" },
    { price: "2", ram: "6GB", cores: "3 Cores", disk: "30GB NVMe" },
    { price: "2.50", ram: "8GB", cores: "4 Cores", disk: "40GB NVMe" },
    { price: "3", ram: "12GB", cores: "5 Cores", disk: "60GB NVMe" },
    { price: "3.50", ram: "16GB", cores: "6 Cores", disk: "100GB NVMe" },
    { price: "5", ram: "24GB", cores: "7 Cores", disk: "150GB NVMe" },
  ];

  const minecraftFeatures = [
    "Ryzen 9 CPU",
    "NVMe Disk",
    "24/7 Uptime",
    "1-Month Duration",
    "DDoS Protection",
    "bKash | PayPal | Crypto"
  ];

  const vpsPlans = [
    { price: "2", ram: "8GB", cores: "2 Cores", disk: "40GB NVMe" },
    { price: "3", ram: "16GB", cores: "4 Cores", disk: "80GB NVMe" },
    { price: "5", ram: "24GB", cores: "6 Cores", disk: "120GB NVMe" },
    { price: "7", ram: "32GB", cores: "8 Cores", disk: "150GB NVMe" },
    { price: "9", ram: "64GB", cores: "12 Cores", disk: "250GB NVMe" },
    { price: "11", ram: "94GB", cores: "16 Cores", disk: "350GB NVMe" },
    { price: "15", ram: "120GB", cores: "20 Cores", disk: "500GB NVMe" },
  ];

  const vpsFeatures = [
    "Full Root Access",
    "AMD/Ryzen Platform",
    "High-Speed Network",
    "Best Budget Hosting"
  ];

  const features = [
    {
      icon: HardDrive,
      title: "Fast NVMe Storage",
      description: "Lightning-fast NVMe SSDs for optimal performance"
    },
    {
      icon: Cpu,
      title: "Ryzen Performance",
      description: "Powered by high-performance AMD Ryzen processors"
    },
    {
      icon: DollarSign,
      title: "Cheapest Market Rates",
      description: "Best value hosting without compromising quality"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock expert support via Discord"
    },
    {
      icon: Shield,
      title: "DDoS Protection",
      description: "Advanced protection to keep your servers secure"
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Get your server up and running in minutes"
    }
  ];

  const team = [
    { name: "Alex Chen", role: "Owner & Founder" },
    { name: "Sarah Kumar", role: "Support Manager" },
    { name: "Mike Torres", role: "System Admin" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        
        <div className="relative z-10 container mx-auto px-4 text-center space-y-8 animate-fade-in-up">
          <img 
            src={logo} 
            alt="TurtleCloud Logo" 
            className="w-32 h-32 mx-auto animate-float"
          />
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">TurtleCloud</span>{" "}
            <span className="text-foreground">Hosting</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Powerful & Affordable Game Hosting + Cloud VPS
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              onClick={handleDiscord}
              variant="hero"
              size="lg"
              className="min-w-[200px]"
            >
              Order Now
            </Button>
            <Button 
              onClick={handleDiscord}
              variant="gaming"
              size="lg"
              className="min-w-[200px]"
            >
              Join Discord
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Minecraft Hosting Plans */}
      <section className="py-20 px-4 bg-gradient-dark">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-foreground">Minecraft Server</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Plans</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              💸 Super Cheap Minecraft Plans 💸
            </p>
            <p className="text-lg font-semibold text-primary">
              Fast — Cheap — Performance Hosting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {minecraftPlans.map((plan, index) => (
              <PricingCard
                key={index}
                price={plan.price}
                ram={plan.ram}
                cores={plan.cores}
                disk={plan.disk}
                features={minecraftFeatures}
              />
            ))}
          </div>
        </div>
      </section>

      {/* VPS Hosting Plans */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-foreground">Cloud VPS</span>{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">Plans</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              IPv4 Included with Every Plan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {vpsPlans.map((plan, index) => (
              <PricingCard
                key={index}
                price={plan.price}
                ram={plan.ram}
                cores={plan.cores}
                disk={plan.disk}
                features={vpsFeatures}
                isVPS
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gradient-dark">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-foreground">Why Choose</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">TurtleCloud?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-foreground">Meet Our</span>{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col items-center space-y-6">
            <img src={logo} alt="TurtleCloud Logo" className="w-16 h-16" />
            
            <Button 
              onClick={handleDiscord}
              variant="glass"
              size="lg"
            >
              Join Our Discord
            </Button>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>💳 bKash</span>
              <span>•</span>
              <span>💰 PayPal</span>
              <span>•</span>
              <span>₿ Crypto</span>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              © 2025 TurtleCloud Hosting — All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
