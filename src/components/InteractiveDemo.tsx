
import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, ArrowRight, ChevronRight } from "lucide-react";

export const InteractiveDemo = () => {
  const [demoStep, setDemoStep] = useState(0);
  const [inputValue, setInputValue] = useState("Create a customer service agent that can answer questions about products");
  
  const handleStart = () => {
    if (demoStep < 3) {
      setDemoStep(demoStep + 1);
    } else {
      setDemoStep(0);
    }
  };
  
  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 p-1">
      <div className="absolute top-0 left-0 w-full h-1 bg-accent-gradient" />
      
      <div className="p-6 md:p-8">
        <h3 className="font-display text-2xl md:text-3xl mb-6 flex items-center gap-2">
          <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
            <Zap className="w-4 h-4 text-primary" />
          </span>
          Interactive Demo
        </h3>
        
        <div className="mb-8">
          <div className="flex flex-col gap-4">
            <label className="text-sm text-gray-400">Describe your agent:</label>
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary/50"
              />
              <button 
                onClick={handleStart} 
                className="absolute right-2 top-2 bg-accent-gradient rounded-md p-2"
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="h-[300px] relative rounded-xl overflow-hidden bg-black/20">
          {demoStep === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center h-full"
            >
              <div className="text-center">
                <p className="text-gray-400 mb-4">Click the arrow to start building your agent</p>
                <ChevronRight className="w-8 h-8 text-primary mx-auto animate-pulse" />
              </div>
            </motion.div>
          )}
          
          {demoStep === 1 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full flex flex-col items-center justify-center p-6"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-primary animate-pulse" />
              </div>
              <p className="text-center text-gray-300">Analyzing your description...</p>
              <div className="mt-6 w-full max-w-md bg-white/5 rounded-lg p-4">
                <div className="h-2 bg-primary/30 rounded-full animate-pulse mb-2"></div>
                <div className="h-2 bg-primary/20 rounded-full animate-pulse w-3/4"></div>
              </div>
            </motion.div>
          )}
          
          {demoStep === 2 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full flex flex-col p-6"
            >
              <h4 className="font-display text-lg mb-4">Building your agent...</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-green-400"></div>
                  <p className="text-sm text-gray-300">Understanding product knowledge</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-green-400"></div>
                  <p className="text-sm text-gray-300">Creating FAQ responses</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-primary animate-pulse"></div>
                  <p className="text-sm text-gray-300">Optimizing conversation flow</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-white/30"></div>
                  <p className="text-sm text-gray-400">Setting up deployment</p>
                </div>
              </div>
              <div className="mt-6 w-full bg-white/5 rounded-lg p-3">
                <div className="h-2 bg-green-400/40 rounded-full w-[60%]"></div>
              </div>
            </motion.div>
          )}
          
          {demoStep === 3 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full flex flex-col p-6"
            >
              <div className="bg-white/5 rounded-lg p-4 mb-6 border border-green-400/30">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <p className="text-sm font-medium text-green-400">Agent Ready!</p>
                </div>
                <h4 className="font-display text-lg">Customer Service Agent</h4>
                <p className="text-sm text-gray-400 mt-1">Answers product questions, handles inquiries, processes returns</p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4 mt-auto border border-white/10">
                <p className="text-sm text-gray-300">Test your agent with a question:</p>
                <div className="mt-2 flex gap-2">
                  <input 
                    type="text"
                    placeholder="Ask about products..."
                    className="flex-1 bg-white/10 border border-white/10 rounded-md p-2 text-white text-sm focus:outline-none focus:border-primary/50"
                  />
                  <button className="bg-primary rounded-md p-2 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
