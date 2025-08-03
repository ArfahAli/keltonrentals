import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
import { HeroHighlightDemo } from "./Highlight"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          {/* <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Every project starts with the right machine.{" "}
            <span className="relative">
              And every result is built on{" "}
              <span className="bg-yellow-400 px-2 py-1 rounded-md text-slate-900">a solution that works.</span>
            </span>
          </h2> */}
          <HeroHighlightDemo/>

          {/* Supporting Text */}
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed mt-10">
            Don't let equipment delays hold back your project. Get reliable, well-maintained machinery delivered fast
            with 24/7 support when you need it most.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 02 6213 8111
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hover:border-2 border-secondary text-black bg-secondary hover:text-slate-900 font-semibold px-8 py-4 rounded-lg cursor-pointer hover:bg-transparent"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Quote Request
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-18 h-18 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-primary">24/7</div>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Emergency Support</h3>
              <p className="text-slate-600 text-sm">Round-the-clock assistance for breakdowns and urgent needs</p>
            </div>
            <div className="text-center">
              <div className="w-18 h-18 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-yellow-600">1hr</div>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Fast Response</h3>
              <p className="text-slate-600 text-sm">Quick delivery and on-site support across Canberra</p>
            </div>
            <div className="text-center">
              <div className="w-18 h-18  bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-green-600">500+</div>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Happy Clients</h3>
              <p className="text-slate-600 text-sm">Trusted by contractors and builders across the region</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
