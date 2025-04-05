import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center space-y-6 px-4 py-8 text-center md:px-8">

        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">404</h1>

        <h2 className="text-xl font-semibold text-gray-800">Page Not Found</h2>

        <p className="text-gray-600">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
        </p>

        <Button asChild className="mt-4 gap-2">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  )
}

