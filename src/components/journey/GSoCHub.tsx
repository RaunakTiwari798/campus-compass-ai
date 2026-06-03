import { Star, GitBranch, Search, FileText, Brain, ChevronRight, ExternalLink } from 'lucide-react'

const ORGS = [
  { name: 'Python Software Foundation', lang: 'Python', difficulty: 'Beginner Friendly', color: '#00D2FF' },
  { name: 'NumFOCUS', lang: 'Python / C++', difficulty: 'Intermediate', color: '#7C6EFA' },
  { name: 'Mozilla', lang: 'JavaScript / Rust', difficulty: 'Intermediate', color: '#FF6B6B' },
  { name: 'CERN-HSF', lang: 'C++ / Python', difficulty: 'Advanced', color: '#FFB347' },
  { name: 'OpenMRS', lang: 'Java', difficulty: 'Beginner Friendly', color: '#00F5A0' },
]

const ROADMAP = [
  { step: 1, title: 'Find Your Organization', desc: 'Browse GSoC orgs, find one that uses technologies you know.', icon: Search },
  { step: 2, title: 'Explore the Codebase', desc: 'Clone the repo, read the README, understand the project structure.', icon: GitBranch },
  { step: 3, title: 'Fix Starter Issues', desc: 'Look for "good first issue" labels. Fix bugs, improve docs.', icon: Star },
  { step: 4, title: 'Engage with Community', desc: 'Join their mailing list or Slack. Introduce yourself.', icon: Brain },
  { step: 5, title: 'Write Your Proposal', desc: 'A strong proposal is specific, realistic, and shows deep understanding.', icon: FileText },
]

export function GSoCHub() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-4"
            style={{ background: 'rgba(255,179,71,0.1)', color: '#FFB347', border: '1px solid rgba(255,179,71,0.2)' }}>
            <Star size={12} />
            GSoC Hub
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Google Summer of Code</h1>
          <p className="text-white/40 max-w-xl">Your complete guide to getting selected for GSoC. From finding orgs to writing a winning proposal.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          {/* Roadmap */}
          <div className="card-void rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-5">GSoC Roadmap</h2>
            <div className="space-y-4">
              {ROADMAP.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold"
                    style={{ background: 'rgba(255,179,71,0.15)', color: '#FFB347', border: '1px solid rgba(255,179,71,0.25)' }}>
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-0.5">{item.title}</h3>
                    <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Org finder */}
          <div className="card-void rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold text-white">Recommended Orgs</h2>
              <a href="https://summerofcode.withgoogle.com/programs/2024/organizations" target="_blank" rel="noopener noreferrer"
                className="text-xs flex items-center gap-1 text-white/40 hover:text-white transition-colors">
                View all <ExternalLink size={11} />
              </a>
            </div>
            <div className="space-y-3">
              {ORGS.map((org) => (
                <div key={org.name} className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 cursor-pointer"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${org.color}30`; e.currentTarget.style.background = `${org.color}08` }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)' }}
                >
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ background: org.color }} />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-white truncate">{org.name}</div>
                    <div className="text-xs text-white/40">{org.lang}</div>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full shrink-0"
                    style={{ background: `${org.color}15`, color: org.color, border: `1px solid ${org.color}25` }}>
                    {org.difficulty}
                  </span>
                  <ChevronRight size={14} className="text-white/20 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Proposal Helper */}
        <div className="rounded-2xl p-6"
          style={{ background: 'linear-gradient(135deg, rgba(124,110,250,0.08) 0%, rgba(0,210,255,0.05) 100%)', border: '1px solid rgba(124,110,250,0.2)' }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #7C6EFA, #00D2FF)' }}>
              <Brain size={20} className="text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">AI Proposal Helper</h2>
              <p className="text-xs text-white/40">Get AI feedback on your GSoC proposal draft</p>
            </div>
          </div>
          <textarea
            placeholder="Paste your proposal draft here and get AI feedback..."
            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-white/30 outline-none focus:border-plasma-400/50 resize-none transition-colors"
            rows={5}
          />
          <button className="btn-plasma mt-3 flex items-center gap-2 text-sm">
            <Brain size={16} />
            Analyze My Proposal
          </button>
        </div>
      </div>
    </div>
  )
}
