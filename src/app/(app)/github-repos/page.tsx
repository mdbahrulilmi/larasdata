'use client'

import GithubRepos from '@/utils/github-repost'
import { useSession } from 'next-auth/react'

export default function GithubRepost() {
    const { data: session} = useSession()
    console.log(session?.user.username)
    return (
        <main className="p-8">
        <h1 className="text-2xl font-bold mb-6">GitHub Repos Viewer</h1>
        <GithubRepos username={session?.user?.username?? ""}/>
        </main>
    )
}
