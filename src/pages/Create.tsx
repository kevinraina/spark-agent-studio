
import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { AgentBuilderPreview } from "../components/AgentBuilderPreview";

const Create = () => {
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
            Create Your AI Agent
          </h1>
          <p className="text-xl text-gray-400">
            Design and deploy your AI agent in minutes
          </p>
        </motion.div>
        <AgentBuilderPreview />
      </main>
    </div>
  );
};

export default Create;
