import { createFileRoute } from '@tanstack/react-router'
import { PythonLearning } from '@/components/python/PythonLearning'

export const Route = createFileRoute('/beginner/python')({
  component: PythonLearning,
})
