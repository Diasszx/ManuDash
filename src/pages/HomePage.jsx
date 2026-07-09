import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { ScrollToTop } from "../components/ui/ScrollToTop";
import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { ContactSection } from "../components/sections/ContactSection";
import { FeaturedProjectsSection } from "../components/sections/FeaturedProjectsSection";

export function HomePage() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <HeroSection />
        <FeaturedProjectsSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
