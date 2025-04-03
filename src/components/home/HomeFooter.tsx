
import { Zap } from "lucide-react";

export const HomeFooter = () => {
  return (
    <footer className="py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2">
          <Zap className="w-6 h-6 text-primary" />
          <span className="font-display text-xl font-bold bg-accent-gradient text-transparent bg-clip-text">
            AgentFlux
          </span>
        </div>
      </div>
    </footer>
  );
};
