
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="w-full py-6 px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2"
        >
          <Zap className="w-8 h-8 text-primary" />
          <span className="font-display text-xl font-bold bg-accent-gradient text-transparent bg-clip-text">
            AgentFlux
          </span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex items-center gap-8"
        >
          <NavLink href="#create">Create</NavLink>
          <NavLink href="#agents">My Agents</NavLink>
          <NavLink href="#templates">Templates</NavLink>
          <button className="px-6 py-2 rounded-full bg-accent-gradient text-white font-medium hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </motion.div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white transition-colors font-medium"
  >
    {children}
  </a>
);
