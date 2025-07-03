"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { FaShieldAlt, FaRegClock, FaChartLine } from "react-icons/fa"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      className="relative min-h-screen h-full flex items-center justify-start overflow-hidden" // items-center justify-start
      style={{ background: "none" }}
    >
      {/* Background image with left-side blue overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/images/african-american-young-freelancers-couch-sharing-business-idea.jpg"
          alt="Hero Background"
          className="object-cover w-full h-full"
          style={{ objectPosition: 'left center', opacity: 0.85 }}
          draggable={false}
        />
        <div className="absolute inset-0 w-full h-full" style={{background: 'linear-gradient(90deg, rgba(4,26,85,0.70) 0%, rgba(4,26,85,0.40) 30%, rgba(4,26,85,0.0) 70%, rgba(4,26,85,0.0) 100%)'}} />
        {/* Removed MovingIcons for a cleaner, more transparent left side */}
      </div>
      <div className="relative w-full max-w-3xl px-0 sm:px-0 lg:px-0 z-10 h-full min-h-screen flex items-center justify-start"> {/* items-center justify-start */}
        {/* Vertically centered, left-aligned Content Only */}
        <div className={`space-y-6 ${isVisible ? "animate-slide-up" : ""} flex flex-col justify-center items-start w-full pl-8 pr-4`} style={{zIndex:2}}> {/* items-start, pl-8 */}
          <div className="space-y-3 w-full max-w-sm">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-left">
              <span className="text-white block">Stay in control</span>
              <span className="text-white/90 block">of timely</span>
              <span className="text-white/90 block">payments</span>
            </h1>
            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed w-full text-left"> {/* text-left */}
              Access a range of flexible and accessible loan options tailored to your needs. With low interest rates and lightning-fast approvals, achieving your goals has never been easier!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full max-w-sm justify-start items-start"> {/* justify-start items-start */}
            <Button
              size="sm"
              className="rounded-full bg-white text-blue-900 px-4 py-1.5 text-sm font-medium hover-lift hover:shadow-xl transition-all duration-300 hover:bg-white/90"
              asChild
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="rounded-full px-4 py-1.5 text-sm font-medium hover-lift bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-all duration-300"
              asChild
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
          {/* Trust Indicators - left-aligned with icons, smaller */}
          <div className="flex flex-wrap gap-4 pt-6 w-full max-w-sm text-left"> {/* text-left */}
            <div className="flex items-center space-x-2 text-white/80 text-xs">
              <FaShieldAlt className="h-3 w-3 text-white" />
              <span>Secure & Licensed · Fully regulated financial services</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80 text-xs">
              <FaRegClock className="h-3 w-3 text-white" />
              <span>Fast Approval · Get approved in 24 hours</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80 text-xs">
              <FaChartLine className="h-3 w-3 text-white" />
              <span>Low Rates · Competitive interest rates</span>
            </div>
          </div>
        </div>
        {/* Right side left empty for image background to show through, no overlay or effects */}
        <div className="hidden lg:block flex-1" />
      </div>
    </section>
  )
}
