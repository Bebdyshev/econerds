"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, PlusCircle, XCircle } from "lucide-react"
import Link from "next/link"

export default function RegistrationForm() {
  const [formState, setFormState] = useState({
    teamName: "",
    institution: "",
    teamLeaderName: "",
    teamLeaderEmail: "",
    teamLeaderPhone: "",
    members: [""],
    motivation: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleMemberChange = (index: number, value: string) => {
    const newMembers = [...formState.members]
    newMembers[index] = value
    setFormState((prev) => ({ ...prev, members: newMembers }))
  }

  const addMember = () => {
    if (formState.members.length < 3) {
      setFormState((prev) => ({ ...prev, members: [...prev.members, ""] }))
    }
  }

  const removeMember = (index: number) => {
    if (formState.members.length > 1) {
      const newMembers = [...formState.members]
      newMembers.splice(index, 1)
      setFormState((prev) => ({ ...prev, members: newMembers }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      console.log("Sending registration data:", formState)
      
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      const data = await response.json()
      console.log("Registration response:", data)

      if (data.success) {
        setIsSubmitted(true)
      } else {
        setError(data.message || "Failed to register team. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
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
        <Button className="bg-green-500 hover:bg-green-600 text-white" asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
          {error}
        </div>
      )}
      
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
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-medium text-gray-800">Team Members</h4>
            {formState.members.length < 3 && (
              <Button 
                type="button" 
                variant="outline" 
                size="sm" 
                onClick={addMember}
                className="flex items-center text-green-600 border-green-500 hover:bg-green-50"
              >
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Member
              </Button>
            )}
          </div>
          <p className="text-sm text-gray-600">
            Add from 1 to 3 team members (not including yourself as team leader)
          </p>

          <div className="space-y-4">
            {formState.members.map((member, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="flex-grow">
                  <Label htmlFor={`member-${index}`} className="sr-only">Team Member {index + 1}</Label>
                  <Input
                    id={`member-${index}`}
                    placeholder={`Team Member ${index + 1} *`}
                    value={member}
                    onChange={(e) => handleMemberChange(index, e.target.value)}
                    required
                    className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                {formState.members.length > 1 && (
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="icon"
                    onClick={() => removeMember(index)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <XCircle className="h-5 w-5" />
                  </Button>
                )}
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
          <Button 
            type="submit" 
            className="w-full bg-green-500 hover:bg-green-600 text-white" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : "Register Team"}
          </Button>
        </div>

        <p className="text-sm text-gray-600 text-center">
          By registering, you agree to our Terms and Conditions and Privacy Policy.
        </p>
      </div>
    </form>
  )
}
