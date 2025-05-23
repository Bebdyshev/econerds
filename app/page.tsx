import Link from "next/link"
import {
  ArrowRight,
  Calendar,
  MapPin,
  Clock,
  Users,
  Award,
  ChevronDown,
  Briefcase,
  Network,
  BarChart,
  Gift,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroAnimation from "@/components/hero-animation"
import CountdownTimer from "@/components/countdown-timer"
import FAQAccordion from "@/components/faq-accordion"
import SponsorLogos from "@/components/sponsor-logos"
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-green-950 to-green-900 py-20 md:py-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <HeroAnimation />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="animate-fade-up text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">EcoNerds</span>
              <span className="mt-2 block bg-gradient-to-r from-green-300 to-green-100 bg-clip-text text-transparent">
                Case Competition
              </span>
            </h1>
            <p className="mt-6 animate-fade-up text-xl text-green-100 [animation-delay:200ms]">
              Solve real-world economic challenges, showcase your analytical skills, and win amazing prizes
            </p>
            <div className="mt-8 flex animate-fade-up flex-col items-center justify-center gap-4 sm:flex-row [animation-delay:400ms]">
              <Button asChild size="lg" className="bg-green-500 text-lg hover:bg-green-600">
                <Link href="/register">
                  Register Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-green-300 text-lg text-green-100 hover:bg-green-800/20"
              >
                <Link href="#details">Learn More</Link>
              </Button>
            </div>
            <div className="mt-12 animate-fade-up [animation-delay:600ms]">
              <CountdownTimer targetDate="2025-06-15T09:00:00" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Event Details Section */}
      <section id="details" className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-green-50 opacity-70"></div>
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-green-200 opacity-20 blur-3xl"></div>
        <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-green-300 opacity-20 blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="mb-16 text-center">
            <span className="mb-2 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-800">
              June 15-16, 2025
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl md:text-5xl">Event Details</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Join us for this prestigious economic case competition in Aktobe
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-xl border border-green-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-green-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700 transition-all duration-300 group-hover:bg-green-700 group-hover:text-white">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-green-900">Date</h3>
                <p className="text-gray-600">June 15-16, 2025</p>
                <p className="mt-2 text-sm text-gray-500">Saturday & Sunday, 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-green-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-green-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700 transition-all duration-300 group-hover:bg-green-700 group-hover:text-white">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-green-900">Location</h3>
                <p className="text-gray-600">Aktobe Business Center</p>
                <p className="mt-2 text-sm text-gray-500">45 Abulkhair Khan Avenue, Aktobe, Kazakhstan</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-green-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-green-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700 transition-all duration-300 group-hover:bg-green-700 group-hover:text-white">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-green-900">Participants</h3>
                <p className="text-gray-600">Teams of 3-4 students</p>
                <p className="mt-2 text-sm text-gray-500">From universities across Kazakhstan</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-green-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-green-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700 transition-all duration-300 group-hover:bg-green-700 group-hover:text-white">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-green-900">Prizes</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="mr-2 h-5 w-5 rounded-full bg-yellow-400"></div>
                    <p className="text-gray-600">₸1,000,000 for 1st place</p>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-2 h-5 w-5 rounded-full bg-gray-300"></div>
                    <p className="text-gray-600">₸500,000 for 2nd place</p>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-2 h-5 w-5 rounded-full bg-amber-600"></div>
                    <p className="text-gray-600">₸250,000 for 3rd place</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-green-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-green-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700 transition-all duration-300 group-hover:bg-green-700 group-hover:text-white">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-green-900">Duration</h3>
                <p className="text-gray-600">Two full days of competition</p>
                <p className="mt-2 text-sm text-gray-500">Case analysis, mentorship, and presentations</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-green-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-green-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700 transition-all duration-300 group-hover:bg-green-700 group-hover:text-white">
                  <ChevronDown className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-green-900">Registration Fee</h3>
                <p className="text-gray-600">₸5,000 per team</p>
                <p className="mt-2 text-sm text-gray-500">Includes meals, materials, and certificates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-900 to-green-800 py-24 text-white">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-flow.png')] bg-repeat opacity-5"></div>
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-green-500 opacity-10 blur-3xl"></div>
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-green-400 opacity-10 blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="mb-16 text-center">
            <span className="mb-2 inline-block rounded-full bg-green-700 px-4 py-1 text-sm font-medium text-green-100">
              Benefits
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">Why Participate?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-green-100">
              Gain valuable experience and expand your professional network
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-xl bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-green-500 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-20"></div>
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-700 text-green-100 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white">
                  <Briefcase className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-white">Real-World Cases</h3>
                <p className="text-green-100">Work on actual economic challenges provided by our industry partners</p>
                <div className="mt-6 h-1 w-12 rounded-full bg-green-500 transition-all duration-300 group-hover:w-24"></div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-green-500 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-20"></div>
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-700 text-green-100 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-white">Expert Mentorship</h3>
                <p className="text-green-100">Receive guidance from leading economists and business professionals</p>
                <div className="mt-6 h-1 w-12 rounded-full bg-green-500 transition-all duration-300 group-hover:w-24"></div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-green-500 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-20"></div>
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-700 text-green-100 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white">
                  <Network className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-white">Networking</h3>
                <p className="text-green-100">Connect with industry leaders and potential employers</p>
                <div className="mt-6 h-1 w-12 rounded-full bg-green-500 transition-all duration-300 group-hover:w-24"></div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-green-500 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-20"></div>
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-700 text-green-100 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white">
                  <BarChart className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-white">Skill Development</h3>
                <p className="text-green-100">Enhance your analytical, problem-solving, and presentation skills</p>
                <div className="mt-6 h-1 w-12 rounded-full bg-green-500 transition-all duration-300 group-hover:w-24"></div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-green-500 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-20"></div>
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-700 text-green-100 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-white">Recognition</h3>
                <p className="text-green-100">Gain recognition from prestigious companies and organizations</p>
                <div className="mt-6 h-1 w-12 rounded-full bg-green-500 transition-all duration-300 group-hover:w-24"></div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-green-500 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-20"></div>
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-700 text-green-100 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white">
                  <Gift className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-white">Prizes</h3>
                <p className="text-green-100">Win cash prizes, internship opportunities, and more</p>
                <div className="mt-6 h-1 w-12 rounded-full bg-green-500 transition-all duration-300 group-hover:w-24"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <span className="mb-2 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-800">
              Agenda
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl md:text-5xl">Event Schedule</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Two days of intense competition, learning, and networking
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 ml-8 hidden w-0.5 bg-green-200 md:block"></div>

              {/* Day 1 */}
              <div className="mb-12">
                <div className="flex flex-col md:flex-row">
                  <div className="mb-4 flex md:mb-0 md:w-48">
                    <div className="z-10 mr-4 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-white shadow-lg md:mt-1">
                      <span className="text-lg font-bold">Day 1</span>
                    </div>
                    <div className="pt-3 md:hidden">
                      <h3 className="text-xl font-bold text-green-800">June 15, 2025</h3>
                      <p className="text-sm text-gray-600">Competition Kickoff</p>
                    </div>
                  </div>

                  <div className="hidden pt-3 md:block md:w-48">
                    <h3 className="text-xl font-bold text-green-800">June 15, 2025</h3>
                    <p className="text-sm text-gray-600">Competition Kickoff</p>
                  </div>

                  <div className="ml-0 md:ml-12">
                    <div className="space-y-6">
                      <div className="group rounded-xl border border-green-100 bg-white p-6 shadow-sm transition-all hover:border-green-200 hover:shadow-md">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 sm:mb-0">
                            <span className="font-semibold">09:00</span>
                          </div>
                          <div className="sm:ml-6">
                            <h4 className="text-lg font-semibold text-green-900">Registration & Welcome Coffee</h4>
                            <p className="mt-1 text-gray-600">Check-in and networking</p>
                          </div>
                        </div>
                      </div>

                      <div className="group rounded-xl border border-green-100 bg-white p-6 shadow-sm transition-all hover:border-green-200 hover:shadow-md">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 sm:mb-0">
                            <span className="font-semibold">10:00</span>
                          </div>
                          <div className="sm:ml-6">
                            <h4 className="text-lg font-semibold text-green-900">Opening Ceremony</h4>
                            <p className="mt-1 text-gray-600">Introduction to the competition and keynote speech</p>
                          </div>
                        </div>
                      </div>

                      <div className="group rounded-xl border border-green-100 bg-white p-6 shadow-sm transition-all hover:border-green-200 hover:shadow-md">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 sm:mb-0">
                            <span className="font-semibold">11:00</span>
                          </div>
                          <div className="sm:ml-6">
                            <h4 className="text-lg font-semibold text-green-900">Case Reveal</h4>
                            <p className="mt-1 text-gray-600">Teams receive the case and begin analysis</p>
                          </div>
                        </div>
                      </div>

                      <div className="group rounded-xl border border-green-100 bg-white p-6 shadow-sm transition-all hover:border-green-200 hover:shadow-md">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 sm:mb-0">
                            <span className="font-semibold">12:00</span>
                          </div>
                          <div className="sm:ml-6">
                            <h4 className="text-lg font-semibold text-green-900">Networking Lunch</h4>
                            <p className="mt-1 text-gray-600">Lunch with sponsors and industry professionals</p>
                          </div>
                        </div>
                      </div>

                      <div className="group rounded-xl border border-green-100 bg-white p-6 shadow-sm transition-all hover:border-green-200 hover:shadow-md">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 sm:mb-0">
                            <span className="font-semibold">13:00</span>
                          </div>
                          <div className="sm:ml-6">
                            <h4 className="text-lg font-semibold text-green-900">Case Analysis</h4>
                            <p className="mt-1 text-gray-600">Teams work on their solutions with mentor support</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                                Mentorship
                              </span>
                              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                                Team Work
                              </span>
                              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                                Analysis
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 2 */}
              <div>
                <div className="flex flex-col md:flex-row">
                  <div className="mb-4 flex md:mb-0 md:w-48">
                    <div className="z-10 mr-4 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-white shadow-lg md:mt-1">
                      <span className="text-lg font-bold">Day 2</span>
                    </div>
                    <div className="pt-3 md:hidden">
                      <h3 className="text-xl font-bold text-green-800">June 16, 2025</h3>
                      <p className="text-sm text-gray-600">Presentations & Awards</p>
                    </div>
                  </div>

                  <div className="hidden pt-3 md:block md:w-48">
                    <h3 className="text-xl font-bold text-green-800">June 16, 2025</h3>
                    <p className="text-sm text-gray-600">Presentations & Awards</p>
                  </div>

                  <div className="ml-0 md:ml-12">
                    <div className="space-y-6">
                      <div className="group rounded-xl border border-green-100 bg-white p-6 shadow-sm transition-all hover:border-green-200 hover:shadow-md">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 sm:mb-0">
                            <span className="font-semibold">09:00</span>
                          </div>
                          <div className="sm:ml-6">
                            <h4 className="text-lg font-semibold text-green-900">Preparation Time</h4>
                            <p className="mt-1 text-gray-600">Final touches on presentations</p>
                          </div>
                        </div>
                      </div>

                      <div className="group rounded-xl border border-green-100 bg-white p-6 shadow-sm transition-all hover:border-green-200 hover:shadow-md">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 sm:mb-0">
                            <span className="font-semibold">10:00</span>
                          </div>
                          <div className="sm:ml-6">
                            <h4 className="text-lg font-semibold text-green-900">Preliminary Presentations</h4>
                            <p className="mt-1 text-gray-600">Teams present their solutions to judges</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                                Presentations
                              </span>
                              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                                Q&A
                              </span>
                              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                                Feedback
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="group rounded-xl border border-green-100 bg-white p-6 shadow-sm transition-all hover:border-green-200 hover:shadow-md">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 sm:mb-0">
                            <span className="font-semibold">13:00</span>
                          </div>
                          <div className="sm:ml-6">
                            <h4 className="text-lg font-semibold text-green-900">Networking Lunch</h4>
                            <p className="mt-1 text-gray-600">Lunch and networking</p>
                          </div>
                        </div>
                      </div>

                      <div className="group rounded-xl border border-green-100 bg-white p-6 shadow-sm transition-all hover:border-green-200 hover:shadow-md">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 sm:mb-0">
                            <span className="font-semibold">14:00</span>
                          </div>
                          <div className="sm:ml-6">
                            <h4 className="text-lg font-semibold text-green-900">Final Round</h4>
                            <p className="mt-1 text-gray-600">Top teams present to all attendees</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                                Final Presentations
                              </span>
                              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                                Expert Panel
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="group rounded-xl border border-green-100 bg-white p-6 shadow-sm transition-all hover:border-green-200 hover:shadow-md">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 sm:mb-0">
                            <span className="font-semibold">17:00</span>
                          </div>
                          <div className="sm:ml-6">
                            <h4 className="text-lg font-semibold text-green-900">Awards Ceremony</h4>
                            <p className="mt-1 text-gray-600">Announcement of winners and closing remarks</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                                Prizes
                              </span>
                              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                                Certificates
                              </span>
                              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                                Celebration
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="bg-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">Our Sponsors</h2>
            <p className="mt-4 text-lg text-gray-600">Supported by leading organizations in economics and finance</p>
          </div>

          <SponsorLogos />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">What Past Participants Say</h2>
            <p className="mt-4 text-lg text-gray-600">Hear from previous competitors about their experience</p>
          </div>

          <Testimonials />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600">Find answers to common questions about the competition</p>
          </div>

          <div className="mx-auto max-w-3xl">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to showcase your economic expertise?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-green-100">
            Join the EcoNerds Case Competition and take your first step toward a successful career in economics and
            finance.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-white text-lg text-green-900 hover:bg-green-100">
              <Link href="/register">Register Your Team Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
