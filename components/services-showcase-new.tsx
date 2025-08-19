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
    <section id="services-showcase" className="py-16 bg-[#f1f5f9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image with Cards on Corners */}
        <div className="relative flex justify-center items-center h-full w-full min-h-[480px]">
          <img
            src="pretty-young-african-lady-holding-her-phone-feeling-excited.jpg"
            alt="Founder"
            className="rounded-2xl object-cover w-full h-full max-w-[700px] max-h-[800px] shadow-xl"
          />
          {/* Top Left Card */}
          <div className="absolute top-6 left-6">
            <div className="bg-white/90 rounded-xl shadow-lg p-3 w-32">
              <h4 className="text-xs font-bold text-blue-900 mb-1">Logbook</h4>
              <p className="text-[10px] text-gray-600">KSh 500K<br/>2.5% monthly</p>
            </div>
          </div>
          {/* Top Right Card */}
          <div className="absolute top-6 right-6">
            <div className="bg-white/90 rounded-xl shadow-lg p-3 w-32">
              <h4 className="text-xs font-bold text-blue-900 mb-1">Title Deed</h4>
              <p className="text-[10px] text-gray-600">KSh 1M<br/>2.2% monthly</p>
            </div>
          </div>
          {/* Bottom Left Card */}
          <div className="absolute bottom-6 left-6">
            <div className="bg-white/90 rounded-xl shadow-lg p-3 w-32">
              <h4 className="text-xs font-bold text-blue-900 mb-1">Asset</h4>
              <p className="text-[10px] text-gray-600">KSh 800K<br/>2.8% monthly</p>
            </div>
          </div>
          {/* Bottom Right Card */}
          <div className="absolute bottom-6 right-6">
            <div className="bg-white/90 rounded-xl shadow-lg p-3 w-32">
              <h4 className="text-xs font-bold text-blue-900 mb-1">Trade</h4>
              <p className="text-[10px] text-gray-600">KSh 600K<br/>2.6% monthly</p>
            </div>
          </div>
        </div>

        {/* Right Side - Info and CTA */}
        <div className="flex flex-col justify-center items-start space-y-8">
          <div>
            <span className="inline-block bg-blue-100 text-blue-900 text-xs font-semibold rounded-full px-3 py-1 mb-3">WHY US</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Double the volumes with a fraction of the <span className="text-blue-700">effort</span></h2>
            <p className="text-base text-blue-800 mb-6 !mb-8">
              Get the best of every financial solution. Baron Capital puts an expansive network of loan products at your fingertips, and seamlessly matches them with the one best suited to meet your needs.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Ready to transform your financial journey?</h3>
              <p className="text-base text-blue-800 mb-6 !mb-8">
                Join thousands of satisfied customers who have achieved their financial goals with Baron Capital's innovative solutions.
              </p>
              <div className="flex gap-3">
                <Button
                  size="lg"
                  className="rounded-full px-6 py-3 text-base font-medium text-white hover-lift"
                  style={{ backgroundColor: "#041a55" }}
                  asChild
                >
                  <Link href="/contact">Get Started Today</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-6 py-3 text-base font-medium hover-lift bg-transparent"
                  style={{ borderColor: "#041a55", color: "#041a55" }}
                  asChild
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
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
