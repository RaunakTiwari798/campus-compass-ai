import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatXP(xp: number): string {
  if (xp >= 1000) return `${(xp / 1000).toFixed(1)}k`
  return xp.toString()
}

export function getLevelTitle(level: number): string {
  if (level <= 3) return 'Novice Coder'
  if (level <= 7) return 'Code Apprentice'
  if (level <= 12) return 'Developer'
  if (level <= 18) return 'Senior Developer'
  if (level <= 25) return 'Tech Lead'
  return 'Code Master'
}

export function getXPForNextLevel(level: number): number {
  return level * 500
}

export function getLevelProgress(xp: number, level: number): number {
  const xpForCurrentLevel = (level - 1) * 500
  const xpForNextLevel = level * 500
  return ((xp - xpForCurrentLevel) / (xpForNextLevel - xpForCurrentLevel)) * 100
}
