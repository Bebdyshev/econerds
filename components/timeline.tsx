"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { useRef } from "react"

export default function Timeline() {
  const timelineEvents = [
    {
      year: "2018",
      title: "The Beginning",
      description:
        "EcoNerds was founded by a group of economics professors who wanted to bridge the gap between academic theory and practical application.",
    },
    {
      year: "2019",
      title: "First Competition",
      description:
        "The inaugural EcoNerds Case Competition was held in Almaty with 12 teams from 5 universities participating.",
    },
    {
      year: "2020",
      title: "Going Virtual",
      description:
        "Due to the global pandemic, we adapted our format to a virtual competition, reaching students from all regions of Kazakhstan.",
    },
    {
      year: "2021",
      title: "International Expansion",
      description:
        "We welcomed our first international teams from Uzbekistan and Kyrgyzstan, expanding our reach across Central Asia.",
    },
    {
      year: "2022",
      title: "Corporate Partnerships",
      description:
        "Major financial institutions and economic development agencies joined as sponsors, providing real-world cases and mentorship.",
    },
    {
      year: "2023",
      title: "Aktobe Debut",
      description:
        "The competition moved to Aktobe, establishing our new headquarters and strengthening ties with western Kazakhstan universities.",
    },
    {
      year: "2024",
      title: "Present Day",
      description:
        "Now in our 7th year, we're proud to host the largest economic case competition in Central Asia, with over 50 teams expected to participate.",
    },
  ]

  return (
    <div className="relative">
      {/* Center line */}
      <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-green-200" />

      <div className="space-y-12">
        {timelineEvents.map((event, index) => {
          return <TimelineItem key={index} event={event} index={index} />
        })}
      </div>
    </div>
  )
}

function TimelineItem({ event, index }: { event: any; index: number }) {
  const { year, title, description } = event
  const ref = useRef(null)
  const { inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <div ref={ref} className="relative">
      {/* Year marker */}
      <div className="absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-green-500 text-white shadow-lg">
        {year}
      </div>

      {/* Content */}
      <div
        className={cn(
          "grid grid-cols-1 gap-8 md:grid-cols-2 transition-all duration-700 transform",
          inView ? "opacity-100" : "opacity-0",
          index % 2 === 0
            ? inView
              ? "translate-x-0"
              : "-translate-x-10"
            : inView
              ? "translate-x-0"
              : "translate-x-10",
        )}
      >
        {/* Empty space for even items on left side */}
        {index % 2 === 0 && <div className="hidden md:block" />}

        <div className={cn("bg-white p-6 rounded-xl shadow-md", index % 2 === 0 ? "md:text-left" : "md:text-right")}>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>

        {/* Empty space for odd items on right side */}
        {index % 2 === 1 && <div className="hidden md:block" />}
      </div>
    </div>
  )
}
