"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FaHome, FaCar, FaCheckCircle, FaCalculator, FaChartLine, FaDollarSign, FaClock, FaShieldAlt, FaUsers } from "react-icons/fa"
import { MovingIcons } from "@/components/moving-icons"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export default function PropertyVehiclesPage() {
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

  const propertyTypes = [
    {
      title: "Residential Properties",
      description: "Houses, apartments, and residential land",
      features: ["Home purchase loans", "Construction financing", "Land acquisition", "Refinancing options"],
      rate: "From 12% p.a.",
      amount: "Up to KSh 50M",
      period: "Up to 25 years",
    },
    {
      title: "Commercial Properties",
      description: "Office buildings, retail spaces, warehouses",
      features: ["Commercial mortgages", "Investment property loans", "Development finance", "Portfolio financing"],
      rate: "From 14% p.a.",
      amount: "Up to KSh 100M",
      period: "Up to 20 years",
    },
    {
      title: "Industrial Properties",
      description: "Factories, manufacturing facilities",
      features: ["Industrial mortgages", "Factory construction", "Equipment integration", "Expansion financing"],
      rate: "From 13% p.a.",
      amount: "Up to KSh 200M",
      period: "Up to 15 years",
    },
  ]

  const vehicleTypes = [
    {
      title: "Personal Vehicles",
      description: "Cars, motorcycles, personal transport",
      features: ["New car loans", "Used car financing", "Motorcycle loans", "Refinancing options"],
      rate: "From 15% p.a.",
      amount: "Up to KSh 10M",
      period: "Up to 7 years",
    },
    {
      title: "Commercial Vehicles",
      description: "Trucks, buses, delivery vehicles",
      features: ["Fleet financing", "Truck loans", "Bus financing", "Delivery vehicles"],
      rate: "From 16% p.a.",
      amount: "Up to KSh 20M",
      period: "Up to 5 years",
    },
    {
      title: "Specialized Vehicles",
      description: "Construction equipment, agricultural machinery",
      features: ["Construction equipment", "Agricultural machinery", "Heavy machinery", "Specialized transport"],
      rate: "From 17% p.a.",
      amount: "Up to KSh 50M",
      period: "Up to 10 years",
    },
  ]

  const benefits = [
    {
      icon: FaDollarSign,
      title: "Competitive Rates",
      description: "Best market rates for all property and vehicle loans",
    },
    { icon: FaClock, title: "Quick Approval", description: "Fast processing with decisions within 48-72 hours" },
    { icon: FaShieldAlt, title: "Flexible Terms", description: "Customizable repayment plans to suit your budget" },
    { icon: FaUsers, title: "Expert Support", description: "Dedicated relationship managers for personalized service" },
  ]

  return (
    <div className="min-h-screen page-enter bg-gray-100">
      {/* Hero Section - updated to match About Us style */}
      <section className="relative w-full h-[340px] md:h-[520px] flex items-center overflow-hidden p-0">
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image
            src="/stylish-young-man-beach.jpg"
            alt="Property background"
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
          <div className="inline-flex items-center space-x-4 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-4">
            <FaHome className="h-6 w-6 text-white" />
            <span className="text-white/60">•</span>
            <FaCar className="h-6 w-6 text-white" />
            <span className="font-semibold text-white">Property & Vehicle Finance</span>
          </div>
          <h1 className="text-white text-2xl md:text-4xl font-extrabold leading-tight mb-2 drop-shadow-lg">
            Finance Your Dreams
            <br />
            <span className="text-white/90">Property & Vehicle Solutions</span>
          </h1>
          <p className="text-white/80 text-sm md:text-lg font-medium leading-relaxed mb-2 max-w-lg">
            Whether you're buying your dream home, investing in commercial property, or financing your next vehicle, we provide comprehensive solutions with competitive rates and flexible terms.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-section gradient-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Financing?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our customer-focused approach and competitive financing solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 card-hover-effect scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: "#041a55" }}>
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Finance Section - improved arrangement, images occupy full right, no border */}
      <section className="py-section gradient-blue-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 items-start">
            {/* Left: Two property cards stacked */}
            <div className="flex flex-col gap-8 justify-between h-full">
              {propertyTypes.slice(0,2).map((property, index) => (
                <div
                  key={property.title}
                  className="bg-white/70 backdrop-blur-sm rounded-xl p-6 card-hover-effect scroll-reveal h-1/2 flex-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-3">{property.description}</p>
                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{property.rate}</div>
                      <div className="text-gray-600">Interest Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{property.amount}</div>
                      <div className="text-gray-600">Max Amount</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{property.period}</div>
                      <div className="text-gray-600">Repayment</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {property.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <FaCheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* Right: Top image and bottom card occupy full height */}
            <div className="flex flex-col gap-8 h-full justify-between">
              <div className="flex-1 w-full">
                <Image
                  src="/three-dimensional-house-model-Photoroom.png?height=500&width=400"
                  alt="Property Finance"
                  width={800}
                  height={400}
                  className="object-cover w-full h-full"
                  style={{border: 'none'}}
                />
              </div>
              <div className="flex-1 w-full">
                <div
                  className="bg-white/70 backdrop-blur-sm rounded-xl p-6 card-hover-effect scroll-reveal h-full"
                  style={{ animationDelay: `0.2s` }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{propertyTypes[2].title}</h3>
                  <p className="text-gray-600 mb-3">{propertyTypes[2].description}</p>
                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{propertyTypes[2].rate}</div>
                      <div className="text-gray-600">Interest Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{propertyTypes[2].amount}</div>
                      <div className="text-gray-600">Max Amount</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{propertyTypes[2].period}</div>
                      <div className="text-gray-600">Repayment</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {propertyTypes[2].features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <FaCheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Finance Section - improved arrangement, images occupy full left, no border */}
      <section className="py-section gradient-blue-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 items-start">
            {/* Left: Top image and bottom card occupy full height */}
            <div className="flex flex-col gap-8 h-full justify-between">
              <div className="flex-1 w-full">
                <Image
                  src="/11341418-Photoroom.png?height=500&width=400"
                  alt="Vehicle Finance"
                  width={800}
                  height={400}
                  className="object-cover w-full h-full"
                  style={{border: 'none'}}
                />
              </div>
              <div className="flex-1 w-full">
                <div
                  className="bg-white/70 backdrop-blur-sm rounded-xl p-6 card-hover-effect scroll-reveal h-full"
                  style={{ animationDelay: `0.2s` }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicleTypes[2].title}</h3>
                  <p className="text-gray-600 mb-3">{vehicleTypes[2].description}</p>
                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{vehicleTypes[2].rate}</div>
                      <div className="text-gray-600">Interest Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{vehicleTypes[2].amount}</div>
                      <div className="text-gray-600">Max Amount</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{vehicleTypes[2].period}</div>
                      <div className="text-gray-600">Repayment</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {vehicleTypes[2].features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <FaCheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Right: Two vehicle cards stacked */}
            <div className="flex flex-col gap-8 justify-between h-full">
              {vehicleTypes.slice(0,2).map((vehicle, index) => (
                <div
                  key={vehicle.title}
                  className="bg-white/70 backdrop-blur-sm rounded-xl p-6 card-hover-effect scroll-reveal h-1/2 flex-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicle.title}</h3>
                  <p className="text-gray-600 mb-3">{vehicle.description}</p>
                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{vehicle.rate}</div>
                      <div className="text-gray-600">Interest Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{vehicle.amount}</div>
                      <div className="text-gray-600">Max Amount</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{vehicle.period}</div>
                      <div className="text-gray-600">Repayment</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {vehicle.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <FaCheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section gradient-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 scroll-reveal">
            <h2 className="text-3xl font-bold text-gray-900">Ready to Make Your Move?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether it's property or vehicles, our expert team is ready to help you secure the financing you need with
              terms that work for your budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="rounded-full text-white px-8 py-3 hover-lift"
                style={{ backgroundColor: "#041a55" }}
                asChild
              >
                <Link href="/contact" className="flex items-center space-x-2">
                  <FaChartLine className="h-5 w-5" />
                  <span>Start Your Application</span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-3 hover-lift bg-transparent"
                style={{ borderColor: "#041a55", color: "#041a55" }}
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
