import { createFileRoute } from '@tanstack/react-router'
import { GSoCHub } from '@/components/journey/GSoCHub'

export const Route = createFileRoute('/pro/gsoc')({
  component: GSoCHub,
})
