"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaCar, FaCheckCircle, FaArrowRight, FaCalculator, FaRegClock, FaShieldAlt, FaDollarSign, FaFileAlt, FaUsers } from "react-icons/fa"
import { MovingIcons } from "@/components/moving-icons"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export default function LogbookLoansPage() {
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
    "Keep driving your vehicle",
    "Quick approval process",
    "Competitive interest rates",
    "Flexible repayment terms",
    "No hidden charges",
    "Professional valuation",
    "Same day disbursement",
    "Transparent pricing",
  ]

  const requirements = [
    "Original vehicle logbook",
    "National ID or Passport",
    "KRA PIN certificate",
    "Proof of income",
    "Vehicle insurance",
    "Vehicle inspection",
  ]

  const loanDetails = [
    { label: "Loan Amount", value: "Up to 70% of vehicle value", icon: FaDollarSign },
    { label: "Interest Rate", value: "From 2.5% per month", icon: FaCalculator },
    { label: "Repayment Period", value: "Up to 24 months", icon: FaRegClock },
    { label: "Processing Time", value: "24 hours", icon: FaShieldAlt },
  ]

  return (
    <div className="min-h-screen  page-enter">
      {/* Hero Section - updated to match About Us style */}
      <section className="relative w-full h-[340px] md:h-[520px] flex items-center overflow-hidden p-0">
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image
            src="/handsome-elegant-man-car-salon.jpg"
            alt="Service background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <div className="absolute left-0 top-0 h-full w-2/3"
              style={{
                background: 'linear-gradient(90deg,rgba(3, 7, 17, 0.8) 0%,rgba(7, 14, 32, 0.6) 40%, transparent 100%)',
              }}
            />
          </div>
        </div>
        <div className="relative z-10 flex flex-col justify-center items-start h-full pl-8 md:pl-16 max-w-2xl">
          <h1 className="text-white text-2xl md:text-4xl font-extrabold leading-tight mb-2 drop-shadow-lg">
            Logbook Loans
          </h1>
          <p className="text-white/80 text-sm md:text-lg font-medium leading-relaxed mb-2 max-w-lg">
            Get instant cash using your vehicle as collateral, with fast approval and flexible terms.
          </p>
        </div>
      </section>

      {/* Features & Process */}
      <section className="py-section gradient-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="scroll-reveal">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Logbook Loans?</h2>
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
                      title: "Apply Online or Visit Us",
                      description: "Submit your application with required documents",
                      icon: FaFileAlt,
                    },
                    {
                      step: "2",
                      title: "Vehicle Valuation",
                      description: "Our experts assess your vehicle's current market value",
                      icon: FaCalculator,
                    },
                    {
                      step: "3",
                      title: "Get Your Cash",
                      description: "Receive funds within 24 hours of approval",
                      icon: FaDollarSign,
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <item.icon className="h-5 w-5 text-blue-600" />
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
                        <item.icon className="h-5 w-5 text-blue-600" />
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
                  <span>Apply for Logbook Loan</span>
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
                <FaUsers className="h-8 w-8 text-blue-600" />
              </div>
              <blockquote className="text-xl text-gray-700 mb-6 italic">
                "Baron Capital's logbook loan helped me during a cash flow challenge. I kept my car and got the funds I
                needed quickly. The process was transparent and the team was professional throughout."
              </blockquote>
              <div className="font-semibold text-gray-900">James Mwangi</div>
              <div className="text-gray-600">Business Owner, Nairobi</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
