import { MapPin, Clock, Users, Award } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CountdownTimer from "@/components/countdown-timer"
import AnimatedFeature from "@/components/animated-feature"
import ParticleBackground from "@/components/particle-background"
import SponsorLogos from "@/components/sponsor-logos"
import TestimonialSlider from "@/components/testimonial-slider"
import FallingMoney from "@/components/falling-money"
import AnimatedSection from "@/components/animated-section"
import { ArrowRightIcon, CalendarIcon } from "@radix-ui/react-icons"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <FallingMoney />

      {/* Hero Section */}
      <section className="relative overflow-hidden h-screen flex items-center">
        <ParticleBackground />
        <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center h-full">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                EcoNerds Case Competition
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8">
                Solve real-world economic challenges and showcase your innovative solutions
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white" asChild>
                  <Link href="/register">
                    Register Now <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-500 text-green-600 hover:bg-green-50"
                  asChild
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
              <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg inline-block">
                <CountdownTimer targetDate="2025-05-27T08:00:00" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 bg-white" id="details">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                Event Details
              </span>
              <span className="block w-24 h-1 bg-green-500 mx-auto mt-4"></span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedFeature
              icon={<CalendarIcon className="h-10 w-10 text-green-500" />}
              title="Date"
              description="June 5, 2024"
              delay={0}
            />
            <AnimatedFeature
              icon={<MapPin className="h-10 w-10 text-green-500" />}
              title="Location"
              description="Aktobe Business Center, Abulkhair Khan Avenue, Aktobe"
              delay={1}
            />
            <AnimatedFeature
              icon={<Clock className="h-10 w-10 text-green-500" />}
              title="Time"
              description="9:00 AM - 6:00 PM"
              delay={2}
            />
            <AnimatedFeature
              icon={<Users className="h-10 w-10 text-green-500" />}
              title="Participants"
              description="Teams of 3-4 students"
              delay={3}
            />
          </div>

          <AnimatedSection animation="fade-up" delay={200} className="mt-16">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl shadow-sm">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">About the Competition</h3>
                  <p className="text-gray-700 mb-4">
                    EcoNerds Case Competition brings together the brightest minds to tackle pressing economic challenges
                    with innovative, sustainable solutions.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Teams will have 24 hours to analyze a real-world economic case, develop comprehensive solutions, and
                    present their findings to a panel of industry experts.
                  </p>
                  <ul className="space-y-2">
                    {["Case analysis", "Strategic planning", "Financial modeling", "Presentation skills"].map(
                      (item, i) => (
                        <li key={i} className="flex items-center">
                          <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                          <span>{item}</span>
                        </li>
                      ),
                    )}
                  </ul>
                  <div className="mt-6">
                    <Button className="bg-green-500 hover:bg-green-600 text-white" asChild>
                      <Link href="/about">Read More About EcoNerds</Link>
                    </Button>
                  </div>
                </div>
                <div className="relative h-64 md:h-80 overflow-hidden rounded-xl shadow-lg">
                  <img
                    src="https://agcdn-1d97e.kxcdn.com/wp-content/uploads/2018/02/alphagamma-best-case-competitions-to-apply-for-in-2018-entrepreneurship-youth-opportunities-business.jpg"
                    alt="EcoNerds Case Competition"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">Prize pool: $5,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                Prizes & Recognition
              </span>
              <span className="block w-24 h-1 bg-green-500 mx-auto mt-4"></span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { place: "1st Place", prize: "$2,500", icon: "🏆", color: "from-yellow-400 to-yellow-300" },
              { place: "2nd Place", prize: "$1,500", icon: "🥈", color: "from-gray-400 to-gray-300" },
              { place: "3rd Place", prize: "$1,000", icon: "🥉", color: "from-amber-600 to-amber-500" },
            ].map((item, i) => (
              <AnimatedSection key={i} animation="zoom-in" delay={i * 100}>
                <div className="group">
                  <div
                    className={`bg-white rounded-2xl shadow-lg p-8 text-center transition-transform duration-300 group-hover:-translate-y-2`}
                  >
                    <div className={`text-5xl mb-4 bg-gradient-to-r ${item.color} bg-clip-text`}>{item.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.place}</h3>
                    <p className="text-3xl font-bold text-green-600 mb-4">{item.prize}</p>
                    <p className="text-gray-600">Plus internship opportunities with our sponsor companies</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={300} className="mt-16 text-center">
            <p className="text-lg text-gray-700 mb-6">
              All participants will receive certificates and exclusive networking opportunities with industry
              professionals.
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white" asChild>
              <Link href="/prizes">
                View Full Prize Details <Award className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Showcase Your Economic Expertise?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join the EcoNerds Case Competition and put your skills to the test. Registration closes on May 31, 2024.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" asChild>
                <Link href="/register">Register Your Team</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-600" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                Our Sponsors
              </span>
              <span className="block w-24 h-1 bg-green-500 mx-auto mt-4"></span>
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={200}>
            <SponsorLogos />
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300} className="mt-16 text-center">
            <p className="text-gray-700 mb-6">
              Interested in becoming a sponsor? Reach out to us for partnership opportunities.
            </p>
            <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50" asChild>
              <Link href="/sponsors">Become a Sponsor</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
