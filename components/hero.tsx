"use client"

export default function Hero() {
  return (
    <section id="home" className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white mb-4 md:mb-6 leading-tight text-balance font-serif transition-colors duration-500">
            All About Music – AMacademy
          </h1>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed transition-colors duration-500">
            At AMacademy, I teach piano not as a subject, but as a language of emotion. Every student learns at their own pace, and I make sure they don’t just play songs — they understand them, feel them. Whether you're touching the keys for the first time or chasing perfection, I’ll be with you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a
              href="https://wa.me/918910820366"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black dark:bg-white text-white dark:text-black px-6 md:px-8 py-3 rounded-lg font-semibold hover:opacity-80 transition duration-300 text-center text-sm md:text-base"
            >
              Join Now (WhatsApp)
            </a>
            <a
              href="tel:+918910820366"
              className="inline-block bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300 text-center text-sm md:text-base"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* Right - Teacher Image - Direct placement without container */}
        <div className="flex justify-center lg:justify-end w-full">
          <img
            src="/images/design-mode/96de8409-e443-4f6e-8c8a-f180738e34bd.jpg"
            alt="Music Academy Teacher"
            className="w-full max-w-sm md:max-w-md rounded-2xl shadow-lg dark:shadow-2xl dark:shadow-gray-900/50 transition-all duration-500 hover:scale-105 transform"
          />
        </div>
      </div>
    </section>
  )
}
