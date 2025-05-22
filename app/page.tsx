"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Users, Award, BookOpen } from "lucide-react"
import { Faq } from "@/components/faq"
import { RegistrationForm } from "@/components/registration-form"
import { Timeline } from "@/components/timeline"
import { Sponsors } from "@/components/sponsors"
import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"
import { StatsSection } from "@/components/stats-section"
import { Testimonials } from "@/components/testimonials"
import { FloatingElements } from "@/components/floating-elements"
import { ScrollToTop } from "@/components/scroll-to-top"
import { useTheme } from "next-themes"
import { ChevronRightIcon, CalendarIcon } from "@radix-ui/react-icons"

export default function Home() {
  const { theme } = useTheme()

  return (
    <div className="flex flex-col min-h-screen theme-transition">
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-indigo-900/90 z-10 dark:from-purple-950/90 dark:to-indigo-950/90" />
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/images/hero-background.png')",
            backgroundBlendMode: "overlay",
          }}
        />
        <div className="absolute inset-0 z-5 overflow-hidden">
          <FloatingElements />
        </div>
        <div className="container relative z-20 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight text-shadow-lg"
            >
              EcoNerds Case Competition
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 mb-8"
            >
              Solve real-world economic challenges and showcase your analytical skills in Aktobe's premier case
              competition
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white group transition-all duration-300 transform hover:scale-105"
              >
                <Link href="#register" className="flex items-center">
                  Register Now <ChevronRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <Link href="#about">Learn More</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-12 flex flex-wrap justify-center gap-6"
            >
              <div className="flex items-center text-white">
                <CalendarIcon className="mr-2 h-5 w-5 text-emerald-400" />
                <span>October 15-17, 2025</span>
              </div>
              <div className="flex items-center text-white">
                <MapPin className="mr-2 h-5 w-5 text-emerald-400" />
                <span>Aktobe Business Center</span>
              </div>
              <div className="flex items-center text-white">
                <Users className="mr-2 h-5 w-5 text-emerald-400" />
                <span>Teams of 3-4</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent z-20" />
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block h-[60px] w-full wave"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill={theme === "dark" ? "#111827" : "#ffffff"}
              opacity=".25"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              fill={theme === "dark" ? "#111827" : "#ffffff"}
              opacity=".5"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill={theme === "dark" ? "#111827" : "#ffffff"}
            />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900 theme-transition">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">About EcoNerds</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              EcoNerds Case Competition brings together the brightest minds to tackle pressing economic and
              sustainability challenges. Organized by the Economics Department of Aktobe University, this competition
              provides a platform for students to apply theoretical knowledge to real-world scenarios.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl shadow-sm card-hover theme-transition"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6 theme-transition">
                <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Learn</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Gain insights from industry experts and enhance your understanding of economic principles through
                practical application.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-xl shadow-sm card-hover theme-transition"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6 theme-transition">
                <Users className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Connect</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Network with like-minded individuals, potential employers, and mentors who can guide your career in
                economics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-xl shadow-sm card-hover theme-transition"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6 theme-transition">
                <Award className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Compete</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Showcase your analytical skills, creativity, and teamwork to win prestigious awards and recognition from
                industry leaders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Event Details */}
      <section id="schedule" className="py-20 bg-gray-50 dark:bg-gray-800 theme-transition">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Event Details</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Mark your calendars for an exciting three-day event filled with challenges, networking, and learning
              opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm mb-8 theme-transition">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Venue</h3>
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Aktobe Business Center</p>
                    <p className="text-gray-700 dark:text-gray-300">123 Abulkhair Khan Avenue, Aktobe, Kazakhstan</p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <CalendarIcon className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Dates</p>
                    <p className="text-gray-700 dark:text-gray-300">October 15-17, 2025</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Time</p>
                    <p className="text-gray-700 dark:text-gray-300">9:00 AM - 6:00 PM (All days)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm theme-transition">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Prizes</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/50 flex items-center justify-center mr-3 flex-shrink-0 theme-transition">
                      <span className="font-bold text-yellow-600 dark:text-yellow-400">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">First Place</p>
                      <p className="text-gray-700 dark:text-gray-300">₸1,000,000 + Internship Opportunities</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3 flex-shrink-0 theme-transition">
                      <span className="font-bold text-gray-600 dark:text-gray-300">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Second Place</p>
                      <p className="text-gray-700 dark:text-gray-300">₸500,000 + Mentorship Program</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center mr-3 flex-shrink-0 theme-transition">
                      <span className="font-bold text-amber-600 dark:text-amber-400">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Third Place</p>
                      <p className="text-gray-700 dark:text-gray-300">₸250,000 + Networking Event Access</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <Timeline />
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-20 bg-white dark:bg-gray-900 theme-transition">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Register Your Team</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Ready to showcase your economic expertise? Register your team now to secure your spot in the competition.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <RegistrationForm />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-900 theme-transition">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              What Participants Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-lg text-gray-700 dark:text-gray-300"
            >
              Hear from past participants about their experience at the EcoNerds Case Competition.
            </motion.p>
          </div>

          <Testimonials />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800 theme-transition">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Find answers to common questions about the EcoNerds Case Competition.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Faq />
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-white dark:bg-gray-900 theme-transition">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Sponsors</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              EcoNerds Case Competition is proudly supported by these leading organizations.
            </p>
          </div>

          <Sponsors />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-purple-900 dark:bg-purple-950 text-white relative overflow-hidden theme-transition"
      >
        <div className="absolute inset-0 z-0 opacity-50">
          <FloatingElements />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-lg text-white/80">Have questions? Reach out to our team for more information.</p>
          </div>

          <div className="max-w-xl mx-auto glass-effect rounded-xl p-8">
            <div className="grid gap-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/60">Email</p>
                  <p className="font-medium">info@econerds.kz</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/60">Phone</p>
                  <p className="font-medium">+7 (712) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/60">Address</p>
                  <p className="font-medium">123 Abulkhair Khan Avenue, Aktobe, Kazakhstan</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 theme-transition">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">EcoNerds</h2>
              <p className="text-gray-400 mt-2">Aktobe's Premier Economic Case Competition</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#register" className="text-gray-400 hover:text-white transition-colors">
                      Register
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Past Winners
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Preparation Tips
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} EcoNerds Case Competition. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  )
}
