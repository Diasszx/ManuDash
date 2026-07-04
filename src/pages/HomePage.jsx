import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { ScrollToTop } from "../components/ui/ScrollToTop";
import { HeroSection } from "../components/sections/HeroSection";
import { FeaturedDashboardsSection } from "../components/sections/FeaturedDashboardsSection";
import { AboutSection } from "../components/sections/AboutSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { ContactSection } from "../components/sections/ContactSection";

export function HomePage() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <HeroSection />
        <FeaturedDashboardsSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
