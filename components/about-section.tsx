import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Truck, Headphones, Zap, Wrench } from "lucide-react"
import Image from "next/image"
import { Noto_Serif } from 'next/font/google'
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";

import { GlowingEffect } from "@/components/ui/glowing-effect";

const features = [
  {
    icon: Truck,
    title: "Fast In-House Delivery",
    description: "Quick and reliable delivery service",
  },
  {
    icon: Wrench,
    title: "Low Hour Latest Model Equipment",
    description: "Modern, well-maintained machinery",
  },
  {
    icon: Headphones,
    title: "Reliable 24 Hour Support",
    description: "Round-the-clock assistance",
  },
  {
    icon: Zap,
    title: "Quick Turnaround",
    description: "Fast response and service",
  },
  {
    icon: Clock,
    title: "1 Hour Onsite For Breakdowns",
    description: "Rapid breakdown response",
  },
]

export default function AboutSection() {
  return (
    <section className="py-20 bg-white alias relative overflow-hidden">
    

      <div className="container  mx-auto relative z-10">
        {/* Main Content */}
      <div className="flex items-center justify-center  mb-20">
        <div className="max-w-2xl px-6">
          <h2 className="text-2xl md:text-5xl font-bold text-blue-700 mb-6">The Excavator People</h2>
          <div className="w-130 h-1 bg-yellow-400 mb-8" />

          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              At Kelton Rentals, we're proud to be a{" "}
              <span className="font-semibold text-blue-700">family-owned and operated business</span>, and that
              personal touch is at the heart of everything we do.
            </p>

            <p>
              As specialists in 
               <Highlight>
               <span className="font-semibold text-black">earthmoving equipment hire</span> </Highlight>, we make
              it simple and stress-free to get the gear you need, when you need it. Our diverse, well-maintained fleet
              is backed by a wide range of attachments, so whatever the job, we've got you covered.
            </p>

            <p>
              Customer satisfaction isn't just a goal, it's our{" "}
             top priority. From competitive pricing to
              personalised service, we work closely with you to make sure you get the right solution, every time.
            </p>

            <p className="text-xl font-semibold text-slate-900">
              At Kelton Rentals, it's not just about machines, it's about{" "}
              <span className="text-black">relationships, reliability and results.</span>
              
                
            </p>
          </div>

          <Button
            size="lg"
            className="mt-8 bg-yellow-300 hover:bg-yellow-500 text-xl text-slate-900 font-bold px-16 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View Full Range
          </Button>
        </div>

        <div className="lg:block hidden">
          <Image
            src="/images/Construction.png"
            alt="About Kelton Rentals"
            width={800}
            height={600}    
            className="w-full h-auto  object-cover"

          /> 

          </div>
          </div>

        {/* Features Grid */}
         
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-white group-hover:text-slate-900 transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm leading-tight">{feature.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}

          
        </div>
      
      </div>
      
   
   
    </section>
  )
}

