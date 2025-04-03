
import { motion } from "framer-motion";
import { GlowingButton } from "./ui/glowing-button";

export const FinalCTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-accent-gradient opacity-10"></div>
      
      {/* Animated shapes in background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="w-64 h-64 rounded-full bg-primary/20 absolute"
          animate={{ 
            x: [0, 100, 50, 0], 
            y: [0, 50, 100, 0],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{ top: '10%', left: '5%' }}
        />
        <motion.div 
          className="w-96 h-96 rounded-full bg-secondary/10 absolute"
          animate={{ 
            x: [100, 0, 50, 100], 
            y: [50, 100, 0, 50],
            scale: [1.2, 0.8, 1, 1.2],
            rotate: [0, -90, -180, -270, -360]
          }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
          style={{ bottom: '5%', right: '10%' }}
        />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl md:text-6xl mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent"
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
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <GlowingButton to="/create" size="lg" variant="accent">
            Get Started Now
          </GlowingButton>
        </motion.div>
      </div>
    </section>
  );
};
