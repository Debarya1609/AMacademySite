"use client"

import { useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

interface TestimonialCardProps {
  name: string
  role: string
  quote: string
  rating: number
}

function TestimonialCard({ name, role, quote, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md flex flex-col justify-between min-h-[280px]">
      <div>
        <div className="flex items-center gap-1 mb-4" aria-label={`${rating} star rating`}>
          {[...Array(rating)].map((_, i) => (
            <span key={i} className="text-yellow-500" aria-hidden="true">
              ★
            </span>
          ))}
        </div>
        <p className="text-gray-700 mb-6 leading-relaxed italic">{`"${quote}"`}</p>
      </div>
      <div>
        <p className="font-serif font-bold text-black">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  )
}

interface TestimonialsProps {
  testimonials?: TestimonialCardProps[]
}

export default function Testimonials({ testimonials: customTestimonials }: TestimonialsProps) {
  const [mounted, setMounted] = useState(false)

  const defaultTestimonials: TestimonialCardProps[] = [
    {
      name: "Aarav Sharma",
      role: "Student",
      quote:
        "AMacademy transformed my musical journey. The personalized attention and expert guidance helped me discover my true potential as a musician.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Parent",
      quote:
        "My daughter has grown so much under the tutelage here. The teachers are passionate and truly care about each student's progress.",
      rating: 5,
    },
    {
      name: "Rohan Singh",
      role: "Student",
      quote:
        "The best part about AMacademy is the creative freedom they give. I went from being nervous about performing to loving being on stage.",
      rating: 5,
    },
    {
      name: "Sneha Gupta",
      role: "Student",
      quote:
        "The music lessons here are exceptional. I've learned so much in such a short time, and the community is incredibly supportive.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Parent",
      quote:
        "Best decision we made for our son. The instructors go above and beyond to ensure every student reaches their musical goals.",
      rating: 5,
    },
    {
      name: "Anjali Desai",
      role: "Student",
      quote:
        "AMacademy made music accessible and fun. I never thought I could perform in front of an audience until I joined here.",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      role: "Parent",
      quote:
        "The structured approach combined with creative freedom creates the perfect environment for musical growth and confidence.",
      rating: 5,
    },
  ]

  const testimonialList = customTestimonials ? customTestimonials.slice(0, 7) : defaultTestimonials

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: true,
      }),
    ]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  const scrollToSlide = (index: number) => {
    if (emblaApi) emblaApi.scrollToScrollSnap(index)
  }

  if (!mounted) {
    return null
  }

  return (
    <section
      id="testimonials"
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center mb-12 md:mb-16 text-black">
        Hear from Our Students & Parents
      </h2>

      <div className="relative">
        {/* Carousel Container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 md:gap-8">
            {testimonialList.map((testimonial, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] transform transition-all duration-500 ease-in-out"
                style={{
                  opacity: selectedIndex === index ? 1 : 0.5,
                  transform: selectedIndex === index ? "scale(1)" : "scale(0.9)",
                }}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center items-center gap-2 mt-8 md:mt-10">
          {testimonialList.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                selectedIndex === index ? "bg-black w-6" : "bg-gray-300 w-2 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Decorative Music Notes */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none text-6xl">♪</div>
      <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none text-6xl">♫</div>
    </section>
  )
}
