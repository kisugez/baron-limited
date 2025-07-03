"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaHome, FaCheckCircle, FaArrowRight, FaCalculator, FaRegClock, FaShieldAlt, FaDollarSign, FaFileAlt, FaUsers } from "react-icons/fa"
import { MovingIcons } from "@/components/moving-icons"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export default function TitleDeedLoansPage() {
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
    "Retain property ownership",
    "Competitive interest rates",
    "Flexible repayment terms",
    "Quick property valuation",
    "Professional legal support",
    "Transparent pricing",
    "No prepayment penalties",
    "Expert property assessment",
  ]

  const requirements = [
    "Original title deed",
    "National ID or Passport",
    "KRA PIN certificate",
    "Property valuation report",
    "Proof of income",
    "Property insurance",
  ]

  const loanDetails = [
    { label: "Loan Amount", value: "Up to 80% of property value", icon: FaDollarSign },
    { label: "Interest Rate", value: "From 2% per month", icon: FaCalculator },
    { label: "Repayment Period", value: "Up to 36 months", icon: FaRegClock },
    { label: "Processing Time", value: "48 hours", icon: FaShieldAlt },
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
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full animate-float-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${isVisible ? "scroll-reveal revealed" : "scroll-reveal"}`}>
              <div className="flex items-center space-x-3">
                <div className="p-4 bg-green-500 rounded-2xl shadow-lg">
                  <FaHome className="h-8 w-8 text-white" />
                </div>
                <span className="text-white font-semibold text-lg">Title Deed Loans</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Unlock Your Property's <span className="text-white/90">True Value</span>
              </h1>

              <p className="text-xl text-white/80 leading-relaxed">
                Transform your property into immediate capital while maintaining ownership. Our title deed loans offer
                competitive rates with flexible terms designed around your financial goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full bg-white text-blue-900 hover:bg-white/90 px-8 py-3" asChild>
                  <Link href="/contact" className="flex items-center space-x-2">
                    <FaCalculator className="h-5 w-5" />
                    <span>Calculate Loan</span>
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 bg-transparent"
                  asChild
                >
                  <Link href="/contact">Get Free Valuation</Link>
                </Button>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full w-fit mx-auto mb-2">
                    <FaShieldAlt className="h-6 w-6 text-white" />
                  </div>
                  <div className="font-bold text-white">80%</div>
                  <div className="text-sm text-white/80">Property Value</div>
                </div>
                <div className="text-center">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full w-fit mx-auto mb-2">
                    <FaRegClock className="h-6 w-6 text-white" />
                  </div>
                  <div className="font-bold text-white">48hrs</div>
                  <div className="text-sm text-white/80">Approval Time</div>
                </div>
                <div className="text-center">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full w-fit mx-auto mb-2">
                    <FaDollarSign className="h-6 w-6 text-white" />
                  </div>
                  <div className="font-bold text-white">2%</div>
                  <div className="text-sm text-white/80">Monthly Rate</div>
                </div>
              </div>
            </div>

            <div
              className={`${isVisible ? "scroll-reveal revealed" : "scroll-reveal"}`}
              style={{ animationDelay: "0.3s" }}
            >
              <Image
                src="/bigstock-223973281.webp?height=500&width=400"
                alt="Title Deed Loans"
                width={1100}
                height={500}
                className="rounded-2xl shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features & Process */}
      <section className="py-section gradient-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="scroll-reveal">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Title Deed Loans?</h2>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Simple Application Process</h3>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Property Evaluation",
                      description: "Our certified valuers assess your property's current market value",
                      icon: FaCalculator,
                    },
                    {
                      step: "2",
                      title: "Documentation Review",
                      description: "We verify your title deed and complete legal due diligence",
                      icon: FaFileAlt,
                    },
                    {
                      step: "3",
                      title: "Loan Approval",
                      description: "Receive approval and funds within 48 hours of documentation",
                      icon: FaDollarSign,
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <item.icon className="h-5 w-5 text-green-600" />
                          <h4 className="font-bold text-gray-900">{item.title}</h4>
                        </div>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg scroll-reveal">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Loan Details</h3>
                <div className="space-y-4">
                  {loanDetails.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="h-5 w-5 text-green-600" />
                        <span className="text-gray-600">{item.label}</span>
                      </div>
                      <span className="font-semibold text-gray-900 text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 scroll-reveal">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Requirements</h3>
                <ul className="space-y-3">
                  {requirements.map((requirement) => (
                    <li key={requirement} className="flex items-center space-x-3">
                      <FaCheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{requirement}</span>
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
                  <span>Apply for Title Deed Loan</span>
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
                <FaUsers className="h-8 w-8 text-green-600" />
              </div>
              <blockquote className="text-xl text-gray-700 mb-6 italic">
                "I needed quick financing for a property deal, and Baron Capital's title deed loan service was exactly
                what I needed. Fast approval, competitive rates, and I kept ownership of my property!"
              </blockquote>
              <div className="font-semibold text-gray-900">Sarah Wanjiku</div>
              <div className="text-gray-600">Property Developer, Nairobi</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
