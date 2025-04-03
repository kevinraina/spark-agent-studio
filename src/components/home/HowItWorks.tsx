
import { motion } from "framer-motion";
import { MessageSquare, Cpu, Play } from "lucide-react";

export const steps = [
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

export const HowItWorks = () => {
  return (
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
  );
};
