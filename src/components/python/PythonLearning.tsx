import { useState } from 'react'
import { Terminal, CheckCircle, Play, ChevronRight, Brain, Zap, BookOpen } from 'lucide-react'
import { useUserStore } from '@/stores/userStore'
import { showToast } from '@/components/ui/Toaster'

const LESSONS = [
  {
    id: 'py-01',
    title: 'Hello, Python!',
    concept: 'Python is a high-level, readable programming language. Your first program is always printing to the screen.',
    code: `# Your first Python program
print("Hello, World!")
print("Welcome to Campus Compass AI")`,
    output: 'Hello, World!\nWelcome to Campus Compass AI',
    quiz: {
      question: 'Which function is used to display output in Python?',
      options: ['display()', 'print()', 'output()', 'show()'],
      correct: 1,
    },
    xp: 50,
  },
  {
    id: 'py-02',
    title: 'Variables & Types',
    concept: 'Variables store data. Python has several built-in types: int, float, str, and bool.',
    code: `name = "Alice"        # string
age = 20              # integer
gpa = 3.8             # float
is_student = True     # boolean

print(f"Name: {name}")
print(f"Age: {age}")
print(f"Type of age: {type(age)}")`,
    output: 'Name: Alice\nAge: 20\nType of age: <class \'int\'>',
    quiz: {
      question: 'What type is the value 3.14 in Python?',
      options: ['int', 'str', 'float', 'double'],
      correct: 2,
    },
    xp: 50,
  },
  {
    id: 'py-03',
    title: 'If/Else Conditions',
    concept: 'Conditions let your program make decisions. Python uses indentation (spaces) to define code blocks.',
    code: `score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print(f"Your grade: {grade}")`,
    output: 'Your grade: B',
    quiz: {
      question: 'What keyword checks an additional condition after if?',
      options: ['else if', 'elseif', 'elif', 'otherwise'],
      correct: 2,
    },
    xp: 75,
  },
  {
    id: 'py-04',
    title: 'Loops',
    concept: 'Loops repeat code. `for` loops iterate over sequences, `while` loops run while a condition is true.',
    code: `# For loop
fruits = ["apple", "banana", "mango"]
for fruit in fruits:
    print(f"I love {fruit}")

# Range loop
for i in range(1, 4):
    print(f"Count: {i}")`,
    output: 'I love apple\nI love banana\nI love mango\nCount: 1\nCount: 2\nCount: 3',
    quiz: {
      question: 'What does range(1, 5) produce?',
      options: ['1, 2, 3, 4, 5', '1, 2, 3, 4', '0, 1, 2, 3, 4', '1, 3, 5'],
      correct: 1,
    },
    xp: 75,
  },
  {
    id: 'py-05',
    title: 'Functions',
    concept: 'Functions are reusable blocks of code. They take inputs (parameters) and return outputs.',
    code: `def greet(name, time_of_day="morning"):
    return f"Good {time_of_day}, {name}!"

def add(a, b):
    return a + b

print(greet("Alice"))
print(greet("Bob", "evening"))
print(add(10, 20))`,
    output: 'Good morning, Alice!\nGood evening, Bob!\n30',
    quiz: {
      question: 'What keyword returns a value from a function?',
      options: ['give', 'output', 'return', 'send'],
      correct: 2,
    },
    xp: 100,
  },
]

type Tab = 'learn' | 'quiz' | 'code'

