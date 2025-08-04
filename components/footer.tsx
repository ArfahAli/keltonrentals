import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6 flex items-center ">
                <Image
                  src="/images/Logo-1.png"
                  alt="Kelton Rentals"
                  width={200}
                  height={60}
                  className="h-12 w-auto"
                />
                 <Image
                  src="/images/Logo.png"
                  alt="Kelton Rentals"
                  width={200}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
                Family-owned and operated equipment rental business specializing in earthmoving equipment hire. We make
                it simple and stress-free to get the gear you need, when you need it.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-secondary mr-3" />
                  <div>
                    <div className="text-xl font-bold">02 6213 8111</div>
                    <div className="text-sm text-slate-400">24/7 Emergency Support</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-secondary mr-3" />
                  <div>
                    <div className="font-semibold">rentals@kelton.biz</div>
                    <div className="text-sm text-slate-400">Get your quote today</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-secondary mr-3" />
                  <div>
                    <div className="font-semibold">Canberra & Surrounding Areas</div>
                    <div className="text-sm text-slate-400">Fast delivery service</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-secondary">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/equipment"
                    className="text-slate-300 hover:text-secondary transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-secondary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    Equipment Rental
                  </Link>
                </li>
                <li>
                  <Link
                    href="/attachments"
                    className="text-slate-300 hover:text-secondary transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-secondary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    Attachment Rental
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-slate-300 hover:text-secondary transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-secondary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-slate-300 hover:text-secondary transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-secondary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/quote"
                    className="text-slate-300 hover:text-secondary transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-secondary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    Get Quote
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter & Hours */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-secondary">Stay Connected</h3>

              {/* Newsletter */}
              <div className="mb-6">
                <p className="text-slate-300 mb-3 text-sm">Get updates on new equipment and special offers</p>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:border-secondary"
                  />
                  <Button className="bg-secondary hover:bg-primary hover:text-white text-slate-900 font-semibold px-4">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <Clock className="w-5 h-5 text-secondary mr-2" />
                  <h4 className="font-semibold">Business Hours</h4>
                </div>
                <div className="text-sm text-slate-300 space-y-1">
                  <div className="flex justify-between">
                    <span>Mon - Fri:</span>
                    <span>7:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>8:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Emergency Only</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  <Link
                    href="#"
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-secondary hover:text-slate-900 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-secondary hover:text-slate-900 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-secondary hover:text-slate-900 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Kelton Rentals & Sales Pty Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-secondary transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-slate-400 hover:text-secondary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
