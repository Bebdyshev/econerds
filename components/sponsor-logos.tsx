export default function SponsorLogos() {
  const sponsors = [
    { name: "National Bank of Kazakhstan", level: "Platinum" },
    { name: "Kazakh Economic University", level: "Gold" },
    { name: "Samruk-Kazyna", level: "Gold" },
    { name: "KazMunayGas", level: "Silver" },
    { name: "Air Astana", level: "Silver" },
    { name: "Kaspi Bank", level: "Silver" },
    { name: "Halyk Bank", level: "Bronze" },
    { name: "Aktobe Regional Government", level: "Bronze" },
  ]

  return (
    <div className="space-y-8">
      {["Platinum", "Gold", "Silver", "Bronze"].map((level) => {
        const levelSponsors = sponsors.filter((sponsor) => sponsor.level === level)
        if (levelSponsors.length === 0) return null

        return (
          <div key={level} className="space-y-4">
            <h3 className="text-center text-lg font-semibold text-green-800">{level} Sponsors</h3>
            <div
              className={`grid gap-6 ${level === "Platinum" ? "md:grid-cols-1" : level === "Gold" ? "md:grid-cols-2" : "md:grid-cols-3 lg:grid-cols-4"}`}
            >
              {levelSponsors.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="flex h-24 items-center justify-center rounded-lg border border-green-100 bg-white p-4 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="flex h-16 w-full items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-green-100" />
                    <span className="ml-3 font-medium text-gray-700">{sponsor.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
