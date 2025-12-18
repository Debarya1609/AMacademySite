"use client"

export default function Testimonials() {
  const testimonials = [
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
  ]

  return (
    <section id="testimonials" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 md:mb-12 text-black font-serif">
        Hear from Our Students & Parents
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center gap-1 mb-4" aria-label={`${testimonial.rating} star rating`}>
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400" aria-hidden="true">
                  ⭐
                </span>
              ))}
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">{`"${testimonial.quote}"`}</p>
            <div>
              <p className="font-semibold text-black">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