export function PythonLearning() {
  const [lessonIndex, setLessonIndex] = useState(0)
  const [activeTab, setActiveTab] = useState<Tab>('learn')
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [userCode, setUserCode] = useState('')
  const { completeLesson, completedLessons } = useUserStore()

  const lesson = LESSONS[lessonIndex]

  function handleAnswerSelect(idx: number) {
    if (showResult) return
    setSelectedAnswer(idx)
    setShowResult(true)
    if (idx === lesson.quiz.correct) {
      completeLesson(lesson.id)
      showToast({ type: 'xp', message: 'Correct answer!', xpAmount: lesson.xp })
    }
  }

  function goNext() {
    if (lessonIndex < LESSONS.length - 1) {
      setLessonIndex(lessonIndex + 1)
      setActiveTab('learn')
      setSelectedAnswer(null)
      setShowResult(false)
      setUserCode('')
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: 'rgba(0,210,255,0.15)', border: '1px solid rgba(0,210,255,0.25)' }}>
            <Terminal size={20} className="text-nova-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Python Learning</h1>
            <p className="text-white/40 text-sm">{lessonIndex + 1} of {LESSONS.length} lessons</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="xp-badge">
              <Zap size={12} />
              <span>{lesson.xp} XP</span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 bg-white/5 rounded-full mb-8 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${((lessonIndex + 1) / LESSONS.length) * 100}%`,
              background: 'linear-gradient(90deg, #00D2FF, #00F5A0)',
            }}
          />
        </div>

        {/* Lesson nav pills */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {LESSONS.map((l, i) => (
            <button
              key={l.id}
              onClick={() => { setLessonIndex(i); setActiveTab('learn'); setSelectedAnswer(null); setShowResult(false) }}
              className="shrink-0 px-4 py-2 rounded-full text-sm transition-all duration-200"
              style={{
                background: i === lessonIndex ? 'rgba(0,210,255,0.15)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${i === lessonIndex ? 'rgba(0,210,255,0.4)' : 'rgba(255,255,255,0.08)'}`,
                color: i === lessonIndex ? '#00D2FF' : completedLessons.includes(l.id) ? '#00F5A0' : 'rgba(255,255,255,0.4)',
              }}
            >
              {completedLessons.includes(l.id) && <CheckCircle size={12} className="inline mr-1" />}
              {l.title}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="card-void rounded-2xl overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-white/5">
                {(['learn', 'quiz', 'code'] as Tab[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="flex-1 py-4 text-sm font-medium capitalize transition-colors"
                    style={{
                      color: activeTab === tab ? '#00D2FF' : 'rgba(255,255,255,0.4)',
                      borderBottom: activeTab === tab ? '2px solid #00D2FF' : '2px solid transparent',
                    }}
                  >
                    {tab === 'learn' && <BookOpen size={14} className="inline mr-1.5" />}
                    {tab === 'quiz' && <Brain size={14} className="inline mr-1.5" />}
                    {tab === 'code' && <Play size={14} className="inline mr-1.5" />}
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {/* ── LEARN TAB ── */}
                {activeTab === 'learn' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white">{lesson.title}</h2>

                    <div className="p-4 rounded-xl"
                      style={{ background: 'rgba(0,210,255,0.05)', border: '1px solid rgba(0,210,255,0.15)' }}>
                      <p className="text-white/70 leading-relaxed">{lesson.concept}</p>
                    </div>

                    {/* Code example */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-white/40 uppercase tracking-wider">Example</span>
                        <span className="text-xs px-2 py-0.5 rounded text-nova-400"
                          style={{ background: 'rgba(0,210,255,0.1)', border: '1px solid rgba(0,210,255,0.2)' }}>
                          Python
                        </span>
                      </div>
                      <div className="rounded-xl overflow-hidden"
                        style={{ background: '#0A0A1A', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                          <div className="w-2.5 h-2.5 rounded-full bg-ember-400/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-stellar-400/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-circuit-400/60" />
                          <span className="ml-2 text-xs text-white/20 font-mono">example.py</span>
                        </div>
                        <pre className="p-4 font-mono text-sm text-white/80 overflow-x-auto leading-relaxed">
                          {lesson.code}
                        </pre>
                      </div>
                    </div>

                    {/* Output */}
                    <div>
                      <span className="text-xs text-white/40 uppercase tracking-wider block mb-2">Output</span>
                      <div className="rounded-xl p-4 font-mono text-sm"
                        style={{ background: 'rgba(0,245,160,0.05)', border: '1px solid rgba(0,245,160,0.15)' }}>
                        <pre className="text-circuit-400 whitespace-pre-wrap">{lesson.output}</pre>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveTab('quiz')}
                      className="btn-plasma w-full flex items-center justify-center gap-2"
                    >
                      Take Quiz
                      <ChevronRight size={16} />
                    </button>
                  </div>
                )}

                {/* ── QUIZ TAB ── */}
                {activeTab === 'quiz' && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold text-white">Quick Quiz</h2>

                    <div className="p-5 rounded-xl"
                      style={{ background: 'rgba(124,110,250,0.05)', border: '1px solid rgba(124,110,250,0.15)' }}>
                      <p className="text-white font-medium leading-relaxed">{lesson.quiz.question}</p>
                    </div>

                    <div className="space-y-3">
                      {lesson.quiz.options.map((option, idx) => {
                        let style: React.CSSProperties = {
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          color: 'rgba(255,255,255,0.7)',
                        }
                        if (showResult) {
                          if (idx === lesson.quiz.correct) {
                            style = { background: 'rgba(0,245,160,0.1)', border: '1px solid rgba(0,245,160,0.4)', color: '#00F5A0' }
                          } else if (idx === selectedAnswer && idx !== lesson.quiz.correct) {
                            style = { background: 'rgba(255,107,107,0.1)', border: '1px solid rgba(255,107,107,0.4)', color: '#FF6B6B' }
                          }
                        } else if (selectedAnswer === idx) {
                          style = { background: 'rgba(124,110,250,0.15)', border: '1px solid rgba(124,110,250,0.4)', color: '#7C6EFA' }
                        }

                        return (
                          <button
                            key={idx}
                            onClick={() => handleAnswerSelect(idx)}
                            className="w-full text-left px-5 py-4 rounded-xl transition-all duration-200 font-medium"
                            style={style}
                            disabled={showResult}
                          >
                            <span className="opacity-50 mr-3">{String.fromCharCode(65 + idx)}.</span>
                            {option}
                          </button>
                        )
                      })}
                    </div>

                    {showResult && (
                      <div className="flex justify-between items-center">
                        <span
                          className={selectedAnswer === lesson.quiz.correct ? 'text-circuit-400' : 'text-ember-400'}
                        >
                          {selectedAnswer === lesson.quiz.correct ? '✓ Correct! Well done.' : '✗ Not quite — the answer is highlighted.'}
                        </span>
                        <button onClick={goNext} className="btn-plasma flex items-center gap-2">
                          {lessonIndex < LESSONS.length - 1 ? 'Next Lesson' : 'Complete!'}
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* ── CODE TAB ── */}
                {activeTab === 'code' && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-white">Try It Yourself</h2>
                    <p className="text-white/40 text-sm">Modify the code and see what happens. (Editor is interactive in production with Judge0 API)</p>

                    <div className="rounded-xl overflow-hidden"
                      style={{ background: '#0A0A1A', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-ember-400/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-stellar-400/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-circuit-400/60" />
                          <span className="ml-2 text-xs text-white/20 font-mono">playground.py</span>
                        </div>
                        <button
                          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-all"
                          style={{ background: 'rgba(0,245,160,0.1)', color: '#00F5A0', border: '1px solid rgba(0,245,160,0.2)' }}
                          onClick={() => showToast({ type: 'success', message: 'Code executed! (Connect Judge0 API for live execution)' })}
                        >
                          <Play size={12} />
                          Run
                        </button>
                      </div>
                      <textarea
                        value={userCode || lesson.code}
                        onChange={(e) => setUserCode(e.target.value)}
                        className="w-full p-4 font-mono text-sm text-white/80 bg-transparent resize-none outline-none leading-relaxed"
                        rows={12}
                        spellCheck={false}
                      />
                    </div>

                    <div className="rounded-xl p-4"
                      style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <p className="text-xs text-white/30 mb-2 uppercase tracking-wider">Output</p>
                      <pre className="text-circuit-400 font-mono text-sm">{lesson.output}</pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar: AI Mentor */}
          <div className="lg:col-span-1">
            <AIMentorPanel topic={lesson.title} />
          </div>
        </div>
      </div>
    </div>
  )
}

function AIMentorPanel({ topic }: { topic: string }) {
  const [message, setMessage] = useState('')
  const [chat, setChat] = useState([
    { role: 'ai', text: `Hi! I'm your AI mentor. I'm here to help you understand "${topic}". Ask me anything!` },
  ])

  function sendMessage() {
    if (!message.trim()) return
    const userMsg = message
    setMessage('')
    setChat((prev) => [...prev, { role: 'user', text: userMsg }])

    // Simulated response — replace with real AI API call
    setTimeout(() => {
      setChat((prev) => [
        ...prev,
        {
          role: 'ai',
          text: `Great question about "${userMsg}"! In the context of ${topic}, this is important because... (Connect to Claude API for real AI responses)`,
        },
      ])
    }, 1000)
  }

  return (
    <div className="card-void rounded-2xl overflow-hidden h-[500px] flex flex-col"
      style={{ border: '1px solid rgba(124,110,250,0.2)' }}>
      <div className="px-4 py-3 border-b border-white/5 flex items-center gap-2">
        <div className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #7C6EFA, #00D2FF)' }}>
          <Brain size={14} className="text-white" />
        </div>
        <div>
          <div className="text-sm font-medium text-white">AI Mentor</div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-circuit-400 animate-pulse" />
            <span className="text-xs text-white/40">Online</span>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {chat.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className="max-w-[85%] px-3 py-2 rounded-xl text-sm leading-relaxed"
              style={
                msg.role === 'ai'
                  ? { background: 'rgba(124,110,250,0.1)', border: '1px solid rgba(124,110,250,0.2)', color: 'rgba(255,255,255,0.8)' }
                  : { background: 'rgba(0,210,255,0.1)', border: '1px solid rgba(0,210,255,0.2)', color: 'rgba(255,255,255,0.8)' }
              }
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-white/5">
        <div className="flex gap-2">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Ask anything..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-plasma-400/50 transition-colors"
          />
          <button
            onClick={sendMessage}
            className="btn-plasma px-3 py-2 text-sm"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
