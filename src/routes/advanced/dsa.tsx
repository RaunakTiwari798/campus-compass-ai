import { createFileRoute } from '@tanstack/react-router'
import { DSAAcademy } from '@/components/dsa/DSAAcademy'

export const Route = createFileRoute('/advanced/dsa')({
  component: DSAAcademy,
})
