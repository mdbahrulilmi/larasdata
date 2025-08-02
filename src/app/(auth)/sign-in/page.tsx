'use client'

import { signIn, useSession } from "next-auth/react"
import { useEffect } from "react"
import { useRouter } from "next/navigation" // ✅ gunakan 'next/navigation' untuk App Router

export default function LoginPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/dashboard")
    }
  }, [status, router])

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600">Loading...</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md text-center">
        <h1 className="text-2xl font-extrabold text-gray-800 mb-2">LarasData</h1>
        <h3 className="text-lg font-semibold text-gray-600 mb-1">Welcome to LarasData</h3>
        <p className="text-sm text-gray-500 mb-6">You are just one step away from your dashboard</p>
        <button
          onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
          className="bg-black hover:bg-gray-900 transition text-white w-full py-2 rounded-lg font-medium cursor-pointer"
        >
          Sign in with GitHub
        </button>
      </div>
    </div>
  )
}
