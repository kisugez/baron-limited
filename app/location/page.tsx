"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaRegClock, FaCompass, FaCar, FaUsers, FaShieldAlt } from "react-icons/fa"
import Link from "next/link"
import { MovingIcons } from "@/components/moving-icons"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export default function LocationPage() {
  useScrollReveal();
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
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">Visit Our Office</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Located in the heart of Nairobi CBD, our office is easily accessible and designed to provide you with the
              best service experience.
            </p>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-24 gradient-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Map Placeholder */}
            <div className={`scroll-reveal`}>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl h-96 flex items-center justify-center shadow-lg">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255285.78415500378!2d36.545091128125!3d-1.268605807114327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f05277f6b2877%3A0x2fea93ffce995873!2sBARON%20CAPITAL%20LIMITED!5e0!3m2!1sen!2sqa!4v1751576532766!5m2!1sen!2sqa"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Baron Capital Map"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Location Information */}
            <div className={`space-y-8 scroll-reveal`}>
              <h2 className="text-3xl font-bold text-gray-900">Our Location</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-white/60 backdrop-blur-sm rounded-2xl p-6">
                  <div className="p-3 rounded-full" style={{ backgroundColor: "#041a55" }}>
                    <FaMapMarkerAlt className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">Baron Capital Limited</p>
                    <p className="text-gray-600">Kimathi Street</p>
                    <p className="text-gray-600">Nairobi CBD, Kenya</p>
                  </div>
                </div>

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
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white/60 backdrop-blur-sm rounded-2xl p-6">
                  <div className="p-3 rounded-full" style={{ backgroundColor: "#041a55" }}>
                    <FaRegClock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white/60 backdrop-blur-sm rounded-2xl p-6">
                  <div className="p-3 rounded-full" style={{ backgroundColor: "#041a55" }}>
                    <FaCar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Parking</h3>
                    <p className="text-gray-600">Free parking available</p>
                    <p className="text-gray-600">Street parking and nearby lots</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="rounded-full text-white hover-lift"
                  style={{ backgroundColor: "#041a55" }}
                  asChild
                >
                  <Link href="/contact">Schedule a Visit</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full hover-lift bg-transparent"
                  style={{ borderColor: "#041a55", color: "#041a55" }}
                  asChild
                >
                  <a href="tel:+254700000000">Call Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Visit Section */}
      <section className="py-24 gradient-blue-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 scroll-reveal`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Visit Our Office?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience personalized service and expert financial guidance in our modern, welcoming environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaUsers,
                title: "Personal Consultation",
                description: "Face-to-face meetings with our financial experts",
              },
              {
                icon: FaShieldAlt,
                title: "Secure Processing",
                description: "Document verification and secure loan processing",
              },
              {
                icon: FaRegClock,
                title: "Instant Decisions",
                description: "Get immediate loan approval decisions",
              },
              {
                icon: FaCompass,
                title: "Expert Guidance",
                description: "Personalized financial advice and planning",
              },
            ].map((benefit, index) => (
              <div
                key={benefit.title}
                className={`text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 card-hover-effect scroll-reveal`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-2xl" style={{ backgroundColor: "#041a55" }}>
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Find Us */}
      <section className="py-24 gradient-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 scroll-reveal`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Find Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're conveniently located in Nairobi CBD with easy access via public transport and private vehicles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FaCar,
                title: "By Car",
                description: "Located on Kimathi Street in Nairobi CBD. Free parking available nearby.",
              },
              {
                icon: FaCompass,
                title: "Public Transport",
                description: "Accessible via matatu routes to CBD. Short walk from major bus stops.",
              },
              {
                icon: FaMapMarkerAlt,
                title: "Landmarks",
                description: "Near major CBD landmarks. Look for our distinctive blue signage.",
              },
            ].map((method, index) => (
              <div
                key={method.title}
                className={`text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 card-hover-effect scroll-reveal`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-2xl" style={{ backgroundColor: "#041a55" }}>
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
