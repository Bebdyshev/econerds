"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon } from "@radix-ui/react-icons"
import AnimatedSection from "@/components/animated-section"

interface Team {
  id: number
  team_name: string
  institution: string
  team_leader_name: string
  team_leader_email: string
  members: string[]
  created_at: string
}

export default function TeamsPage() {
  const [teams, setTeams] = useState<Team[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function fetchTeams() {
      try {
        const response = await fetch("/api/teams")
        const data = await response.json()

        if (data.success) {
          setTeams(data.teams)
        } else {
          setError(data.message || "Failed to load teams")
        }
      } catch (error) {
        setError("An unexpected error occurred")
        console.error("Error fetching teams:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchTeams()
  }, [])

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Registered Teams</h1>
            <p className="text-xl max-w-3xl">
              View all teams registered for the EcoNerds Case Competition.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Teams List */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {loading ? (
              <div className="flex justify-center p-12">
                <div className="flex items-center space-x-2">
                  <svg className="animate-spin h-8 w-8 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="text-lg text-gray-600">Loading teams...</span>
                </div>
              </div>
            ) : error ? (
              <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-lg text-center">
                <p className="text-lg font-medium">{error}</p>
                <Button 
                  onClick={() => window.location.reload()} 
                  className="mt-4 bg-red-100 text-red-800 hover:bg-red-200"
                >
                  Try Again
                </Button>
              </div>
            ) : teams.length === 0 ? (
              <div className="bg-green-50 p-12 rounded-lg text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">No teams registered yet</h3>
                <p className="text-gray-600">Teams will appear here once they register for the competition.</p>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="grid grid-cols-1 gap-6">
                  {teams.map((team) => (
                    <div key={team.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-800">{team.team_name}</h3>
                            <p className="text-green-600">{team.institution}</p>
                          </div>
                          <div className="mt-2 md:mt-0 px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm">
                            ID: {team.id}
                          </div>
                        </div>
                        
                        <div className="mt-6 grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-medium text-gray-700 mb-2">Team Leader</h4>
                            <p className="text-gray-600"><span className="font-medium">Name:</span> {team.team_leader_name}</p>
                            <p className="text-gray-600"><span className="font-medium">Email:</span> {team.team_leader_email}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-medium text-gray-700 mb-2">Team Members</h4>
                            <ul className="space-y-1">
                              {Array.isArray(team.members) ? (
                                team.members.map((member, index) => (
                                  <li key={index} className="text-gray-600">{member}</li>
                                ))
                              ) : typeof team.members === 'string' ? (
                                JSON.parse(team.members).map((member: string, index: number) => (
                                  <li key={index} className="text-gray-600">{member}</li>
                                ))
                              ) : typeof team.members === 'object' ? (
                                Object.values(team.members).map((member: any, index: number) => (
                                  <li key={index} className="text-gray-600">{member}</li>
                                ))
                              ) : (
                                <li className="text-gray-600">No members data available</li>
                              )}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-4 text-sm text-gray-500 text-right">
                          Registered on {new Date(team.created_at).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
} 