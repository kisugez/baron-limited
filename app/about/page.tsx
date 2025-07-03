"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { FaShieldAlt, FaBullseye, FaHeart, FaEye, FaUsers, FaAward, FaChartLine } from "react-icons/fa"
import { MovingIcons } from "@/components/moving-icons"
import { useScrollReveal } from "@/hooks/useScrollReveal"

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
    <div className="min-h-screen pt-16 page-enter">
      {/* Hero Section */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #041a55 0%, #0f2a6b 100%)" }}
      >
        <MovingIcons variant="background" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full animate-float-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center space-y-8 ${isVisible ? "scroll-reveal revealed" : "scroll-reveal"}`}>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">About Baron Capital Limited</h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              We are a leading financial services company in Kenya, committed to providing innovative and accessible
              financial solutions that empower individuals and businesses to achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 gradient-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 scroll-reveal`}>
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded with a vision to democratize access to financial services in Kenya, Baron Capital Limited has
                  grown from a small startup to a trusted financial partner for thousands of Kenyans.
                </p>
                <p>
                  Our journey began with a simple belief: everyone deserves access to fair, transparent, and affordable
                  financial services. This belief continues to drive our mission today as we expand our services and
                  reach more communities across Kenya.
                </p>
                <p>
                  Today, we are proud to be a licensed and regulated financial institution, offering a comprehensive
                  range of loan products and financial services designed to meet the diverse needs of our clients.
                </p>
              </div>
            </div>

            <div className={`scroll-reveal`}>
              <Image
                src="/baron logo.jpg?height=500&width=600"
                alt="Baron Capital Office"
                width={1000}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 gradient-blue-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 scroll-reveal`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Numbers that reflect our commitment to excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.label}
                className={`text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 card-hover-effect scroll-reveal`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-2xl" style={{ backgroundColor: "#041a55" }}>
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.value}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
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

      {/* Leadership Team */}
      <section className="py-24 gradient-blue-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 scroll-reveal`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals leading Baron Capital Limited
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className={`text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 card-hover-effect scroll-reveal`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  {/* Placeholder for member image, can be replaced with actual images */}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="font-medium mb-4" style={{ color: "#041a55" }}>
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
