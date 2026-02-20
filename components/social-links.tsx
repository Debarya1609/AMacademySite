"use client"

import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react"

export default function SocialLinks() {
  const socials = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/amacademymusic/",
      color: "hover:text-pink-600 dark:hover:text-pink-500",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/share/1AYYbbRJnr/",
      color: "hover:text-blue-600 dark:hover:text-blue-500",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@amacademymusic?si=XXDTylQoaQhQfoCB",
      color: "hover:text-red-600 dark:hover:text-red-500",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/918910820366",
      color: "hover:text-green-600 dark:hover:text-green-500",
    },
  ]

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 md:mb-12 text-black dark:text-white font-serif transition-colors duration-500">
        Stay Connected
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mt-2 mb-10 text-lg italic tracking-wide">
        “Learn. Play. Perform. Shine.”
      </p>
      <div className="flex justify-center items-center gap-6 md:gap-8 flex-wrap">
        {socials.map((social) => {
          const Icon = social.icon
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 transition-all duration-300 transform hover:scale-110 ${social.color}`}
              aria-label={social.name}
            >
              <Icon size={32} />
            </a>
          )
        })}
      </div>
    </section>
  )
}
