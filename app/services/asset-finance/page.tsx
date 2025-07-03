"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaBuilding, FaCheckCircle, FaArrowRight, FaChartLine, FaBolt, FaBullseye, FaDollarSign, FaRegClock, FaUsers } from "react-icons/fa"
import { MovingIcons } from "@/components/moving-icons"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export default function AssetFinancePage() {
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
    "Finance up to 100% of asset value",
    "Competitive interest rates",
    "Flexible repayment schedules",
    "Quick approval process",
    "Retain asset ownership",
    "Tax benefits available",
    "No collateral required",
    "Equipment upgrade options",
  ]

  const assetTypes = [
    { name: "Manufacturing Equipment", description: "Production machinery and industrial equipment" },
    { name: "Construction Machinery", description: "Excavators, cranes, and construction tools" },
    { name: "Medical Equipment", description: "Hospital and clinic medical devices" },
    { name: "IT & Technology", description: "Computers, servers, and tech infrastructure" },
    { name: "Transportation Vehicles", description: "Commercial trucks and delivery vehicles" },
    { name: "Agricultural Equipment", description: "Tractors, harvesters, and farming machinery" },
  ]

  const loanDetails = [
    { label: "Finance Amount", value: "Up to KSh 50 Million", icon: FaDollarSign },
    { label: "Interest Rate", value: "From 1.8% per month", icon: FaBullseye },
    { label: "Repayment Period", value: "12 to 60 months", icon: FaRegClock },
    { label: "Processing Time", value: "72 hours", icon: FaBolt },
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
                <div className="p-4 bg-purple-500 rounded-2xl shadow-lg">
                  <FaBuilding className="h-8 w-8 text-white" />
                </div>
                <span className="text-white font-semibold text-lg">Asset Finance</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Power Your Business with <span className="text-white/90">Smart Financing</span>
              </h1>

              <p className="text-xl text-white/80 leading-relaxed">
                Acquire the equipment and machinery your business needs to grow. Our asset finance solutions provide
                flexible funding options that preserve your cash flow while building your operational capacity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full bg-white text-blue-900 hover:bg-white/90 px-8 py-3" asChild>
                  <Link href="/contact" className="flex items-center space-x-2">
                    <FaChartLine className="h-5 w-5" />
                    <span>Get Financing Quote</span>
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 bg-transparent"
                  asChild
                >
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full w-fit mx-auto mb-2">
                    <FaBullseye className="h-6 w-6 text-white" />
                  </div>
                  <div className="font-bold text-white">KSh 50M</div>
                  <div className="text-sm text-white/80">Maximum Finance</div>
                </div>
                <div className="text-center">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full w-fit mx-auto mb-2">
                    <FaBolt className="h-6 w-6 text-white" />
                  </div>
                  <div className="font-bold text-white">72hrs</div>
                  <div className="text-sm text-white/80">Quick Approval</div>
                </div>
                <div className="text-center">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full w-fit mx-auto mb-2">
                    <FaChartLine className="h-6 w-6 text-white" />
                  </div>
                  <div className="font-bold text-white">1.8%</div>
                  <div className="text-sm text-white/80">Monthly Rate</div>
                </div>
              </div>
            </div>

            <div
              className={`${isVisible ? "scroll-reveal revealed" : "scroll-reveal"}`}
              style={{ animationDelay: "0.3s" }}
            >
              <Image
                src="/blue-money-business-graph-finance-600nw-2166540277.webp?height=500&width=400"
                alt="Asset Finance"
                width={1100}
                height={500}
                className="rounded-2xl shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Asset Types & Features */}
      <section className="py-section gradient-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="scroll-reveal">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Equipment We Finance</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {assetTypes.map((asset, index) => (
                    <div key={asset.name} className="bg-white/70 backdrop-blur-sm rounded-xl p-4 card-hover-effect">
                      <div className="flex items-start space-x-3">
                        <FaBuilding className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{asset.name}</h4>
                          <p className="text-sm text-gray-600">{asset.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="scroll-reveal">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Asset Finance?</h3>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">How Asset Finance Works</h3>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Equipment Selection",
                      description: "Choose the equipment or machinery your business needs from any supplier",
                    },
                    {
                      step: "2",
                      title: "Finance Application",
                      description: "Submit your application with business and equipment details",
                    },
                    {
                      step: "3",
                      title: "Quick Approval",
                      description: "Get approved within 72 hours and we pay the supplier directly",
                    },
                    {
                      step: "4",
                      title: "Start Operations",
                      description: "Begin using your equipment immediately while making affordable payments",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
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
                <h3 className="text-xl font-bold text-gray-900 mb-6">Finance Terms</h3>
                <div className="space-y-4">
                  {loanDetails.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="h-5 w-5 text-purple-600" />
                        <span className="text-gray-600">{item.label}</span>
                      </div>
                      <span className="font-semibold text-gray-900 text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 scroll-reveal">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Business Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "Preserve working capital",
                    "Tax deductible payments",
                    "Fixed monthly payments",
                    "Upgrade options available",
                    "No collateral required",
                    "Quick decision process",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center space-x-3">
                      <FaCheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />
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
                  <span>Apply for Asset Finance</span>
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
                <FaUsers className="h-8 w-8 text-purple-600" />
              </div>
              <blockquote className="text-xl text-gray-700 mb-6 italic">
                "Baron Capital helped me expand my business with their asset finance solution. The process was smooth,
                the team was incredibly supportive, and I got the equipment I needed to grow my operations."
              </blockquote>
              <div className="font-semibold text-gray-900">Grace Akinyi</div>
              <div className="text-gray-600">Manufacturing Business Owner, Nairobi</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
