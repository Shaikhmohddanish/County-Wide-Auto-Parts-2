import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhoneCall, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-10 md:py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Need Quality Used Auto Parts?</h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto mb-6 md:mb-8">
            Save up to 70% compared to new dealer prices. All our parts are thoroughly tested, come with a 90-day warranty, and ship nationwide.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left">
              <PhoneCall className="h-8 w-8 mb-3 text-white" />
              <h3 className="text-xl font-semibold mb-2">Call Us Directly</h3>
              <p className="mb-2 text-white/80">Speak with our parts specialists:</p>
              <p className="text-2xl font-bold text-white">888 789-8397</p>
              <p className="text-sm text-white/70 mt-2">Available 7 days a week, 8am-8pm EST</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left">
              <Mail className="h-8 w-8 mb-3 text-white" />
              <h3 className="text-xl font-semibold mb-2">Request a Part</h3>
              <p className="mb-4 text-white/80">Fill out our quick form and we'll find the exact part you need.</p>
              <Button asChild size="lg" className="w-full bg-white text-black hover:bg-gray-100">
                <Link href="/contact">Submit Request</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
              <Link href="/parts">Browse Parts Catalog</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-gray-800 hover:text-white"
            >
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
