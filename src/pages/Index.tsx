
import { Navigation } from "../components/Navigation";
import { HeroSection } from "../components/HeroSection";
import { FinalCTA } from "../components/FinalCTA";
import { InteractiveDemoSection } from "../components/home/InteractiveDemoSection";
import { HowItWorks } from "../components/home/HowItWorks";
import { ExampleAgents } from "../components/home/ExampleAgents";
import { VisualBuilderSection } from "../components/home/VisualBuilderSection";
import { DashboardSection } from "../components/home/DashboardSection";
import { TemplatesSection } from "../components/home/TemplatesSection";
import { HomeFooter } from "../components/home/HomeFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      <main>
        <HeroSection />
        <InteractiveDemoSection />
        <HowItWorks />
        <ExampleAgents />
        <VisualBuilderSection />
        <DashboardSection />
        <TemplatesSection />
        <FinalCTA />
      </main>
      
      <HomeFooter />
    </div>
  );
};

export default Index;
