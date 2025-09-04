import Image from "next/image";
import Link from "next/link";
import { FaCar, FaHome, FaFileAlt, FaBuilding } from "react-icons/fa";

const services = [
  {
    name: "Title Deed Loans",
    icon: <FaFileAlt className="w-10 h-10 text-[#009FE3]" />,
    image: "/pleased-young-african-american-male-holding-points-clipboard-isolated-white-background-Photoroom.png",
    bg: "bg-white",
    text: "text-[#003366]",
    href: "/services/title-deed-loans",
  },
  {
    name: "Logbook Loans",
    icon: <FaCar className="w-10 h-10 text-[#FFD600]" />,
    image: "/woman-with-red-car-her-hand-Photoroom.png",
    bg: "bg-white",
    text: "text-[#003366]",
    href: "/services/logbook-loans",
  },
  {
    name: "Property & Vehicle Loans",
    icon: (
      <span className="relative">
        <FaBuilding className="w-10 h-10 text-[#003366]" />
        <FaHome className="w-7 h-7 text-white absolute top-1 left-1" />
      </span>
    ),
    image: "/black-businessman-happy-expression-Photoroom.png",
    bg: "bg-[#003366]",
    text: "text-white",
    href: "/property-vehicles",
  },
];

export function FeaturedServicesSection() {
  return (
    <section className="w-full py-16 bg-[#f7f8fa]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-10 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-[#003366] mb-2 text-left">Fueling Growth Across Diverse Industries</h2>
            <div className="w-12 h-2 bg-[#009FE3] rounded-full mb-4" />
          </div>
          <div className="flex flex-col items-end">
            <p className="text-lg text-gray-700 max-w-lg text-right">
              Our services help Kenyans move faster and achieve more. We offer flexible financial solutions tailored to your needs, fueling your ambitions and supporting growth across the country.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Link href={s.href} key={i} className={`relative rounded-3xl overflow-hidden shadow-lg flex flex-col justify-between min-h-[420px] md:min-h-[520px] w-full hover-lift transition-all duration-300 ${s.bg} p-0 group`}>
              <div className="flex flex-col h-full">
                <div className="flex justify-end items-start p-5 pb-0">
                  {s.icon}
                </div>
                <div className="flex justify-end items-start px-5 pt-1 pb-3">
                  <h3 className={`text-lg font-semibold text-right ${s.text}`}>{s.name}</h3>
                </div>
                <div className="flex-1 flex items-end">
                  <div className="w-2/3 h-full relative">
                    <Image
                      src={s.image}
                      alt={s.name}
                      width={220}
                      height={260} // Increased height
                      className="object-cover absolute left-0 bottom-0 w-full h-full rounded-bl-3xl"
                      style={{objectFit: 'cover'}}
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}