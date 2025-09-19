"use client"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function SiteFooter() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<null | "success" | "error">(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNewsletterStatus(null);
    try {
      // Use FormData for compatibility with your proxy route
      const formData = new FormData();
      formData.append("newsletterEmail", newsletterEmail);

      const response = await fetch("/api/google-form-proxy", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error("Submission failed");
      setNewsletterStatus("success");
      setNewsletterEmail("");
    } catch (err) {
      setNewsletterStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
        <footer className="relative bg-gray-900 text-white pt-12 pb-6 mt-12">
      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter Signup */}
        <div className="bg-black rounded-lg p-4 md:p-6 mb-8 md:mb-12 -mt-16 md:-mt-20 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">
                Stay Updated
              </h3>
              <p className="text-white/90 text-sm md:text-base">
                Get the latest parts inventory updates and special offers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded text-black flex-1 min-w-48 text-sm md:text-base"
              />
              <Button
                size="sm"
                className="bg-white text-black hover:bg-gray-100 whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4">County Wide Auto Parts</h3>
            <p className="text-gray-400 mb-4 text-sm md:text-base">
              Your trusted source for high-quality used OEM auto parts with the best information and resources for your
              vehicle needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/parts" className="text-gray-400 hover:text-white">
                  Parts Catalog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/warranty-policies" className="text-gray-400 hover:text-white">
                  Warranty Policies
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-gray-400 hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/advertising-policy" className="text-gray-400 hover:text-white">
                  Advertising Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-400 hover:text-white">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                <span className="text-gray-400">127 Willets Point Blvd Corona, NY 11368</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-teal-500 mr-2" />
                <a href="tel:8887898397" className="text-yellow-300 text-lg font-bold underline underline-offset-4 hover:text-yellow-400 focus:text-yellow-400 transition-colors duration-150">888 789-8397</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-teal-500 mr-2" />
                <span className="text-gray-400">support@countywideautoparts.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-medium mb-2">Business Hours:</h4>
              <p className="text-gray-400">Monday - Friday: 8AM - 6PM</p>
              <p className="text-gray-400">Saturday: 9AM - 4PM</p>
              <p className="text-gray-400">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-4 md:pt-6 mt-4 md:mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} County Wide Auto Parts. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="/terms-and-conditions" className="text-gray-400 hover:text-white text-xs md:text-sm">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Call Button */}
      <a
        href="tel:8887898397"
        className="fixed bottom-6 left-6 z-50 bg-black hover:bg-gray-800 text-white rounded-full shadow-lg p-4 flex items-center justify-center animate-bounce focus:outline-none focus:ring-2 focus:ring-gray-400"
        style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.2)" }}
        aria-label="Call us"
      >
        <Phone className="h-7 w-7" />
      </a>
    </footer>
  )
}
