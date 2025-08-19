"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X, MapPin, Phone, Car, Home, Building, TrendingUp, Shield, Repeat } from "lucide-react"
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter, FaFacebookF, FaTiktok, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const header = document.getElementById('top-header')
    const nav = document.getElementById('main-navbar')
    const handleScroll = () => {
      if (window.scrollY > 10) {
        if (header) {
          header.style.transform = 'translateY(-100%)'
          header.style.transition = 'transform 0.3s cubic-bezier(.4,0,.2,1)'
        }
        if (nav) {
          nav.style.top = '0'
        }
      } else {
        if (header) {
          header.style.transform = 'translateY(0)'
        }
        if (nav) {
          nav.style.top = '36px'
        }
      }
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
    <>
      {/* Top Header */}
      <div id="top-header" className="w-full bg-[#041a55] text-white text-xs py-2 px-4 flex items-center justify-between gap-6 fixed top-0 left-0 z-[60]" style={{transition: 'transform 0.3s cubic-bezier(.4,0,.2,1)'}}>
        {/* Left: Phone Number */}
        <span className="flex items-center gap-2 text-xs font-semibold">
          <FaPhoneAlt className="text-white h-3.5 w-3.5" />
          <span className="text-xs">+254 700 000000</span>
        </span>
        {/* Center: Smaller Empowering Slogan */}
        <span className="text-sm font-bold tracking-widest text-white select-none">
          Empowering Your Financial Journey
        </span>
        {/* Right: Footer Social Icons, smaller */}
        <span className="flex items-center gap-3">
          <a href="https://facebook.com/BaronCapitalLimited" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF className="h-4 w-4 text-white" />
          </a>
          <a href="https://x.com/baron_limited" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
            <FaXTwitter className="h-4 w-4 text-white" />
          </a>
          <a href="https://www.instagram.com/baron_capital_limited/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="h-4 w-4 text-white" />
          </a>
          <a href="https://www.tiktok.com/@baron_capital_limited" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok className="h-4 w-4 text-white" />
          </a>
          <a href="https://www.linkedin.com/company/baron-capital-limited/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn className="h-4 w-4 text-white" />
          </a>
        </span>
      </div>
      {/* Navbar - now joined to header, full width, no rounded sides */}
      <nav
        id="main-navbar"
        className="fixed z-50 transition-all duration-300 shadow-lg left-0 right-0 mt-0 bg-white"
        style={{
          top: '36px',
          width: '100%',
          borderRadius: 0,
          transition: 'top 0.3s cubic-bezier(.4,0,.2,1)',
        }}
      >
        <div className="w-full px-4 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center h-13">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/images/baron-logo.jpg"
                  alt="Baron Capital Limited"
                  width={150}
                  height={80}
                  className=""
                />
              </Link>
            </div>

            {/* Desktop Navigation - Centered Links */}
            <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
              <Link href="/about" className="text-black hover:text-blue-700 font-semibold transition-colors nav-hover font-circular-medium text-sm tracking-wide px-4 py-2">
                About Us
              </Link>

              {/* Enhanced Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  onMouseEnter={() => setDropdownOpen(true)}
                  className="flex items-center space-x-1 text-black hover:text-blue-700 font-semibold transition-colors nav-hover font-circular-medium text-sm tracking-wide px-4 py-2"
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
                            <div className="font-semibold text-gray-900 text-xs mb-1 tracking-wide">{service.name}</div>
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
                className="text-black hover:text-blue-700 font-semibold transition-colors nav-hover font-circular-medium text-sm tracking-wide px-4 py-2"
              >
                Property & Vehicles
              </Link>
              <Link
                href="/contact"
                className="text-black hover:text-blue-700 font-semibold transition-colors nav-hover font-circular-medium text-sm tracking-wide px-4 py-2"
              >
                Contact Us
              </Link>
              <Link
                href="/location"
                className="text-black hover:text-blue-700 font-semibold transition-colors nav-hover font-circular-medium text-sm tracking-wide px-4 py-2"
              >
                Our Location
              </Link>
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
                  className="block text-gray-800 hover:text-blue-600 font-semibold py-3 mobile-menu-item stagger-1 rounded-xl hover:bg-blue-50 px-4 transition-all text-sm tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>

                <div className="space-y-4 mobile-menu-item stagger-2">
                  <div className="text-gray-800 font-semibold py-2 px-4 text-sm tracking-wide">Our Solutions</div>
                  <div className="space-y-2">
                    {services.map((service, index) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 py-3 px-4 rounded-xl hover:bg-blue-50 transition-all text-sm tracking-wide"
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
                  className="block text-gray-800 hover:text-blue-600 font-semibold py-3 mobile-menu-item stagger-3 rounded-xl hover:bg-blue-50 px-4 transition-all text-sm tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  Property & Vehicles
                </Link>

                <div className="pt-4 space-y-3 mobile-menu-item stagger-4">
                  <Link
                    href="/contact"
                    className="w-full block rounded-2xl bg-transparent border border-gray-300 text-gray-800 font-semibold text-sm tracking-wide py-2 px-4 text-center hover:bg-blue-50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/location"
                    className="w-full block rounded-2xl text-white font-semibold text-sm tracking-wide py-2 px-4 text-center"
                    style={{ backgroundColor: "#041a55" }}
                    onClick={() => setIsOpen(false)}
                  >
                    Our Location
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
