import Link from "next/link"
import { Button } from "@/components/ui/button"
import RegistrationForm from "@/components/registration-form"
import RegistrationSteps from "@/components/registration-steps"
import AnimatedSection from "@/components/animated-section"
import FallingMoney from "@/components/falling-money"
import { ArrowLeftIcon } from "@radix-ui/react-icons"

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <FallingMoney />

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Register Your Team</h1>
            <p className="text-xl max-w-3xl">
              Complete the registration form below to secure your team's spot in the EcoNerds Case Competition.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Registration Steps */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <RegistrationSteps />
          </AnimatedSection>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                Team Registration Form
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={200}>
              <RegistrationForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Registration Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                Important Information
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={200}>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Registration Requirements</h3>
                    <ul className="space-y-3">
                      {[
                        "Teams must consist of 3-4 members",
                        "All team members must be currently enrolled students",
                        "At least one team member should have a background in economics or finance",
                        "Teams can represent universities, colleges, or form independently",
                        "Registration deadline: May 31, 2024",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2 flex-shrink-0">
                            ✓
                          </span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">What to Expect After Registration</h3>
                    <ul className="space-y-3">
                      {[
                        "Confirmation email within 24 hours",
                        "Team registration number and access to preparation materials",
                        "Pre-competition briefing details (1 week before the event)",
                        "Information about accommodation options for out-of-town participants",
                        "Competition schedule and venue details",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2 flex-shrink-0">
                            ✓
                          </span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <AnimatedSection animation="fade-up" delay={300} className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Need Help?</h3>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about the registration process or the competition, please don't hesitate
                    to contact us.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50" asChild>
                      <Link href="/faq">View FAQ</Link>
                    </Button>
                    <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50" asChild>
                      <Link href="/contact">Contact Support</Link>
                    </Button>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  )
}
