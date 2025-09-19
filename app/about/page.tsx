import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Truck, Recycle, Award, Users, BarChart3 } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Michael Rodriguez",
      role: "Founder & CEO",
      bio: "With over 20 years in the automotive industry, Michael founded County Wide Auto Parts with a vision to make quality used parts accessible to everyone.",
      image: "/placeholder-user.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "Operations Director",
      bio: "Sarah oversees our nationwide logistics network, ensuring parts are sourced, tested, and delivered with maximum efficiency.",
      image: "/placeholder-user.jpg"
    },
    {
      name: "David Chen",
      role: "Head of Quality Assurance",
      bio: "A certified master mechanic, David leads our rigorous testing protocols that ensure every part meets our quality standards.",
      image: "/placeholder-user.jpg"
    }
  ];

  const milestones = [
    { year: "2005", event: "County Wide Auto Parts founded in Chicago, IL" },
    { year: "2008", event: "Expanded operations to include nationwide shipping" },
    { year: "2012", event: "Opened our first dedicated testing and refurbishment facility" },
    { year: "2015", event: "Launched our industry-leading 90-day warranty program" },
    { year: "2018", event: "Reached 100,000 satisfied customers milestone" },
    { year: "2020", event: "Introduced our online inventory management system" },
    { year: "2023", event: "Expanded to over 500,000 parts in our nationwide inventory" }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About County Wide Auto Parts</h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Your trusted partner for quality used auto parts since 2005
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-gray-800 hover:text-white">
                  <Link href="/parts">Browse Our Inventory</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">
                    County Wide Auto Parts was founded in 2005 by Michael Rodriguez, a former automotive technician who recognized a critical gap in the market: affordable, quality used auto parts with reliable customer service.
                  </p>
                  <p className="mb-4">
                    What began as a small operation in Chicago has grown into one of the nation's leading suppliers of quality used OEM parts, with a network spanning all 50 states and an inventory of over 500,000 parts.
                  </p>
                  <p className="mb-4">
                    Unlike many competitors, we maintain direct relationships with salvage auctions, insurance companies, and auto recyclers, allowing us to source the highest quality parts directly and pass the savings on to our customers.
                  </p>
                  <p>
                    Today, County Wide Auto Parts serves a diverse customer base including DIY car enthusiasts, professional mechanics, body shops, dealerships, and fleet managers. Our reputation is built on our commitment to quality, transparency, and customer satisfaction.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-[300px] md:h-[450px] w-full rounded-lg overflow-hidden shadow-xl">
                  <Image 
                    src="/auto-parts-warehouse.jpg" 
                    alt="County Wide Auto Parts warehouse facility" 
                    fill 
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Values */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Mission & Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every decision we make is guided by our commitment to quality, sustainability, and customer satisfaction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-gray-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <ShieldCheck className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Quality Assurance</h3>
                <p className="text-gray-600">
                  Every part we sell undergoes a rigorous multi-point inspection and testing process. We stand behind our products with our comprehensive warranty.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-gray-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <Recycle className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Environmental Responsibility</h3>
                <p className="text-gray-600">
                  By promoting the reuse of quality auto parts, we help reduce automotive waste and the environmental impact of manufacturing new parts.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-gray-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <Users className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Customer-First Approach</h3>
                <p className="text-gray-600">
                  We build lasting relationships through honest communication, fair pricing, and exceptional service before, during, and after each purchase.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-gray-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <Award className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Industry Expertise</h3>
                <p className="text-gray-600">
                  Our team includes ASE-certified technicians and automotive professionals with decades of combined experience in the industry.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-gray-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <Truck className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Reliable Logistics</h3>
                <p className="text-gray-600">
                  We've built partnerships with trusted shipping providers to ensure your parts arrive safely and on time, anywhere in the United States.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-gray-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <BarChart3 className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Continuous Improvement</h3>
                <p className="text-gray-600">
                  We regularly evaluate and enhance our processes, technology, and inventory to meet evolving customer needs and industry standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Milestones */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Journey</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Key milestones in our growth from a local supplier to a nationwide leader in used auto parts.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex mb-6 last:mb-0">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    {index < milestones.length - 1 && <div className="w-0.5 h-full bg-gray-300 mt-2"></div>}
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex-grow mb-4">
                    <h3 className="text-lg font-bold text-black mb-1">{milestone.year}</h3>
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 md:py-16 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust County Wide Auto Parts for quality used OEM parts at wholesale prices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
                <Link href="/parts">Find Your Part</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-gray-800 hover:text-white">
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
