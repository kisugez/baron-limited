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
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">Visit Our Offices</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our offices are easily accessible and designed to provide you with the
              best service experience.
            </p>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-24 gradient-blue-light">
        <div className="space-y-24">
          {/* Main Branch - Current Location */}
          <div className="w-full flex flex-col items-center">
            <div className="flex flex-col items-center mb-4">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-blue-900 to-blue-400 shadow-lg mb-2">
                <FaMapMarkerAlt className="text-white text-3xl" />
              </span>
              <h2 className="text-3xl font-bold text-gray-900 text-center">Current Main Branch </h2>
            </div>
            <div className="relative w-full max-w-5xl group transition-transform duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-100/60 to-transparent rounded-t-3xl z-10 pointer-events-none"></div>
              <div className="bg-white/80 backdrop-blur-md rounded-3xl border-4 border-blue-700/30 shadow-2xl overflow-hidden transition-shadow duration-300 group-hover:shadow-blue-300/60">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255285.78415500378!2d36.545091128125!3d-1.268605807114327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f05277f6b2877%3A0x2fea93ffce995873!2sBARON%20CAPITAL%20LIMITED!5e0!3m2!1sen!2sqa!4v1751576532766!5m2!1sen!2sqa"
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Baron Capital Map"
                  className="rounded-2xl w-full"
                ></iframe>
              </div>
            </div>
          </div>
          {/* Branch 1: Jewel Complex */}
          <div className="w-full flex flex-col items-center">
            <div className="flex flex-col items-center mb-4">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-blue-900 to-blue-400 shadow-lg mb-2">
                <FaMapMarkerAlt className="text-white text-3xl" />
              </span>
              <h2 className="text-3xl font-bold text-blue-900 text-center">Jewel Complex Branch</h2>
            </div>
            <div className="relative w-full max-w-5xl group transition-transform duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-100/60 to-transparent rounded-t-3xl z-10 pointer-events-none"></div>
              <div className="bg-white/80 backdrop-blur-md rounded-3xl border-4 border-blue-700/30 shadow-2xl overflow-hidden transition-shadow duration-300 group-hover:shadow-blue-300/60">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9147668953156!2d36.887420075319376!3d-1.2193999987689543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f15001ea5a7cf%3A0x4f6d959e1d215455!2sJEWEL%20COMPLEX!5e0!3m2!1sen!2sqa!4v1751690230909!5m2!1sen!2sqa"
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jewel Complex Branch"
                  className="rounded-2xl w-full"
                ></iframe>
              </div>
            </div>
            <a href="https://maps.app.goo.gl/jrH2XpxY4CV3sBNe9" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline text-sm text-center block mt-2">Open in Google Maps</a>
          </div>
          {/* Branch 2: Ngong Business Arcade */}
          <div className="w-full flex flex-col items-center">
            <div className="flex flex-col items-center mb-4">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-blue-900 to-blue-400 shadow-lg mb-2">
                <FaMapMarkerAlt className="text-white text-3xl" />
              </span>
              <h2 className="text-3xl font-bold text-blue-900 text-center">Ngong Business Arcade Branch</h2>
            </div>
            <div className="relative w-full max-w-5xl group transition-transform duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-100/60 to-transparent rounded-t-3xl z-10 pointer-events-none"></div>
              <div className="bg-white/80 backdrop-blur-md rounded-3xl border-4 border-blue-700/30 shadow-2xl overflow-hidden transition-shadow duration-300 group-hover:shadow-blue-300/60">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6967492859353!2d36.65371407531964!3d-1.3585781986285457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0321a19fa635%3A0x6b08bcc9d46155f4!2sNgong%20Business%20Arcade!5e0!3m2!1sen!2sqa!4v1751690459517!5m2!1sen!2sqa"
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ngong Business Arcade Branch"
                  className="rounded-2xl w-full"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
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
