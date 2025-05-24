import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import AnimatedSection from "@/components/animated-section"
import { ArrowLeftIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons"

export default function FAQPage() {
  const faqCategories = [
    {
      category: "General Information",
      questions: [
        {
          question: "What is the EcoNerds Case Competition?",
          answer:
            "The EcoNerds Case Competition is a premier business case analysis event for students in grades 8-12 in Aktobe, Kazakhstan. Teams analyze real-world business cases, develop solutions, and present their findings to a panel of industry experts.",
        },
        {
          question: "When and where will the competition take place?",
          answer: (
            <>
              The competition will take place on June 5, 2025, at the NIS Aktobe, located on Abulkhair Khan Avenue in Aktobe, Kazakhstan.
              See the location on 2GIS:{" "}
              <a
                href="https://2gis.kz/aktobe/firm/70000001031854810?m=57.133988%2C50.276259%2F16.45"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 underline"
              >
                NIS Aktobe on 2GIS
              </a>
              .
            </>
          ),
        },
        {
          question: "Who can participate in the competition?",
          answer:
            "The competition is open to students in grades 8-12 from all schools in Aktobe. Teams should consist of 3-4 members. No prior business experience is required - we welcome all enthusiastic students who want to develop their business analysis and presentation skills.",
        },
      ],
    },
    {
      category: "Registration & Eligibility",
      questions: [
        {
          question: "How do I register my team?",
          answer:
            "Teams can register through our website by completing the registration form. You'll need to provide information about your team members, school affiliation, and a brief statement about why you want to participate.",
        },
        {
          question: "Is there a registration fee?",
          answer:
            "No, participation in the EcoNerds Case Competition is completely free. However, registration is mandatory and spots are limited, so we recommend registering early to secure your team's place.",
        },
        {
          question: "What is the registration deadline?",
          answer: "The registration deadline is May 31, 2025. Late registrations will not be accepted.",
        },
      ],
    },
    {
      category: "Competition Format",
      questions: [
        {
          question: "What is the format of the competition?",
          answer:
            "The competition will take place over two days. On day one, teams will receive the case and have 24 hours to analyze and prepare their solutions. On day two, teams will present their solutions to a panel of judges, followed by a Q&A session.",
        },
        {
          question: "What should we prepare before the competition?",
          answer:
            "Teams should have basic knowledge of economic principles, financial analysis, and presentation skills. Familiarity with Excel or similar spreadsheet software is recommended. We'll provide all necessary case materials on the day of the competition.",
        },
        {
          question: "What criteria will be used to judge the presentations?",
          answer:
            "Presentations will be judged based on the depth of analysis, creativity and feasibility of solutions, financial justification, presentation quality, and responses to questions from the judges.",
        },
        {
          question: "How long should our presentation be?",
          answer:
            "Each team will have 10 minutes to present their solution, followed by a 5-minute Q&A session with the judges.",
        },
      ],
    },
    {
      category: "Logistics",
      questions: [
        {
          question: "Will meals be provided during the competition?",
          answer:
            "Yes, we will provide breakfast, lunch, and dinner for all participants on both days of the competition. Snacks and refreshments will also be available throughout the event.",
        },
        {
          question: "What should I bring to the competition?",
          answer:
            "Participants should bring their laptops, chargers, and any personal items they may need. We will provide all necessary competition materials, including case documents and presentation facilities.",
        },
      ],
    },
    {
      category: "Recognition",
      questions: [
        {
          question: "Will all participants receive certificates?",
          answer:
            "Yes, all participants will receive certificates of participation. Winning teams will receive special recognition certificates.",
        },
        {
          question: "Are there any additional awards besides the main prizes?",
          answer:
            "Yes, we also have special category awards such as 'Best Financial Analysis,' 'Most Innovative Solution,' and 'Best Presentation.' These awards come with smaller cash prizes and special recognition.",
        },
      ],
    },
  ]

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl max-w-3xl">Find answers to common questions about the EcoNerds Case Competition.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 100} className="mb-12 last:mb-0">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="bg-white rounded-2xl shadow-sm">
                  {category.questions.map((item, j) => (
                    <AccordionItem key={j} value={`item-${i}-${j}`} className="border-b border-green-100 last:border-0">
                      <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-green-600 py-4 px-6">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 px-6 pb-4">{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              Still Have Questions?
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              If you couldn't find the answer to your question, please don't hesitate to contact us directly.
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
