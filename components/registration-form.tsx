"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"

export default function RegistrationForm() {
  const [formState, setFormState] = useState({
    teamName: "",
    institution: "",
    teamLeaderName: "",
    teamLeaderEmail: "",
    teamLeaderPhone: "",
    members: ["", "", ""],
    motivation: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleMemberChange = (index: number, value: string) => {
    const newMembers = [...formState.members]
    newMembers[index] = value
    setFormState((prev) => ({ ...prev, members: newMembers }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Registration Successful!</h3>
        <p className="text-gray-700 mb-6">
          Thank you for registering for the EcoNerds Case Competition. We have sent a confirmation email to{" "}
          {formState.teamLeaderEmail} with further details.
        </p>
        <Button className="bg-green-500 hover:bg-green-600 text-white">Return to Home</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="teamName">Team Name *</Label>
            <Input
              id="teamName"
              name="teamName"
              value={formState.teamName}
              onChange={handleChange}
              required
              className="border-gray-300 focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="institution">Institution/University *</Label>
            <Input
              id="institution"
              name="institution"
              value={formState.institution}
              onChange={handleChange}
              required
              className="border-gray-300 focus:border-green-500 focus:ring-green-500"
            />
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-lg font-medium text-gray-800">Team Leader Information</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="teamLeaderName">Full Name *</Label>
              <Input
                id="teamLeaderName"
                name="teamLeaderName"
                value={formState.teamLeaderName}
                onChange={handleChange}
                required
                className="border-gray-300 focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="teamLeaderEmail">Email *</Label>
              <Input
                id="teamLeaderEmail"
                name="teamLeaderEmail"
                type="email"
                value={formState.teamLeaderEmail}
                onChange={handleChange}
                required
                className="border-gray-300 focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="teamLeaderPhone">Phone Number *</Label>
              <Input
                id="teamLeaderPhone"
                name="teamLeaderPhone"
                type="tel"
                value={formState.teamLeaderPhone}
                onChange={handleChange}
                required
                className="border-gray-300 focus:border-green-500 focus:ring-green-500"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-lg font-medium text-gray-800">Team Members</h4>
          <p className="text-sm text-gray-600">
            Please provide the full names of your team members (3-4 people including team leader)
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {formState.members.map((member, index) => (
              <div key={index} className="space-y-2">
                <Label htmlFor={`member-${index}`}>Team Member {index + 1} *</Label>
                <Input
                  id={`member-${index}`}
                  value={member}
                  onChange={(e) => handleMemberChange(index, e.target.value)}
                  required
                  className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="motivation">Motivation (Why do you want to participate?) *</Label>
          <Textarea
            id="motivation"
            name="motivation"
            value={formState.motivation}
            onChange={handleChange}
            required
            rows={4}
            className="border-gray-300 focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <div className="pt-4">
          <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Register Team"}
          </Button>
        </div>

        <p className="text-sm text-gray-600 text-center">
          By registering, you agree to our Terms and Conditions and Privacy Policy.
        </p>
      </div>
    </form>
  )
}
