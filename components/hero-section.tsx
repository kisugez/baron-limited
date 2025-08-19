"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { FaShieldAlt, FaRegClock, FaChartLine, FaHeart } from "react-icons/fa"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  const services = [
    {
      title: "Logbook Loans",
      desc: "Get quick cash using your vehicle as collateral. Keep driving while you repay with flexible terms and competitive rates. Fast approval and minimal paperwork.",
      cta: "Learn More",
      href: "/services/logbook-loans",
      features: [
        { icon: <FaRegClock className="h-4 w-4 text-blue-700" />, label: "24hr Approval" },
        { icon: <FaShieldAlt className="h-4 w-4 text-blue-700" />, label: "Secure" },
        { icon: <FaChartLine className="h-4 w-4 text-blue-700" />, label: "Low Rates" },
      ],
    },
    {
      title: "Title-Deed Loans",
      desc: "Unlock the value in your property with flexible financing, fast approval, and competitive rates. Ideal for business expansion or personal needs.",
      cta: "Learn More",
      href: "/services/title-deed-loans",
      features: [
        { icon: <FaRegClock className="h-4 w-4 text-blue-700" />, label: "Fast Process" },
        { icon: <FaShieldAlt className="h-4 w-4 text-blue-700" />, label: "Trusted" },
        { icon: <FaChartLine className="h-4 w-4 text-blue-700" />, label: "Flexible Terms" },
      ],
    },
    {
      title: "Asset Finance",
      desc: "Finance your business equipment and machinery with competitive rates and flexible repayment plans. Grow your business with ease.",
      cta: "Learn More",
      href: "/services/asset-finance",
      features: [
        { icon: <FaRegClock className="h-4 w-4 text-blue-700" />, label: "Quick Approval" },
        { icon: <FaShieldAlt className="h-4 w-4 text-blue-700" />, label: "Secure" },
        { icon: <FaChartLine className="h-4 w-4 text-blue-700" />, label: "Business Growth" },
      ],
    },
    {
      title: "Trade Finance",
      desc: "Support your import/export business operations with tailored solutions, fast processing, and expert guidance.",
      cta: "Learn More",
      href: "/services/trade-finance",
      features: [
        { icon: <FaRegClock className="h-4 w-4 text-blue-700" />, label: "Expert Support" },
        { icon: <FaShieldAlt className="h-4 w-4 text-blue-700" />, label: "Reliable" },
        { icon: <FaChartLine className="h-4 w-4 text-blue-700" />, label: "Tailored" },
      ],
    },
    {
      title: "Bid & Performance Bonds",
      desc: "Secure your contracts with reliable bond solutions. Fast issuance and competitive rates for your business needs.",
      cta: "Learn More",
      href: "/services/bonds",
      features: [
        { icon: <FaRegClock className="h-4 w-4 text-blue-700" />, label: "Fast Issuance" },
        { icon: <FaShieldAlt className="h-4 w-4 text-blue-700" />, label: "Trusted" },
        { icon: <FaChartLine className="h-4 w-4 text-blue-700" />, label: "Competitive" },
      ],
    },
    {
      title: "Loan Buy‑Off",
      desc: "Consolidate existing loans with better terms and flexible repayment. Enjoy lower rates and simplified payments.",
      cta: "Learn More",
      href: "/services/loan-buyoff",
      features: [
        { icon: <FaRegClock className="h-4 w-4 text-blue-700" />, label: "Lower Rates" },
        { icon: <FaShieldAlt className="h-4 w-4 text-blue-700" />, label: "Easy Process" },
        { icon: <FaChartLine className="h-4 w-4 text-blue-700" />, label: "Flexible" },
      ],
    },
  ]
  const [current, setCurrent] = useState(0);
  const handlePrev = () => setCurrent((c) => (c - 1 + services.length) % services.length);
  const handleNext = () => setCurrent((c) => (c + 1) % services.length);

  const [isImageTransitioning, setIsImageTransitioning] = useState(false);
  useEffect(() => {
    setIsImageTransitioning(true);
    const imageTimer = setTimeout(() => setIsImageTransitioning(false), 700); // image transition duration
    const slideTimer = setTimeout(() => setCurrent((c) => (c + 1) % services.length), 5000);
    return () => {
      clearTimeout(imageTimer);
      clearTimeout(slideTimer);
    };
  }, [current, services.length]);

  // Only use one image for all slides
  const heroImage = "/images/african-american-young-freelancers-couch-sharing-business-idea.jpg";

  return (
    <section className="relative w-screen h-screen min-h-screen max-w-none flex items-center justify-start overflow-hidden p-0 m-0 z-0">
      {/* Slider Image with lighter dark overlay */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Hero Background"
          className="object-cover w-full h-full"
          style={{ opacity: 0.85 }}
          draggable={false}
        />
        <div className="absolute inset-0 w-full h-full bg-black/40" />
      </div>
      {/* Slide Content - words enter after image transition */}
      <div className="relative w-full max-w-2xl px-4 sm:px-8 lg:px-16 z-10 h-full flex items-center justify-start min-h-full overflow-visible pt-32 sm:pt-40">
        <div
          key={current}
          className={`w-full max-w-lg flex flex-col items-start animate-slide-in-right-delayed`}
        >
          <span className="mb-3 inline-block rounded-full border border-white text-white text-xs font-bold px-4 py-1 tracking-widest shadow-sm bg-transparent">
            {current === 0 ? "LOANS" :
             current === 1 ? "PROPERTY" :
             current === 2 ? "ASSET" :
             current === 3 ? "TRADE" :
             current === 4 ? "BONDS" :
             current === 5 ? "BUY-OFF" :
             "SERVICE"}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-lg mb-3 text-left">{services[current].title}</h1>
          <p className="text-base sm:text-lg text-white/90 font-medium mb-5 text-left break-words whitespace-pre-line">
            {services[current].desc}
          </p>
          <div className="flex gap-4 mb-6 flex-wrap">
            {services[current].features.map((f, i) => (
              <span key={i} className="flex items-center gap-1 bg-white/80 rounded-full px-3 py-1 text-xs font-semibold text-blue-900 shadow">
                {f.icon}
                {f.label}
              </span>
            ))}
          </div>
          <Link
            href={services[current].href}
            className="inline-block rounded-full bg-white text-blue-900 px-6 py-2 text-base font-semibold shadow hover:bg-blue-100 transition-all"
          >
            {services[current].cta}
          </Link>
        </div>
      </div>
      <style jsx global>{`
        @keyframes hero-slide-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-hero-slide-up {
          animation: hero-slide-up 0.8s cubic-bezier(.4,0,.2,1);
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1.2s cubic-bezier(.4,0,.2,1);
        }
        @keyframes slide-in-left {
          0% { transform: translateX(-60px); opacity: 0.7; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in-left {
          animation: slide-in-left 1s cubic-bezier(.4,0,.2,1);
        }
        @keyframes slide-in-right {
          0% { transform: translateX(60px); opacity: 0.7; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in-right {
          animation: slide-in-right 1s cubic-bezier(.4,0,.2,1);
        }
        @keyframes slide-in-right-delayed {
          0% { opacity: 0; transform: translateX(60px); }
          40% { opacity: 0; transform: translateX(60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-right-delayed {
          animation: slide-in-right-delayed 1.2s cubic-bezier(.4,0,.2,1);
        }
        /* Ensure next section starts after hero and is full width */
        section + section {
          width: 100vw;
          min-width: 100vw;
        }
      `}</style>
    </section>
  )
}
