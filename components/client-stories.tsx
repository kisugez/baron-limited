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
    <section id="client-stories" className="relative py-24">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src="/2148190687.jpg"
          alt="Happy client background"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-75"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-stretch">
        {/* Left side empty for transition */}
        <div className="md:w-1/2 w-full" />
        {/* Right Overlay with Testimonial - full height */}
        <div className="md:w-1/2 w-full flex items-center">
          <div className="bg-blue-900/70 backdrop-blur-lg rounded-2xl p-10 md:p-16 text-white w-full h-full flex flex-col justify-center transition-all duration-700">
            <h2 className="text-4xl font-bold mb-6">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <div className="mb-8">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonials[0].rating)].map((_, i) => (
                  <FaStar key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="relative mb-6">
                <FaQuoteLeft className="absolute -top-2 -left-2 h-10 w-10 text-blue-200" />
                <p className="text-xl leading-relaxed pl-12 italic">{testimonials[0].content}</p>
              </div>
              <div className="mt-6">
                <div className="font-semibold text-2xl">{testimonials[0].name}</div>
                <div className="text-base text-blue-100">{testimonials[0].role}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
