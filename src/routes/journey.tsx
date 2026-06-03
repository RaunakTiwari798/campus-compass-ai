import { createFileRoute } from '@tanstack/react-router'
import { JourneyPage } from '@/components/journey/JourneyPage'

export const Route = createFileRoute('/journey')({
  component: JourneyPage,
})
