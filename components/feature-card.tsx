import { Briefcase, Users, Network, BarChart, Award, Gift, type LucideIcon } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: string
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const getIcon = (): LucideIcon => {
    switch (icon) {
      case "Briefcase":
        return Briefcase
      case "Users":
        return Users
      case "Network":
        return Network
      case "BarChart":
        return BarChart
      case "Award":
        return Award
      case "Gift":
        return Gift
      default:
        return Briefcase
    }
  }

  const IconComponent = getIcon()

  return (
    <div className="group relative overflow-hidden rounded-xl bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-green-500 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-20"></div>
      <div className="relative z-10">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-700 text-green-100 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white">
          <IconComponent className="h-8 w-8" />
        </div>
        <h3 className="mb-3 text-2xl font-semibold text-white">{title}</h3>
        <p className="text-green-100">{description}</p>
        <div className="mt-6 h-1 w-12 rounded-full bg-green-500 transition-all duration-300 group-hover:w-24"></div>
      </div>
    </div>
  )
}
