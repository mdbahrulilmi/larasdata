'use client'

import { useEffect, useState } from 'react'

export default function GithubRepos({username}:{username: string}) {
  const [repos, setRepos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!username) return
    setLoading(true)
    fetch(`/api/github/repos?username=${username}`)
      .then((res) => res.json())
      .then((data) => {
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
      <ul className="list-disc pl-6">
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
