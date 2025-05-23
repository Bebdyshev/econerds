"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  bio: string
}

export default function TeamMember({ name, role, image, bio }: TeamMemberProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image || "/placeholder.svg?height=300&width=300&query=professional portrait"}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <div
          className={cn("transform transition-transform duration-300", isHovered ? "translate-y-0" : "translate-y-12")}
        >
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm text-green-300">{role}</p>
          <p
            className={cn(
              "mt-2 text-sm opacity-0 transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0",
            )}
          >
            {bio}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform transition-transform duration-300 group-hover:translate-y-full">
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        <p className="text-sm text-green-600">{role}</p>
      </div>
    </div>
  )
}
