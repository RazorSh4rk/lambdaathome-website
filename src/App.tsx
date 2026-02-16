import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ApplicationSection } from "@/components/ApplicationSection";
import { DashboardSection } from "@/components/DashboardSection";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ApplicationSection />
      <DashboardSection />
      <Footer />
    </div>
  );
}
