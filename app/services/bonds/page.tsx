"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FaShieldAlt, FaCheckCircle, FaArrowRight, FaAward, FaDollarSign, FaRegClock, FaUsers } from "react-icons/fa"
import { MovingIcons } from "@/components/moving-icons"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export default function BondsPage() {
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

  const bondTypes = [
    { name: "Bid Bonds", description: "Guarantee your tender submissions and secure contracts" },
    { name: "Performance Bonds", description: "Assure contract completion and performance standards" },
    { name: "Advance Payment Bonds", description: "Secure advance payments from clients" },
    { name: "Retention Bonds", description: "Replace retention money held by clients" },
    { name: "Maintenance Bonds", description: "Guarantee maintenance and warranty periods" },
    { name: "Custom Bonds", description: "Tailored bond solutions for specific requirements" },
  ]

  const features = [
    "Government tender support",
    "Private sector contracts",
    "Quick bond issuance",
    "Competitive premiums",
    "Expert guidance",
    "Reliable backing",
    "Professional documentation",
    "Renewal services",
  ]

  const loanDetails = [
    { label: "Bond Amount", value: "Up to KSh 100 Million", icon: FaDollarSign },
    { label: "Premium Rate", value: "From 1.5% annually", icon: FaAward },
    { label: "Validity Period", value: "As per tender requirements", icon: FaRegClock },
    { label: "Processing Time", value: "24-48 hours", icon: FaShieldAlt },
  ]

  return (
    <div className="min-h-screen  page-enter">
      {/* Hero Section - updated to match About Us style */}
      <section className="relative w-full h-[340px] md:h-[520px] flex items-center overflow-hidden p-0">
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image
            src="/2148190687.jpg"
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
            Bid & Performance Bonds
          </h1>
          <p className="text-white/80 text-sm md:text-lg font-medium leading-relaxed mb-2 max-w-lg">
            Secure your contracts and tenders with fast, reliable bond solutions from Baron Capital.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-section gradient-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="scroll-reveal">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Bonds We Offer</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {bondTypes.map((bond, index) => (
                    <div key={bond.name} className="bg-white/70 backdrop-blur-sm rounded-xl p-4 card-hover-effect">
                      <div className="flex items-start space-x-3">
                        <FaShieldAlt className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{bond.name}</h4>
                          <p className="text-sm text-gray-600">{bond.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="scroll-reveal">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Bond Services?</h3>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Bond Application Process</h3>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Tender Analysis",
                      description: "We review your tender documents and bond requirements",
                    },
                    {
                      step: "2",
                      title: "Application Submission",
                      description: "Submit bond application with required documentation",
                    },
                    {
                      step: "3",
                      title: "Quick Approval",
                      description: "Fast-track approval process for urgent tenders",
                    },
                    {
                      step: "4",
                      title: "Bond Issuance",
                      description: "Receive your bond certificate ready for submission",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-500 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
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
                <h3 className="text-xl font-bold text-gray-900 mb-6">Bond Details</h3>
                <div className="space-y-4">
                  {loanDetails.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="h-5 w-5 text-red-600" />
                        <span className="text-gray-600">{item.label}</span>
                      </div>
                      <span className="font-semibold text-gray-900 text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 scroll-reveal">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Bond Advantages</h3>
                <ul className="space-y-3">
                  {[
                    "Tender qualification",
                    "Contract security",
                    "Risk mitigation",
                    "Professional credibility",
                    "Competitive advantage",
                    "Peace of mind",
                  ].map((advantage) => (
                    <li key={advantage} className="flex items-center space-x-3">
                      <FaCheckCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{advantage}</span>
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
                  <span>Apply for Bond</span>
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
                <FaUsers className="h-8 w-8 text-red-600" />
              </div>
              <blockquote className="text-xl text-gray-700 mb-6 italic">
                "Baron Capital's bond services have been instrumental in helping us secure major government contracts.
                Their quick processing and competitive rates give us a significant advantage in tenders."
              </blockquote>
              <div className="font-semibold text-gray-900">Peter Kamau</div>
              <div className="text-gray-600">Construction Company Director, Nairobi</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
