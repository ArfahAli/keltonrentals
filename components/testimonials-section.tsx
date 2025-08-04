"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Michael Friedrich",
    role: "Canberra Mini Diggers",
    rating: 5,
    avatar: "/images/Canberra Mini Diggers.png", // Rename & place in public/testimonials
    text:
      "Renting through Kelton Rentals has provided us with the advantage of having a larger variety of fleet without the associated costs of insurance, finance, maintenance and storage. For us this is just smart business, for our clients; we are able to offer a larger range of specialised services.",
  },
  {
    name: "Pete",
    role: "Horton Constructions & Consulting",
    rating: 5,
    avatar: "/images/Canberra Mini Diggers.png", // Rename & place in public/testimonials
    text:
      "I have engaged Kelton’s for the hire of plant and equipment, and their service is second to none! Staff have always been very helpful, friendly and informative. Free delivery is included with hire and is always delivered on time, even on very short notice. I have never had any issues whatsoever with their machinery. I would have no hesitation in recommending them for all your hire requirements.",
  },
  {
    name: "Max Rosin",
    role: "Rosin Contracting",
    rating: 5,
    avatar: "/images/Rosin Contracting.png",
    text:
      "On behalf of Rosin Contracting, I would like to thank Kelton Rentals for continuing to be an excellent business partner with quality machines and customer service excellence. Nothing is too much trouble for Kelton and we very much appreciate the ongoing support they provide to Rosin Contracting. I highly recommend Kelton Rentals — they've worked with us through difficult past few years and again during the challenging wet months we have seen in 2022.",
  },
  {
    name: "PD Concreting",
    role: "",
    rating: 5,
    avatar: "/images/PD Concreting.png",
    text:
      "The team at Kelton Rentals truly goes above and beyond, they are amazing to work with! Regardless of our request, the team responded immediately and professionally. Kelton's equipment is good quality, works efficiently, is well maintained and is provided at a competitive price. Thanks for the help in making our projects successful.",
  },
]


export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-10 relative overflow-hidden bg-secondary">

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">What Our Customers Say</h2>

          {/* Google Reviews Badge */}
          <div className="inline-flex items-center md:flex-row bg-white rounded-full shadow-lg px-6 py-3 flex-col ">
            <div className="flex items-center mr-4">
              <span className="text-sm font-medium text-slate-600 mr-2">Google Reviews</span>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-slate-900 mr-2">5.0</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
              </div>
            </div>
            <Button size="sm" className="bg-primary hover:bg-blue-700 text-white rounded-full">
              Review us on Google
            </Button>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto bg-secondary py-10">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                    <CardContent className="p-8 md:p-12">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                          <div
                            className="w-24 h-24 rounded-full bg-cover bg-center  border-primary"
                            style={{ backgroundImage: `url('${testimonial.avatar}')` }}
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center md:text-left">
                          {/* Quote Icon */}
                          <Quote className="w-8 h-8 text-primary mb-4 mx-auto md:mx-0" />

                          {/* Rating */}
                          <div className="flex justify-center md:justify-start mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                            ))}
                          </div>

                          {/* Testimonial Text */}
                          <p className="text-lg md:text-xl text-slate-700 mb-6 leading-relaxed italic">
                            "{testimonial.text}"
                          </p>

                          {/* Author */}
                          <div>
                            <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                            <p className="text-slate-600 font-handwriting">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-slate-600 group-hover:text-blue-700" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-blue-700" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlaying(false)
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-blue-700 scale-125" : "bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}





