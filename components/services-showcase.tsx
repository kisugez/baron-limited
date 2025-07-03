"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaCar, FaHome, FaBuilding, FaChartLine, FaShieldAlt, FaRedo } from "react-icons/fa"

export function ServicesShowcase() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("services-showcase")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: FaCar,
      title: "Logbook Loans",
      description:
        "Quick cash loans using your vehicle as collateral. Keep driving while you repay with competitive rates and flexible terms.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/logbook-loans",
      gradient: "from-blue-500 to-blue-600",
      amount: "Up to 70% of vehicle value",
      rate: "From 2.5% monthly",
    },
    {
      icon: FaHome,
      title: "Title Deed Loans",
      description:
        "Unlock the value in your property with flexible title deed financing solutions for personal and business needs.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/title-deed-loans",
      gradient: "from-green-500 to-green-600",
      amount: "Up to 80% of property value",
      rate: "From 2% monthly",
    },
    {
      icon: FaBuilding,
      title: "Asset Finance",
      description:
        "Finance your business equipment and machinery with competitive rates and terms that grow with your business.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/asset-finance",
      gradient: "from-purple-500 to-purple-600",
      amount: "Up to KSh 50M",
      rate: "From 1.8% monthly",
    },
    {
      icon: FaChartLine,
      title: "Trade Finance",
      description:
        "Support your import/export business with comprehensive trade financing solutions and working capital.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/trade-finance",
      gradient: "from-orange-500 to-orange-600",
      amount: "Flexible limits",
      rate: "Competitive rates",
    },
    {
      icon: FaShieldAlt,
      title: "Bid & Performance Bonds",
      description:
        "Secure your contracts with reliable bid and performance bond solutions for government and private tenders.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/bonds",
      gradient: "from-red-500 to-red-600",
      amount: "Up to KSh 100M",
      rate: "From 1.5% annually",
    },
    {
      icon: FaRedo,
      title: "Loan Buy-Off",
      description:
        "Consolidate your existing loans with better terms and lower rates. Simplify your finances with one payment.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/loan-buyoff",
      gradient: "from-indigo-500 to-indigo-600",
      amount: "Up to KSh 20M",
      rate: "Better terms guaranteed",
    },
  ]

  return (
    <section id="services-showcase" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Highlight Section */}
        <div className="mb-10 flex flex-col items-center gap-4 bg-white/90 rounded-xl shadow p-4 md:p-6 border border-gray-100">
          <h2 className="text-xl md:text-2xl font-bold text-center text-blue-900 mb-1">
            Double the volumes with a <span className="text-blue-600">fraction of the effort</span>
          </h2>
          <p className="text-gray-700 text-center text-sm md:text-base max-w-lg mx-auto">
            Baron Capital matches you with the best loan from 6+ products in one place.
          </p>
          <Button className="rounded-full px-5 py-2 text-white font-medium bg-blue-700 hover:bg-blue-800 transition text-sm" asChild>
            <Link href="/contact">Book a consultation</Link>
          </Button>
          {/* Loan Types Row */}
          <div className="flex flex-wrap justify-center gap-2 mt-1 text-xs text-blue-800 font-medium">
            <span className="bg-blue-100 rounded-full px-3 py-0.5">Logbook</span>
            <span className="bg-blue-100 rounded-full px-3 py-0.5">Title Deed</span>
            <span className="bg-blue-100 rounded-full px-3 py-0.5">Asset</span>
            <span className="bg-blue-100 rounded-full px-3 py-0.5">Trade</span>
            <span className="bg-blue-100 rounded-full px-3 py-0.5">Bonds</span>
            <span className="bg-blue-100 rounded-full px-3 py-0.5">Buy-off</span>
          </div>
          {/* Smart Matching Comparison */}
          <div className="w-full max-w-xs mt-2">
            <div className="flex justify-between items-center text-xs text-gray-600 font-semibold border-b pb-0.5">
              <span>Smart match</span>
              <span className="text-blue-700 font-bold">KSh 500K @ 2.5%</span>
            </div>
            <div className="flex justify-between items-center mt-1 text-xs">
              <span className="flex items-center gap-1"><span className="bg-blue-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">B</span>Baron</span>
              <span className="font-bold text-blue-700">Best</span>
              <span className="font-semibold">2.5%</span>
            </div>
            <div className="flex justify-between items-center mt-0.5 text-xs opacity-80">
              <span className="flex items-center gap-1"><span className="bg-gray-300 text-gray-700 rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">O</span>Other</span>
              <span>—</span>
              <span>3.2%</span>
            </div>
            <div className="flex justify-between items-center mt-0.5 text-xs opacity-60">
              <span className="flex items-center gap-1"><span className="bg-gray-200 text-gray-500 rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">A</span>Alt</span>
              <span>—</span>
              <span>4.1%</span>
            </div>
          </div>
          {/* CTA Row */}
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-2 mt-4">
            <span className="text-sm font-semibold text-blue-900 text-center">Ready to transform your finances?</span>
            <Button size="sm" className="rounded-full px-5 py-1.5 text-white font-medium bg-blue-700 hover:bg-blue-800 transition text-xs" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button size="sm" variant="outline" className="rounded-full px-5 py-1.5 border-blue-700 text-blue-700 hover:bg-blue-50 transition text-xs" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Section Header */}
        <div className={`text-center mb-20 ${isVisible ? "animate-slide-up" : ""}`}>
          <div className="inline-block px-6 py-3 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
            Our Financial Solutions
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="text-gradient">Financial Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From personal loans to business financing, we provide tailored solutions that adapt to your unique financial
            needs and goals
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group service-card-hover rounded-3xl shadow-lg overflow-hidden ${
                isVisible ? "animate-slide-up" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className={`absolute top-4 left-4 p-3 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-lg`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between items-center text-white text-sm">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">{service.amount}</span>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">{service.rate}</span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <Button
                  variant="ghost"
                  className="group/btn p-0 h-auto font-semibold text-blue-600 hover:text-blue-700 transition-all duration-300"
                  asChild
                >
                  <Link href={service.href} className="flex items-center space-x-2">
                    <span>Explore Service</span>
                    <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 ${isVisible ? "animate-fade-in" : ""}`} style={{ animationDelay: "0.8s" }}>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-8 opacity-90">
              Our financial experts are ready to help you choose the perfect solution for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="rounded-full px-8 py-4 text-lg font-medium" asChild>
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-4 text-lg font-medium border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                asChild
              >
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
