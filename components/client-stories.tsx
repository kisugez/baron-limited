"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { FaStar, FaQuoteLeft } from "react-icons/fa"

export function ClientStories() {
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

    const element = document.getElementById("client-stories")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      name: "Sarah Wanjiku",
      role: "Small Business Owner",
      content:
        "Baron Capital helped me expand my business with their asset finance solution. The process was smooth and the team was incredibly supportive throughout.",
      rating: 5,
    },
    {
      name: "James Mwangi",
      role: "Property Developer",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "I needed quick financing for a property deal, and their title deed loan service was exactly what I needed. Fast approval and competitive rates!",
      rating: 5,
    },
    {
      name: "Grace Akinyi",
      role: "Entrepreneur",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The logbook loan helped me during a cash flow challenge. I kept my car and got the funds I needed. Highly recommend Baron Capital!",
      rating: 5,
    },
  ]

  return (
    <section id="client-stories" className="py-24 gradient-blue-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "scroll-reveal revealed" : "scroll-reveal"}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people who have achieved their financial goals with Baron Capital
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg card-hover-effect ${
                isVisible ? "scroll-reveal revealed" : "scroll-reveal"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative mb-6">
                <FaQuoteLeft className="absolute -top-2 -left-2 h-8 w-8 text-blue-200" />
                <p className="text-gray-700 leading-relaxed pl-6">{testimonial.content}</p>
              </div>

              <div className="flex items-center space-x-4">
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
