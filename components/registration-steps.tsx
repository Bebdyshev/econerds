"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { ClipboardList, Users, CalendarCheck, Award } from "lucide-react"
import { useRef } from "react"

export default function RegistrationSteps() {
  const steps = [
    {
      icon: <ClipboardList className="h-8 w-8 text-green-600" />,
      title: "Complete Registration Form",
      description: "Fill out the team registration form with all required information.",
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Team Confirmation",
      description: "Receive confirmation email and team registration number.",
    },
    {
      icon: <CalendarCheck className="h-8 w-8 text-green-600" />,
      title: "Pre-Competition Briefing",
      description: "Attend the online briefing session one week before the competition.",
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: "Competition Day",
      description: "Arrive at the venue on June 15th ready to tackle the case challenge.",
    },
  ]

  const stepRefs = steps.map(() => useRef(null))
  const inViewStates = steps.map((_, index) => {
    const { inView } = useInView({
      ref: stepRefs[index],
      threshold: 0.3,
      triggerOnce: true,
      delay: 100,
    })
    return inView
  })

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
        Registration Process
      </h2>

      <div className="relative">
        {/* Connecting line */}
        <div className="absolute left-8 top-0 h-full w-0.5 bg-green-200 md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-12">
          {steps.map((step, index) => {
            const inView = inViewStates[index]

            return (
              <div key={index} ref={stepRefs[index]} className="relative">
                <div
                  className={cn(
                    "flex flex-col md:flex-row md:items-center transition-all duration-700 transform",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Step number */}
                  <div className="absolute left-8 top-0 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-white border-2 border-green-500 text-green-600 font-bold text-xl shadow-md md:left-1/2">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="ml-16 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                    {index % 2 === 0 ? (
                      <div className="hidden md:block" />
                    ) : (
                      <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="flex items-center justify-end mb-4">
                          <h3 className="text-xl font-bold text-gray-900 mr-4">{step.title}</h3>
                          <div className="bg-green-100 p-3 rounded-full">{step.icon}</div>
                        </div>
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                    )}
                  </div>

                  <div className="ml-16 md:ml-0 md:w-1/2 md:pl-12">
                    {index % 2 === 1 ? (
                      <div className="hidden md:block" />
                    ) : (
                      <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="flex items-center mb-4">
                          <div className="bg-green-100 p-3 rounded-full mr-4">{step.icon}</div>
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
