
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { GlowingButton } from "./ui/glowing-button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-50" />
      
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
          <Zap className="w-10 h-10 text-primary" />
        </motion.div>
        
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 bg-accent-gradient bg-clip-text text-transparent">
          Create AI Agents Without Code
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Turn your ideas into working AI in minutes. No technical knowledge required.
        </p>
        
        <GlowingButton to="/create" size="lg">
          Get Started
        </GlowingButton>
      </motion.div>
    </section>
  );
};
