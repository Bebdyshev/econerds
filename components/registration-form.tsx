"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import axios from "axios"
import { motion } from "framer-motion"
import { ReloadIcon } from "@radix-ui/react-icons"

export function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(e.currentTarget)

    try {
      // This would be replaced with your actual API endpoint
      await axios.post("https://backend-production-56eb.up.railway.app/api/register", {
        teamName: formData.get("teamName"),
        institution: formData.get("institution"),
        teamSize: formData.get("teamSize"),
        contactName: formData.get("contactName"),
        contactEmail: formData.get("contactEmail"),
        contactPhone: formData.get("contactPhone"),
        teamMembers: formData.get("teamMembers"),
        motivation: formData.get("motivation"),
      })

      setIsSuccess(true)
      e.currentTarget.reset()
    } catch (err) {
      setError("There was an error submitting your registration. Please try again.")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <Card className="border border-purple-100 dark:border-purple-900 shadow-lg theme-transition">
        <CardContent className="pt-6">
          {isSuccess ? (
            <div className="text-center py-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 theme-transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600 dark:text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-2 theme-transition"
              >
                Registration Successful!
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-600 dark:text-gray-300 mb-6 theme-transition"
              >
                Thank you for registering for the EcoNerds Case Competition. We've sent a confirmation email with
                further details.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <Button onClick={() => setIsSuccess(false)}>Register Another Team</Button>
              </motion.div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="teamName" className="text-gray-700 dark:text-gray-300 theme-transition">
                      Team Name *
                    </Label>
                    <Input
                      id="teamName"
                      name="teamName"
                      required
                      className="dark:bg-gray-800 dark:border-gray-700 theme-transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="institution" className="text-gray-700 dark:text-gray-300 theme-transition">
                        Institution/University *
                      </Label>
                      <Input
                        id="institution"
                        name="institution"
                        required
                        className="dark:bg-gray-800 dark:border-gray-700 theme-transition"
                      />
                    </div>

                    <div>
                      <Label htmlFor="teamSize" className="text-gray-700 dark:text-gray-300 theme-transition">
                        Team Size *
                      </Label>
                      <Select name="teamSize" required>
                        <SelectTrigger id="teamSize" className="dark:bg-gray-800 dark:border-gray-700 theme-transition">
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                        <SelectContent className="dark:bg-gray-800 theme-transition">
                          <SelectItem value="3">3 Members</SelectItem>
                          <SelectItem value="4">4 Members</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white theme-transition">
                    Team Leader/Contact Person
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contactName" className="text-gray-700 dark:text-gray-300 theme-transition">
                        Full Name *
                      </Label>
                      <Input
                        id="contactName"
                        name="contactName"
                        required
                        className="dark:bg-gray-800 dark:border-gray-700 theme-transition"
                      />
                    </div>

                    <div>
                      <Label htmlFor="contactEmail" className="text-gray-700 dark:text-gray-300 theme-transition">
                        Email *
                      </Label>
                      <Input
                        id="contactEmail"
                        name="contactEmail"
                        type="email"
                        required
                        className="dark:bg-gray-800 dark:border-gray-700 theme-transition"
                      />
                    </div>

                    <div>
                      <Label htmlFor="contactPhone" className="text-gray-700 dark:text-gray-300 theme-transition">
                        Phone Number *
                      </Label>
                      <Input
                        id="contactPhone"
                        name="contactPhone"
                        required
                        className="dark:bg-gray-800 dark:border-gray-700 theme-transition"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="teamMembers" className="text-gray-700 dark:text-gray-300 theme-transition">
                    Team Members (Names and Roles) *
                  </Label>
                  <Textarea
                    id="teamMembers"
                    name="teamMembers"
                    placeholder="List all team members with their full names, roles, and year of study"
                    className="min-h-[100px] dark:bg-gray-800 dark:border-gray-700 theme-transition"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="motivation" className="text-gray-700 dark:text-gray-300 theme-transition">
                    Motivation for Participating *
                  </Label>
                  <Textarea
                    id="motivation"
                    name="motivation"
                    placeholder="Tell us why your team wants to participate in the EcoNerds Case Competition (max 300 words)"
                    className="min-h-[100px] dark:bg-gray-800 dark:border-gray-700 theme-transition"
                    required
                  />
                </div>
              </div>

              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-md text-sm theme-transition">
                  {error}
                </div>
              )}

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="rounded border-gray-300 dark:border-gray-700 dark:bg-gray-800 theme-transition"
                  required
                />
                <Label
                  htmlFor="terms"
                  className="text-sm font-normal text-gray-700 dark:text-gray-300 theme-transition"
                >
                  I agree to the{" "}
                  <a href="#" className="text-purple-600 dark:text-purple-400 hover:underline">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-purple-600 dark:text-purple-400 hover:underline">
                    Privacy Policy
                  </a>
                </Label>
              </div>

              <Button
                type="submit"
                className={`w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] ${isSubmitting ? "shimmer" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Register Team"
                )}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
