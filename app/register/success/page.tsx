import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function SuccessPage() {
  return (
    <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-12 text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
        <CheckCircle2 className="h-12 w-12 text-green-600" />
      </div>

      <h1 className="mb-4 text-3xl font-bold text-green-900 sm:text-4xl">Registration Successful!</h1>

      <p className="mb-8 max-w-md text-lg text-gray-600">
        Your team has been successfully registered for the EcoNerds Case Competition. A confirmation email has been sent
        to your provided contact email.
      </p>

      <div className="space-y-4">
        <div className="rounded-lg border border-green-100 bg-green-50 p-4 text-left">
          <h2 className="mb-2 font-semibold text-green-800">Next Steps:</h2>
          <ol className="ml-5 list-decimal space-y-2 text-gray-700">
            <li>Complete the payment of ₸5,000 registration fee</li>
            <li>Check your email for payment instructions</li>
            <li>Join our Telegram group for updates</li>
            <li>Prepare for the competition on June 15-16, 2025</li>
          </ol>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link href="/">Return to Homepage</Link>
          </Button>
          <Button asChild variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            <Link href="/resources">View Preparation Resources</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
