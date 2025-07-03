"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X, MapPin, Phone, Car, Home, Building, TrendingUp, Shield, Repeat } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    {
      name: "Logbook Loans",
      href: "/services/logbook-loans",
      icon: Car,
      description: "Quick cash loans using your vehicle as collateral",
      color: "bg-blue-500",
    },
    {
      name: "Title-Deed Loans",
      href: "/services/title-deed-loans",
      icon: Home,
      description: "Unlock the value in your property with flexible financing",
      color: "bg-green-500",
    },
    {
      name: "Asset Finance",
      href: "/services/asset-finance",
      icon: Building,
      description: "Finance your business equipment and machinery",
      color: "bg-purple-500",
    },
    {
      name: "Trade Finance",
      href: "/services/trade-finance",
      icon: TrendingUp,
      description: "Support your import/export business operations",
      color: "bg-orange-500",
    },
    {
      name: "Bid & Performance Bonds",
      href: "/services/bonds",
      icon: Shield,
      description: "Secure your contracts with reliable bond solutions",
      color: "bg-red-500",
    },
    {
      name: "Loan Buy‑Off",
      href: "/services/loan-buyoff",
      icon: Repeat,
      description: "Consolidate existing loans with better terms",
      color: "bg-indigo-500",
    },
  ]

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300 bg-white shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/baron-logo.jpg"
                alt="Baron Capital Limited"
                width={200}
                height={120}
                className=""
              />
            </Link>
          </div>

          {/* Desktop Navigation - Middle */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors nav-hover">
              About Us
            </Link>

            {/* Enhanced Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 font-semibold transition-colors nav-hover"
              >
                <span>Our Solutions</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {dropdownOpen && (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-[500px] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 py-8 z-50"
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <div className="px-8 mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Financial Solutions</h3>
                    <p className="text-sm text-gray-600">Comprehensive services for your financial needs</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 px-6">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-blue-50 transition-all duration-300 group"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <div className={`p-3 ${service.color} rounded-xl group-hover:scale-110 transition-transform`}>
                          <service.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 text-sm mb-1">{service.name}</div>
                          <div className="text-xs text-gray-600 leading-relaxed">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/property-vehicles"
              className="text-gray-800 hover:text-blue-600 font-semibold transition-colors nav-hover"
            >
              Property & Vehicles
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="rounded-full bg-transparent hover:bg-blue-50 border-gray-300" asChild>
              <Link href="/contact" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Contact Us</span>
              </Link>
            </Button>
            <Button
              className="rounded-full text-white hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: "#041a55" }}
              asChild
            >
              <Link href="/location" className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Our Location</span>
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 rounded-b-3xl shadow-2xl mobile-menu-enter">
            <div className="px-6 py-8 space-y-6">
              <Link
                href="/about"
                className="block text-gray-800 hover:text-blue-600 font-semibold py-3 mobile-menu-item stagger-1 rounded-xl hover:bg-blue-50 px-4 transition-all"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>

              <div className="space-y-4 mobile-menu-item stagger-2">
                <div className="text-gray-800 font-semibold py-2 px-4">Our Solutions</div>
                <div className="space-y-2">
                  {services.map((service, index) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 py-3 px-4 rounded-xl hover:bg-blue-50 transition-all"
                      onClick={() => setIsOpen(false)}
                      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                    >
                      <div className={`p-2 ${service.color} rounded-lg`}>
                        <service.icon className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-medium">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/property-vehicles"
                className="block text-gray-800 hover:text-blue-600 font-semibold py-3 mobile-menu-item stagger-3 rounded-xl hover:bg-blue-50 px-4 transition-all"
                onClick={() => setIsOpen(false)}
              >
                Property & Vehicles
              </Link>

              <div className="pt-4 space-y-3 mobile-menu-item stagger-4">
                <Button variant="outline" className="w-full rounded-2xl bg-transparent border-gray-300" asChild>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Contact Us
                  </Link>
                </Button>
                <Button className="w-full rounded-2xl text-white" style={{ backgroundColor: "#041a55" }} asChild>
                  <Link href="/location" onClick={() => setIsOpen(false)}>
                    Our Location
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
