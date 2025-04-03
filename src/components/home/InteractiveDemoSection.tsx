
import { motion } from "framer-motion";
import { ParticlesBackground } from "../ParticlesBackground";
import { InteractiveDemo } from "../InteractiveDemo";

export const InteractiveDemoSection = () => {
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
  );
};
