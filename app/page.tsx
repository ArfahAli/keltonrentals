import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import EquipmentSection from "@/components/equipment-section"
import AboutSection from "@/components/about-section"
import TestimonialsSection from "@/components/testimonials-section"
import Footer from "@/components/footer"
import { LampDemo } from "@/components/Lamp"
import { HeroHighlightDemo } from "@/components/Highlight"
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100">
      
      <Header />
       {/* <LampDemo /> */}
      <HeroSection />
       <AboutSection />
             <EquipmentSection />

      <TestimonialsSection />

            <HeroHighlightDemo />

      <Footer />
    </div>
  )
}
