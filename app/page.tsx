import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FindPartForm } from "@/components/find-part-form"
import { Button } from "@/components/ui/button"
import { Testimonials } from "@/components/testimonials"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CTASection } from "@/components/cta-section"
import { Check, ArrowRight, Clock, ShieldCheck, TruckIcon, DollarSign, Wrench, Settings } from "lucide-react"

export default function Home() {
  const popularParts = [
    { name: "Engines", image: "/engine.png?height=400&width=300", link: "/parts/engine" },
    { name: "Transmissions", image: "/images/transmission.png?height=400&width=300", link: "/parts/transmission" },
    { name: "AC Compressors", image: "/ac-compressor.png?height=400&width=300", link: "/parts/ac-compressor" },
    { name: "Transfer Cases", image: "/images/transfer-case.jpg?height=400&width=300", link: "/parts/transfer-case" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-black text-white">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="relative h-[400px] md:h-[600px]">
            <Image
              src="/slider-home.jpeg"
              alt="Auto parts"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4 w-full">
              {/* Desktop/Tablet: Show 2 columns */}
              <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                    Quality Used <span className="text-teal-400">Auto Parts</span> at Wholesale Prices
                  </h1>
                  <p className="text-lg md:text-xl mb-6 text-gray-200">
                    Discover premium used OEM parts for all major vehicle makes and models. Save up to 70% compared to new parts with our 90-day warranty.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-start gap-4">
                    <Button asChild size="lg" className="bg-black hover:bg-gray-900 w-full sm:w-auto">
                      <Link href="/parts">Browse Parts</Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-white text-black hover:bg-white/10 hover:text-white font-semibold w-full sm:w-auto"
                    >
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-white/20 mt-6 md:mt-0 max-w-md w-full mx-auto">
                  <FindPartForm />
                </div>
              </div>
              {/* Mobile: Show only form */}
              <div className="flex md:hidden justify-center items-center w-full min-h-[400px]">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 w-full max-w-md mx-auto">
                  <FindPartForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section - NEW */}
        <section className="py-10 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Your Trusted Source for Quality Used Auto Parts</h2>
                <p className="text-gray-600 mb-4">
                  Since 2005, County Wide Auto Parts has been a leader in the used auto parts industry, serving customers across the United States with quality OEM parts at wholesale prices.
                </p>
                <p className="text-gray-600 mb-4">
                  We source our inventory from professionally dismantled vehicles, thoroughly test each component, and back everything with our comprehensive warranty. Our team of certified automotive experts inspects every part to ensure reliability and performance.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you're a DIY enthusiast, professional mechanic, or repair shop owner, we provide the parts you need with the service you deserve.
                </p>
                <Button asChild className="bg-black hover:bg-gray-700">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ShieldCheck className="h-8 w-8 text-black mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Warranty Protection</h3>
                  <p className="text-gray-600 text-sm">All parts backed by our 90-day standard warranty with extended options available</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <TruckIcon className="h-8 w-8 text-black mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Fast Nationwide Shipping</h3>
                  <p className="text-gray-600 text-sm">Quick delivery to all 50 states with tracking provided on all orders</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <DollarSign className="h-8 w-8 text-black mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Wholesale Pricing</h3>
                  <p className="text-gray-600 text-sm">Save 40-70% compared to new OEM parts without sacrificing quality</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Wrench className="h-8 w-8 text-black mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Expert Support</h3>
                  <p className="text-gray-600 text-sm">Technical assistance from ASE-certified professionals available 7 days a week</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Enhanced */}
        <section className="py-8 md:py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">The County Wide Auto Parts Advantage</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We deliver value through quality, reliability, and exceptional service on every order.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center p-4 md:p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="bg-gray-100 rounded-full p-4 inline-flex mb-4">
                  <Settings className="h-6 w-6 md:h-8 md:w-8 text-black" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800">OEM Quality Guaranteed</h3>
                <p className="text-gray-600">
                  All our parts are genuine OEM components carefully removed from donor vehicles and thoroughly tested to ensure proper function and fitment for your specific make and model.
                </p>
              </div>
              <div className="text-center p-4 md:p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="bg-gray-100 rounded-full p-4 inline-flex mb-4">
                  <Check className="h-6 w-6 md:h-8 md:w-8 text-black" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800">Comprehensive Testing</h3>
                <p className="text-gray-600">
                  Every part undergoes multi-point inspection and performance testing before shipping, with results documented and shared with you for complete transparency and peace of mind.
                </p>
              </div>
              <div className="text-center p-4 md:p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="bg-gray-100 rounded-full p-4 inline-flex mb-4">
                  <Clock className="h-6 w-6 md:h-8 md:w-8 text-black" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800">Same-Day Processing</h3>
                <p className="text-gray-600">
                  Orders placed before 2 PM EST are processed the same day, with most parts shipping within 24 hours. Need it faster? Ask about our expedited shipping options.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Parts Section */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Most Requested Auto Parts</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse our top-selling categories or use our search to find the specific part you need for your vehicle repair or upgrade project.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {popularParts.map((part, index) => (
                <Link key={index} href={part.link} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-lg border border-gray-100">
                    <div className="relative h-40 md:h-48">
                      <Image src={part.image || "/placeholder.svg"} alt={part.name} fill className="object-cover" />
                    </div>
                    <div className="p-4 flex justify-between items-center">
                      <h3 className="text-base md:text-lg font-semibold text-gray-800">{part.name}</h3>
                      <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-black transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-6 md:mt-8">
              <Button asChild className="bg-black hover:bg-gray-900">
                <Link href="/parts">View All Categories</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* How It Works Section - NEW */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">How It Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our simple process makes finding and ordering quality used auto parts quick and hassle-free.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Submit Your Request</h3>
                <p className="text-gray-600">
                  Fill out our simple form with your vehicle details and the specific part you need. Include any additional requirements or questions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Get a Custom Quote</h3>
                <p className="text-gray-600">
                  Our team quickly reviews your request and provides a detailed quote, including part specifications, condition rating, and warranty information.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Confirm and Pay</h3>
                <p className="text-gray-600">
                  Review your quote, confirm the details, and complete your purchase securely online or by phone. Multiple payment options available.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Fast Delivery</h3>
                <p className="text-gray-600">
                  We carefully package and ship your part with tracking information. Most orders arrive within 2-5 business days nationwide.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-black hover:bg-gray-900">
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* FAQ Preview Section - NEW */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find quick answers to common questions about our parts, ordering process, and policies.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-800">What warranty do your parts come with?</h3>
                  <p className="text-gray-600">
                    All our parts come with a standard 90-day warranty covering defects and functionality. Extended warranties are available for most parts at an additional cost. We stand behind the quality of our products.
                  </p>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-800">How do you test your parts?</h3>
                  <p className="text-gray-600">
                    Each part undergoes a comprehensive multi-point inspection and performance testing specific to its function. Engines and transmissions are dyno-tested, electrical components are bench-tested, and all parts are visually inspected for damage.
                  </p>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-800">What if the part doesn't fit my vehicle?</h3>
                  <p className="text-gray-600">
                    We guarantee fitment for parts ordered based on your specific vehicle's year, make, and model. If a part doesn't fit due to an error on our part, we'll exchange it or provide a full refund including shipping costs.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Button asChild variant="outline" className="border-black text-black hover:bg-gray-50">
                  <Link href="/faq">View All FAQs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>

      <SiteFooter />
    </div>
  )
}
