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
    const nav = document.getElementById('main-navbar')
    const handleScroll = () => {
      if (window.scrollY > 10) {
        if (nav) {
          nav.style.top = '0'
        }
        setIsScrolled(true)
      } else {
        if (nav) {
          nav.style.top = '36px'
        }
        setIsScrolled(false)
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

      {/* Navbar - now joined to header, full width, no rounded sides */}
      <nav
        id="main-navbar"
        className="fixed z-50 transition-all duration-300 shadow-none left-0 right-0 mt-0"
        style={{
          top: '0px',
          width: '100%',
          borderRadius: 0,
          border: 'none', // Remove any border from the nav itself
          background: 'transparent',
          boxShadow: 'none', // Remove any shadow from the nav itself
          transition: 'top 0.3s cubic-bezier(.4,0,.2,1)',
        }}
      >
        <div className="w-full px-4 sm:px-8 lg:px-16">
          <div className="flex justify-between items-center h-13">
            {/* Logo */}

            {/* Desktop Navigation - Centered Links */}
            <div className="hidden md:flex flex-1 justify-center items-center">
              <div className="flex items-center space-x-8 border border-[0.25px] border-gray-400 bg-gray-700/70 backdrop-blur-md rounded-full px-20 py-1 shadow-sm desktop-nav-border" style={{ boxShadow: '0 2px 16px 0 rgba(180, 180, 200, 0.12), 0 1.5px 4px 0 rgba(220,220,230,0.10)', borderColor: '#b0b3b8' }}>
                <Link href="/" className="flex items-center mr-1">
                  <Image
                    src="/images/baron-logo.jpg"
                    alt="Baron Capital Limited"
                    width={140}
                    height={140}
                    className="rounded-full"
                  />
                </Link>
                <Link href="/about" className="text-white hover:bg-white hover:text-blue-900 font-semibold transition-colors nav-hover font-circular-medium text-sm tracking-wide px-4 py-2 rounded-xl">
                  About Us
                </Link>

                {/* Enhanced Services Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    onMouseEnter={() => setDropdownOpen(true)}
                    className="flex items-center space-x-1 text-white hover:bg-white hover:text-blue-900 font-semibold transition-colors nav-hover font-circular-medium text-sm tracking-wide px-4 py-2 rounded-xl"
                  >
                    <span>Our Solutions</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {dropdownOpen && (
                    <div
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-[500px] bg-gray-700/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-600 py-8 z-50"
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <div className="px-8 mb-6">
                        <h3 className="text-xl font-bold text-white mb-2">Our Financial Solutions</h3>
                        <p className="text-sm text-gray-200">Comprehensive services for your financial needs</p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 px-6">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-600 transition-all duration-300 group"
                            onClick={() => setDropdownOpen(false)}
                          >
                            <div className={`p-3 ${service.color} rounded-xl group-hover:scale-110 transition-transform`}>
                              <service.icon className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-white text-xs mb-1 tracking-wide">{service.name}</div>
                              <div className="text-xs text-gray-200 leading-relaxed">{service.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/property-vehicles"
                  className="text-white hover:bg-white hover:text-blue-900 font-semibold transition-colors nav-hover font-circular-medium text-sm tracking-wide px-4 py-2 rounded-xl"
                >
                  Property & Vehicles
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:bg-white hover:text-blue-900 font-semibold transition-colors nav-hover font-circular-medium text-sm tracking-wide px-4 py-2 rounded-xl"
                >
                  Contact Us
                </Link>
                <Link
                  href="/location"
                  className="text-white hover:bg-white hover:text-blue-900 font-semibold transition-colors nav-hover font-circular-medium text-sm tracking-wide px-4 py-2 rounded-xl"
                >
                  Our Location
                </Link>
              </div>
            </div>

            {/* Mobile menu button and menu */}
            <div className={`flex md:hidden w-full justify-between items-center transition-colors duration-300 ${isScrolled ? 'bg-gray-800' : ''} px-2 py-1`}>
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/baron-logo.jpg"
                  alt="Baron Capital Limited"
                  width={180}
                  height={180}
                  className="rounded-full"
                />
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 rounded-xl text-gray-100 bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                {isOpen ? <X className="h-10 w-10" /> : <Menu className="h-10 w-10" />}
              </button>
            </div>
          </div>

          {/* Fullscreen mobile menu with fade-in and dropdown for solutions */}
          {isOpen && (
            <div className="fixed inset-0 z-50 bg-gray-700/90 backdrop-blur-md animate-fade-in flex flex-col">
              <div className="flex justify-between items-center px-6 py-6">
                <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/images/baron-logo.jpg"
                    alt="Baron Capital Limited"
                    width={140}
                    height={140}
                    className="rounded-full"
                  />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-3 rounded-xl text-white hover:bg-gray-600 transition-colors"
                >
                  <X className="h-9 w-9" />
                </button>
              </div>
              <nav className="flex-1 flex flex-col justify-center items-center space-y-8">
                <Link
                  href="/about"
                  className="block text-white hover:bg-white hover:text-blue-900 font-semibold py-4 w-3/4 text-center rounded-xl text-lg tracking-wide transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                {/* Mobile Solutions Dropdown */}
                <div className="w-3/4">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full flex items-center justify-between text-white font-semibold py-4 px-6 rounded-xl text-lg tracking-wide bg-gray-700 hover:bg-white hover:text-blue-900 transition-all"
                  >
                    <span>Our Solutions</span>
                    <ChevronDown className={`h-6 w-6 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {dropdownOpen && (
                    <div className="mt-2 bg-gray-700/95 rounded-2xl shadow-xl py-4 animate-fade-in">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex items-center space-x-3 text-white hover:bg-gray-600 py-3 px-6 rounded-xl transition-all text-base tracking-wide"
                          onClick={() => { setIsOpen(false); setDropdownOpen(false); }}
                        >
                          <div className={`p-2 ${service.color} rounded-lg`}>
                            <service.icon className="h-5 w-5 text-white" />
                          </div>
                          <span className="font-medium">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link
                  href="/property-vehicles"
                  className="block text-white hover:bg-white hover:text-blue-900 font-semibold py-4 w-3/4 text-center rounded-xl text-lg tracking-wide transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Property & Vehicles
                </Link>
                <Link
                  href="/contact"
                  className="block text-white hover:bg-white hover:text-blue-900 font-semibold py-4 w-3/4 text-center rounded-xl text-lg tracking-wide transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
                <Link
                  href="/location"
                  className="block text-white hover:bg-white hover:text-blue-900 font-semibold py-4 w-3/4 text-center rounded-xl text-lg tracking-wide transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Our Location
                </Link>
              </nav>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
