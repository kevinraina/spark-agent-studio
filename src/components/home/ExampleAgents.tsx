
import { motion } from "framer-motion";
import { MessageSquare, Cpu } from "lucide-react";
import { ParticlesBackground } from "../ParticlesBackground";

export const examples = [
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

export const ExampleAgents = () => {
  return (
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
  );
};
