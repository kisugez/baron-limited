"use client"

import { HeroSection } from "@/components/hero-section"
import { ServicesShowcase } from "@/components/services-showcase-new"
import { AboutSection } from "@/components/about-section"
import { ClientStories } from "@/components/client-stories"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export default function HomePage() {
  useScrollReveal()
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesShowcase />
      <AboutSection />
      <ClientStories />
    </div>
  )
}
