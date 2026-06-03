import { createFileRoute } from '@tanstack/react-router'
import { ProPage } from '@/components/journey/ProPage'

export const Route = createFileRoute('/pro')({
  component: ProPage,
})
