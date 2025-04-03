
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Zap } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="w-full py-6 px-8 relative z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2"
        >
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Zap className="w-8 h-8 text-primary animate-pulse-glow" />
            <span className="font-display text-xl font-bold bg-accent-gradient text-transparent bg-clip-text">
              AgentFlux
            </span>
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex items-center gap-8"
        >
          <NavLink to="/create" active={location.pathname === "/create"}>
            Create
          </NavLink>
          <NavLink to="/my-agents" active={location.pathname === "/my-agents"}>
            My Agents
          </NavLink>
          <NavLink to="/templates" active={location.pathname === "/templates"}>
            Templates
          </NavLink>
          <Link
            to="/create"
            className="px-6 py-2 rounded-full bg-accent-gradient text-white font-medium relative group overflow-hidden"
          >
            <span className="relative z-10">Get Started</span>
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10"
              initial={false}
              whileHover={{ scale: 1.5 }}
            />
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, active, children }: { to: string; active?: boolean; children: React.ReactNode }) => (
  <Link
    to={to}
    className={`relative text-gray-300 hover:text-white transition-colors font-medium group ${
      active ? "text-white" : ""
    }`}
  >
    {children}
    <motion.div
      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary origin-left"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: active ? 1 : 0 }}
      whileHover={{ scaleX: 1 }}
    />
  </Link>
);
