import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingCardProps {
  price: string;
  ram: string;
  cores: string;
  disk: string;
  features?: string[];
  isVPS?: boolean;
}

export const PricingCard = ({ price, ram, cores, disk, features, isVPS }: PricingCardProps) => {
  const handleOrder = () => {
    window.open("https://discord.gg/C8q783t8CX", "_blank");
  };

  return (
    <Card className="relative overflow-hidden bg-glass/30 backdrop-blur-md border-glass-border hover:border-primary/50 transition-all duration-300 group hover:shadow-glow-primary">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-300" />
      
      <div className="relative p-6 space-y-4">
        <div className="text-center space-y-2">
          <div className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent">
            ${price}
          </div>
          <div className="text-sm text-muted-foreground">per month</div>
        </div>

        <div className="space-y-2 py-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">RAM:</span>
            <span className="font-semibold text-foreground">{ram}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">CPU Cores:</span>
            <span className="font-semibold text-foreground">{cores}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Storage:</span>
            <span className="font-semibold text-foreground">{disk}</span>
          </div>
          {isVPS && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">IPv4:</span>
              <span className="font-semibold text-primary">Included</span>
            </div>
          )}
        </div>

        {features && (
          <div className="space-y-2 pt-4 border-t border-border">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        )}

        <Button 
          onClick={handleOrder}
          variant="hero"
          className="w-full mt-6"
          size="lg"
        >
          Order Now
        </Button>
      </div>
    </Card>
  );
};
