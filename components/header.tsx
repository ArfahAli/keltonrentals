"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/10 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/images/kelton-logo.png" alt="Kelton Rentals" width={160} height={50} className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/equipment"
              className={`font-medium transition-colors hover:text-yellow-400 ${
                isScrolled ? "text-slate-700" : "text-white"
              }`}
            >
              Equipment Rental
            </Link>
            <Link
              href="/attachments"
              className={`font-medium transition-colors hover:text-yellow-400 ${
                isScrolled ? "text-slate-700" : "text-white"
              }`}
            >
              Attachments
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-colors hover:text-yellow-400 ${
                isScrolled ? "text-slate-700" : "text-white"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-colors hover:text-yellow-400 ${
                isScrolled ? "text-slate-700" : "text-white"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-right">
              <div className={`text-lg font-bold ${isScrolled ? "text-blue-700" : "text-white"}`}>02 6213 8111</div>
              <div className={`text-sm ${isScrolled ? "text-slate-600" : "text-white/80"}`}>rentals@kelton.biz</div>
            </div>
            <Button className="bg-yellow-300 hover:bg-yellow-500 text-slate-900 font-semibold px-6 py-2 rounded-md">
              <Phone className="w-4 h-4 mr-2" />
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "hover:bg-stone-100" : "hover:bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-slate-700" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-slate-700" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-stone-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/equipment"
                className="text-slate-700 hover:text-blue-700 font-medium px-4 py-2 rounded-lg hover:bg-stone-50 transition-colors"
              >
                Equipment Rental
              </Link>
              <Link
                href="/attachments"
                className="text-slate-700 hover:text-blue-700 font-medium px-4 py-2 rounded-lg hover:bg-stone-50 transition-colors"
              >
                Attachments
              </Link>
              <Link
                href="/about"
                className="text-slate-700 hover:text-blue-700 font-medium px-4 py-2 rounded-lg hover:bg-stone-50 transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-slate-700 hover:text-blue-700 font-medium px-4 py-2 rounded-lg hover:bg-stone-50 transition-colors"
              >
                Contact
              </Link>
              <div className="px-4 pt-4 border-t border-stone-200">
                <div className="text-lg font-bold text-blue-700">02 6213 8111</div>
                <div className="text-sm text-slate-600 mb-3">rentals@kelton.biz</div>
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold">
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
