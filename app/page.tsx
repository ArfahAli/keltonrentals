import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import EquipmentSection from "@/components/equipment-section"
import AboutSection from "@/components/about-section"
import TestimonialsSection from "@/components/testimonials-section"
import Footer from "@/components/footer"
import { LampDemo } from "@/components/Lamp"
import { HeroHighlightDemo } from "@/components/Highlight"
import Ad from "@/components/Ad"
import TeamSection from "@/components/team-section"
import CTASection from "@/components/cta-section"
import QuoteSection from "@/components/quote-section"
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100">

      <Header />
      <HeroSection />
      <AboutSection />
      <EquipmentSection />
      <Ad />
      <TestimonialsSection />
      <QuoteSection />
      {/* <TeamSection /> */}
      <CTASection />
      <Footer />
    </div>
  )
}
