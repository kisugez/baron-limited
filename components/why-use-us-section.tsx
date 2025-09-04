import { useEffect, useState } from "react";
import Image from "next/image";

function StatCounter({ end, label, color = "#009FE3", duration = 2000 }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 20);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);
    return () => clearInterval(timer);
  }, [end, duration]);
  return (
    <div className="flex flex-col items-center">
      <span className="text-5xl font-bold" style={{ color }}>{count.toLocaleString()}+</span>
      <span className="text-[#003366] text-lg font-bold mt-2 text-center">{label}</span>
    </div>
  );
}

export function WhyUseUsSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
        {/* Left: Text & Stats */}
        <div className="flex-1 md:pr-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#003366] mb-6 leading-tight">
            At the heart of Kenya's financial transformation
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-xl">
            Baron Capital empowers Kenyans to achieve their dreams through innovative financial solutions. Our trusted services have helped thousands access loans, grow businesses, and secure their futures. We provide a single, simplified access point to multiple financial products, licenses, and partnerships—making prosperity possible for all.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 mt-8">
            <StatCounter end={2} label="Million Loans Disbursed" color="#009FE3" duration={2000} />
            <div className="hidden sm:block border-l-2 border-[#FFD600] mx-4" style={{height: '60px'}}></div>
            <StatCounter end={12} label="Services" color="#009FE3" duration={1800} />
            <div className="hidden sm:block border-l-2 border-[#FFD600] mx-4" style={{height: '60px'}}></div>
            <StatCounter end={47} label="Counties Served" color="#009FE3" duration={1500} />
          </div>
        </div>
        {/* Right: Map Image */}
        <div className="flex-1 flex justify-end items-start mt-12 md:mt-0">
          <Image
            src="/location_10601134.png"
            alt="Kenya Map"
            width={400}
            height={400}
            className="w-[340px] h-auto md:w-[400px] object-contain"
            style={{marginTop: '-40px'}}
            priority
          />
        </div>
      </div>
    </section>
  );
}