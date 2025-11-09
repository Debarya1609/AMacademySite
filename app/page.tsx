"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import SocialLinks from "@/components/social-links"
import Testimonials from "@/components/testimonials"
import Gallery from "@/components/gallery"
import Footer from "@/components/footer"
import MusicBackground from "@/components/music-background"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <MusicBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <SocialLinks />
        <Testimonials />
        <Gallery />
        <Footer />
      </div>
    </div>
  )
}
