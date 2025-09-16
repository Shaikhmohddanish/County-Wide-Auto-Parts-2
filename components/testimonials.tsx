import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Robert Wilson",
      role: "Chevrolet Silverado Owner",
      content:
        "County Wide Auto Parts saved me thousands on my truck repair. Their engine replacement was in pristine condition and came with all the necessary accessories. Their team guided me through the entire process and even connected me with a trusted mechanic for installation. Incredible service!",
      rating: 5,
    },
    {
      id: 2,
      name: "Jennifer Davis",
      role: "Honda Accord Owner",
      content:
        "I needed a transmission for my 2017 Accord and was worried about finding a quality used part. County Wide Auto Parts not only had the exact match, but they also provided detailed history and testing documentation. The part arrived well-packaged with a solid warranty. My car runs perfectly now!",
      rating: 5,
    },
    {
      id: 3,
      name: "Marcus Thompson",
      role: "Auto Repair Shop Owner",
      content:
        "As someone who runs a busy repair shop, I need reliable parts suppliers. County Wide Auto Parts has become our primary source for used OEM parts. Their inventory is extensive, prices are competitive, and they stand behind their products. My customers appreciate the cost savings without sacrificing quality.",
      rating: 5,
    },
  ]

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with
            County Wide Auto Parts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-100 flex flex-col h-full"
            >
              <div className="flex mb-3 md:mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 md:h-5 md:w-5 ${
                      i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <blockquote className="flex-grow">
                <p className="text-gray-600 italic mb-4 text-sm md:text-base">"{testimonial.content}"</p>
              </blockquote>
              <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-100">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-xs md:text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
