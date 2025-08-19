"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FaRedo, FaCheckCircle, FaArrowRight, FaCalculator, FaChartLine, FaDollarSign, FaRegClock, FaUsers } from "react-icons/fa"
import { MovingIcons } from "@/components/moving-icons"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export default function LoanBuyoffPage() {
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

  const benefits = [
    "Lower interest rates",
    "Reduced monthly payments",
    "Single payment convenience",
    "Improved credit score",
    "Flexible repayment terms",
    "Professional debt management",
    "Stress reduction",
    "Better financial planning",
  ]

  const eligibleLoans = [
    { name: "Personal Loans", description: "High-interest personal loans from banks and SACCOs" },
    { name: "Credit Card Debt", description: "Outstanding credit card balances and overdrafts" },
    { name: "Payday Loans", description: "Short-term high-interest payday advances" },
    { name: "Microfinance Loans", description: "Multiple microfinance institution loans" },
    { name: "Multiple Bank Loans", description: "Various loans from different financial institutions" },
    { name: "High-Interest Debt", description: "Any high-cost debt affecting your cash flow" },
  ]

  const loanDetails = [
    { label: "Maximum Amount", value: "Up to KSh 20 Million", icon: FaDollarSign },
    { label: "Interest Rate", value: "Better terms guaranteed", icon: FaChartLine },
    { label: "Repayment Period", value: "Up to 60 months", icon: FaRegClock },
    { label: "Processing Time", value: "3-5 working days", icon: FaRedo },
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
                <div className="p-4 bg-indigo-500 rounded-2xl shadow-lg">
                  <FaRedo className="h-8 w-8 text-white" />
                </div>
                <span className="text-white font-semibold text-lg">Loan Buy-Off</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Simplify Your Finances with <span className="text-white/90">Smart Consolidation</span>
              </h1>

              <p className="text-xl text-white/80 leading-relaxed">
                Break free from multiple high-interest loans and regain control of your financial future. Our loan
                buy-off service consolidates your debts into one affordable payment with better terms.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full bg-white text-blue-900 hover:bg-white/90 px-8 py-3" asChild>
                  <Link href="/contact" className="flex items-center space-x-2">
                    <FaCalculator className="h-5 w-5" />
                    <span>Calculate Savings</span>
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 bg-transparent"
                  asChild
                >
                  <Link href="/contact">Get Debt Review</Link>
                </Button>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full w-fit mx-auto mb-2">
                    <FaDollarSign className="h-6 w-6 text-white" />
                  </div>
                  <div className="font-bold text-white">KSh 20M</div>
                  <div className="text-sm text-white/80">Max Amount</div>
                </div>
                <div className="text-center">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full w-fit mx-auto mb-2">
                    <FaChartLine className="h-6 w-6 text-white" />
                  </div>
                  <div className="font-bold text-white">Better</div>
                  <div className="text-sm text-white/80">Terms</div>
                </div>
                <div className="text-center">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full w-fit mx-auto mb-2">
                    <FaRegClock className="h-6 w-6 text-white" />
                  </div>
                  <div className="font-bold text-white">3-5 Days</div>
                  <div className="text-sm text-white/80">Processing</div>
                </div>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Loans We Can Buy Off</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {eligibleLoans.map((loan, index) => (
                    <div key={loan.name} className="bg-white/70 backdrop-blur-sm rounded-xl p-4 card-hover-effect">
                      <div className="flex items-start space-x-3">
                        <FaRedo className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{loan.name}</h4>
                          <p className="text-sm text-gray-600">{loan.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="scroll-reveal">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Loan Buy-Off</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={benefit} className="flex items-center space-x-3">
                      <FaCheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 scroll-reveal">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">How Loan Buy-Off Works</h3>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Debt Assessment",
                      description: "We analyze all your existing loans, interest rates, and payment terms",
                    },
                    {
                      step: "2",
                      title: "Consolidation Plan",
                      description: "Create a customized plan to pay off all your debts with better terms",
                    },
                    {
                      step: "3",
                      title: "Loan Approval",
                      description: "Get approved for a single consolidation loan with lower interest rates",
                    },
                    {
                      step: "4",
                      title: "Debt Settlement",
                      description: "We pay off all your existing loans directly to the lenders",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-indigo-500 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
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
                <h3 className="text-xl font-bold text-gray-900 mb-6">Buy-Off Terms</h3>
                <div className="space-y-4">
                  {loanDetails.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="h-5 w-5 text-indigo-600" />
                        <span className="text-gray-600">{item.label}</span>
                      </div>
                      <span className="font-semibold text-gray-900 text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 scroll-reveal">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Why Consolidate?</h3>
                <ul className="space-y-3">
                  {[
                    "Reduce monthly payments",
                    "Lower interest rates",
                    "Simplify finances",
                    "Improve credit score",
                    "Reduce stress",
                    "Better budgeting",
                  ].map((reason) => (
                    <li key={reason} className="flex items-center space-x-3">
                      <FaChartLine className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{reason}</span>
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
                  <span>Apply for Buy-Off</span>
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
                <FaUsers className="h-8 w-8 text-indigo-600" />
              </div>
              <blockquote className="text-xl text-gray-700 mb-6 italic">
                "Baron Capital's loan buy-off service was a game-changer for me. I went from paying 5 different loans to
                just one affordable payment. My stress levels dropped significantly and I'm saving money every month."
              </blockquote>
              <div className="font-semibold text-gray-900">Mary Njeri</div>
              <div className="text-gray-600">Teacher, Nairobi</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
