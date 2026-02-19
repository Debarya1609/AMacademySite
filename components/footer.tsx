"use client"

import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-auto bg-gray-50 border-t border-gray-300 py-12 px-4 sm:px-6 lg:px-8 w-full shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-2 text-black">AMacademy – All About Music</h3>
            <p className="text-gray-600 text-sm mb-2">Piano Lessons & Music Academy in India</p>
            <a
              href="https://maps.app.goo.gl/D4d4dUUukE7qYCsP9?g_st=awb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300"
            >
              <MapPin size={20} />
              View Location on Map
            </a>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-black">Quick Links</h3>
            <div className="space-y-2">
              <Link href="#home" className="block text-gray-600 hover:text-black transition-colors duration-300">
                Home
              </Link>
              <Link
                href="#testimonials"
                className="block text-gray-600 hover:text-black transition-colors duration-300"
              >
                Testimonials
              </Link>
              <Link href="#gallery" className="block text-gray-600 hover:text-black transition-colors duration-300">
                Gallery
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-black">Get in Touch</h3>
            <div className="space-y-2">
              <a
                href="tel:+918910820366"
                className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300"
              >
                <Phone size={20} />
                <span>+91 8910 8203 66</span>
              </a>
              <a
                href="mailto:amacademymusic@gmail.com"
                className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300"
              >
                <Mail size={20} />
                <span>amacademymusic@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600 text-sm">
            © 2025 AMacademy. All Rights Reserved | Crafted by BlendSpec Studio
          </p>
        </div>
      </div>
    </footer>
  )
}
