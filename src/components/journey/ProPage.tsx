import { useNavigate } from '@tanstack/react-router'
import { Rocket, FileText, MessageSquare, Star, ChevronRight, Lock } from 'lucide-react'

const MODULES = [
  {
    id: 'gsoc',
    icon: Star,
    title: 'GSoC Hub',
    description: 'Open source roadmap, issue finder, contribution guide, and AI mentor for Google Summer of Code.',
    href: '/pro/gsoc',
    color: '#FFB347',
    locked: false,
  },
  {
    id: 'resume',
    icon: FileText,
    title: 'AI Resume Builder',
    description: 'Generate a professional developer resume tailored for internships and placements.',
    href: '/pro/resume',
    color: '#00F5A0',
    locked: false,
  },
  {
    id: 'interview',
    icon: MessageSquare,
    title: 'Interview Preparation',
    description: 'HR questions, technical rounds, mock interviews with AI feedback.',
    href: '/pro/interview',
    color: '#7C6EFA',
    locked: true,
    lockReason: 'Complete Resume Builder first',
  },
]

export function ProPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 80% 0%, rgba(0,245,160,0.08) 0%, transparent 60%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-4"
            style={{ background: 'rgba(0,245,160,0.1)', color: '#00F5A0', border: '1px solid rgba(0,245,160,0.2)' }}>
            <Rocket size={12} />
            Pro Path
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Pro Dashboard</h1>
          <p className="text-white/40">You're serious. Let's get you industry ready — GSoC, placements, and beyond.</p>
        </div>

        <div className="space-y-4">
          {MODULES.map((mod) => (
            <button key={mod.id}
              onClick={() => !mod.locked && navigate({ to: mod.href as '/' })}
              disabled={mod.locked}
              className="w-full group text-left rounded-2xl p-6 transition-all duration-300"
              style={{
                background: 'rgba(10,10,26,0.9)',
                border: `1px solid ${mod.locked ? 'rgba(255,255,255,0.05)' : mod.color + '25'}`,
                opacity: mod.locked ? 0.5 : 1,
                cursor: mod.locked ? 'not-allowed' : 'pointer',
              }}
              onMouseEnter={(e) => { if (!mod.locked) { e.currentTarget.style.borderColor = `${mod.color}50`; e.currentTarget.style.boxShadow = `0 0 40px ${mod.color}15` }}}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = mod.locked ? 'rgba(255,255,255,0.05)' : `${mod.color}25`; e.currentTarget.style.boxShadow = 'none' }}
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${mod.color}15`, border: `1px solid ${mod.color}25` }}>
                  {mod.locked ? <Lock size={22} className="text-white/30" /> : <mod.icon size={22} style={{ color: mod.color }} />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-white">{mod.title}</h3>
                    {mod.locked && (mod as { lockReason?: string }).lockReason && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/30 border border-white/5">
                        🔒 {(mod as { lockReason?: string }).lockReason}
                      </span>
                    )}
                  </div>
                  <p className="text-white/40 text-sm">{mod.description}</p>
                </div>
                {!mod.locked && <ChevronRight size={20} className="text-white/20 group-hover:text-white/60 shrink-0" />}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
