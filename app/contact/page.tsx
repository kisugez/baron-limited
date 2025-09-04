"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaRegClock, FaPaperPlane, FaRegCommentDots } from "react-icons/fa"
import { MovingIcons } from "@/components/moving-icons"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export default function ContactPage() {
  useScrollReveal()

  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen  page-enter bg-gray-100">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full -z-10">
          <img src="/pretty-young-african-lady-holding-her-phone-feeling-excited.jpg" alt="Contact background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <MovingIcons variant="background" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center space-y-8 ${isVisible ? "scroll-reveal revealed" : "scroll-reveal"}`}>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">Get in Touch</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Ready to take the next step? Contact us today and let's discuss how we can help you achieve your financial
              goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 gradient-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className={`scroll-reveal`}>
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="rounded-lg"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="rounded-lg"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="rounded-lg"
                        placeholder="+254 700 000 000"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select a service</option>
                        <option value="logbook-loans">Logbook Loans</option>
                        <option value="title-deed-loans">Title-Deed Loans</option>
                        <option value="asset-finance">Asset Finance</option>
                        <option value="trade-finance">Trade Finance</option>
                        <option value="bonds">Bid & Performance Bonds</option>
                        <option value="loan-buyoff">Loan Buy-Off</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="rounded-lg"
                      placeholder="Tell us about your financial needs and how we can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full text-white hover-lift"
                    style={{ backgroundColor: "#041a55" }}
                  >
                    <FaPaperPlane className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className={`space-y-8 scroll-reveal`}>
              <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-white/60 backdrop-blur-sm rounded-2xl p-6">
                  <div className="p-3 rounded-full" style={{ backgroundColor: "#041a55" }}>
                    <FaPhone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+254 700 000 000</p>
                    <p className="text-gray-600">+254 711 000 000</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white/60 backdrop-blur-sm rounded-2xl p-6">
                  <div className="p-3 rounded-full" style={{ backgroundColor: "#041a55" }}>
                    <FaEnvelope className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@baroncapital.co.ke</p>
                    <p className="text-gray-600">loans@baroncapital.co.ke</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white/60 backdrop-blur-sm rounded-2xl p-6">
                  <div className="p-3 rounded-full" style={{ backgroundColor: "#041a55" }}>
                    <FaMapMarkerAlt className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                    <p className="text-gray-600">Kimathi Street</p>
                    <p className="text-gray-600">Nairobi CBD</p>
                    <p className="text-gray-600">Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white/60 backdrop-blur-sm rounded-2xl p-6">
                  <div className="p-3 rounded-full" style={{ backgroundColor: "#041a55" }}>
                    <FaRegClock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div
                className="rounded-2xl p-6 text-white"
                style={{ background: "linear-gradient(135deg, #041a55 0%, #0f2a6b 100%)" }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <FaRegCommentDots className="h-6 w-6" />
                  <h3 className="text-xl font-bold">Quick Response Guarantee</h3>
                </div>
                <p className="mb-4 text-white/90">
                  We understand that financial needs are urgent. That's why we guarantee to respond to all inquiries
                  within 2 hours during business hours.
                </p>
                <div className="flex items-center space-x-2">
                  <FaRegClock className="h-5 w-5" />
                  <span className="font-medium">Average response time: 30 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
