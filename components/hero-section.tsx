"use client"
import { motion } from "motion/react";
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Users, Clock, Award } from "lucide-react"
import { LampContainer } from "../components/ui/lamp"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Main Hero Content */}
      <div className="flex-1 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/Hero-1.png')`,
            }}
          />
          <div className="absolute inset-0 bg-slate-950/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen ">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              {/* Main Headline */}
               <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" font-bold bg-gradient-to-br from-yellow-100 to-yellow-500 py-4 bg-clip-text text-center text-4xl  tracking-tight text-transparent md:text-6xl"
      >
       
     
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Get The Right Equipment
                <br />
                <span className="text-yellow-300">For Your Project</span>
              </h1>
 </motion.h1>
              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-sans" >
                From excavators and loaders to dumpers and rollers - we provide reliable, well-maintained equipment with
                fast delivery and 24/7 support across Canberra.
              </p>

              {/* CTA Button */}
              <Button
                size="lg"
                className="bg-yellow-300 hover:bg-yellow-500 text-slate-900 font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 transform hover:scale-105"
              >
                Get Your FREE Quote Today
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </div>
          </div>
        </div>
               
      </div>

      {/* Bottom Trust Section */}
      {/* Bottom Trust Section */}

         <div className="relative -mt-10 z-10 rounded-full bg-blue-800 text-white mx-20 py-4 px-20 shadow-lg">
         

        
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="text-sm font-medium">Fast Delivery</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="text-sm font-medium">Quality Equipment</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center">
                    <Users className="w-4 h-4 text-slate-900" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-white flex items-center justify-center">
                    <Clock className="w-4 h-4 text-slate-900" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-yellow-600 border-2 border-white flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-lg font-bold text-yellow-300">500+ Happy Clients</div>
                  <div className="text-sm text-white/80">& Growing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </section>
  )
}
