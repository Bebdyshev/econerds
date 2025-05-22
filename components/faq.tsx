"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {[
        {
          question: "Who can participate in the EcoNerds Case Competition?",
          answer:
            "The competition is open to undergraduate and graduate students from all universities in Kazakhstan and neighboring countries. Participants must form teams of 3-4 members, and at least one team member must be studying economics, finance, or a related field.",
        },
        {
          question: "What is the registration fee?",
          answer:
            "The registration fee is ₸15,000 per team. This fee covers participation in all competition activities, meals during the event, competition materials, and certificates of participation. Early bird registration (before September 1, 2025) qualifies for a reduced fee of ₸10,000.",
        },
        {
          question: "What should we prepare before the competition?",
          answer:
            "Teams should have a solid understanding of economic principles, financial analysis, and sustainability concepts. We recommend reviewing case analysis methodologies, practicing presentations, and familiarizing yourselves with current economic trends in Kazakhstan and globally. A preparation guide will be sent to all registered teams two weeks before the event.",
        },
        {
          question: "How will teams be evaluated?",
          answer:
            "Teams will be evaluated based on several criteria: analytical approach (30%), creativity and innovation (20%), feasibility of solutions (20%), presentation skills (15%), and teamwork (15%). Judges will consist of industry professionals, academics, and economic policy experts who will provide feedback on your solutions.",
        },
        {
          question: "Will accommodation be provided for participants?",
          answer:
            "Accommodation is not included in the registration fee. However, we have partnered with several hotels near the venue that offer special rates for competition participants. Details about these accommodations will be shared with registered teams. For teams traveling from outside Aktobe, we recommend booking accommodations early.",
        },
        {
          question: "What is the language of the competition?",
          answer:
            "The primary language of the competition is English. All case materials, presentations, and Q&A sessions will be conducted in English. However, we will have translators available for teams that may need assistance with specific terminology.",
        },
        {
          question: "Can we use external resources during the case analysis?",
          answer:
            "Yes, teams are allowed to use internet resources, books, and other reference materials during the case analysis phase. However, teams are not permitted to seek direct assistance from individuals outside their team, including professors, professionals, or other teams. All sources used should be properly cited in your presentation.",
        },
        {
          question: "What happens if we need to withdraw from the competition?",
          answer:
            "If your team needs to withdraw, please notify us as soon as possible. Refunds are available as follows: 100% refund if withdrawal is more than 30 days before the event, 50% refund if 15-30 days before, and no refund if less than 15 days before the competition. In exceptional circumstances, please contact the organizing committee directly.",
        },
      ].map((item, index) => (
        <motion.div
          key={`item-${index + 1}`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <AccordionItem
            value={`item-${index + 1}`}
            className="border-b border-gray-200 dark:border-gray-700 theme-transition"
          >
            <AccordionTrigger className="text-left hover:text-purple-700 dark:hover:text-purple-400 transition-colors py-4 theme-transition">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 dark:text-gray-400 theme-transition">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  )
}
