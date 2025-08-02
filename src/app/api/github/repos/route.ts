// app/api/github/repos/route.ts
import { NextResponse } from 'next/server'
import { Octokit } from '@octokit/core'

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const username = searchParams.get('username')

  if (!username) {
    return NextResponse.json({ message: 'Username wajib' }, { status: 400 })
  }

  let page = 1
  const perPage = 100
  let repos: any[] = []
  let hasMore = true

  try {
    while (hasMore) {
      const response = await octokit.request('GET /users/{username}/repos', {
        username,
        per_page: perPage,
        page,
      })

      repos = repos.concat(response.data)
      hasMore = response.data.length === perPage
      page++
    }

    return NextResponse.json(repos)
  } catch (error: any) {
    console.error('[API] Error:', error)
    return NextResponse.json({ message: 'Gagal ambil repos', error }, { status: 500 })
  }
}
