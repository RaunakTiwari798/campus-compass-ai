import { useState, useEffect } from 'react'
import { CheckCircle, Zap, X } from 'lucide-react'

interface Toast {
  id: string
  message: string
  type: 'xp' | 'success' | 'info'
  xpAmount?: number
}

// Simple event-based toast system
const toastListeners: ((toast: Toast) => void)[] = []

export function showToast(toast: Omit<Toast, 'id'>) {
  const id = Math.random().toString(36).slice(2)
  toastListeners.forEach((fn) => fn({ ...toast, id }))
}

export function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => {
    const handler = (toast: Toast) => {
      setToasts((prev) => [...prev, toast])
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id))
      }, 3000)
    }
    toastListeners.push(handler)
    return () => {
      const idx = toastListeners.indexOf(handler)
      if (idx >= 0) toastListeners.splice(idx, 1)
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="flex items-center gap-3 px-4 py-3 rounded-xl glass animate-slide-up"
          style={{
            borderColor:
              toast.type === 'xp'
                ? 'rgba(0,245,160,0.3)'
                : 'rgba(124,110,250,0.3)',
          }}
        >
          {toast.type === 'xp' ? (
            <Zap size={16} className="text-circuit-400" />
          ) : (
            <CheckCircle size={16} className="text-plasma-400" />
          )}
          <span className="text-sm text-white">{toast.message}</span>
          {toast.xpAmount && (
            <span className="xp-badge">+{toast.xpAmount} XP</span>
          )}
          <button
            onClick={() =>
              setToasts((prev) => prev.filter((t) => t.id !== toast.id))
            }
            className="text-white/40 hover:text-white ml-2"
          >
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  )
}
