
import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { ParticlesBackground } from "../components/ParticlesBackground";
import { InteractiveDemo } from "../components/InteractiveDemo";
import { AgentBuilderPreview } from "../components/AgentBuilderPreview";
import { DashboardPreview } from "../components/DashboardPreview";
import { TemplateMarketplace } from "../components/TemplateMarketplace";
import { Zap, MessageSquare, Cpu, Play } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-hero-gradient opacity-50" />
          <ParticlesBackground />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6"
            >
              <Zap className="w-10 h-10 text-primary animate-pulse-glow" />
            </motion.div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 bg-accent-gradient bg-clip-text text-transparent">
              Create AI Agents Without Code
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Turn your ideas into working AI in minutes. No technical knowledge required.
            </p>
            <motion.button 
              className="px-8 py-4 rounded-full bg-accent-gradient text-white font-medium text-lg hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-gradient opacity-30" />
          <ParticlesBackground />
          
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-4xl md:text-5xl text-center mb-16"
            >
              Create an Agent in Minutes
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <InteractiveDemo />
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gradient-from/50 to-gradient-to/50" />
          
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-4xl md:text-5xl text-center mb-16"
            >
              How It Works
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary/30 transition-colors group"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-accent-gradient flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-xl mb-4 mt-4">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-gradient opacity-30" />
          <ParticlesBackground />
          
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-4xl md:text-5xl text-center mb-16"
            >
              Example Agents
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {examples.map((example, index) => (
                <motion.div
                  key={example.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors cursor-pointer group"
                >
                  <example.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-display text-lg mb-2">{example.title}</h3>
                  <p className="text-gray-400 text-sm">{example.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Agent Builder Interface Preview */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gradient-from/50 to-gradient-to/50" />
          
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-4xl md:text-5xl text-center mb-6"
            >
              Simple Visual Builder
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center text-gray-400 max-w-2xl mx-auto mb-16"
            >
              Create powerful AI agents with our intuitive, code-free interface
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <AgentBuilderPreview />
            </motion.div>
          </div>
        </section>
        
        {/* Dashboard Preview */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-gradient opacity-30" />
          <ParticlesBackground />
          
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-4xl md:text-5xl text-center mb-6"
            >
              Manage Your Agents
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center text-gray-400 max-w-2xl mx-auto mb-16"
            >
              Monitor performance and manage all your agents in one place
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <DashboardPreview />
            </motion.div>
          </div>
        </section>
        
        {/* Template Marketplace Preview */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gradient-from/50 to-gradient-to/50" />
          
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-4xl md:text-5xl text-center mb-6"
            >
              Ready-Made Templates
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center text-gray-400 max-w-2xl mx-auto mb-16"
            >
              Start with pre-built agent templates and customize to your needs
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <TemplateMarketplace />
            </motion.div>
          </div>
        </section>
        
        {/* Final CTA Section */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-accent-gradient opacity-10" />
          <ParticlesBackground />
          
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-4xl md:text-6xl mb-6"
            >
              Ready to Build Your AI Agent?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              Start creating your first AI agent in minutes. No coding required.
            </motion.p>
            
            <motion.button 
              className="px-8 py-4 rounded-full bg-accent-gradient text-white font-medium text-lg hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Now
            </motion.button>
          </div>
        </section>
      </main>
      
      <footer className="py-12 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Zap className="w-6 h-6 text-primary" />
            <span className="font-display text-xl font-bold bg-accent-gradient text-transparent bg-clip-text">
              AgentFlux
            </span>
          </div>
          
          <p className="text-gray-400 text-sm">
            © 2025 AgentFlux. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

const steps = [
  {
    icon: MessageSquare,
    title: "Describe Your Agent",
    description: "Tell us what you want your AI agent to do in simple terms.",
  },
  {
    icon: Cpu,
    title: "Customize",
    description: "Fine-tune your agent's capabilities with our visual tools.",
  },
  {
    icon: Play,
    title: "Deploy Instantly",
    description: "Launch your agent with one click and start using it right away.",
  },
];

const examples = [
  {
    icon: MessageSquare,
    title: "Customer Support",
    description: "24/7 customer service agent that handles inquiries instantly",
  },
  {
    icon: Cpu,
    title: "Research Assistant",
    description: "Analyzes documents and provides detailed insights",
  },
  {
    icon: MessageSquare,
    title: "Data Analyzer",
    description: "Processes and explains complex data in simple terms",
  },
  {
    icon: Cpu,
    title: "Content Creator",
    description: "Generates engaging content across multiple formats",
  },
];

export default Index;
