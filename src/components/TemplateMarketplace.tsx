
import { motion } from "framer-motion";
import { 
  Zap, MessageSquare, BarChart, FileText, ShoppingCart, 
  Database, Search, Filter, Copy, Star, ChevronDown
} from "lucide-react";

export const TemplateMarketplace = () => {
  return (
    <div className="w-full max-w-6xl mx-auto overflow-hidden rounded-2xl border border-white/10">
      <div className="p-2 bg-gradient-to-r from-black/40 to-black/60 backdrop-blur-sm flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-gray-400">Template Marketplace</div>
      </div>
      
      <div className="bg-gradient-to-br from-gradient-from/80 to-gradient-to/80 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-xl">Agent Templates</h3>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text"
                placeholder="Search templates..."
                className="bg-white/5 border border-white/10 rounded-md pl-9 pr-3 py-1.5 text-white text-sm focus:outline-none focus:border-primary/50 w-[200px]"
              />
            </div>
            
            <button className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-white/5 text-sm">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            
            <button className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-white/5 text-sm">
              <span>Sort: Popular</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="col-span-3">
            <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar">
              <button className="px-3 py-1.5 rounded-full bg-primary/20 text-primary text-sm whitespace-nowrap">
                All Templates
              </button>
              <button className="px-3 py-1.5 rounded-full bg-white/5 text-gray-300 text-sm hover:bg-white/10 transition-colors whitespace-nowrap">
                Customer Support
              </button>
              <button className="px-3 py-1.5 rounded-full bg-white/5 text-gray-300 text-sm hover:bg-white/10 transition-colors whitespace-nowrap">
                Research
              </button>
              <button className="px-3 py-1.5 rounded-full bg-white/5 text-gray-300 text-sm hover:bg-white/10 transition-colors whitespace-nowrap">
                Data Analysis
              </button>
              <button className="px-3 py-1.5 rounded-full bg-white/5 text-gray-300 text-sm hover:bg-white/10 transition-colors whitespace-nowrap">
                Content Creation
              </button>
              <button className="px-3 py-1.5 rounded-full bg-white/5 text-gray-300 text-sm hover:bg-white/10 transition-colors whitespace-nowrap">
                E-commerce
              </button>
              <button className="px-3 py-1.5 rounded-full bg-white/5 text-gray-300 text-sm hover:bg-white/10 transition-colors whitespace-nowrap">
                Education
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          {/* Featured Template */}
          <div className="col-span-3 rounded-xl overflow-hidden bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-white/10 group hover:border-primary/30 transition-colors">
            <div className="relative p-5">
              <div className="absolute top-0 right-0 bg-accent-gradient text-white text-xs px-3 py-1 rounded-bl-lg">
                Featured
              </div>
              
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                  <MessageSquare className="w-7 h-7 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-display text-xl">Advanced Customer Support</h4>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-accent fill-accent" />
                      <Star className="w-4 h-4 text-accent fill-accent" />
                      <Star className="w-4 h-4 text-accent fill-accent" />
                      <Star className="w-4 h-4 text-accent fill-accent" />
                      <Star className="w-4 h-4 text-accent fill-accent" />
                      <span className="text-sm text-gray-300 ml-1">(428)</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-300 mb-4">A comprehensive customer support agent that handles inquiries, processes returns, troubleshoots issues, and can be connected to your product database.</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        <div className="w-7 h-7 rounded-full bg-white/20"></div>
                        <div className="w-7 h-7 rounded-full bg-white/20"></div>
                        <div className="w-7 h-7 rounded-full bg-white/20"></div>
                      </div>
                      <span className="text-xs text-gray-400">2,345 using this template</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 rounded-md bg-white/10 text-white text-sm hover:bg-white/20 transition-colors">
                        Preview
                      </button>
                      <button className="px-3 py-1.5 rounded-md bg-primary text-white text-sm hover:bg-primary/90 transition-colors flex items-center gap-1">
                        <Copy className="w-3.5 h-3.5" />
                        <span>Use Template</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Template 1 */}
          <TemplateCard 
            icon={<BarChart className="w-6 h-6 text-secondary" />}
            name="Data Analyzer"
            description="Processes CSV files and generates insights and visualizations."
            users={842}
            rating={4.7}
            reviews={124}
          />
          
          {/* Template 2 */}
          <TemplateCard 
            icon={<FileText className="w-6 h-6 text-primary" />}
            name="Content Creator"
            description="Generates blog posts, social media content, and marketing copy."
            users={1256}
            rating={4.5}
            reviews={213}
          />
          
          {/* Template 3 */}
          <TemplateCard 
            icon={<ShoppingCart className="w-6 h-6 text-accent" />}
            name="E-commerce Assistant"
            description="Helps customers find products and complete purchases."
            users={934}
            rating={4.8}
            reviews={176}
          />
          
          {/* Template 4 */}
          <TemplateCard 
            icon={<Database className="w-6 h-6 text-secondary" />}
            name="Research Assistant"
            description="Analyzes academic papers and research data."
            users={567}
            rating={4.6}
            reviews={98}
          />
          
          {/* Template 5 */}
          <TemplateCard 
            icon={<MessageSquare className="w-6 h-6 text-primary" />}
            name="HR Assistant"
            description="Answers employee questions and helps with HR processes."
            users={412}
            rating={4.4}
            reviews={87}
          />
          
          {/* Template 6 */}
          <TemplateCard 
            icon={<Zap className="w-6 h-6 text-accent" />}
            name="Personal Assistant"
            description="Manages schedules, sends reminders, and handles tasks."
            users={1879}
            rating={4.9}
            reviews={342}
          />
        </div>
      </div>
    </div>
  );
};

interface TemplateCardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
  users: number;
  rating: number;
  reviews: number;
}

const TemplateCard = ({ icon, name, description, users, rating, reviews }: TemplateCardProps) => {
  return (
    <div className="rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 group hover:border-primary/30 transition-colors">
      <div className="p-4">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
          
          <div>
            <h4 className="font-display text-lg mb-1">{name}</h4>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-accent fill-accent" />
            <span className="text-sm text-white">{rating}</span>
            <span className="text-xs text-gray-400">({reviews})</span>
          </div>
          
          <span className="text-xs text-gray-400">{users} users</span>
        </div>
        
        <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
          <button className="px-2 py-1 rounded text-xs bg-white/10 text-white hover:bg-white/20 transition-colors">
            Preview
          </button>
          <button className="px-2 py-1 rounded text-xs bg-primary text-white hover:bg-primary/90 transition-colors flex items-center gap-1">
            <Copy className="w-3 h-3" />
            <span>Use</span>
          </button>
        </div>
      </div>
    </div>
  );
};
