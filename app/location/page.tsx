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
    <div className="min-h-screen  page-enter">
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

      {/* Location Details - alternating layout for each branch, reduced map width, spacing, and white bg for middle */}
      <section className="py-16 gradient-blue-light">
        <div className="space-y-16">
          {/* Main Branch - Map Left, Details Right */}
          <div className="w-full grid md:grid-cols-2 gap-8 items-center">
            <div className="order-1 md:order-1 flex justify-center">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl border-2 border-blue-700/30 shadow-xl overflow-hidden w-full max-w-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255285.78415500378!2d36.545091128125!3d-1.268605807114327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f05277f6b2877%3A0x2fea93ffce995873!2sBARON%20CAPITAL%20LIMITED!5e0!3m2!1sen!2sqa!4v1751576532766!5m2!1sen!2sqa"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Baron Capital Map"
                  className="rounded-xl w-full"
                ></iframe>
              </div>
            </div>
            <div className="order-2 md:order-2 flex flex-col gap-2 px-6 md:px-12 justify-center">
              <h2 className="text-2xl font-bold text-gray-900">Current Main Branch</h2>
              <p className="text-base text-gray-700">
                Located in the heart of Nairobi, our main branch offers easy access via public and private transport. Enjoy personalized service, secure processing, and instant decisions in a modern, welcoming environment. Parking is available nearby, and our team is ready to assist you with all your financial needs.
              </p>
              <a href="https://maps.app.goo.gl/jrH2XpxY4CV3sBNe9" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline text-xs mt-1">Open in Google Maps</a>
            </div>
          </div>
          {/* Jewel Complex Branch - Details Left, Map Right, white bg */}
          <div className="w-full grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl py-8">
            <div className="order-2 md:order-1 flex flex-col gap-2 px-6 md:px-12 justify-center">
              <h2 className="text-2xl font-bold text-blue-900">Jewel Complex Branch</h2>
              <p className="text-base text-gray-700">
                Our Jewel Complex branch is conveniently located for clients in the eastern Nairobi region. Visit us for face-to-face consultations, secure document processing, and expert financial guidance. Easily accessible by car or public transport, with clear signage and a friendly team to welcome you.
              </p>
              <a href="https://maps.app.goo.gl/jrH2XpxY4CV3sBNe9" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline text-xs mt-1">Open in Google Maps</a>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl border-2 border-blue-700/30 shadow-xl overflow-hidden w-full max-w-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9147668953156!2d36.887420075319376!3d-1.2193999987689543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f15001ea5a7cf%3A0x4f6d959e1d215455!2sJEWEL%20COMPLEX!5e0!3m2!1sen!2sqa!4v1751690230909!5m2!1sen!2sqa"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jewel Complex Branch"
                  className="rounded-xl w-full"
                ></iframe>
              </div>
            </div>
          </div>
          {/* Ngong Business Arcade Branch - Map Left, Details Right */}
          <div className="w-full grid md:grid-cols-2 gap-8 items-center">
            <div className="order-1 md:order-1 flex justify-center">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl border-2 border-blue-700/30 shadow-xl overflow-hidden w-full max-w-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6967492859353!2d36.65371407531964!3d-1.3585781986285457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0321a19fa635%3A0x6b08bcc9d46155f4!2sNgong%20Business%20Arcade!5e0!3m2!1sen!2sqa!4v1751690459517!5m2!1sen!2sqa"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ngong Business Arcade Branch"
                  className="rounded-xl w-full"
                ></iframe>
              </div>
            </div>
            <div className="order-2 md:order-2 flex flex-col gap-2 px-6 md:px-12 justify-center">
              <h2 className="text-2xl font-bold text-blue-900">Ngong Business Arcade Branch</h2>
              <p className="text-base text-gray-700">
                Serving the Ngong and surrounding areas, this branch is ideal for clients seeking quick access and expert support. Find us in the Ngong Business Arcade, with ample parking and easy access by public transport. Our team is ready to help you with all your financial needs in a secure, comfortable setting.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              size="md"
              className="rounded-full text-white hover-lift px-6 py-2"
              style={{ backgroundColor: "#041a55" }}
              asChild
            >
              <Link href="/contact">Schedule a Visit</Link>
            </Button>
            <Button
              size="md"
              variant="outline"
              className="rounded-full hover-lift bg-transparent px-6 py-2"
              style={{ borderColor: "#041a55", color: "#041a55" }}
              asChild
            >
              <a href="tel:+254700000000">Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
