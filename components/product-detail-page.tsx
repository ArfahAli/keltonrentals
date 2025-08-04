"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import { Calendar as CalendarIcon, Phone, Mail, CheckCircle, Shield, Wrench, Star, ArrowLeft } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface Product {
  title: string
  category: string
  image: string
  images?: string[]
  description: string
  features: string[]
  safety: string[]
  specifications: Record<string, string>
}

interface ProductDetailPageProps {
  product: Product
}

export default function ProductDetailPage({ product }: ProductDetailPageProps) {
  const galleryImages = product.images && product.images.length > 0 ? product.images : [product.image]
  const [selectedImage, setSelectedImage] = useState(0)

  const [startDate, setStartDate] = useState<Date | undefined>()
  const [duration, setDuration] = useState<string>("")
  const [checking, setChecking] = useState(false)
  const [availabilityMessage, setAvailabilityMessage] = useState<string | null>(null)

  const checkAvailability = async () => {
    if (!startDate || !duration) {
      setAvailabilityMessage("❗ Please select both a start date and duration.")
      return
    }

    setChecking(true)
    setAvailabilityMessage(null)

    await new Promise((res) => setTimeout(res, 1500))

    const isAvailable = Math.random() > 0.3
    setAvailabilityMessage(
      isAvailable
        ? `✅ Available from ${format(startDate, "PPP")} for ${duration.replace("-", " ")}`
        : `❌ Not available for the selected timeframe. Please try another date.`
    )

    setChecking(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-slate-600 hover:text-primary transition-colors group">
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Equipment
            </Link>
            <div className="text-right">
              <div className="text-xl font-bold text-primary">02 6213 8111</div>
              <div className="text-sm text-slate-600">24/7 Support</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-stone-100 to-stone-200 shadow-2xl">
              <Image
                src={galleryImages[selectedImage]}
                alt={product.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-yellow-400 text-slate-900 font-semibold">Available Now</Badge>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square relative rounded-md overflow-hidden ${selectedImage === idx
                      ? "ring-4 ring-blue-500 scale-105"
                      : "hover:scale-105 opacity-70 hover:opacity-100"
                    } transition-all duration-300`}
                >
                  <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="text-primary border-primary">{product.category}</Badge>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-slate-600">(4.9/5)</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-4">{product.title}</h1>
              <p className="text-lg text-slate-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Timeframe Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
              {/* Date Picker */}
              <div>
                <label className="text-sm font-medium text-slate-700 mb-1 block">Start Date *</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, "PPP") : <span>Select date</span>}
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate} // ✅ This is the only place onSelect should go
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

              </div>

              {/* Duration */}
              <div>
                <label className="text-sm font-medium text-slate-700 mb-1 block">Duration *</label>
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-day">1 Day</SelectItem>
                    <SelectItem value="2-3-days">2–3 Days</SelectItem>
                    <SelectItem value="1-week">1 Week</SelectItem>
                    <SelectItem value="2-weeks">2 Weeks</SelectItem>
                    <SelectItem value="1-month">1 Month</SelectItem>
                    <SelectItem value="long-term">Long Term</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={checkAvailability}
                disabled={checking}
                className="flex-1 bg-primary hover:bg-secondary hover:text-black cursor-pointer text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {checking ? "Checking..." : (
                  <>
                    <CalendarIcon className="w-5 h-5 mr-2" />
                    Check Availability
                  </>
                )}
              </Button>

              <Link href="/#quote" scroll={true}>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 border-2 border-yellow-400 text-yellow-600 hover:bg-yellow-400 hover:text-slate-900 font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 bg-transparent"
                >
                  Get a Quote
                </Button>
              </Link>
            </div>

            {availabilityMessage && (
              <p className={`text-sm font-medium mt-2 ${availabilityMessage.includes("✅") ? "text-green-600" : "text-red-600"}`}>
                {availabilityMessage}
              </p>
            )}
                <div className="grid  grid-cols-1 sm:grid-cols-2 gap-2">
          <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
            <CardContent className="p-4 text-center">
              <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="font-bold text-slate-900">Call Now</div>
              <div className="text-primary font-semibold">02 6213 8111</div>
            </CardContent>
          </Card>
          <Card className="border-2 border-yellow-100 hover:border-yellow-300 transition-colors">
            <CardContent className="p-4 text-center">
              <Mail className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <div className="font-bold text-slate-900">Email Quote</div>
              <div className="text-yellow-600 font-semibold">rentals@kelton.biz</div>
            </CardContent>
          </Card>
        </div>
           <div className="bg-stone-50 rounded-xl p-6">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center">
            <Shield className="w-5 h-5 mr-2 text-green-600" />
            Why Choose Kelton Rentals?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
              <span>Family owned & operated</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
              <span>24/7 emergency support</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
              <span>Fast delivery service</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
              <span>Well-maintained equipment</span>
            </div>
          </div>
        </div>
          </div>
          
        </div>

        {/* Contact Cards */}
    

        {/* Trust Indicators */}
     
      </div>

      {/* Detailed Information Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="features" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="features" className="flex items-center cursor-pointer">
              <Wrench className="w-4 h-4 mr-2" />
              Features
            </TabsTrigger>
            <TabsTrigger value="safety" className="flex items-center cursor-pointer">
              <Shield className="w-4 h-4 mr-2" />
              Safety
            </TabsTrigger>
            <TabsTrigger value="specifications" className="flex items-center cursor-pointer">
              Specifications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="features">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Equipment Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="safety">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-700">Safety Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.safety.map((safety, index) => (
                    <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                      <Shield className="w-5 h-5 text-green-700 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{safety}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-slate-700">Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 bg-stone-50 rounded-lg border-l-4 border-yellow-400"
                    >
                      <span className="font-semibold text-slate-700">{key}</span>
                      <span className="text-slate-900 font-bold">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Equipment */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">You might also be interested in</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "1.5T Mini Dumper",
              image: "/images/site-dumpster-1.png",
              category: "Site Dumpers",
            },
            {
              name: "5T Dumper",
              image: "/images/site-dumpster-3.png",
              category: "Site Dumpers",
            },
            {
              name: "Excavator 3T",
              image: "/images/product-2.png",
              category: "Excavators",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <Badge variant="outline" className="mb-2 text-xs">
                    {item.category}
                  </Badge>
                  <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>

  )
}
