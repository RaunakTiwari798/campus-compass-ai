import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Navbar } from '@/components/layout/Navbar'
import { Toaster } from '@/components/ui/Toaster'

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-void-950 text-white">
      <div className="noise-overlay" />
      <Navbar />
      <Outlet />
      <Toaster />
    </div>
  ),
})
