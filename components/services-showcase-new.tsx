"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaCar, FaHome, FaBuilding, FaChartLine, FaShieldAlt, FaRedo, FaCheckCircle } from "react-icons/fa"
import { MovingIcons } from "@/components/moving-icons"

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

  return (
    <section id="services-showcase" className="py-24 gradient-blue-section relative overflow-hidden">
      {/* MovingIcons background for this section only, with dark blue icons */}
      <MovingIcons variant="background" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Main Heading */}
          <div className={`space-y-8 ${isVisible ? "scroll-reveal revealed" : "scroll-reveal"}`}>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Double the volumes with a fraction of the <span style={{ color: "#041a55" }}>effort</span>
            </h2>
          </div>

          {/* Right Side - Description */}
          <div
            className={`space-y-8 ${isVisible ? "scroll-reveal revealed" : "scroll-reveal"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              Get the best of every financial solution. Baron Capital puts an expansive network of loan products at your
              fingertips, and seamlessly matches them with the one best suited to meet your needs.
            </p>
            <Button
              className="rounded-full px-8 py-4 text-white font-medium hover-lift"
              style={{ backgroundColor: "#041a55" }}
              asChild
            >
              <Link href="/contact">Book a consultation</Link>
            </Button>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {/* Card 1 - Loan Products */}
          <div
            className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 card-hover-effect ${isVisible ? "scroll-reveal revealed" : "scroll-reveal"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">6+ loan products in one platform</h3>

              <div className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Loan Type</span>
                      <span className="text-sm font-medium" style={{ color: "#041a55" }}>
                        Logbook
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Amount</span>
                      <span className="text-lg font-bold text-gray-900">KSh 500K</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Rate</span>
                      <span className="text-sm font-medium text-green-600">2.5% monthly</span>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-2 -right-2 bg-white rounded-xl p-3 shadow-lg">
                  <FaCar className="h-5 w-5" style={{ color: "#041a55" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Service Coverage */}
          <div
            className={`rounded-3xl p-8 card-hover-effect text-white ${isVisible ? "scroll-reveal revealed" : "scroll-reveal"}`}
            style={{ background: "linear-gradient(135deg, #041a55 0%, #0f2a6b 100%)", animationDelay: "0.4s" }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">6+ financial services</h3>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: FaCar, label: "Logbook" },
                  { icon: FaHome, label: "Title Deed" },
                  { icon: FaBuilding, label: "Asset" },
                  { icon: FaChartLine, label: "Trade" },
                  { icon: FaShieldAlt, label: "Bonds" },
                  { icon: FaRedo, label: "Buy-off" },
                ].map((service, index) => (
                  <div key={service.label} className="text-center">
                    <div className="bg-white/20 rounded-full p-3 mx-auto mb-2 w-fit">
                      <service.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-xs text-white/80">{service.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3 - Smart Matching */}
          <div
            className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 card-hover-effect ${isVisible ? "scroll-reveal revealed" : "scroll-reveal"}`}
            style={{ animationDelay: "0.5s" }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Smart matching to optimize approvals</h3>

              <div className="space-y-3">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                        style={{ backgroundColor: "#041a55" }}
                      >
                        B
                      </div>
                      <span className="font-medium text-gray-900">Baron Capital</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaCheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-green-600 font-medium">Best match</span>
                    </div>
                  </div>
                  <div className="mt-2 text-right">
                    <span className="text-lg font-bold text-gray-900">2.5%</span>
                    <span className="text-sm text-gray-600 ml-1">monthly</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm opacity-60">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        O
                      </div>
                      <span className="font-medium text-gray-700">Other Lender</span>
                    </div>
                  </div>
                  <div className="mt-2 text-right">
                    <span className="text-lg font-bold text-gray-700">3.2%</span>
                    <span className="text-sm text-gray-500 ml-1">monthly</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm opacity-40">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        A
                      </div>
                      <span className="font-medium text-gray-700">Alternative</span>
                    </div>
                  </div>
                  <div className="mt-2 text-right">
                    <span className="text-lg font-bold text-gray-700">4.1%</span>
                    <span className="text-sm text-gray-500 ml-1">monthly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-20 ${isVisible ? "scroll-reveal revealed" : "scroll-reveal"}`}
          style={{ animationDelay: "0.8s" }}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to transform your financial journey?</h3>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of satisfied customers who have achieved their financial goals with Baron Capital's
              innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="rounded-full px-8 py-4 text-lg font-medium text-white hover-lift"
                style={{ backgroundColor: "#041a55" }}
                asChild
              >
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-4 text-lg font-medium hover-lift bg-transparent"
                style={{ borderColor: "#041a55", color: "#041a55" }}
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function FinancialServicesShowcase() {
  const services = [
    {
      icon: FaCar,
      title: "Logbook Loans",
      description: "Quick cash loans using your vehicle as collateral. Keep driving while you repay with flexible terms.",
    },
    {
      icon: FaHome,
      title: "Title Deed Loans",
      description: "Unlock the value of your property with fast, affordable loans secured by your title deed.",
    },
    {
      icon: FaChartLine,
      title: "Business Finance",
      description: "Grow your business with tailored financing solutions and competitive rates for SMEs.",
    },
  ]
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-blue-900 scroll-reveal">Our Financial Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`bg-blue-50 rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition scroll-reveal`}
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              <div className="p-4 bg-blue-600 rounded-full mb-4">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">{service.title}</h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .scroll-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1);
        }
        .scroll-reveal.revealed {
          opacity: 1;
          transform: none;
        }
      `}</style>
    </section>
  )
}
