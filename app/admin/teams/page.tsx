"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeftIcon, Cross2Icon, Pencil1Icon, PlusIcon, TrashIcon } from "@radix-ui/react-icons"
import AnimatedSection from "@/components/animated-section"

interface Team {
  id: number
  team_name: string
  institution: string
  team_leader_name: string
  team_leader_email: string
  team_leader_phone?: string
  members: string[] | string | any
  motivation?: string
  created_at: string
}

export default function TeamsPage() {
  const [teams, setTeams] = useState<Team[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  
  // State for team CRUD operations
  const [showForm, setShowForm] = useState(false)
  const [editingTeam, setEditingTeam] = useState<Team | null>(null)
  const [formData, setFormData] = useState<Partial<Team>>({
    team_name: "",
    institution: "",
    team_leader_name: "",
    team_leader_email: "",
    team_leader_phone: "",
    members: [""],
    motivation: ""
  })
  const [formMode, setFormMode] = useState<"add" | "edit">("add")
  const [formError, setFormError] = useState("")
  const [formSuccess, setFormSuccess] = useState("")
  const [processing, setProcessing] = useState(false)

  useEffect(() => {
    fetchTeams()
  }, [])

  async function fetchTeams() {
    try {
      setLoading(true)
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleMemberChange = (index: number, value: string) => {
    const updatedMembers = Array.isArray(formData.members) 
      ? [...formData.members] 
      : typeof formData.members === 'string' 
        ? JSON.parse(formData.members as string) 
        : []
    
    updatedMembers[index] = value
    
    setFormData({
      ...formData,
      members: updatedMembers
    })
  }

  const addMember = () => {
    const members = Array.isArray(formData.members) 
      ? [...formData.members, ""] 
      : typeof formData.members === 'string' 
        ? [...JSON.parse(formData.members as string), ""] 
        : [""]
    
    setFormData({
      ...formData,
      members
    })
  }

  const removeMember = (index: number) => {
    const updatedMembers = Array.isArray(formData.members) 
      ? [...formData.members] 
      : typeof formData.members === 'string' 
        ? JSON.parse(formData.members as string) 
        : []
    
    if (updatedMembers.length > 1) {
      updatedMembers.splice(index, 1)
      setFormData({
        ...formData,
        members: updatedMembers
      })
    }
  }

  const resetForm = () => {
    setFormData({
      team_name: "",
      institution: "",
      team_leader_name: "",
      team_leader_email: "",
      team_leader_phone: "",
      members: [""],
      motivation: ""
    })
    setFormError("")
    setFormSuccess("")
    setFormMode("add")
    setEditingTeam(null)
  }

  const handleAddTeam = () => {
    setShowForm(true)
    setFormMode("add")
    resetForm()
  }

  const handleEditTeam = (team: Team) => {
    setShowForm(true)
    setFormMode("edit")
    setEditingTeam(team)
    
    // Format members properly
    let members = team.members
    if (typeof members === 'string') {
      try {
        members = JSON.parse(members)
      } catch (e) {
        members = [members]
      }
    } else if (!Array.isArray(members)) {
      members = Object.values(members)
    }
    
    setFormData({
      team_name: team.team_name,
      institution: team.institution,
      team_leader_name: team.team_leader_name,
      team_leader_email: team.team_leader_email,
      team_leader_phone: team.team_leader_phone || "",
      members: members,
      motivation: team.motivation || ""
    })
  }

  const handleDeleteTeam = async (teamId: number) => {
    if (!confirm("Are you sure you want to delete this team?")) {
      return
    }
    
    try {
      setProcessing(true)
      const response = await fetch(`/api/teams/${teamId}`, {
        method: "DELETE"
      })
      
      const data = await response.json()
      
      if (data.success) {
        // Update local state
        setTeams(teams.filter(team => team.id !== teamId))
        setFormSuccess("Team deleted successfully")
      } else {
        setFormError(data.message || "Failed to delete team")
      }
    } catch (error) {
      setFormError("An error occurred while deleting the team")
      console.error("Error deleting team:", error)
    } finally {
      setProcessing(false)
    }
  }

  const handleSubmitTeam = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormError("")
    setFormSuccess("")
    
    // Validation
    if (!formData.team_name || !formData.institution || !formData.team_leader_name || !formData.team_leader_email) {
      setFormError("Please fill in all required fields")
      return
    }
    
    // Ensure members are properly formatted
    let members = formData.members
    if (typeof members === 'string') {
      try {
        members = JSON.parse(members)
      } catch (e) {
        members = [members]
      }
    }
    
    try {
      setProcessing(true)
      
      const apiUrl = formMode === "add" 
        ? "/api/teams" 
        : `/api/teams/${editingTeam?.id}`
      
      const method = formMode === "add" ? "POST" : "PUT"
      
      const response = await fetch(apiUrl, {
        method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          members
        })
      })
      
      const data = await response.json()
      
      if (data.success) {
        if (formMode === "add") {
          setFormSuccess("Team added successfully")
          resetForm()
          // Reload teams
          fetchTeams()
        } else {
          setFormSuccess("Team updated successfully")
          // Update the team in the local state
          setTeams(teams.map(team => 
            team.id === editingTeam?.id ? { ...team, ...formData, members } : team
          ))
        }
      } else {
        setFormError(data.message || `Failed to ${formMode} team`)
      }
    } catch (error) {
      setFormError(`An error occurred while ${formMode === "add" ? "adding" : "updating"} the team`)
      console.error(`Error ${formMode === "add" ? "adding" : "updating"} team:`, error)
    } finally {
      setProcessing(false)
    }
  }

  const closeForm = () => {
    setShowForm(false)
    resetForm()
  }

  const renderForm = () => {
    if (!showForm) return null;
    
    return (
      <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">
                {formMode === "add" ? "Add New Team" : "Edit Team"}
              </h3>
              <Button variant="ghost" size="icon" onClick={closeForm}>
                <Cross2Icon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <form onSubmit={handleSubmitTeam} className="p-6 space-y-6">
            {formError && (
              <div className="bg-red-50 text-red-700 p-4 rounded-lg">
                {formError}
              </div>
            )}
            
            {formSuccess && (
              <div className="bg-green-50 text-green-700 p-4 rounded-lg">
                {formSuccess}
              </div>
            )}
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="team_name">Team Name *</Label>
                <Input
                  id="team_name"
                  name="team_name"
                  value={formData.team_name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="institution">Institution/University *</Label>
                <Input
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium text-gray-800">Team Leader Information</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="team_leader_name">Full Name *</Label>
                  <Input
                    id="team_leader_name"
                    name="team_leader_name"
                    value={formData.team_leader_name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="team_leader_email">Email *</Label>
                  <Input
                    id="team_leader_email"
                    name="team_leader_email"
                    type="email"
                    value={formData.team_leader_email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="team_leader_phone">Phone Number</Label>
                  <Input
                    id="team_leader_phone"
                    name="team_leader_phone"
                    value={formData.team_leader_phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-medium text-gray-800">Team Members</h4>
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm" 
                  onClick={addMember}
                  className="flex items-center text-green-600"
                >
                  <PlusIcon className="h-4 w-4 mr-1" /> Add Member
                </Button>
              </div>
              
              {Array.isArray(formData.members) ? (
                formData.members.map((member, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      placeholder={`Team Member ${index + 1}`}
                      value={member}
                      onChange={(e) => handleMemberChange(index, e.target.value)}
                    />
                    {formData.members.length > 1 && (
                      <Button 
                        type="button" 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => removeMember(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))
              ) : (
                <div className="flex gap-2">
                  <Input
                    placeholder="Team Member 1"
                    value=""
                    onChange={(e) => handleMemberChange(0, e.target.value)}
                  />
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="motivation">Motivation</Label>
              <Textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                rows={4}
              />
            </div>
            
            <div className="flex justify-end gap-2 pt-4">
              <Button type="button" variant="outline" onClick={closeForm}>
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="bg-green-500 hover:bg-green-600 text-white"
                disabled={processing}
              >
                {processing ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : formMode === "add" ? "Add Team" : "Update Team"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white pt-24">
      {renderForm()}
      
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
              View, add, edit or delete teams registered for the EcoNerds Case Competition.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Teams List */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 flex justify-end">
              <Button 
                className="bg-green-500 hover:bg-green-600 text-white"
                onClick={handleAddTeam}
              >
                <PlusIcon className="h-4 w-4 mr-2" /> Add New Team
              </Button>
            </div>
            
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
                  onClick={() => fetchTeams()} 
                  className="mt-4 bg-red-100 text-red-800 hover:bg-red-200"
                >
                  Try Again
                </Button>
              </div>
            ) : teams.length === 0 ? (
              <div className="bg-green-50 p-12 rounded-lg text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">No teams registered yet</h3>
                <p className="text-gray-600 mb-4">Add your first team by clicking the button above.</p>
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
                          <div className="mt-2 md:mt-0 flex items-center gap-2">
                            <div className="px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm">
                              ID: {team.id}
                            </div>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="text-blue-500 hover:text-blue-700"
                              onClick={() => handleEditTeam(team)}
                            >
                              <Pencil1Icon className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="text-red-500 hover:text-red-700"
                              onClick={() => handleDeleteTeam(team.id)}
                            >
                              <TrashIcon className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="mt-6 grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-medium text-gray-700 mb-2">Team Leader</h4>
                            <p className="text-gray-600"><span className="font-medium">Name:</span> {team.team_leader_name}</p>
                            <p className="text-gray-600"><span className="font-medium">Email:</span> {team.team_leader_email}</p>
                            {team.team_leader_phone && (
                              <p className="text-gray-600"><span className="font-medium">Phone:</span> {team.team_leader_phone}</p>
                            )}
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
                        
                        {team.motivation && (
                          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                            <h4 className="text-lg font-medium text-gray-700 mb-2">Motivation</h4>
                            <p className="text-gray-600">{team.motivation}</p>
                          </div>
                        )}
                        
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