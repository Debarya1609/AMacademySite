"use client"

import { useState } from "react"
import { X } from "lucide-react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      id: 1,
      src: "/gallery/img1.jpg",
      alt: "Student with keyboard setup",
      size: "col-span-1 row-span-1",
    },
    {
      id: 2,
      src: "/gallery/img3.jpg",
      alt: "Professional keyboard performance",
      size: "col-span-2 row-span-1 max-sm:col-span-1",
    },
    {
      id: 3,
      src: "/gallery/img2.jpg",
      alt: "Music production setup",
      size: "col-span-1 row-span-2 max-sm:col-span-1 max-sm:row-span-1",
    },
    {
      id: 4,
      src: "/gallery/img5.jpg",
      alt: "Smiling student at keyboard",
      size: "col-span-1 row-span-1",
    },
    {
      id: 5,
      src: "/gallery/img4.jpg",
      alt: "Student practice session",
      size: "col-span-2 row-span-1 max-sm:col-span-1",
    },
    {
      id: 6,
      src: "/gallery/img6.jpg",
      alt: "Focused keyboard playing",
      size: "col-span-1 row-span-1",
    },
  ]

  return (
    <section id="gallery" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 md:mb-12 text-black font-serif">
        Moments from AMacademy
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[250px]">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className={`${image.size} relative overflow-hidden rounded-lg cursor-pointer group bg-gray-200 transition-all duration-300`}
            onClick={() => setSelectedImage(image.id)}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
              <p className="text-white text-base md:text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.alt}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 transition-all duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-2xl w-full cursor-default" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages.find((img) => img.id === selectedImage)?.src || "/placeholder.svg"}
              alt={galleryImages.find((img) => img.id === selectedImage)?.alt}
              className="w-full rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 -right-10 md:top-4 md:right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity duration-300 shadow-lg"
              aria-label="Close image"
            >
              <X size={24} className="text-black" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
