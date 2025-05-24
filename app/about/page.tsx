"use client"
import { BookOpen, Users, Trophy, Lightbulb, Target, BarChart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import TeamMember from "@/components/team-member"
import Timeline from "@/components/timeline"
import AnimatedSection from "@/components/animated-section"
import { ArrowLeftIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { useState } from "react"

// Special component only for the second team member
function TeamMemberSpecial({ name, role, image, bio }: { name: string; role: string; image: string; bio: string }) {
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
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
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

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About EcoNerds</h1>
            <p className="text-xl max-w-3xl">
              Learn more about our mission, history, and the impact we're making in economic education and innovation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-gray-700 mb-4">
                EcoNerds was founded with a clear mission: to bridge the gap between academic economic theory and
                real-world application. We believe that the economists of tomorrow need practical experience today.
              </p>
              <p className="text-gray-700 mb-4">
                Through our case competitions, we aim to cultivate critical thinking, analytical skills, and innovative
                problem-solving in economics students across Kazakhstan and beyond.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Practical Learning</h3>
                    <p className="text-sm text-gray-600">Applying theory to real-world scenarios</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Networking</h3>
                    <p className="text-sm text-gray-600">Connecting students with industry professionals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <Lightbulb className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Innovation</h3>
                    <p className="text-sm text-gray-600">Encouraging creative economic solutions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <BarChart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Skill Development</h3>
                    <p className="text-sm text-gray-600">Building analytical and presentation abilities</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-100 rounded-full opacity-70"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-100 rounded-full opacity-70"></div>
                <img
                  src="/mun.jpg"
                  alt="EcoNerds Mission"
                  className="rounded-xl shadow-lg relative z-10"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedSection animation="zoom-in" delay={0}>
              <TeamMember 
                name="Ayim Zhubatkan" 
                role="Founder, co-organizer" 
                image="/ayim.jpg" 
                bio="Upcoming EFI 2025 participant" 
              />
            </AnimatedSection>
            <AnimatedSection animation="zoom-in" delay={100}>
              <TeamMemberSpecial 
                name="Malika Shuinshalina" 
                role="Co-organizer" 
                image="/malika.jpg" 
                bio="Business development professional focused on creating valuable industry connections." 
              />
            </AnimatedSection>
            <AnimatedSection animation="zoom-in" delay={200}>
              <TeamMemberSpecial 
                name="Kerey Berdyshev" 
                role="Co-organizer" 
                image="https://media.licdn.com/dms/image/v2/D5603AQFBuGxajANzZw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723446562807?e=1753315200&v=beta&t=sv_aRfwB3KdhQ3S3wSwvhtBWmB-1Hecg7-bXZaQllBA" 
                bio="" 
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-10 w-10" />,
                title: "Educational Excellence",
                description:
                  "We are committed to providing high-quality, practical learning experiences that complement academic education.",
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "Inclusivity",
                description:
                  "We welcome students from all backgrounds and institutions, believing that diversity strengthens economic thinking.",
              },
              {
                icon: <Trophy className="h-10 w-10" />,
                title: "Merit-Based Recognition",
                description:
                  "We reward excellence and innovation, ensuring that the best ideas and analyses receive the recognition they deserve.",
              },
            ].map((value, i) => (
              <AnimatedSection key={i} animation="zoom-in" delay={i * 150}>
                <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                  <div className="bg-white/20 p-4 rounded-full w-fit mb-6">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              Join the EcoNerds Community
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Whether you're a student looking to participate, a professional wanting to mentor, or an organization
              interested in sponsorship, we'd love to have you join our community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-green-500 hover:bg-green-600 text-white" asChild>
                <Link href="/register">Register for Competition</Link>
              </Button>
              <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
