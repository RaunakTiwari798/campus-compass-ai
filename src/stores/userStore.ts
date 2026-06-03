import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type UserPath = 'beginner' | 'advanced' | 'pro' | null

export interface Badge {
  id: string
  name: string
  icon: string
  description: string
  unlockedAt: string
}

export interface UserStore {
  xp: number
  level: number
  streak: number
  lastActiveDate: string | null
  path: UserPath
  badges: Badge[]
  completedLessons: string[]
  completedMissions: string[]
  dsaProgress: Record<string, number>
  pythonProgress: number

  addXP: (amount: number) => void
  setPath: (path: UserPath) => void
  completeLesson: (lessonId: string) => void
  completeMission: (missionId: string) => void
  updateDSAProgress: (topic: string, progress: number) => void
  checkStreak: () => void
}

const XP_PER_LEVEL = 500

function calculateLevel(xp: number): number {
  return Math.floor(xp / XP_PER_LEVEL) + 1
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      xp: 0,
      level: 1,
      streak: 0,
      lastActiveDate: null,
      path: null,
      badges: [],
      completedLessons: [],
      completedMissions: [],
      dsaProgress: {},
      pythonProgress: 0,

      addXP: (amount) => {
        set((state) => {
          const newXP = state.xp + amount
          const newLevel = calculateLevel(newXP)
          return { xp: newXP, level: newLevel }
        })
      },

      setPath: (path) => set({ path }),

      completeLesson: (lessonId) => {
        const { completedLessons, addXP } = get()
        if (!completedLessons.includes(lessonId)) {
          set({ completedLessons: [...completedLessons, lessonId] })
          addXP(50)
        }
      },

      completeMission: (missionId) => {
        const { completedMissions, addXP } = get()
        if (!completedMissions.includes(missionId)) {
          set({ completedMissions: [...completedMissions, missionId] })
          addXP(100)
        }
      },

      updateDSAProgress: (topic, progress) => {
        set((state) => ({
          dsaProgress: { ...state.dsaProgress, [topic]: progress },
        }))
      },

      checkStreak: () => {
        const today = new Date().toDateString()
        const { lastActiveDate } = get()
        if (lastActiveDate === today) return

        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)

        set((state) => ({
          streak:
            lastActiveDate === yesterday.toDateString()
              ? state.streak + 1
              : 1,
          lastActiveDate: today,
        }))
      },
    }),
    {
      name: 'campus-compass-user',
    }
  )
)
