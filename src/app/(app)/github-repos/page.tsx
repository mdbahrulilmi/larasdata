import GithubRepos from '@/utils/github-repost'

export default function GithubRepost() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">GitHub Repos Viewer</h1>
      <GithubRepos />
    </main>
  )
}
