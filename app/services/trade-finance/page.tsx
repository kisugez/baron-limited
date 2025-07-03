"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FaChartLine, FaCheckCircle, FaArrowRight, FaGlobe, FaDollarSign, FaRegClock, FaShieldAlt, FaUsers } from "react-icons/fa"
import { MovingIcons } from "@/components/moving-icons"
import { useScrollReveal } from "@/hooks/useScrollReveal"
import dynamic from "next/dynamic"
import Globe3D from "@/components/globe-3d"

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false })

export default function TradeFinancePage() {
  useScrollReveal()

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".scroll-reveal")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const features = [
    "Import/Export financing",
    "Letters of credit",
    "Trade guarantees",
    "Working capital solutions",
    "Foreign exchange services",
    "Documentary collections",
    "Supply chain finance",
    "Risk mitigation tools",
  ]

  const tradeServices = [
    { name: "Import Finance", description: "Financing for importing goods and raw materials" },
    { name: "Export Finance", description: "Support for exporters to fulfill international orders" },
    { name: "Letters of Credit", description: "Secure payment guarantees for international trade" },
    { name: "Bank Guarantees", description: "Performance and payment guarantees for contracts" },
    { name: "Trade Insurance", description: "Protection against trade-related risks" },
    { name: "Supply Chain Finance", description: "Optimize cash flow across your supply chain" },
  ]

  const loanDetails = [
    { label: "Finance Amount", value: "Up to USD 10 Million", icon: FaDollarSign },
    { label: "Interest Rate", value: "Competitive rates", icon: FaChartLine },
    { label: "Tenure", value: "Up to 180 days", icon: FaRegClock },
    { label: "Processing Time", value: "5-7 working days", icon: FaShieldAlt },
  ]

  return (
    <div className="min-h-screen pt-16 page-enter">
      {/* Hero Section */}
      <section
        className="py-hero relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #041a55 0%, #0f2a6b 100%)" }}
      >
        <MovingIcons variant="background" />
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-40 h-40 bg-white/5 rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-20 w-28 h-28 bg-white/10 rounded-full animate-float-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${isVisible ? "scroll-reveal revealed" : "scroll-reveal"}`}>
              <div className="flex items-center space-x-3">
                <div className="p-4 bg-orange-500 rounded-2xl shadow-lg">
                  <FaChartLine className="h-8 w-8 text-white" />
                </div>
                <span className="text-white font-semibold text-lg">Trade Finance</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Expand Your Business <span className="text-white/90">Globally</span>
              </h1>

              <p className="text-xl text-white/80 leading-relaxed">
                Unlock international opportunities with comprehensive trade finance solutions. From import/export
                financing to letters of credit, we provide the financial tools you need to succeed in global markets.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full bg-white text-blue-900 hover:bg-white/90 px-8 py-3" asChild>
                  <Link href="/contact" className="flex items-center space-x-2">
                    <FaGlobe className="h-5 w-5" />
                    <span>Start Trading</span>
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 bg-transparent"
                  asChild
                >
                  <Link href="/contact">Get Trade Quote</Link>
                </Button>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full w-fit mx-auto mb-2">
                    <FaDollarSign className="h-6 w-6 text-white" />
                  </div>
                  <div className="font-bold text-white">USD 10M</div>
                  <div className="text-sm text-white/80">Max Finance</div>
                </div>
                <div className="text-center">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full w-fit mx-auto mb-2">
                    <FaRegClock className="h-6 w-6 text-white" />
                  </div>
                  <div className="font-bold text-white">5-7 Days</div>
                  <div className="text-sm text-white/80">Processing</div>
                </div>
                <div className="text-center">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full w-fit mx-auto mb-2">
                    <FaGlobe className="h-6 w-6 text-white" />
                  </div>
                  <div className="font-bold text-white">Global</div>
                  <div className="text-sm text-white/80">Coverage</div>
                </div>
              </div>
            </div>

            <div
              className={`${isVisible ? "scroll-reveal revealed" : "scroll-reveal"}`}
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-full h-[400px] lg:h-[500px] flex items-center justify-center">
                <Globe3D />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-section gradient-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="scroll-reveal">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Trade Finance Services</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {tradeServices.map((service, index) => (
                    <div key={service.name} className="bg-white/70 backdrop-blur-sm rounded-xl p-4 card-hover-effect">
                      <div className="flex items-start space-x-3">
                        <FaChartLine className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{service.name}</h4>
                          <p className="text-sm text-gray-600">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="scroll-reveal">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Trade Finance?</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <FaCheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 scroll-reveal">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Trade Finance Process</h3>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Trade Assessment",
                      description: "We evaluate your trade requirements and international partners",
                    },
                    {
                      step: "2",
                      title: "Documentation",
                      description: "Prepare all necessary trade documents and compliance requirements",
                    },
                    {
                      step: "3",
                      title: "Finance Approval",
                      description: "Quick approval and setup of trade finance facilities",
                    },
                    {
                      step: "4",
                      title: "Trade Execution",
                      description: "Execute your international trade with full financial backing",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg scroll-reveal">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Trade Finance Terms</h3>
                <div className="space-y-4">
                  {loanDetails.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="h-5 w-5 text-orange-600" />
                        <span className="text-gray-600">{item.label}</span>
                      </div>
                      <span className="font-semibold text-gray-900 text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 scroll-reveal">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Trade Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "Global market access",
                    "Risk mitigation",
                    "Cash flow optimization",
                    "Competitive advantage",
                    "Expert trade support",
                    "Multi-currency options",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center space-x-3">
                      <FaCheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                className="w-full rounded-full text-white hover-lift py-3"
                style={{ backgroundColor: "#041a55" }}
                asChild
              >
                <Link href="/contact" className="flex items-center justify-center space-x-2">
                  <span>Apply for Trade Finance</span>
                  <FaArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-section gradient-blue-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center scroll-reveal">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <FaUsers className="h-8 w-8 text-orange-600" />
              </div>
              <blockquote className="text-xl text-gray-700 mb-6 italic">
                "Baron Capital's trade finance solutions enabled us to expand our export business to new markets. Their
                expertise in international trade and quick processing made all the difference."
              </blockquote>
              <div className="font-semibold text-gray-900">David Ochieng</div>
              <div className="text-gray-600">Export Business Owner, Mombasa</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
