import { Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import AnimatedSection from "@/components/animated-section"
import { ArrowLeftIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-500 to-emerald-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20" asChild>
              <Link href="/">
                <ArrowLeftIcon className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl">Have questions about the EcoNerds Case Competition? We're here to help!</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection animation="slide-right">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <EnvelopeClosedIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-700">info@econerds.kz</p>
                    <p className="text-gray-700">support@econerds.kz</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-700">+7 (705) 554 2611</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-700">мкр-н Батыс 2 26Б</p>
                    <p className="text-gray-700">NIS Aktobe, Kazakhstan</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Office Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-700">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-medium text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="bg-green-100 p-3 rounded-full text-green-600 hover:bg-green-200 transition-colors"
                    >
                      <img
                        src={`/placeholder.svg?height=24&width=24&query=${social} icon`}
                        alt={social}
                        className="h-6 w-6"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Check out our FAQ section for quick answers to common questions.
            </p>
            <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50" asChild>
              <Link href="/faq">View FAQ</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
