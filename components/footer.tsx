import Link from "next/link"
import Image from "next/image"
import { FaXTwitter, FaFacebookF, FaTiktok, FaInstagram, FaLinkedinIn } from "react-icons/fa6"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const services = [
    { name: "Logbook Loans", href: "/services/logbook-loans" },
    { name: "Title-Deed Loans", href: "/services/title-deed-loans" },
    { name: "Asset Finance", href: "/services/asset-finance" },
    { name: "Trade Finance", href: "/services/trade-finance" },
    { name: "Bid & Performance Bonds", href: "/services/bonds" },
    { name: "Loan Buy‑Off", href: "/services/loan-buyoff" },
  ]

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Property & Vehicles", href: "/property-vehicles" },
    { name: "Contact Us", href: "/contact" },
    { name: "Our Location", href: "/location" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Image
              src="/images/baron-logo.jpg"
              alt="Baron Capital Limited"
              width={150}
              height={50}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-gray-300 leading-relaxed">
              Your trusted financial partner in Kenya. We provide innovative and accessible financial solutions tailored
              to meet your unique needs.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/BaronCapitalLimited"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href="https://x.com/baron_limited" className="p-2 bg-gray-800 rounded-full hover:bg-blue-400 transition-colors">
                <FaXTwitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/baron_capital_limited/" className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@baron_capital_limited" className="p-2 bg-gray-800 rounded-full hover:bg-black transition-colors">
                <FaTiktok className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/baron-capital-limited/" className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 transition-colors">
                <FaLinkedinIn className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-300 hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>Nairobi, Kenya</div>
                  <div>CBD, Kimathi Street</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+254700000000" className="text-gray-300 hover:text-white transition-colors">
                  +254 700 000 000
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@baroncapital.co.ke" className="text-gray-300 hover:text-white transition-colors">
                  info@baroncapital.co.ke
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Baron Capital Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
