"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { FaShieldAlt, FaBullseye, FaHeart, FaEye, FaUsers, FaAward, FaChartLine } from "react-icons/fa"
import { MovingIcons } from "@/components/moving-icons"
import { useScrollReveal } from "@/hooks/useScrollReveal"
import { ClientStories } from "@/components/client-stories"

export default function AboutPage() {
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

  const values = [
    {
      icon: FaBullseye,
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering superior financial solutions.",
    },
    {
      icon: FaHeart,
      title: "Customer First",
      description: "Our customers are at the heart of our business. We prioritize their needs and satisfaction.",
    },
    {
      icon: FaShieldAlt,
      title: "Integrity",
      description: "We conduct our business with the highest standards of integrity and transparency.",
    },
    {
      icon: FaEye,
      title: "Innovation",
      description: "We continuously innovate to provide cutting-edge financial solutions.",
    },
  ]

  const team = [
    {
      name: "John Kariuki",
      role: "Chief Executive Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Over 15 years of experience in financial services and banking sector.",
    },
    {
      name: "Mary Wanjiru",
      role: "Head of Operations",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Expert in operational excellence with a focus on customer satisfaction.",
    },
    {
      name: "David Ochieng",
      role: "Head of Credit",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Specialist in credit risk management and loan structuring.",
    },
  ]

  const achievements = [
    { icon: FaUsers, value: "5000+", label: "Satisfied Clients" },
    { icon: FaAward, value: "10+", label: "Years in Business" },
    { icon: FaChartLine, value: "KSh 2B+", label: "Loans Disbursed" },
    { icon: FaShieldAlt, value: "100%", label: "Regulatory Compliance" },
  ]

  return (
    <div className="min-h-screen pt-0 page-enter bg-gray-100">
      
      {/* Hero Section - full width, left-aligned */}
      <section className="relative w-full h-[340px] md:h-[520px] flex items-center overflow-hidden p-0">
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image
            src="/Screenshot 2025-09-04 at 11.19.15 PM.png"
            alt="About background"
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
          <h1 className="text-white text-2xl md:text-4xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Beyond Finance: Building Bridges to Prosperity
          </h1>
          <p className="text-white/90 text-sm md:text-lg font-medium leading-relaxed mb-2 max-w-lg">
            At Baron Capital, we’re more than a financial company: we’re bridge-builders. We connect Kenyans to their ambitions. By simplifying how people access capital, we unlock growth, open markets, and connect communities to prosperity.
          </p>
        </div>
      </section>

      {/* Our Story - left section uses provided team image */}
      <section className="py-20 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12 items-center">
          {/* Left: Provided team image with increased width */}
          <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-2xl">
            <Image src="/Screenshot 2025-09-04 at 11.13.59 PM.png" alt="Baron Capital Team" width={1200} height={700} className="object-cover w-full h-full" />
          </div>
          {/* Right: Details pushed right and smaller */}
          <div className="flex-1 md:pl-20">
            <h2 className="text-3xl font-extrabold text-[#003366] mb-3 flex items-center">
              Our Story <span className="ml-2 text-[#009FE3] text-2xl">&#x27A4;</span>
            </h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed max-w-md">
              <p>
                Across Kenya, financial solutions are more than transactions. They are gateways to prosperity, connecting people, businesses, and communities to opportunities and growth.
              </p>
              <p>
                From enabling entrepreneurs in Nairobi to expand their businesses, to supporting families in Kisumu to secure their future, Baron Capital is the bridge that makes it all possible.
              </p>
              <p>
                Through trusted expertise and customer-centric innovation, we build connections that inspire progress, strengthen local economies, and create lasting impact.
              </p>
              <p>
                Since 2013, our transformative journey has been defined by relentless innovation, collaboration, and an unwavering belief in improving lives through accessible, people-centered financial services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 gradient-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 scroll-reveal`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 card-hover-effect scroll-reveal`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-2xl" style={{ backgroundColor: "#041a55" }}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
,     <ClientStories />
    </div>
  )
}
