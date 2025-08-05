'use client'

import CardRepos from '@/components/cardrepos'
import { useEffect, useState } from 'react'

export default function GithubRepos({ username }: { username: string }) {
  const [repos, setRepos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!username) return

    const cached = localStorage.getItem(`repos-${username}`)
    if (cached) {
      setRepos(JSON.parse(cached))
      setLoading(false)
      return
    }

    setLoading(true)
    fetch(`/api/github/repos?username=${username}`)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem(`repos-${username}`, JSON.stringify(data))
        setRepos(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Fetch error:', err)
        setLoading(false)
      })
  }, [username])

  if (loading) return <p>Loading repos...</p>
  if (!repos.length) return <p>Tidak ada repos ditemukan.</p>

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Repositories:</h2>
      <div className="grid grid-cols-4 gap-4">
        {repos.map((repo) => (
          <CardRepos key={repo.id} name={repo.name} url={repo.html_url} language={repo.language} />
        ))}
      </div>
    </div>
  )
}
