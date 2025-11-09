"use client"

import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left */}
          <div>
            <h3 className="font-bold text-lg mb-2 text-black dark:text-white transition-colors duration-500">
              AMacademy – All About Music
            </h3>
            <a
              href="https://maps.app.goo.gl/D4d4dUUukE7qYCsP9?g_st=awb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              <MapPin size={20} />
              View Location
            </a>
          </div>

          {/* Center */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-black dark:text-white transition-colors duration-500">
              Quick Links
            </h3>
            <div className="space-y-2">
              <Link
                href="#"
                className="block text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="#"
                className="block text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
              <Link
                href="#"
                className="block text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Right */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-black dark:text-white transition-colors duration-500">
              Get in Touch
            </h3>
            <div className="space-y-2">
              <a
                href="tel:+918910820366"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                <Phone size={20} />
                +91 8910 8203 66
              </a>
              <a
                href="mailto:amacademymusic@gmail.com"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                <Mail size={20} />
                amacademymusic@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm transition-colors duration-500">
            © 2025 AMacademy. All Rights Reserved | Crafted by BlendSpec Studio
          </p>
        </div>
      </div>
    </footer>
  )
}
