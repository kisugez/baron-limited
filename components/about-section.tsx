"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaCar, FaHome, FaBuilding, FaChartLine, FaShieldAlt, FaRedo, FaUsers, FaAward, FaRegClock } from "react-icons/fa"
import { FiArrowRight } from "react-icons/fi" // Ensure this is the correct library or file

export function AboutSection() {
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

    const element = document.getElementById("about-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const stats = [
    { icon: FaUsers, value: "5000+", label: "Happy Clients" },
    { icon: FaAward, value: "10+", label: "Years Experience" },
    { icon: FaRegClock, value: "24hrs", label: "Average Approval" },
    { icon: FaShieldAlt, value: "100%", label: "Secure Process" },
  ]

  return (
    <section id="about-section" className="py-24 gradient-blue-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? "scroll-reveal revealed" : "scroll-reveal"}`}>
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                About Baron Capital Limited
              </div>

              <h2 className="text-4xl font-bold text-gray-900">
                Your Trusted <span className="text-gradient">Financial Partner</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                At Baron Capital Limited, we believe in keeping you company on your financial journey. With over a
                decade of experience in the Kenyan financial sector, we provide innovative and accessible financial
                solutions tailored to meet your unique needs.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Our commitment to excellence, transparency, and customer satisfaction has made us a trusted partner for
                thousands of individuals and businesses across Kenya. We understand that every financial need is unique,
                which is why we offer personalized solutions with competitive rates and flexible terms.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl card-hover-effect ${isVisible ? "scroll-reveal revealed" : "scroll-reveal"}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <stat.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="rounded-full text-white hover-lift"
              style={{ backgroundColor: "#041a55" }}
              asChild
            >
              <Link href="/about" className="flex items-center space-x-2">
                <span>Read More About Us</span>
                <FiArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Right Content - Image */}
          <div
            className={`relative ${isVisible ? "scroll-reveal revealed" : "scroll-reveal"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              <Image
                src="/istockphoto-539207045-612x612.jpg?height=600&width=500"
                alt="Baron Capital Team"
                width={2000}
                height={800}
                className="rounded-2xl shadow-2xl"
              />

              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <FaShieldAlt className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Licensed & Regulated</div>
                    <div className="text-sm text-gray-600">Central Bank of Kenya</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
