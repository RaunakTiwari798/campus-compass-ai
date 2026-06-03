import { createFileRoute } from '@tanstack/react-router'
import { GitHubMissions } from '@/components/github/GitHubMissions'

export const Route = createFileRoute('/beginner/github')({
  component: GitHubMissions,
})
