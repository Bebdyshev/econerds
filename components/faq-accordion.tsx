"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Who can participate in the EcoNerds Case Competition?",
    answer:
      "The competition is open to undergraduate and graduate students from all universities in Kazakhstan. Teams must consist of 3-4 students from the same university.",
  },
  {
    question: "What is the registration fee and what does it cover?",
    answer:
      "The registration fee is ₸5,000 per team. This covers participation in the competition, meals during the event, competition materials, and certificates of participation for all team members.",
  },
  {
    question: "What kind of cases will we be solving?",
    answer:
      "Teams will work on real-world economic and business cases provided by our industry partners. The cases will focus on current economic challenges in Kazakhstan and globally, requiring analytical thinking, problem-solving skills, and innovative solutions.",
  },
  {
    question: "Do we need to prepare anything before the competition?",
    answer:
      "No specific preparation is required, but we recommend familiarizing yourself with economic analysis frameworks, case-solving methodologies, and presentation skills. We will provide some preparation resources after registration.",
  },
  {
    question: "What is the judging criteria?",
    answer:
      "Teams will be judged on the quality of their analysis, creativity and feasibility of solutions, presentation skills, and ability to answer questions from the judges. A detailed rubric will be provided at the beginning of the competition.",
  },
  {
    question: "Will there be mentors available during the competition?",
    answer:
      "Yes, industry professionals and academic experts will be available as mentors throughout the competition to provide guidance and feedback to teams.",
  },
  {
    question: "What should we bring to the competition?",
    answer:
      "Teams should bring their own laptops, chargers, and any materials they might need for their presentations. We will provide basic stationery, internet access, and presentation facilities.",
  },
  {
    question: "Is accommodation provided for participants from other cities?",
    answer:
      "Accommodation is not included in the registration fee. However, we can provide recommendations for affordable hotels near the venue and assist with bookings if needed.",
  },
  {
    question: "What are the prizes for the winners?",
    answer:
      "The first-place team will receive ₸1,000,000, second place ₸500,000, and third place ₸250,000. Additionally, there will be special category awards and internship opportunities with our sponsor companies.",
  },
  {
    question: "How can I contact the organizers if I have more questions?",
    answer:
      "You can reach us at info@econerds.kz or call +7 (7132) 12-34-56 for any additional questions or clarifications.",
  },
]

export default function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqItems.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-b border-green-100">
          <AccordionTrigger className="text-left font-medium text-green-800 hover:text-green-600">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
