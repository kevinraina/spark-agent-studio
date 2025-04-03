
import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { DashboardPreview } from "../components/DashboardPreview";

const MyAgents = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            My AI Agents
          </h1>
          <p className="text-xl text-gray-400">
            Manage and monitor your AI agents
          </p>
        </motion.div>
        <DashboardPreview />
      </main>
    </div>
  );
};

export default MyAgents;
