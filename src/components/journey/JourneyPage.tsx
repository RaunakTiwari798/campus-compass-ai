import { useNavigate } from '@tanstack/react-router'
import { ArrowRight, Terminal, Cpu, Rocket, CheckCircle } from 'lucide-react'
import { useUserStore } from '@/stores/userStore'

const PATHS = [
  {
    id: 'beginner' as const,
    icon: Terminal,
    title: 'Beginner',
    tagline: 'I\'m just starting out',
    description: 'Perfect if you\'ve never coded before or have minimal experience. We start from zero.',
    color: '#00D2FF',
    glow: 'rgba(0,210,255,0.15)',
    href: '/beginner',
    modules: [
      'Python fundamentals & practice',
      'Interactive coding challenges',
      'GitHub missions & workflows',
      'AI mentor guidance',
      'XP rewards & streaks',
    ],
    duration: '3–6 months',
  },
  {
    id: 'advanced' as const,
    icon: Cpu,
    title: 'Advanced',
    tagline: 'I know basics, want to level up',
    description: 'For developers who know fundamentals but want to master DSA, problem solving, and real projects.',
    color: '#7C6EFA',
    glow: 'rgba(124,110,250,0.15)',
    href: '/advanced',
    featured: true,
    modules: [
      'DSA Academy with visualizer',
      'Arrays, Trees, Graphs & more',
      'Coding challenges with hints',
      'Project hub with real briefs',
      'Dry-run debugger',
    ],
    duration: '4–8 months',
  },
  {
    id: 'pro' as const,
    icon: Rocket,
    title: 'Pro',
    tagline: 'I\'m ready for the industry',
    description: 'For serious developers targeting internships, placements, GSoC, or FAANG interviews.',
    color: '#00F5A0',
    glow: 'rgba(0,245,160,0.15)',
    href: '/pro',
    modules: [
      'GSoC preparation hub',
      'AI resume builder',
      'Mock technical interviews',
      'Open source contribution guide',
      'Placement readiness score',
    ],
    duration: '3–6 months',
  },
]

export function JourneyPage() {
  const navigate = useNavigate()
  const { setPath } = useUserStore()

  function handleSelect(path: 'beginner' | 'advanced' | 'pro', href: string) {
    setPath(path)
    navigate({ to: href as '/' })
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124,110,250,0.1) 0%, transparent 60%)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Choose your <span className="text-gradient-plasma">learning path</span>
          </h1>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Be honest about where you are. The right starting point is the fastest path to your goal.
          </p>
        </div>

        {/* Path cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {PATHS.map((path) => (
            <button
              key={path.id}
              onClick={() => handleSelect(path.id, path.href)}
              className="relative group text-left rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: path.featured
                  ? `linear-gradient(160deg, rgba(124,110,250,0.12) 0%, rgba(0,210,255,0.05) 100%)`
                  : 'rgba(10,10,26,0.9)',
                border: `1px solid ${path.color}25`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${path.color}50`
                e.currentTarget.style.boxShadow = `0 0 60px ${path.glow}`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${path.color}25`
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {path.featured && (
                <div className="absolute -top-3 left-8 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: 'linear-gradient(135deg, #7C6EFA, #00D2FF)', color: 'white' }}>
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ background: `${path.color}20`, border: `1px solid ${path.color}30` }}>
                <path.icon size={24} style={{ color: path.color }} />
              </div>

              {/* Title */}
              <div className="mb-1 text-sm font-medium" style={{ color: path.color }}>
                {path.tagline}
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">{path.title} Path</h2>
              <p className="text-white/40 text-sm mb-6 leading-relaxed">{path.description}</p>

              {/* Duration */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs mb-6"
                style={{ background: `${path.color}15`, color: path.color, border: `1px solid ${path.color}25` }}>
                ⏱ {path.duration} to complete
              </div>

              {/* Modules */}
              <div className="space-y-2.5 mb-8">
                {path.modules.map((mod) => (
                  <div key={mod} className="flex items-start gap-2.5 text-sm text-white/60">
                    <CheckCircle size={14} className="mt-0.5 shrink-0" style={{ color: path.color }} />
                    {mod}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                style={{ color: path.color }}>
                Start {path.title} Path
                <ArrowRight size={16} />
              </div>
            </button>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-white/25 mt-12 text-sm">
          You can switch paths anytime. Your progress carries over.
        </p>
      </div>
    </div>
  )
}
