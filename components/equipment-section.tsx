"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Wrench } from "lucide-react"
import ColourfulText from "@/components/ui/colourful-text";
import { motion } from "motion/react";

const equipmentCategories = [
  {
    id: "excavators",
    name: "Excavators",
    description: "Versatile digging and earthmoving equipment",
    image: "./../images/product-2.png",
    count: "12+ Models",
  },
  {
    id: "rollers",
    name: "Rollers",
    description: "Compaction equipment for roads and surfaces",
    image: "./../images/Product-1.png",
    count: "8+ Models",
  },
  {
    id: "site-dumpers",
    name: "Site Dumpers",
    description: "Efficient material transport solutions",
    image: "./../images/product-2.png",
    count: "15+ Models",
  },
  {
    id: "mini-loaders",
    name: "Mini Loaders",
    description: "Compact loading and material handling",
    image: "./../images/Product-1.png",
    count: "10+ Models",
  },
  {
    id: "skid-steer",
    name: "Skid Steer Track Loaders",
    description: "All-terrain tracked loading equipment",
    image: "./../images/product-2.png",
    count: "6+ Models",
  },
  {
    id: "tippers",
    name: "Tippers",
    description: "Heavy-duty tipping trucks and trailers",
    image: "./../images/Product-1.png",
    count: "9+ Models",
  },
  {
    id: "water-carts",
    name: "Water Carts",
    description: "Dust suppression and water delivery",
    image: "./../images/product-2.png",
    count: "5+ Models",
  },
  {
    id: "compaction",
    name: "Compaction",
    description: "Plate compactors and rammers",
    image: "./../images/Product-1.png",
    count: "12+ Models",
  },
  {
    id: "trailers",
    name: "Trailers",
    description: "Equipment transport and hauling",
    image: "./../images/product-2.png",
    count: "7+ Models",
  },
  {
    id: "dozers",
    name: "Dozers",
    description: "Bulldozers for earthmoving and grading",
    image: "./../images/Product-1.png",
    count: "4+ Models",
  },
]

export default function EquipmentSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section id="equipments" className="py-20 bg-gradient-to-b from-stone-100 to-stone-50 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 mb-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-semibold mb-4">
            <Wrench className="w-4 h-4 mr-2" />
            Equipment Rental
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="block">Looking for reliable gear to</span>
            <span className="block text-blue-700  text-3xl md:text-4xl mt-2">get the job done?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            At Kelton Rentals, we've got you covered with a wide range of top-quality equipment and attachments
            available for both short and long-term hire.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6">
          {equipmentCategories.map((category) => (
            <Link href={`/equipment/${category.id}`} key={category.id} className="block group/card">

              <div
                key={category.id}
                className="group/card w-full cursor-pointer overflow-hidden relative h-96 rounded-md shadow-xl bg-cover bg-center flex flex-col justify-between p-4"
                style={{ backgroundImage: `url('${category.image}')` }}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >

                <div className="absolute inset-0 bg-slate-800/50" />

                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60 z-0"></div>
                <div className="flex flex-col h-full justify-between z-10 relative">
                  <div className="flex flex-row items-center space-x-4">

                    <div className="text-white">
                      <p className="font-bold text-base text-xl">{category.name}</p>
                      <p className="text-sm text-gray-300">{category.description}</p>
                    </div>
                  </div>
                  <div>
                    <Link href={`/equipment/${category.id}`}>
                      <Button
                        variant="ghost"
                        className="w-full justify-between text-white hover:bg-blue-50 hover:text-blue-700 transition-colors"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>

          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <p className="text-4xl md:text-6xl lg:text-7xl font-bold text-blue-700 mb-6 ">
            Let's get your project off the ground — the right way!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="#equipments" scroll={true}>

            <Button
              size="lg"
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl "
            >
              View Full Range
            </Button>
                            </Link>
                            <Link href="#quote" scroll={true}>

            <Button
              size="lg"
              variant="outline"
              className="hover:border-2 border-secondary text-black bg-secondary hover:text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-transparent cursor-pointer"
            >
              Get Custom Quote
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
