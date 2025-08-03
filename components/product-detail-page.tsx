"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Phone, Mail, CheckCircle, Shield, Wrench, Calendar, Star } from "lucide-react"

interface Product {
  title: string
  category: string
  image: string
  images?: string[]  // Optional fallback
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


  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-slate-600 hover:text-blue-700 transition-colors group">
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Equipment
            </Link>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-xl font-bold text-blue-700">02 6213 8111</div>
                <div className="text-sm text-slate-600">24/7 Support</div>
              </div>
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

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-3">
              {galleryImages.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`aspect-square relative rounded-md overflow-hidden ${
              selectedImage === idx ? "ring-4 ring-blue-500 scale-105" : "hover:scale-105 opacity-70 hover:opacity-100"
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
                <Badge variant="outline" className="text-blue-700 border-blue-700">
                  {product.category}
                </Badge>
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

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="flex-1 bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Check Availability
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 border-2 border-yellow-400 text-yellow-600 hover:bg-yellow-400 hover:text-slate-900 font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                Get a Quote
              </Button>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <CardContent className="p-4 text-center">
                  <Phone className="w-8 h-8 text-blue-700 mx-auto mb-2" />
                  <div className="font-bold text-slate-900">Call Now</div>
                  <div className="text-blue-700 font-semibold">02 6213 8111</div>
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

            {/* Trust Indicators */}
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

        {/* Detailed Information Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="features" className="flex items-center">
                <Wrench className="w-4 h-4 mr-2" />
                Features
              </TabsTrigger>
              <TabsTrigger value="safety" className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Safety
              </TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
            </TabsList>

            <TabsContent value="features">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-700">Equipment Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-blue-700 mr-3 flex-shrink-0" />
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
                image: "/placeholder.svg?height=200&width=300",
                category: "Site Dumpers",
              },
              {
                name: "5T Dumper",
                image: "/placeholder.svg?height=200&width=300",
                category: "Site Dumpers",
              },
              {
                name: "Excavator 3T",
                image: "/placeholder.svg?height=200&width=300",
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
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
