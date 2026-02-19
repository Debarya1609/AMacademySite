'use client'

import Testimonials from '@/components/testimonials'
import MusicBackground from '@/components/music-background'

export const metadata = {
  title: 'Testimonials - AMacademy | Music Academy',
  description: 'Read testimonials from our students and parents about their experience at AMacademy music academy.',
  openGraph: {
    title: 'Testimonials - AMacademy',
    description: 'Hear from our students and parents about their musical journey with AMacademy',
    url: 'https://amacademy.com/testimonials',
    type: 'website',
  },
}

export default function TestimonialsPage() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <MusicBackground />
      <div className="relative z-10 pt-8 pb-16 max-w-7xl mx-auto px-4">
        <Testimonials />
      </div>
    </div>
  )
}
