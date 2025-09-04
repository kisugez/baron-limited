"use client"

import { HeroSection } from "@/components/hero-section"
import { ServicesShowcase } from "@/components/services-showcase-new"
import { AboutSection } from "@/components/about-section"
import { ClientStories } from "@/components/client-stories"
import { useScrollReveal } from "@/hooks/useScrollReveal"
import { WhyUseUsSection } from "@/components/why-use-us-section"
import { FeaturedServicesSection } from "@/components/featured-services-section"

export default function HomePage() {
  useScrollReveal()
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesShowcase />
      <FeaturedServicesSection />
      <WhyUseUsSection /> 
      <AboutSection />
      <ClientStories />
    </div>
  )
}
