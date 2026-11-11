import Navbar from "@/components/landing/navbar";
import HeroSection from "@/components/landing/hero-section";
import DashboardPreview from "@/components/landing/dashboard-preview";
import FeaturesSection from "@/components/landing/features-section";
import HowItWorks from "@/components/landing/how-it-works";
import CtaSection from "@/components/landing/cta-section";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <Navbar />

      <HeroSection />

      <DashboardPreview />

      <FeaturesSection />

      <HowItWorks />

      <CtaSection />

      <Footer />
    </main>
  );
}
