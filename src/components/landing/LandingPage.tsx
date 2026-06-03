import { useNavigate } from '@tanstack/react-router'
import {
  ArrowRight,
  Code2,
  GitBranch,
  Brain,
  Trophy,
  Star,
  Zap,
  Users,
  ChevronRight,
  Terminal,
  Cpu,
  Globe,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const STATS = [
  { value: '10,000+', label: 'Students Learning' },
  { value: '500+', label: 'Coding Challenges' },
  { value: '50+', label: 'GitHub Missions' },
  { value: '98%', label: 'Job Placement' },
]

const FEATURES = [
  {
    icon: Terminal,
    title: 'Python Mastery',
    description:
      'From syntax to advanced algorithms. Interactive lessons with AI-powered feedback.',
    color: 'nova',
  },
  {
    icon: Cpu,
    title: 'DSA Academy',
    description:
      'Visual algorithm explanations with dry-run debugger. Master every pattern.',
    color: 'plasma',
  },
  {
    icon: GitBranch,
    title: 'GitHub Missions',
    description: 'Real Git workflows as missions. Build your profile while learning.',
    color: 'circuit',
  },
  {
    icon: Globe,
    title: 'GSoC Preparation',
    description: 'Open source roadmap, issue finder, contribution guide, and AI mentor.',
    color: 'stellar',
  },
  {
    icon: Brain,
    title: 'AI Mentor',
    description:
      'Your personal tutor available 24/7. Analyzes your mistakes and guides you forward.',
    color: 'plasma',
  },
  {
    icon: Trophy,
    title: 'XP & Gamification',
    description: 'Earn XP, unlock badges, maintain streaks. Learning that feels addictive.',
    color: 'stellar',
  },
]

const PATHS = [
  {
    level: 'Beginner',
    description: 'Zero to coding hero. Python, GitHub, fundamentals.',
    modules: ['Python Learning', 'Python Practice', 'GitHub Missions'],
    color: '#00D2FF',
    glow: 'rgba(0,210,255,0.2)',
    href: '/beginner',
  },
  {
    level: 'Advanced',
    description: 'DSA mastery. Problem solving. Real projects.',
    modules: ['DSA Academy', 'Problem Solving', 'Project Hub'],
    color: '#7C6EFA',
    glow: 'rgba(124,110,250,0.2)',
    href: '/advanced',
    featured: true,
  },
  {
    level: 'Pro',
    description: 'Industry ready. GSoC, resume, interviews.',
    modules: ['GSoC Hub', 'Resume Builder', 'Interview Prep'],
    color: '#00F5A0',
    glow: 'rgba(0,245,160,0.2)',
    href: '/pro',
  },
]

function FloatingOrb({
  delay,
  x,
  y,
  size,
  color,
}: {
  delay: number
  x: number
  y: number
  size: number
  color: string
}) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity: 0.15,
        animation: `float ${6 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  )
}

function CodeBlock() {
  const [typed, setTyped] = useState('')

  const code = `# Campus Compass AI
def transform_student(you):
    skills = []
    
    for day in your_journey:
        skills.append(
            ai_mentor.teach(you)
        )
    
    return Industry_Ready_Dev(
        skills, confidence=MAX
    )`

  useEffect(() => {
    let i = 0

    const timer = setInterval(() => {
      if (i <= code.length) {
        setTyped(code.slice(0, i))
        i++
      } else {
        clearInterval(timer)
      }
    }, 25)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="glass rounded-2xl p-5 font-mono text-sm leading-relaxed overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-ember-400/60" />
        <div className="w-3 h-3 rounded-full bg-stellar-400/60" />
        <div className="w-3 h-3 rounded-full bg-circuit-400/60" />
        <span className="ml-2 text-white/30 text-xs">main.py</span>
      </div>

      <pre className="text-white/80 whitespace-pre-wrap">
        {typed.split('\n').map((line, i) => {
          const colorized = line
            .replace(/(#.*$)/g, '<span style="color:#6A9955">$1</span>')
            .replace(
              /\b(def|for|in|return)\b/g,
              '<span style="color:#7C6EFA">$1</span>'
            )
            .replace(/\b(self|you)\b/g, '<span style="color:#00D2FF">$1</span>')
            .replace(/(["'].*?["'])/g, '<span style="color:#FFB347">$1</span>')

          return (
            <div
              key={i}
              dangerouslySetInnerHTML={{ __html: colorized || '&nbsp;' }}
            />
          )
        })}

        <span className="inline-block w-2 h-4 bg-plasma-400 animate-pulse ml-0.5 align-middle" />
      </pre>
    </div>
  )
}

export function LandingPage() {
  const navigate = useNavigate()
  const heroRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative">
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      >
        <div className="absolute inset-0 grid-bg opacity-40" />

        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(124,110,250,0.15) 0%, transparent 60%)',
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 80% 60%, rgba(0,210,255,0.08) 0%, transparent 60%)',
          }}
        />

        <FloatingOrb delay={0} x={10} y={20} size={400} color="#7C6EFA" />
        <FloatingOrb delay={2} x={80} y={70} size={350} color="#00D2FF" />
        <FloatingOrb delay={4} x={60} y={10} size={250} color="#00F5A0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
                style={{ borderColor: 'rgba(124,110,250,0.3)' }}
              >
                <Zap size={14} className="text-plasma-400" />
                <span className="text-sm text-white/80">
                  AI-Powered Learning Platform
                </span>
                <Star size={12} className="text-stellar-400" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.85, ease: 'easeOut' }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
              >
                <motion.span
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.7 }}
                  className="block text-white"
                >
                  From Beginner to
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 28, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: [1, 1.025, 1] }}
                  transition={{
                    opacity: { delay: 0.65, duration: 0.7 },
                    y: { delay: 0.65, duration: 0.7 },
                    scale: {
                      delay: 1.4,
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                  className="block text-gradient-plasma"
                >
                  Industry Ready.
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.7 }}
                className="text-lg text-white/50 max-w-lg mb-10 leading-relaxed"
              >
                Learn coding, build projects, master GitHub, crack interviews, and
                prepare for GSoC with your personal AI mentor.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05, duration: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={() => navigate({ to: '/journey' })}
                  className="btn-plasma group flex items-center justify-center gap-2 text-base px-8 py-4"
                >
                  Start Your Journey
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <button
                  onClick={() => navigate({ to: '/advanced/dsa' })}
                  className="btn-outline-plasma flex items-center justify-center gap-2 text-base px-8 py-4"
                >
                  <Cpu size={18} />
                  Explore DSA
                </button>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.12,
                      delayChildren: 1.25,
                    },
                  },
                }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14"
              >
                {STATS.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={{
                      hidden: { opacity: 0, y: 18 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.55 }}
                  >
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/40 mt-0.5">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.55, duration: 0.9, ease: 'easeOut' }}
              className="relative"
            >
              <div className="relative">
                <div
                  className="absolute -inset-8 rounded-3xl"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(124,110,250,0.15) 0%, transparent 70%)',
                  }}
                />

                <CodeBlock />

                <div
                  className="absolute -top-4 -right-4 glass px-3 py-2 rounded-xl animate-float"
                  style={{
                    animationDelay: '1s',
                    borderColor: 'rgba(0,245,160,0.3)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Zap size={14} className="text-circuit-400" />
                    <span className="text-xs text-white/80">+50 XP Earned!</span>
                  </div>
                </div>

                <div
                  className="absolute -bottom-4 -left-4 glass px-3 py-2 rounded-xl animate-float"
                  style={{
                    animationDelay: '2s',
                    borderColor: 'rgba(0,210,255,0.3)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Brain size={14} className="text-nova-400" />
                    <span className="text-xs text-white/80">AI Mentor Active</span>
                  </div>
                </div>

                <div
                  className="absolute top-1/2 -right-6 glass px-3 py-2 rounded-xl animate-float"
                  style={{
                    animationDelay: '3s',
                    borderColor: 'rgba(255,179,71,0.3)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Trophy size={14} className="text-stellar-400" />
                    <span className="text-xs text-white/80">Streak: 12 days</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-white/30">Scroll to explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(10,10,26,0) 0%, rgba(2,2,10,0.8) 100%)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
              style={{ borderColor: 'rgba(0,210,255,0.3)' }}
            >
              <Code2 size={14} className="text-nova-400" />
              <span className="text-sm text-white/80">Everything You Need</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              One platform,{' '}
              <span className="text-gradient-nova">complete journey</span>
            </h2>

            <p className="text-white/40 max-w-xl mx-auto">
              Every tool, resource, and mentor you need to go from writing your
              first line of code to landing your dream job.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="card-glow-plasma p-6 group cursor-pointer"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, var(--${feature.color}-color, #7C6EFA) 0%, transparent 100%)`,
                    backgroundColor: 'rgba(124,110,250,0.15)',
                  }}
                >
                  <feature.icon size={22} className="text-white" />
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>

                <p className="text-white/40 text-sm leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-4 flex items-center gap-1 text-plasma-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore</span>
                  <ChevronRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Choose your <span className="text-gradient-fire">path</span>
            </h2>
            <p className="text-white/40">
              Start where you are. We'll take you where you want to go.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PATHS.map((path) => (
              <button
                key={path.level}
                onClick={() => navigate({ to: path.href as '/' })}
                className={`relative group text-left p-8 rounded-2xl transition-all duration-300 ${
                  path.featured ? 'ring-1' : ''
                }`}
                style={{
                  background: path.featured
                    ? 'linear-gradient(135deg, rgba(124,110,250,0.15) 0%, rgba(0,210,255,0.05) 100%)'
                    : 'rgba(10,10,26,0.8)',
                  border: `1px solid ${path.color}30`,
                  boxShadow: path.featured ? `0 0 60px ${path.glow}` : 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 60px ${path.glow}`
                  e.currentTarget.style.borderColor = `${path.color}60`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = path.featured
                    ? `0 0 60px ${path.glow}`
                    : 'none'
                  e.currentTarget.style.borderColor = `${path.color}30`
                }}
              >
                {path.featured && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white"
                    style={{
                      background: 'linear-gradient(135deg, #7C6EFA, #00D2FF)',
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: path.color }}
                >
                  {path.level}
                </div>

                <p className="text-white/50 text-sm mb-6">
                  {path.description}
                </p>

                <div className="space-y-2 mb-8">
                  {path.modules.map((module) => (
                    <div
                      key={module}
                      className="flex items-center gap-2 text-sm text-white/60"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: path.color }}
                      />
                      {module}
                    </div>
                  ))}
                </div>

                <div
                  className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                  style={{ color: path.color }}
                >
                  Start {path.level}
                  <ArrowRight size={16} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(124,110,250,0.08) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            style={{ borderColor: 'rgba(0,245,160,0.3)' }}
          >
            <Users size={14} className="text-circuit-400" />
            <span className="text-sm text-white/80">Join 10,000+ students</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to become
            <br />
            <span className="text-gradient-plasma">industry ready?</span>
          </h2>

          <p className="text-white/40 mb-10 text-lg">
            Start your journey today. Free to begin, no credit card required.
          </p>

          <button
            onClick={() => navigate({ to: '/journey' })}
            className="btn-plasma group flex items-center gap-3 mx-auto text-lg px-10 py-5"
          >
            Start Your Journey — It's Free
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </section>

      <footer className="border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-md flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #7C6EFA, #00D2FF)' }}
              >
                <Code2 size={12} className="text-white" />
              </div>
              <span className="text-white/60 text-sm">Campus Compass AI</span>
            </div>

            <p className="text-white/30 text-sm">
              Built for students who want to become great engineers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}