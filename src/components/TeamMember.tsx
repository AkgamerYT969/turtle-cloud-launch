import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
}

export const TeamMember = ({ name, role }: TeamMemberProps) => {
  return (
    <Card className="bg-glass/30 backdrop-blur-md border-glass-border hover:border-secondary/50 transition-all duration-300 p-6 group hover:shadow-glow-secondary">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-6 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-all duration-300">
          <User className="w-12 h-12 text-secondary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">{name}</h3>
          <p className="text-muted-foreground mt-1">{role}</p>
        </div>
      </div>
    </Card>
  );
};
