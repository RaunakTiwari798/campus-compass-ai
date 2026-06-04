// ─── Types ────────────────────────────────────────────────────────────────────

export interface Badge {
  id: string
  name: string
  icon: string
  description: string
  requirement: string
  xpRequired?: number
  lessonsRequired?: string[]
  color: string
}

export interface DailyChallenge {
  id: string
  title: string
  description: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  xpReward: number
  topic: string
  expiresInHours: number
}

export interface RecommendedLesson {
  id: string
  title: string
  path: string
  module: string
  reason: string
  xp: number
  estimatedMinutes: number
}

// ─── Badges ───────────────────────────────────────────────────────────────────

export const ALL_BADGES: Badge[] = [
  {
    id: 'first-lesson',
    name: 'First Step',
    icon: '👶',
    description: 'Complete your first lesson',
    requirement: 'Complete 1 lesson',
    color: '#00D2FF',
  },
  {
    id: 'python-starter',
    name: 'Pythonista',
    icon: '🐍',
    description: 'Complete all Python lessons',
    requirement: 'Complete all 10 Python lessons',
    lessonsRequired: ['py-01', 'py-02', 'py-03', 'py-04', 'py-05', 'py-06', 'py-07', 'py-08', 'py-09', 'py-10'],
    color: '#00D2FF',
  },
  {
    id: 'github-hero',
    name: 'GitHub Hero',
    icon: '🐙',
    description: 'Complete all GitHub missions',
    requirement: 'Complete all 10 GitHub missions',
    color: '#7C6EFA',
  },
  {
    id: 'dsa-initiate',
    name: 'DSA Initiate',
    icon: '🧩',
    description: 'Complete your first DSA topic',
    requirement: 'Finish 1 DSA topic (quiz + challenge)',
    color: '#7C6EFA',
  },
  {
    id: 'dsa-master',
    name: 'DSA Master',
    icon: '⚔️',
    description: 'Complete all 9 DSA topics',
    requirement: 'Finish all 9 DSA topics',
    color: '#FF6B6B',
  },
  {
    id: 'streak-3',
    name: 'On Fire',
    icon: '🔥',
    description: '3-day learning streak',
    requirement: 'Maintain a 3-day streak',
    color: '#FFB347',
  },
  {
    id: 'streak-7',
    name: 'Week Warrior',
    icon: '⚡',
    description: '7-day learning streak',
    requirement: 'Maintain a 7-day streak',
    color: '#FFB347',
  },
  {
    id: 'streak-30',
    name: 'Unstoppable',
    icon: '🌟',
    description: '30-day learning streak',
    requirement: 'Maintain a 30-day streak',
    color: '#FFB347',
  },
  {
    id: 'xp-500',
    name: 'Rising Star',
    icon: '⭐',
    description: 'Earn 500 XP',
    requirement: '500 XP',
    xpRequired: 500,
    color: '#00F5A0',
  },
  {
    id: 'xp-2000',
    name: 'Code Wizard',
    icon: '🧙',
    description: 'Earn 2,000 XP',
    requirement: '2,000 XP',
    xpRequired: 2000,
    color: '#00F5A0',
  },
  {
    id: 'xp-10000',
    name: 'Legend',
    icon: '👑',
    description: 'Earn 10,000 XP',
    requirement: '10,000 XP',
    xpRequired: 10000,
    color: '#FFB347',
  },
  {
    id: 'first-pr',
    name: 'Open Sourcer',
    icon: '🌐',
    description: 'Complete the Fork + PR mission',
    requirement: 'Complete GitHub mission 6',
    color: '#00F5A0',
  },
]

// ─── Daily Challenges ─────────────────────────────────────────────────────────

export const DAILY_CHALLENGES: DailyChallenge[] = [
  {
    id: 'dc-01',
    title: 'Reverse a String Without Slicing',
    description: 'Reverse "campus compass" using only a loop, no [::-1].',
    difficulty: 'Easy',
    xpReward: 50,
    topic: 'Python Strings',
    expiresInHours: 24,
  },
  {
    id: 'dc-02',
    title: 'Find Second Largest',
    description: 'Given [3, 1, 7, 2, 9, 4], find the second largest without sorting.',
    difficulty: 'Easy',
    xpReward: 75,
    topic: 'Arrays',
    expiresInHours: 24,
  },
  {
    id: 'dc-03',
    title: 'Binary Search in 10 Lines',
    description: 'Implement iterative binary search. No recursion allowed.',
    difficulty: 'Medium',
    xpReward: 100,
    topic: 'Searching',
    expiresInHours: 24,
  },
]

// ─── Roadmap milestones ───────────────────────────────────────────────────────

export const ROADMAP_MILESTONES = [
  { id: 'r1', title: 'First Python Program', xpRequired: 50, icon: '🐣' },
  { id: 'r2', title: 'Python Basics Complete', xpRequired: 500, icon: '🐍' },
  { id: 'r3', title: 'GitHub Profile Created', xpRequired: 600, icon: '🐙' },
  { id: 'r4', title: 'First Contribution', xpRequired: 1500, icon: '🌱' },
  { id: 'r5', title: 'DSA Beginner', xpRequired: 2000, icon: '🧩' },
  { id: 'r6', title: 'First Project Deployed', xpRequired: 3000, icon: '🚀' },
  { id: 'r7', title: 'DSA Intermediate', xpRequired: 5000, icon: '⚡' },
  { id: 'r8', title: 'Open Source Contributor', xpRequired: 7500, icon: '🌐' },
  { id: 'r9', title: 'Interview Ready', xpRequired: 10000, icon: '🎤' },
  { id: 'r10', title: 'Industry Ready', xpRequired: 15000, icon: '👑' },
]

// ─── Level titles ─────────────────────────────────────────────────────────────

export const LEVEL_TITLES: Record<number, string> = {
  1: 'Novice Coder',
  2: 'Novice Coder',
  3: 'Code Apprentice',
  4: 'Code Apprentice',
  5: 'Junior Developer',
  6: 'Junior Developer',
  7: 'Developer',
  8: 'Developer',
  9: 'Senior Developer',
  10: 'Senior Developer',
  15: 'Tech Lead',
  20: 'Staff Engineer',
  25: 'Principal Engineer',
  30: 'Code Legend',
}

export function getLevelTitle(level: number): string {
  const levels = Object.keys(LEVEL_TITLES)
    .map(Number)
    .sort((a, b) => a - b)
  let title = 'Code Legend'
  for (const l of levels) {
    if (level >= l) title = LEVEL_TITLES[l]
  }
  return title
}

export function checkBadgeUnlocked(
  badge: Badge,
  xp: number,
  completedLessons: string[],
  streak: number,
  completedMissions: string[]
): boolean {
  if (badge.xpRequired !== undefined && xp < badge.xpRequired) return false
  if (badge.lessonsRequired) {
    if (!badge.lessonsRequired.every((id) => completedLessons.includes(id))) return false
  }
  if (badge.id === 'streak-3' && streak < 3) return false
  if (badge.id === 'streak-7' && streak < 7) return false
  if (badge.id === 'streak-30' && streak < 30) return false
  if (badge.id === 'first-lesson' && completedLessons.length < 1) return false
  if (badge.id === 'github-hero' && completedMissions.length < 10) return false
  if (badge.id === 'first-pr' && !completedMissions.includes('gh-06')) return false
  return true
}
