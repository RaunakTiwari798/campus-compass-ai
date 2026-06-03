import { useState } from 'react'
import { GitBranch, CheckCircle, Lock, ChevronRight, Brain, ExternalLink, Zap } from 'lucide-react'
import { useUserStore } from '@/stores/userStore'
import { showToast } from '@/components/ui/Toaster'

const MISSIONS = [
  {
    id: 'gh-01',
    number: 1,
    title: 'Create a GitHub Account',
    description: 'Your GitHub profile is your coding resume. Let\'s set it up.',
    instructions: [
      'Go to github.com and click "Sign up"',
      'Choose a professional username (first.last or similar)',
      'Verify your email address',
      'Set a profile picture',
      'Write a short bio describing you as a developer',
    ],
    tip: 'Choose a username that you\'d be comfortable sharing in a job interview!',
    externalUrl: 'https://github.com/signup',
    xp: 100,
    color: '#7C6EFA',
  },
  {
    id: 'gh-02',
    number: 2,
    title: 'Create Your First Repository',
    description: 'A repository (repo) is like a project folder that GitHub manages for you.',
    instructions: [
      'Click the "+" button in the top right of GitHub',
      'Select "New repository"',
      'Name it "hello-world" or "my-first-repo"',
      'Add a description',
      'Check "Add a README file"',
      'Click "Create repository"',
    ],
    tip: 'The README is the front page of your repo. Think of it like an introduction.',
    externalUrl: 'https://github.com/new',
    xp: 100,
    color: '#00D2FF',
  },
  {
    id: 'gh-03',
    number: 3,
    title: 'Push Your First Project',
    description: 'Learn how to connect your local code to GitHub and push it live.',
    instructions: [
      'Install Git on your computer (git-scm.com)',
      'Open terminal in your project folder',
      'Run: git init',
      'Run: git add .',
      'Run: git commit -m "first commit"',
      'Connect to GitHub: git remote add origin YOUR_URL',
      'Push: git push -u origin main',
    ],
    tip: 'Commit messages should describe WHAT you changed, not HOW you changed it.',
    xp: 150,
    color: '#00F5A0',
  },
  {
    id: 'gh-04',
    number: 4,
    title: 'Fork a Repository',
    description: 'Forking copies someone else\'s repo to your account. Essential for open source.',
    instructions: [
      'Find any public repository on GitHub',
      'Click the "Fork" button in the top right',
      'Choose your account as the destination',
      'Clone the fork to your local machine',
      'Make a small change to the README',
      'Commit and push the change',
    ],
    tip: 'Forking is how you contribute to open source projects without needing direct access.',
    xp: 150,
    color: '#FFB347',
  },
  {
    id: 'gh-05',
    number: 5,
    title: 'Create a Pull Request',
    description: 'A Pull Request (PR) is how you propose changes to a project. This is core to open source.',
    instructions: [
      'On your forked repo, click "Contribute"',
      'Click "Open pull request"',
      'Write a clear title explaining your change',
      'Add a description of what you changed and why',
      'Click "Create pull request"',
    ],
    tip: 'Good PR descriptions make maintainers much more likely to merge your changes.',
    xp: 200,
    color: '#FF6B6B',
  },
]

