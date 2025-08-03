"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"

export default function QuoteSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    equipment: "",
    startDate: "",
    duration: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="quote" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Quote Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Request a Quote</h2>
              <div className="w-74 h-1 bg-secondary mb-4"></div>
              <p className="text-slate-600 text-lg">
                Please enter your details and we will get back to you with a quote within 2 hours.
              </p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-slate-700 font-medium">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="mt-1 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-slate-700 font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-1 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-slate-700 font-medium">
                        Phone *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="mt-1 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="0400 000 000"
                      />
                    </div>
                    <div>
                      <Label htmlFor="postcode" className="text-slate-700 font-medium">
                        Postcode *
                      </Label>
                      <Input
                        id="postcode"
                        type="text"
                        required
                        value={formData.postcode}
                        onChange={(e) => handleInputChange("postcode", e.target.value)}
                        className="mt-1 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="2600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="equipment" className="text-slate-700 font-medium">
                        Equipment Needed *
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("equipment", value)}>
                        <SelectTrigger className="mt-1 border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                          <SelectValue placeholder="Select equipment" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="excavator">Excavator</SelectItem>
                          <SelectItem value="dumper">Site Dumper</SelectItem>
                          <SelectItem value="roller">Roller</SelectItem>
                          <SelectItem value="loader">Mini Loader</SelectItem>
                          <SelectItem value="skid-steer">Skid Steer</SelectItem>
                          <SelectItem value="tipper">Tipper</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="duration" className="text-slate-700 font-medium">
                        Rental Duration
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("duration", value)}>
                        <SelectTrigger className="mt-1 border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-day">1 Day</SelectItem>
                          <SelectItem value="2-3-days">2-3 Days</SelectItem>
                          <SelectItem value="1-week">1 Week</SelectItem>
                          <SelectItem value="2-weeks">2 Weeks</SelectItem>
                          <SelectItem value="1-month">1 Month</SelectItem>
                          <SelectItem value="long-term">Long Term</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-slate-700 font-medium">
                      Project Details
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="mt-1 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Tell us about your project and any specific requirements..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-secondary hover:bg-primary hover:text-white text-slate-900 font-semibold py-3 rounded-lg text-lg"
                  >
                    Get My Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Get in Touch</h2>
              <div className="w-55 h-1 bg-secondary mb-4"></div>
              <p className="text-slate-600 text-lg">
                Need immediate assistance? Contact us directly for urgent equipment needs.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              <Card className="border-l-4 border-l-primary shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Call Us Now</h3>
                      <p className="text-2xl font-bold text-primary mb-1">02 6213 8111</p>
                      <p className="text-slate-600 text-sm">Available 24/7 for emergencies</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Email Us</h3>
                      <p className="text-lg font-semibold text-yellow-600 mb-1">rentals@kelton.biz</p>
                      <p className="text-slate-600 text-sm">We respond within 2 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Service Area</h3>
                      <p className="text-lg font-semibold text-green-600 mb-1">Canberra & Surrounds</p>
                      <p className="text-slate-600 text-sm">Fast delivery across the region</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Business Hours */}
            <Card className="bg-slate-50 border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-900">
                  <Clock className="w-5 h-5 mr-2" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Monday - Friday:</span>
                    <span className="font-semibold text-slate-900">7:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Saturday:</span>
                    <span className="font-semibold text-slate-900">8:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Sunday:</span>
                    <span className="font-semibold text-slate-900">Emergency Only</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">24/7 Emergency Support Available</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
