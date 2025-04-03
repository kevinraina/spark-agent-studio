
import { motion } from "framer-motion";
import { MessageSquare, Settings, Zap, ArrowRight, Play, Layers, ArrowUpRight } from "lucide-react";

export const AgentBuilderPreview = () => {
  return (
    <div className="w-full max-w-6xl mx-auto overflow-hidden rounded-2xl border border-white/10">
      <div className="p-2 bg-gradient-to-r from-black/40 to-black/60 backdrop-blur-sm flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-gray-400">Agent Builder - Customer Support Agent</div>
      </div>
      
      <div className="grid grid-cols-6 h-[500px]">
        {/* Sidebar */}
        <div className="col-span-1 bg-black/40 p-4">
          <div className="flex flex-col h-full">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">AgentFlux</span>
              </div>
              
              <div className="space-y-4">
                <button className="w-full flex items-center gap-2 p-2 rounded-lg bg-primary/20 text-white text-sm">
                  <Layers className="w-4 h-4" />
                  <span>Overview</span>
                </button>
                
                <button className="w-full flex items-center gap-2 p-2 rounded-lg bg-transparent hover:bg-white/5 text-gray-400 hover:text-white text-sm transition-colors">
                  <MessageSquare className="w-4 h-4" />
                  <span>Prompts</span>
                </button>
                
                <button className="w-full flex items-center gap-2 p-2 rounded-lg bg-transparent hover:bg-white/5 text-gray-400 hover:text-white text-sm transition-colors">
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </button>
              </div>
            </div>
            
            <div className="mt-auto">
              <button className="w-full p-2 rounded-lg bg-accent-gradient text-white text-sm flex items-center justify-center gap-2">
                <Play className="w-4 h-4" />
                <span>Deploy</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="col-span-5 bg-gradient-to-br from-gradient-from/80 to-gradient-to/80 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-xl">Agent Overview</h3>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 rounded-md bg-white/5 text-sm hover:bg-white/10 transition-colors">
                Preview
              </button>
              <button className="px-3 py-1.5 rounded-md bg-primary text-sm hover:bg-primary/90 transition-colors">
                Save
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-xl bg-black/20 border border-white/5 p-4">
              <h4 className="text-sm text-gray-400 mb-2">Agent Description</h4>
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-sm text-gray-300">
                  A customer support agent that can answer questions about products, handle returns, and process orders.
                </p>
              </div>
              
              <h4 className="text-sm text-gray-400 mt-6 mb-2">Agent Abilities</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 text-sm text-gray-300">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span>Answer product questions</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 text-sm text-gray-300">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span>Handle returns and exchanges</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 text-sm text-gray-300">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span>Process new orders</span>
                </div>
                <button className="w-full flex items-center justify-center gap-1 p-2 rounded-lg bg-white/5 text-sm text-primary hover:bg-white/10 transition-colors">
                  <span>Add Ability</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
            
            <div>
              <div className="rounded-xl bg-black/20 border border-white/5 p-4 mb-6">
                <h4 className="text-sm text-gray-400 mb-2">Personality</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 rounded-lg bg-white/5 text-center">
                    <div className="text-xs text-gray-400">Tone</div>
                    <div className="text-sm text-white">Professional</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/5 text-center">
                    <div className="text-xs text-gray-400">Style</div>
                    <div className="text-sm text-white">Helpful</div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-xl bg-black/20 border border-white/5 p-4">
                <h4 className="text-sm text-gray-400 mb-2">Knowledge Sources</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 text-sm">
                    <span className="text-gray-300">Product Catalog.pdf</span>
                    <button className="text-gray-400 hover:text-white">
                      <Settings className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 text-sm">
                    <span className="text-gray-300">Return Policy.docx</span>
                    <button className="text-gray-400 hover:text-white">
                      <Settings className="w-3 h-3" />
                    </button>
                  </div>
                  <button className="w-full flex items-center justify-center gap-1 p-2 rounded-lg bg-white/5 text-sm text-primary hover:bg-white/10 transition-colors">
                    <span>Add Source</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 rounded-xl bg-black/20 border border-white/5 p-4">
            <h4 className="text-sm text-gray-400 mb-2">Test Your Agent</h4>
            <div className="p-3 bg-black/30 rounded-lg h-[120px] mb-3">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-6 h-6 rounded-full bg-gray-700 flex-shrink-0"></div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">You</p>
                  <p className="text-sm text-gray-300">Do you offer free returns for all products?</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/30 flex-shrink-0 flex items-center justify-center">
                  <Zap className="w-3 h-3 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Customer Support Agent</p>
                  <p className="text-sm text-gray-300">Yes, we offer free returns within 30 days of purchase for all products.</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <input 
                type="text"
                placeholder="Ask your agent something..."
                className="flex-1 bg-white/10 border border-white/10 rounded-md p-2 text-white text-sm focus:outline-none focus:border-primary/50"
              />
              <button className="bg-primary rounded-md p-2 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
