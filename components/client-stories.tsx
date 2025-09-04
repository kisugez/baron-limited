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
    <section id="client-stories" className="relative h-[320px] md:h-[360px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src="/2148190687.jpg"
          alt="Business team background"
          fill
          style={{ objectFit: "cover" }}
        />
        {/* Dark transparent overlay */}
        <div className="absolute inset-0 bg-[#003366]/80" />
      </div>
      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-white text-lg md:text-2xl font-bold text-center mb-2 drop-shadow-lg max-w-xl leading-tight">
          Empowering Kenyans to unlock new opportunities and achieve their financial goals
        </h1>
        <h2 className="text-white text-base md:text-lg font-medium text-center mb-6 drop-shadow max-w-md leading-tight">
          Flexible loans, fast approvals, and trusted support for your business and personal growth
        </h2>
        <a
          href="/contact"
          className="mt-2 px-6 py-2 rounded-full text-white text-base font-semibold shadow-lg hover:scale-105 transition border-2 border-white bg-transparent"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}
