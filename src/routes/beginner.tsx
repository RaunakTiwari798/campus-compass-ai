import { createFileRoute } from '@tanstack/react-router'
import { BeginnerPage } from '@/components/journey/BeginnerPage'

export const Route = createFileRoute('/beginner')({
  component: BeginnerPage,
})
