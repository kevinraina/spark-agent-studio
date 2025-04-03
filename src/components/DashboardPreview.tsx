
import { motion } from "framer-motion";
import { 
  MessageSquare, Settings, Zap, ArrowRight, Play, 
  Layers, BarChart, Edit, Copy, Share, Plus, Search, ChevronDown
} from "lucide-react";

export const DashboardPreview = () => {
  return (
    <div className="w-full max-w-6xl mx-auto overflow-hidden rounded-2xl border border-white/10">
      <div className="p-2 bg-gradient-to-r from-black/40 to-black/60 backdrop-blur-sm flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-gray-400">My Agents Dashboard</div>
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
                  <span>My Agents</span>
                </button>
                
                <button className="w-full flex items-center gap-2 p-2 rounded-lg bg-transparent hover:bg-white/5 text-gray-400 hover:text-white text-sm transition-colors">
                  <MessageSquare className="w-4 h-4" />
                  <span>Templates</span>
                </button>
                
                <button className="w-full flex items-center gap-2 p-2 rounded-lg bg-transparent hover:bg-white/5 text-gray-400 hover:text-white text-sm transition-colors">
                  <BarChart className="w-4 h-4" />
                  <span>Analytics</span>
                </button>
                
                <button className="w-full flex items-center gap-2 p-2 rounded-lg bg-transparent hover:bg-white/5 text-gray-400 hover:text-white text-sm transition-colors">
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </button>
              </div>
            </div>
            
            <div className="mt-auto">
              <button className="w-full p-2 rounded-lg bg-accent-gradient text-white text-sm flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" />
                <span>New Agent</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="col-span-5 bg-gradient-to-br from-gradient-from/80 to-gradient-to/80 p-6 overflow-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-xl">My Agents</h3>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text"
                  placeholder="Search agents..."
                  className="bg-white/5 border border-white/10 rounded-md pl-9 pr-3 py-1.5 text-white text-sm focus:outline-none focus:border-primary/50 w-[200px]"
                />
              </div>
              
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-white/5 text-sm">
                <span>Sort: Recent</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <button className="px-3 py-1.5 rounded-md bg-primary text-sm flex items-center gap-1">
                <Plus className="w-4 h-4" />
                <span>New Agent</span>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {/* Agent Card 1 */}
            <AgentCard 
              name="Customer Support"
              description="Handles product inquiries and support tickets"
              status="active"
              interactions={1287}
              lastActive="2 minutes ago"
            />
            
            {/* Agent Card 2 */}
            <AgentCard 
              name="Research Assistant"
              description="Analyzes academic papers and research data"
              status="active"
              interactions={438}
              lastActive="1 hour ago"
            />
            
            {/* Agent Card 3 */}
            <AgentCard 
              name="Content Creator"
              description="Generates blog posts and social media content"
              status="inactive"
              interactions={623}
              lastActive="2 days ago"
            />
            
            {/* Agent Card 4 */}
            <AgentCard 
              name="Data Analyzer"
              description="Processes CSV files and generates reports"
              status="active"
              interactions={142}
              lastActive="30 minutes ago"
            />
          </div>
          
          <div className="mt-8">
            <h4 className="text-gray-400 text-sm mb-4">Recent Activity</h4>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-white/5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white">Customer Support responded to 15 new inquiries</p>
                  <p className="text-xs text-gray-400">2 minutes ago</p>
                </div>
              </div>
              
              <div className="p-3 rounded-lg bg-white/5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Layers className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-white">Research Assistant processed a new document</p>
                  <p className="text-xs text-gray-400">1 hour ago</p>
                </div>
              </div>
              
              <div className="p-3 rounded-lg bg-white/5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-white">Data Analyzer completed report generation</p>
                  <p className="text-xs text-gray-400">30 minutes ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface AgentCardProps {
  name: string;
  description: string;
  status: "active" | "inactive";
  interactions: number;
  lastActive: string;
}

const AgentCard = ({ name, description, status, interactions, lastActive }: AgentCardProps) => {
  return (
    <div className="rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden group hover:border-primary/30 transition-colors">
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-display text-lg">{name}</h4>
              <div className={`px-2 py-0.5 rounded-full text-xs ${
                status === "active" ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"
              }`}>
                {status}
              </div>
            </div>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-xl font-display text-white">{interactions.toLocaleString()}</div>
            <div className="text-xs text-gray-400">interactions</div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-400">Last active: {lastActive}</div>
          <div className="flex items-center gap-1">
            <button className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 transition-colors">
              <Play className="w-3.5 h-3.5 text-white" />
            </button>
            <button className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 transition-colors">
              <Edit className="w-3.5 h-3.5 text-white" />
            </button>
            <button className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 transition-colors">
              <Copy className="w-3.5 h-3.5 text-white" />
            </button>
            <button className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 transition-colors">
              <Share className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="h-1.5 w-full bg-black/20">
        <div 
          className={`h-full ${status === "active" ? "bg-accent-gradient" : "bg-gray-500/50"}`}
          style={{ width: `${status === "active" ? "85" : "0"}%` }}
        ></div>
      </div>
    </div>
  );
};
