import { useNavigate } from '@tanstack/react-router'
import { Terminal, GitBranch, Zap, Lock, ChevronRight, Star } from 'lucide-react'
import { useUserStore } from '@/stores/userStore'
import { getLevelProgress } from '@/lib/utils'

const MODULES = [
  {
    id: 'python',
    icon: Terminal,
    title: 'Python Learning',
    description: 'Master Python from scratch. Concepts, quizzes, challenges.',
    href: '/beginner/python',
    color: '#00D2FF',
    lessons: 24,
    xpReward: 1200,
    locked: false,
  },
  {
    id: 'github',
    icon: GitBranch,
    title: 'GitHub Missions',
    description: 'Learn Git and GitHub through real missions.',
    href: '/beginner/github',
    color: '#7C6EFA',
    lessons: 10,
    xpReward: 1000,
    locked: false,
  },
  {
    id: 'projects',
    icon: Star,
    title: 'Beginner Projects',
    description: 'Build real projects to solidify your learning.',
    href: '/beginner/projects',
    color: '#00F5A0',
    lessons: 6,
    xpReward: 1500,
    locked: true,
  },
]

export function BeginnerPage() {
  const navigate = useNavigate()
  const { xp, level, streak, completedLessons } = useUserStore()
  const progress = getLevelProgress(xp, level)

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 20% 20%, rgba(0,210,255,0.08) 0%, transparent 60%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-4"
            style={{ background: 'rgba(0,210,255,0.1)', color: '#00D2FF', border: '1px solid rgba(0,210,255,0.2)' }}>
            <Terminal size={12} />
            Beginner Path
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Your Learning Dashboard</h1>
          <p className="text-white/40">Continue where you left off. Every lesson brings you closer.</p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'Total XP', value: xp.toLocaleString(), color: '#00F5A0' },
            { label: 'Level', value: `${level}`, color: '#7C6EFA' },
            { label: 'Day Streak', value: `${streak}🔥`, color: '#FFB347' },
            { label: 'Lessons Done', value: `${completedLessons.length}`, color: '#00D2FF' },
          ].map((stat) => (
            <div key={stat.label} className="card-void p-4">
              <div className="text-xs text-white/40 mb-1">{stat.label}</div>
              <div className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Level progress */}
        <div className="card-void p-5 mb-10">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-plasma-400" />
              <span className="text-sm text-white/80">Level {level} Progress</span>
            </div>
            <span className="text-sm text-white/40">{Math.round(progress)}% to Level {level + 1}</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #7C6EFA, #00D2FF)',
              }}
            />
          </div>
        </div>

        {/* Modules */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white mb-6">Your Modules</h2>
          {MODULES.map((mod) => (
            <button
              key={mod.id}
              onClick={() => !mod.locked && navigate({ to: mod.href as '/' })}
              disabled={mod.locked}
              className="w-full group text-left rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'rgba(10,10,26,0.9)',
                border: `1px solid ${mod.locked ? 'rgba(255,255,255,0.05)' : mod.color + '25'}`,
                opacity: mod.locked ? 0.5 : 1,
                cursor: mod.locked ? 'not-allowed' : 'pointer',
              }}
              onMouseEnter={(e) => {
                if (!mod.locked) {
                  e.currentTarget.style.borderColor = `${mod.color}50`
                  e.currentTarget.style.boxShadow = `0 0 40px ${mod.color}15`
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = mod.locked ? 'rgba(255,255,255,0.05)' : `${mod.color}25`
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${mod.color}15`, border: `1px solid ${mod.color}25` }}>
                  {mod.locked ? <Lock size={22} className="text-white/30" /> : <mod.icon size={22} style={{ color: mod.color }} />}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-white">{mod.title}</h3>
                    {mod.locked && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/30">
                        Complete Python first
                      </span>
                    )}
                  </div>
                  <p className="text-white/40 text-sm">{mod.description}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-xs text-white/30">{mod.lessons} lessons</span>
                    <span className="text-xs" style={{ color: mod.color }}>+{mod.xpReward} XP available</span>
                  </div>
                </div>

                {!mod.locked && (
                  <ChevronRight size={20} className="text-white/20 group-hover:text-white/60 transition-colors shrink-0" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
