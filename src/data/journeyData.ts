// ─── Types ────────────────────────────────────────────────────────────────────

export type PathId = 'beginner' | 'advanced' | 'pro'

export interface PathModule {
  id: string
  title: string
  description: string
  href: string
  icon: string
  color: string
  totalLessons: number
  totalXP: number
  unlockRequirement: string | null  // null = always unlocked
  unlockXP: number                  // minimum XP to unlock
  tags: string[]
}

export interface LearningPath {
  id: PathId
  title: string
  tagline: string
  description: string
  color: string
  glow: string
  icon: string
  estimatedMonths: string
  modules: PathModule[]
  outcomes: string[]
}

// ─── Path Data ────────────────────────────────────────────────────────────────

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'beginner',
    title: 'Beginner',
    tagline: 'I\'m just starting out',
    description: 'Perfect if you\'ve never coded before or have minimal experience. We take you from zero to your first real project.',
    color: '#00D2FF',
    glow: 'rgba(0,210,255,0.15)',
    icon: '🚀',
    estimatedMonths: '3–6 months',
    outcomes: [
      'Write Python programs confidently',
      'Understand programming fundamentals',
      'Manage code with Git and GitHub',
      'Build and deploy your first project',
      'Earn 3,000+ XP and reach Level 7',
    ],
    modules: [
      {
        id: 'python-learn',
        title: 'Python Learning',
        description: 'Master Python from scratch. 10 structured lessons with concepts, examples, quizzes, and code practice.',
        href: '/beginner/python',
        icon: '🐍',
        color: '#00D2FF',
        totalLessons: 10,
        totalXP: 900,
        unlockRequirement: null,
        unlockXP: 0,
        tags: ['Variables', 'Loops', 'Functions', 'OOP'],
      },
      {
        id: 'github-missions',
        title: 'GitHub Missions',
        description: 'Learn Git and GitHub through 10 real-world missions. Build your developer profile step by step.',
        href: '/beginner/github',
        icon: '🐙',
        color: '#7C6EFA',
        totalLessons: 10,
        totalXP: 1800,
        unlockRequirement: 'python-learn',
        unlockXP: 200,
        tags: ['Git', 'Repositories', 'Branches', 'Pull Requests'],
      },
      {
        id: 'beginner-projects',
        title: 'Build Your First Projects',
        description: 'Apply everything you learned. Build a calculator, to-do app, and a simple web scraper.',
        href: '/beginner/projects',
        icon: '🏗️',
        color: '#00F5A0',
        totalLessons: 3,
        totalXP: 1500,
        unlockRequirement: 'github-missions',
        unlockXP: 500,
        tags: ['Projects', 'Portfolio', 'Deploy'],
      },
    ],
  },

  {
    id: 'advanced',
    title: 'Advanced',
    tagline: 'I know basics, want to level up',
    description: 'For developers who know fundamentals but want to master DSA, data structures, and build complex projects.',
    color: '#7C6EFA',
    glow: 'rgba(124,110,250,0.15)',
    icon: '⚡',
    estimatedMonths: '4–8 months',
    outcomes: [
      'Solve LeetCode Medium/Hard problems',
      'Master all core data structures',
      'Understand algorithm complexity',
      'Build 3+ portfolio-worthy projects',
      'Earn 10,000+ XP and reach Level 20',
    ],
    modules: [
      {
        id: 'dsa-academy',
        title: 'DSA Academy',
        description: 'All 9 data structure topics with visualizer, dry-run debugger, MCQ quiz, and coding challenge.',
        href: '/advanced/dsa',
        icon: '🧠',
        color: '#7C6EFA',
        totalLessons: 9,
        totalXP: 3500,
        unlockRequirement: null,
        unlockXP: 0,
        tags: ['Arrays', 'Trees', 'Graphs', 'Sorting', 'DP'],
      },
      {
        id: 'problem-solving',
        title: 'Problem Solving',
        description: '50 curated problems organized by pattern. Learn to recognize and apply each pattern.',
        href: '/advanced/problems',
        icon: '🎯',
        color: '#00D2FF',
        totalLessons: 50,
        totalXP: 5000,
        unlockRequirement: 'dsa-academy',
        unlockXP: 1000,
        tags: ['Two Pointers', 'Sliding Window', 'DP', 'Backtracking'],
      },
      {
        id: 'project-hub',
        title: 'Project Hub',
        description: 'Build 5 real projects: REST API, web scraper, CLI tool, data visualizer, and full-stack app.',
        href: '/advanced/projects',
        icon: '🏭',
        color: '#00F5A0',
        totalLessons: 5,
        totalXP: 7500,
        unlockRequirement: 'problem-solving',
        unlockXP: 2500,
        tags: ['Flask', 'REST API', 'Database', 'Full-Stack'],
      },
    ],
  },

  {
    id: 'pro',
    title: 'Pro',
    tagline: 'I\'m ready for the industry',
    description: 'For serious developers targeting internships, campus placements, GSoC, or FAANG-level interviews.',
    color: '#00F5A0',
    glow: 'rgba(0,245,160,0.15)',
    icon: '🏆',
    estimatedMonths: '3–6 months',
    outcomes: [
      'Get accepted to GSoC or similar programs',
      'Pass technical interview rounds',
      'Build a portfolio that gets callbacks',
      'Write a resume that stands out',
      'Become industry-ready',
    ],
    modules: [
      {
        id: 'gsoc-hub',
        title: 'GSoC Hub',
        description: 'Complete Google Summer of Code roadmap: org finder, contribution guide, proposal helper.',
        href: '/pro/gsoc',
        icon: '🌟',
        color: '#FFB347',
        totalLessons: 6,
        totalXP: 2000,
        unlockRequirement: null,
        unlockXP: 0,
        tags: ['Open Source', 'GSoC', 'Proposals', 'Contributions'],
      },
      {
        id: 'resume-builder',
        title: 'AI Resume Builder',
        description: 'AI-powered resume generation tailored for developer roles. ATS-optimized templates.',
        href: '/pro/resume',
        icon: '📄',
        color: '#00F5A0',
        totalLessons: 1,
        totalXP: 500,
        unlockRequirement: null,
        unlockXP: 0,
        tags: ['Resume', 'ATS', 'LinkedIn', 'Portfolio'],
      },
      {
        id: 'interview-prep',
        title: 'Interview Preparation',
        description: 'HR rounds, technical interviews, system design, mock interviews with AI feedback.',
        href: '/pro/interview',
        icon: '🎤',
        color: '#7C6EFA',
        totalLessons: 30,
        totalXP: 3000,
        unlockRequirement: 'resume-builder',
        unlockXP: 300,
        tags: ['HR', 'Technical', 'System Design', 'Mock'],
      },
    ],
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getPath(id: PathId): LearningPath | undefined {
  return LEARNING_PATHS.find((p) => p.id === id)
}

export function isModuleUnlocked(
  moduleId: string,
  completedModules: string[],
  userXP: number
): boolean {
  const allModules = LEARNING_PATHS.flatMap((p) => p.modules)
  const mod = allModules.find((m) => m.id === moduleId)
  if (!mod) return false
  if (mod.unlockRequirement === null) return true
  return (
    completedModules.includes(mod.unlockRequirement) &&
    userXP >= mod.unlockXP
  )
}
