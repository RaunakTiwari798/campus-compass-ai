import { createFileRoute } from '@tanstack/react-router'
import { AdvancedPage } from '@/components/journey/AdvancedPage'

export const Route = createFileRoute('/advanced')({
  component: AdvancedPage,
})