export function GitHubMissions() {
  const [activeMission, setActiveMission] = useState<string | null>(null)
  const { completedMissions, completeMission } = useUserStore()

  function handleComplete(missionId: string, xp: number) {
    completeMission(missionId)
    setActiveMission(null)
    showToast({ type: 'xp', message: 'Mission Complete! 🎉', xpAmount: xp })
  }

  const completed = completedMissions.filter((m) => MISSIONS.some((ms) => ms.id === m)).length
  const isUnlocked = (index: number) => {
    if (index === 0) return true
    return completedMissions.includes(MISSIONS[index - 1].id)
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 80% 20%, rgba(124,110,250,0.08) 0%, transparent 60%)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-4"
              style={{ background: 'rgba(124,110,250,0.1)', color: '#7C6EFA', border: '1px solid rgba(124,110,250,0.2)' }}>
              <GitBranch size={12} />
              GitHub Missions
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">GitHub Missions</h1>
            <p className="text-white/40">Complete missions to master Git and GitHub workflows.</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-white">{completed}/{MISSIONS.length}</div>
            <div className="text-xs text-white/40">missions complete</div>
          </div>
        </div>

        {/* Progress */}
        <div className="h-2 bg-white/5 rounded-full mb-10 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${(completed / MISSIONS.length) * 100}%`,
              background: 'linear-gradient(90deg, #7C6EFA, #00D2FF)',
            }}
          />
        </div>

        {/* Missions */}
        <div className="space-y-4">
          {MISSIONS.map((mission, i) => {
            const unlocked = isUnlocked(i)
            const done = completedMissions.includes(mission.id)
            const active = activeMission === mission.id

            return (
              <div key={mission.id}>
                <button
                  onClick={() => unlocked && !done && setActiveMission(active ? null : mission.id)}
                  disabled={!unlocked || done}
                  className="w-full text-left rounded-2xl p-5 transition-all duration-300"
                  style={{
                    background: done
                      ? 'rgba(0,245,160,0.05)'
                      : active
                      ? 'rgba(124,110,250,0.08)'
                      : 'rgba(10,10,26,0.9)',
                    border: `1px solid ${done ? 'rgba(0,245,160,0.25)' : active ? 'rgba(124,110,250,0.35)' : `${mission.color}20`}`,
                    opacity: !unlocked ? 0.4 : 1,
                    cursor: !unlocked || done ? 'not-allowed' : 'pointer',
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-lg font-bold"
                      style={{
                        background: done ? 'rgba(0,245,160,0.15)' : `${mission.color}15`,
                        border: `1px solid ${done ? 'rgba(0,245,160,0.3)' : `${mission.color}25`}`,
                        color: done ? '#00F5A0' : mission.color,
                      }}
                    >
                      {done ? <CheckCircle size={22} /> : !unlocked ? <Lock size={18} /> : mission.number}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="font-semibold text-white">{mission.title}</h3>
                        {done && <span className="text-xs px-2 py-0.5 rounded-full bg-circuit-400/10 text-circuit-400 border border-circuit-400/20">Done</span>}
                      </div>
                      <p className="text-white/40 text-sm">{mission.description}</p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div className="xp-badge">
                        <Zap size={11} />
                        +{mission.xp}
                      </div>
                      {!done && unlocked && (
                        <ChevronRight
                          size={18}
                          className="text-white/30 transition-transform duration-200"
                          style={{ transform: active ? 'rotate(90deg)' : 'none' }}
                        />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expanded mission detail */}
                {active && (
                  <div
                    className="mx-2 rounded-b-2xl p-6"
                    style={{ background: 'rgba(10,10,26,0.95)', border: `1px solid ${mission.color}20`, borderTop: 'none' }}
                  >
                    {/* Instructions */}
                    <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
                      Step-by-step Instructions
                    </h4>
                    <ol className="space-y-3 mb-6">
                      {mission.instructions.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-white/70">
                          <span
                            className="w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5 font-semibold"
                            style={{ background: `${mission.color}20`, color: mission.color }}
                          >
                            {idx + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>

                    {/* Tip */}
                    <div
                      className="flex gap-3 p-4 rounded-xl mb-6"
                      style={{ background: 'rgba(255,179,71,0.05)', border: '1px solid rgba(255,179,71,0.2)' }}
                    >
                      <Brain size={16} className="text-stellar-400 shrink-0 mt-0.5" />
                      <p className="text-sm text-white/60">
                        <span className="text-stellar-400 font-medium">AI Tip: </span>
                        {mission.tip}
                      </p>
                    </div>

                    <div className="flex gap-3">
                      {mission.externalUrl && (
                        <a
                          href={mission.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-all"
                          style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: 'rgba(255,255,255,0.6)',
                          }}
                        >
                          <ExternalLink size={14} />
                          Open GitHub
                        </a>
                      )}
                      <button
                        onClick={() => handleComplete(mission.id, mission.xp)}
                        className="btn-plasma flex items-center gap-2 flex-1 justify-center"
                      >
                        <CheckCircle size={16} />
                        Mark Complete (+{mission.xp} XP)
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {completed === MISSIONS.length && (
          <div
            className="mt-10 p-8 rounded-2xl text-center"
            style={{ background: 'rgba(0,245,160,0.05)', border: '1px solid rgba(0,245,160,0.25)' }}
          >
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-white mb-2">GitHub Missions Complete!</h3>
            <p className="text-white/40 mb-6">You've mastered the basics of Git and GitHub. Time for DSA!</p>
            <div className="xp-badge mx-auto text-base px-4 py-2">
              <Zap size={16} />
              +{MISSIONS.reduce((a, m) => a + m.xp, 0)} Total XP Earned
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
