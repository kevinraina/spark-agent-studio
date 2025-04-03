
import { FinalCTA } from "../components/FinalCTA";
import { InteractiveDemoSection } from "../components/home/InteractiveDemoSection";
import { HowItWorks } from "../components/home/HowItWorks";
import { ExampleAgents } from "../components/home/ExampleAgents";
import { VisualBuilderSection } from "../components/home/VisualBuilderSection";
import { DashboardSection } from "../components/home/DashboardSection";
import { TemplatesSection } from "../components/home/TemplatesSection";
import { HomeFooter } from "../components/home/HomeFooter";
import { HeroSection } from "../components/HeroSection";
import { NavigationWithAuth } from "../components/NavigationWithAuth";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <NavigationWithAuth />
      
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
