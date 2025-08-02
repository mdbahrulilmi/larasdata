'use client'
import { signIn } from "next-auth/react"

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={() => signIn("github")}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Login with GitHub
      </button>
    </div>
  )
}
