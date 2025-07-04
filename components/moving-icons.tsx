"use client"

import {
  Banknote,
  Car,
  Home,
  TrendingUp,
  Shield,
  Clock,
  CreditCard,
  Building,
  Handshake,
  Calculator,
  PiggyBank,
  Landmark,
} from "lucide-react"
import { cn } from "@/lib/utils"

export function MovingIcons({ variant }: { variant?: "background" }) {
  const icons = [
    Banknote,
    Car,
    Home,
    TrendingUp,
    Shield,
    Clock,
    CreditCard,
    Building,
    Handshake,
    Calculator,
    PiggyBank,
    Landmark,
  ]

  if (variant === "background") {
    // Generate many small, scattered, animated icons
    const iconCount = 64// restore to previous value
    const iconElements = Array.from({ length: iconCount }).map((_, i) => {
      const Icon = icons[i % icons.length]
      // Random positions and animation delays
      const top = Math.random() * 90 // percent
      const left = Math.random() * 90 // percent
      const delay = Math.random() * 3 // seconds
      return (
        <span
          key={i}
          className={cn(
            "absolute animate-fade-in-out",
            "pointer-events-none select-none",
          )}
          style={{
            top: `${top}%`,
            left: `${left}%`,
            opacity: 0.12 + Math.random() * 0.12,
            animationDelay: `${delay}s`,
            animationDuration: `${3.5 + Math.random() * 2}s`,
          }}
        >
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white/80" />
        </span>
      )
    })
    return (
      <div className="w-full h-full absolute inset-0">
        {iconElements}
        <style jsx global>{`
          @keyframes fade-in-out {
            0% { opacity: 0; transform: scale(0.7); }
            10% { opacity: 0.18; transform: scale(1); }
            80% { opacity: 0.18; transform: scale(1); }
            100% { opacity: 0; transform: scale(0.7); }
          }
          .animate-fade-in-out {
            animation-name: fade-in-out;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }
        `}</style>
      </div>
    )
  }

  if (variant === "background-dark") {
    const iconCount = 128
    const iconElements = Array.from({ length: iconCount }).map((_, i) => {
      const Icon = icons[i % icons.length]
      const top = Math.random() * 90
      const left = Math.random() * 90
      const delay = Math.random() * 3
      return (
        <span
          key={i}
          className={cn(
            "absolute animate-fade-in-out",
            "pointer-events-none select-none",
          )}
          style={{
            top: `${top}%`,
            left: `${left}%`,
            opacity: 0.16 + Math.random() * 0.14,
            animationDelay: `${delay}s`,
            animationDuration: `${3.5 + Math.random() * 2}s`,
          }}
        >
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#041a55' }} />
        </span>
      )
    })
    return (
      <div className="w-full h-full absolute inset-0">
        {iconElements}
        <style jsx global>{`
          @keyframes fade-in-out {
            0% { opacity: 0; transform: scale(0.7); }
            10% { opacity: 0.18; transform: scale(1); }
            80% { opacity: 0.18; transform: scale(1); }
            100% { opacity: 0; transform: scale(0.7); }
          }
          .animate-fade-in-out {
            animation-name: fade-in-out;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }
        `}</style>
      </div>
    )
  }

  // Duplicate icons for seamless loop
  const duplicatedIcons = [...icons, ...icons, ...icons]


}
