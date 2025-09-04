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
    <div className="min-h-screen page-enter">
      {/* Hero Section - updated to match About Us style */}
      <section className="relative w-full h-[340px] md:h-[520px] flex items-center overflow-hidden p-0">
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image
            src="/smiling-businesswoman-shaking-hands-with-partner.jpg"
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
            Loan Buy-Off
          </h1>
          <p className="text-white/80 text-sm md:text-lg font-medium leading-relaxed mb-2 max-w-lg">
            Consolidate your loans into one affordable payment and regain control of your finances.
          </p>
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
