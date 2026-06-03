import { useNavigate } from '@tanstack/react-router'
import { Cpu, FolderKanban, ChevronRight, Zap, Lock } from 'lucide-react'
import { useUserStore } from '@/stores/userStore'

const MODULES = [
  {
    id: 'dsa',
    icon: Cpu,
    title: 'DSA Academy',
    description: 'Arrays, Strings, Searching, Sorting, Recursion, Trees, Graphs with visualizer.',
    href: '/advanced/dsa',
    color: '#7C6EFA',
    topics: 9,
    xpReward: 4500,
    locked: false,
    badge: 'Core Module',
  },
  {
    id: 'projects',
    icon: FolderKanban,
    title: 'Project Hub',
    description: 'Build real-world projects from scratch with guided requirements.',
    href: '/advanced/projects',
    color: '#00D2FF',
    topics: 12,
    xpReward: 6000,
    locked: true,
    lockReason: 'Complete 3 DSA topics first',
  },
]

export function AdvancedPage() {
  const navigate = useNavigate()
  const { xp, level, dsaProgress } = useUserStore()

  const totalDSAProgress = Object.keys(dsaProgress).length

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(124,110,250,0.1) 0%, transparent 60%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-4"
            style={{ background: 'rgba(124,110,250,0.1)', color: '#7C6EFA', border: '1px solid rgba(124,110,250,0.2)' }}>
            <Cpu size={12} />
            Advanced Path
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Advanced Dashboard</h1>
          <p className="text-white/40">Level up your problem-solving. Master DSA. Build real products.</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { label: 'Total XP', value: xp.toLocaleString(), color: '#00F5A0' },
            { label: 'Level', value: String(level), color: '#7C6EFA' },
            { label: 'DSA Topics Started', value: String(totalDSAProgress), color: '#00D2FF' },
          ].map((s) => (
            <div key={s.label} className="card-void p-4">
              <div className="text-xs text-white/40 mb-1">{s.label}</div>
              <div className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {MODULES.map((mod) => (
            <button key={mod.id} onClick={() => !mod.locked && navigate({ to: mod.href as '/' })}
              disabled={mod.locked}
              className="w-full group text-left rounded-2xl p-6 transition-all duration-300"
              style={{
                background: 'rgba(10,10,26,0.9)',
                border: `1px solid ${mod.locked ? 'rgba(255,255,255,0.05)' : mod.color + '25'}`,
                opacity: mod.locked ? 0.5 : 1,
                cursor: mod.locked ? 'not-allowed' : 'pointer',
              }}
              onMouseEnter={(e) => { if (!mod.locked) { e.currentTarget.style.borderColor = `${mod.color}50`; e.currentTarget.style.boxShadow = `0 0 40px ${mod.color}15` } }}
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
                    {mod.badge && (
                      <span className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: `${mod.color}15`, color: mod.color, border: `1px solid ${mod.color}25` }}>
                        {mod.badge}
                      </span>
                    )}
                    {mod.locked && mod.lockReason && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/30 border border-white/5">
                        🔒 {mod.lockReason}
                      </span>
                    )}
                  </div>
                  <p className="text-white/40 text-sm">{mod.description}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-xs text-white/30">{mod.topics} topics</span>
                    <span className="text-xs" style={{ color: mod.color }}><Zap size={10} className="inline mr-1" />+{mod.xpReward} XP</span>
                  </div>
                </div>
                {!mod.locked && <ChevronRight size={20} className="text-white/20 group-hover:text-white/60 transition-colors shrink-0" />}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
