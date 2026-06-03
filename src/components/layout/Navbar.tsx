import { Link, useRouterState } from '@tanstack/react-router'
import { Zap, Star, Flame, Menu, X, Code2 } from 'lucide-react'
import { useState } from 'react'
import { useUserStore } from '@/stores/userStore'
import { cn, formatXP } from '@/lib/utils'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { xp, level, streak } = useUserStore()
  const router = useRouterState()
  const isHome = router.location.pathname === '/'

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isHome
          ? 'bg-transparent'
          : 'bg-void-950/80 backdrop-blur-xl border-b border-white/5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #7C6EFA, #00D2FF)' }}>
                <Code2 size={16} className="text-white" />
              </div>
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: '0 0 20px rgba(124,110,250,0.6)' }} />
            </div>
            <span className="font-bold text-lg text-white">
              Campus<span className="text-gradient-plasma">Compass</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/journey" className="text-sm text-white/60 hover:text-white transition-colors">
              Start Journey
            </Link>
            <Link to="/beginner" className="text-sm text-white/60 hover:text-white transition-colors">
              Beginner
            </Link>
            <Link to="/advanced" className="text-sm text-white/60 hover:text-white transition-colors">
              Advanced
            </Link>
            <Link to="/pro" className="text-sm text-white/60 hover:text-white transition-colors">
              Pro
            </Link>
          </div>

          {/* Stats + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {xp > 0 && (
              <>
                <div className="streak-badge">
                  <Flame size={12} />
                  <span>{streak}</span>
                </div>
                <div className="xp-badge">
                  <Zap size={12} />
                  <span>{formatXP(xp)} XP</span>
                </div>
                <div className="level-badge">
                  <Star size={12} />
                  <span>Lv.{level}</span>
                </div>
              </>
            )}
            <Link to="/journey" className="btn-plasma text-sm">
              Start Learning
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white/60 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-white/5">
          <div className="px-4 py-4 flex flex-col gap-4">
            <Link to="/journey" className="text-white/70 hover:text-white" onClick={() => setMenuOpen(false)}>
              Start Journey
            </Link>
            <Link to="/beginner" className="text-white/70 hover:text-white" onClick={() => setMenuOpen(false)}>
              Beginner Path
            </Link>
            <Link to="/advanced" className="text-white/70 hover:text-white" onClick={() => setMenuOpen(false)}>
              Advanced Path
            </Link>
            <Link to="/pro" className="text-white/70 hover:text-white" onClick={() => setMenuOpen(false)}>
              Pro Path
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
