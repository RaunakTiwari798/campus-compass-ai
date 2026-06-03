import { useState } from 'react'
import { Cpu, Brain, Play, ChevronRight, CheckCircle, Zap, BarChart3, BookOpen, Code2 } from 'lucide-react'
import { useUserStore } from '@/stores/userStore'
import { showToast } from '@/components/ui/Toaster'

const DSA_TOPICS = [
  { id: 'arrays', name: 'Arrays', icon: '▦', color: '#00D2FF', difficulty: 'Beginner', xp: 200 },
  { id: 'strings', name: 'Strings', icon: '"A"', color: '#7C6EFA', difficulty: 'Beginner', xp: 200 },
  { id: 'searching', name: 'Searching', icon: '⌕', color: '#00F5A0', difficulty: 'Beginner', xp: 250 },
  { id: 'sorting', name: 'Sorting', icon: '↕', color: '#FFB347', difficulty: 'Intermediate', xp: 300 },
  { id: 'recursion', name: 'Recursion', icon: '⟳', color: '#FF6B6B', difficulty: 'Intermediate', xp: 350 },
  { id: 'linked-list', name: 'Linked List', icon: '○→○', color: '#7C6EFA', difficulty: 'Intermediate', xp: 350 },
  { id: 'stack', name: 'Stack', icon: '⊡', color: '#00D2FF', difficulty: 'Intermediate', xp: 300 },
  { id: 'trees', name: 'Trees', icon: '⑂', color: '#00F5A0', difficulty: 'Advanced', xp: 500 },
  { id: 'graphs', name: 'Graphs', icon: '◇', color: '#FFB347', difficulty: 'Advanced', xp: 600 },
]

const ARRAYS_CONTENT = {
  concept: `An array is a collection of elements stored at contiguous memory locations. Arrays are the simplest and most widely used data structure.

Key properties:
• Fixed size (in most languages)
• Elements accessed by index (0-based)
• O(1) access time by index
• O(n) search time (unsorted)`,

  visualizerSteps: [
    { label: 'Initial Array', array: [5, 12, 3, 8, 1, 9], highlight: [], description: 'We have an array of 6 integers.' },
    { label: 'Access arr[2]', array: [5, 12, 3, 8, 1, 9], highlight: [2], description: 'Accessing index 2 → value is 3. O(1) time.' },
    { label: 'Traverse', array: [5, 12, 3, 8, 1, 9], highlight: [0, 1, 2, 3, 4, 5], description: 'Traversing the entire array. O(n) time.' },
    { label: 'Insert at end', array: [5, 12, 3, 8, 1, 9, 7], highlight: [6], description: 'Inserted 7 at the end. O(1) amortized.' },
  ],

  dryRun: {
    problem: 'Find the maximum element in an array',
    code: `def find_max(arr):
    max_val = arr[0]     # Start with first
    
    for i in range(1, len(arr)):
        if arr[i] > max_val:
            max_val = arr[i]  # Update max
    
    return max_val

arr = [3, 7, 1, 9, 4]
print(find_max(arr))  # Output: 9`,
    steps: [
      { line: 1, vars: { max_val: 3, i: '—' }, desc: 'Initialize max_val with first element (3)' },
      { line: 3, vars: { max_val: 3, i: 1 }, desc: 'Check arr[1]=7 > max_val=3? YES → update' },
      { line: 3, vars: { max_val: 7, i: 2 }, desc: 'Check arr[2]=1 > max_val=7? NO → skip' },
      { line: 3, vars: { max_val: 7, i: 3 }, desc: 'Check arr[3]=9 > max_val=7? YES → update' },
      { line: 3, vars: { max_val: 9, i: 4 }, desc: 'Check arr[4]=4 > max_val=9? NO → skip' },
      { line: 6, vars: { max_val: 9, i: 4 }, desc: 'Return 9. Correct!' },
    ],
  },

  quiz: [
    {
      q: 'What is the time complexity of accessing an array element by index?',
      options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
      correct: 2,
    },
    {
      q: 'In a 0-indexed array of size 5, what is the last valid index?',
      options: ['4', '5', '6', '3'],
      correct: 0,
    },
    {
      q: 'What is the time complexity of searching for an element in an unsorted array?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
      correct: 2,
    },
  ],

  challenge: {
    title: 'Two Sum Problem',
    difficulty: 'Easy',
    description: 'Given an array of integers and a target sum, return the indices of two numbers that add up to the target.',
    example: 'Input: arr = [2, 7, 11, 15], target = 9\nOutput: [0, 1] (because arr[0] + arr[1] = 2 + 7 = 9)',
    starterCode: `def two_sum(arr, target):
    # Your solution here
    # Hint: Consider using a hash map for O(n) solution
    pass

# Test cases
print(two_sum([2, 7, 11, 15], 9))   # Expected: [0, 1]
print(two_sum([3, 2, 4], 6))        # Expected: [1, 2]`,
    xp: 150,
  },
}

type DSATab = 'learn' | 'visualizer' | 'dryrun' | 'quiz' | 'challenge'

export function DSAAcademy() {
  const [selectedTopic, setSelectedTopic] = useState('arrays')
  const [activeTab, setActiveTab] = useState<DSATab>('learn')
  const [vizStep, setVizStep] = useState(0)
  const [dryRunStep, setDryRunStep] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<(number | null)[]>([null, null, null])
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [challengeCode, setChallengeCode] = useState(ARRAYS_CONTENT.challenge.starterCode)
  const { dsaProgress, updateDSAProgress, addXP } = useUserStore()

  const content = ARRAYS_CONTENT // In production, load based on selectedTopic
  const topicProgress = dsaProgress[selectedTopic] || 0

  function submitQuiz() {
    setQuizSubmitted(true)
    const correct = quizAnswers.filter((a, i) => a === content.quiz[i].correct).length
    const xpEarned = correct * 75
    addXP(xpEarned)
    updateDSAProgress(selectedTopic, Math.max(topicProgress, Math.round((correct / content.quiz.length) * 100)))
    showToast({ type: 'xp', message: `${correct}/${content.quiz.length} correct!`, xpAmount: xpEarned })
  }

  const TABS: { id: DSATab; label: string; icon: React.ElementType }[] = [
    { id: 'learn', label: 'Learn', icon: BookOpen },
    { id: 'visualizer', label: 'Visualizer', icon: BarChart3 },
    { id: 'dryrun', label: 'Dry Run', icon: Play },
    { id: 'quiz', label: 'Quiz', icon: Brain },
    { id: 'challenge', label: 'Challenge', icon: Code2 },
  ]

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: 'rgba(124,110,250,0.15)', border: '1px solid rgba(124,110,250,0.25)' }}>
            <Cpu size={24} className="text-plasma-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">DSA Academy</h1>
            <p className="text-white/40 text-sm">Master Data Structures & Algorithms</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Topic Sidebar */}
          <div className="lg:col-span-1">
            <div className="card-void rounded-2xl p-4">
              <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">Topics</h3>
              <div className="space-y-1.5">
                {DSA_TOPICS.map((topic) => {
                  const prog = dsaProgress[topic.id] || 0
                  return (
                    <button
                      key={topic.id}
                      onClick={() => { setSelectedTopic(topic.id); setActiveTab('learn'); setQuizSubmitted(false); setQuizAnswers([null, null, null]) }}
                      className="w-full text-left px-3 py-2.5 rounded-xl transition-all duration-200 group"
                      style={{
                        background: selectedTopic === topic.id ? `${topic.color}15` : 'transparent',
                        border: `1px solid ${selectedTopic === topic.id ? `${topic.color}35` : 'transparent'}`,
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base w-6 text-center" style={{ color: topic.color }}>{topic.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-white truncate">{topic.name}</div>
                          <div className="text-xs text-white/30">{topic.difficulty}</div>
                        </div>
                        {prog > 0 && (
                          <div className="text-xs font-semibold" style={{ color: topic.color }}>{prog}%</div>
                        )}
                      </div>
                      {prog > 0 && (
                        <div className="h-0.5 bg-white/5 rounded-full mt-2 overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${prog}%`, background: topic.color }} />
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="card-void rounded-2xl overflow-hidden">
              {/* Topic header */}
              <div className="px-6 pt-5 pb-0">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-white">
                    {DSA_TOPICS.find((t) => t.id === selectedTopic)?.name || 'Arrays'}
                  </h2>
                  <div className="xp-badge">
                    <Zap size={11} />
                    {DSA_TOPICS.find((t) => t.id === selectedTopic)?.xp} XP
                  </div>
                </div>

                {/* Tab navigation */}
                <div className="flex gap-1 overflow-x-auto">
                  {TABS.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className="shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-t-lg text-xs font-medium transition-all"
                      style={{
                        background: activeTab === tab.id ? 'rgba(124,110,250,0.15)' : 'transparent',
                        color: activeTab === tab.id ? '#7C6EFA' : 'rgba(255,255,255,0.4)',
                        borderBottom: activeTab === tab.id ? '2px solid #7C6EFA' : '2px solid transparent',
                      }}
                    >
                      <tab.icon size={13} />
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6">
                {/* ── LEARN ── */}
                {activeTab === 'learn' && (
                  <div className="space-y-5">
                    <div className="p-5 rounded-xl"
                      style={{ background: 'rgba(124,110,250,0.05)', border: '1px solid rgba(124,110,250,0.15)' }}>
                      <pre className="text-white/70 text-sm leading-relaxed whitespace-pre-wrap font-sans">
                        {content.concept}
                      </pre>
                    </div>
                    <button onClick={() => setActiveTab('visualizer')} className="btn-plasma w-full flex items-center justify-center gap-2">
                      See Visualization <ChevronRight size={16} />
                    </button>
                  </div>
                )}

                {/* ── VISUALIZER ── */}
                {activeTab === 'visualizer' && (
                  <div className="space-y-5">
                    <div className="p-5 rounded-xl" style={{ background: 'rgba(0,0,0,0.3)' }}>
                      <div className="flex gap-3 justify-center mb-6 flex-wrap">
                        {content.visualizerSteps[vizStep].array.map((val, i) => (
                          <div key={i} className="flex flex-col items-center gap-1">
                            <div
                              className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-300"
                              style={{
                                background: content.visualizerSteps[vizStep].highlight.includes(i)
                                  ? 'rgba(124,110,250,0.4)'
                                  : 'rgba(255,255,255,0.06)',
                                border: `2px solid ${content.visualizerSteps[vizStep].highlight.includes(i) ? '#7C6EFA' : 'rgba(255,255,255,0.08)'}`,
                                color: content.visualizerSteps[vizStep].highlight.includes(i) ? '#7C6EFA' : 'rgba(255,255,255,0.7)',
                                transform: content.visualizerSteps[vizStep].highlight.includes(i) ? 'scale(1.1)' : 'scale(1)',
                              }}
                            >
                              {val}
                            </div>
                            <span className="text-xs text-white/30">[{i}]</span>
                          </div>
                        ))}
                      </div>

                      <div className="text-center">
                        <div className="text-sm font-semibold text-plasma-400 mb-1">
                          {content.visualizerSteps[vizStep].label}
                        </div>
                        <p className="text-sm text-white/50">{content.visualizerSteps[vizStep].description}</p>
                      </div>
                    </div>

                    {/* Step controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setVizStep(Math.max(0, vizStep - 1))}
                        disabled={vizStep === 0}
                        className="btn-outline-plasma px-4 py-2 text-sm disabled:opacity-30"
                      >
                        ← Prev
                      </button>

                      <div className="flex-1 flex gap-2 justify-center">
                        {content.visualizerSteps.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setVizStep(i)}
                            className="w-2.5 h-2.5 rounded-full transition-all"
                            style={{ background: i === vizStep ? '#7C6EFA' : 'rgba(255,255,255,0.15)' }}
                          />
                        ))}
                      </div>

                      <button
                        onClick={() => setVizStep(Math.min(content.visualizerSteps.length - 1, vizStep + 1))}
                        disabled={vizStep === content.visualizerSteps.length - 1}
                        className="btn-plasma px-4 py-2 text-sm disabled:opacity-30"
                      >
                        Next →
                      </button>
                    </div>
                  </div>
                )}

                {/* ── DRY RUN ── */}
                {activeTab === 'dryrun' && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-white">{content.dryRun.problem}</h3>

                    {/* Code with line highlight */}
                    <div className="rounded-xl overflow-hidden" style={{ background: '#050510', border: '1px solid rgba(255,255,255,0.06)' }}>
                      {content.dryRun.code.split('\n').map((line, i) => {
                        const isActive = content.dryRun.steps[dryRunStep]?.line === i
                        return (
                          <div key={i} className="flex items-start gap-3 px-4 py-0.5 transition-colors"
                            style={{ background: isActive ? 'rgba(124,110,250,0.15)' : 'transparent' }}>
                            <span className="text-xs text-white/20 font-mono w-4 mt-1 shrink-0">{i}</span>
                            <pre className="text-sm font-mono text-white/75 leading-relaxed">{line || ' '}</pre>
                            {isActive && (
                              <span className="text-xs text-plasma-400 ml-auto shrink-0 mt-1">← here</span>
                            )}
                          </div>
                        )
                      })}
                    </div>

                    {/* Current step info */}
                    <div className="p-4 rounded-xl" style={{ background: 'rgba(0,210,255,0.05)', border: '1px solid rgba(0,210,255,0.15)' }}>
                      <div className="text-xs text-nova-400 uppercase tracking-wider mb-2">Step {dryRunStep + 1} — Variables</div>
                      <div className="flex gap-4 flex-wrap mb-3">
                        {Object.entries(content.dryRun.steps[dryRunStep]?.vars || {}).map(([k, v]) => (
                          <div key={k} className="font-mono text-sm">
                            <span className="text-plasma-400">{k}</span>
                            <span className="text-white/40"> = </span>
                            <span className="text-nova-400">{String(v)}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-white/60">{content.dryRun.steps[dryRunStep]?.desc}</p>
                    </div>

                    <div className="flex gap-3">
                      <button onClick={() => setDryRunStep(Math.max(0, dryRunStep - 1))} disabled={dryRunStep === 0}
                        className="btn-outline-plasma px-4 py-2 text-sm flex-1 disabled:opacity-30">← Prev Step</button>
                      <button onClick={() => setDryRunStep(Math.min(content.dryRun.steps.length - 1, dryRunStep + 1))}
                        disabled={dryRunStep === content.dryRun.steps.length - 1}
                        className="btn-plasma px-4 py-2 text-sm flex-1 disabled:opacity-30">Next Step →</button>
                    </div>
                  </div>
                )}

                {/* ── QUIZ ── */}
                {activeTab === 'quiz' && (
                  <div className="space-y-6">
                    {content.quiz.map((q, qi) => (
                      <div key={qi}>
                        <p className="font-medium text-white mb-3">
                          <span className="text-plasma-400 mr-2">Q{qi + 1}.</span>{q.q}
                        </p>
                        <div className="space-y-2">
                          {q.options.map((opt, oi) => {
                            let style: React.CSSProperties = { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.65)' }
                            if (quizSubmitted) {
                              if (oi === q.correct) style = { background: 'rgba(0,245,160,0.1)', border: '1px solid rgba(0,245,160,0.35)', color: '#00F5A0' }
                              else if (oi === quizAnswers[qi] && oi !== q.correct) style = { background: 'rgba(255,107,107,0.08)', border: '1px solid rgba(255,107,107,0.35)', color: '#FF6B6B' }
                            } else if (quizAnswers[qi] === oi) {
                              style = { background: 'rgba(124,110,250,0.12)', border: '1px solid rgba(124,110,250,0.4)', color: '#7C6EFA' }
                            }
                            return (
                              <button key={oi} disabled={quizSubmitted}
                                onClick={() => { const a = [...quizAnswers]; a[qi] = oi; setQuizAnswers(a) }}
                                className="w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-150 disabled:cursor-default"
                                style={style}>
                                {quizSubmitted && oi === q.correct && <CheckCircle size={13} className="inline mr-2" />}
                                {opt}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                    {!quizSubmitted ? (
                      <button onClick={submitQuiz} disabled={quizAnswers.includes(null)} className="btn-plasma w-full disabled:opacity-40">
                        Submit Quiz
                      </button>
                    ) : (
                      <div className="text-center">
                        <p className="text-circuit-400 font-semibold mb-3">
                          {quizAnswers.filter((a, i) => a === content.quiz[i].correct).length}/{content.quiz.length} Correct!
                        </p>
                        <button onClick={() => setActiveTab('challenge')} className="btn-plasma flex items-center gap-2 mx-auto">
                          Try the Challenge <ChevronRight size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* ── CHALLENGE ── */}
                {activeTab === 'challenge' && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-white text-lg">{content.challenge.title}</h3>
                      <span className="text-xs px-2 py-1 rounded-full"
                        style={{ background: 'rgba(0,245,160,0.1)', color: '#00F5A0', border: '1px solid rgba(0,245,160,0.2)' }}>
                        {content.challenge.difficulty}
                      </span>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">{content.challenge.description}</p>
                    <div className="p-4 rounded-xl font-mono text-sm" style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="text-xs text-white/30 mb-2">Example</div>
                      <pre className="text-white/60 whitespace-pre-wrap">{content.challenge.example}</pre>
                    </div>

                    <div className="rounded-xl overflow-hidden" style={{ background: '#050510', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                        <span className="text-xs text-white/30 font-mono">solution.py</span>
                        <button
                          onClick={() => showToast({ type: 'success', message: 'Solution submitted! (Connect Judge0 API)' })}
                          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg"
                          style={{ background: 'rgba(0,245,160,0.1)', color: '#00F5A0', border: '1px solid rgba(0,245,160,0.2)' }}
                        >
                          <Play size={12} /> Run & Submit
                        </button>
                      </div>
                      <textarea
                        value={challengeCode}
                        onChange={(e) => setChallengeCode(e.target.value)}
                        className="w-full p-4 font-mono text-sm text-white/80 bg-transparent resize-none outline-none leading-relaxed"
                        rows={12}
                        spellCheck={false}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* AI Mentor Sidebar */}
          <div className="lg:col-span-1">
            <DSAAIMentor topic={DSA_TOPICS.find((t) => t.id === selectedTopic)?.name || 'Arrays'} />
            
            {/* XP progress */}
            <div className="card-void rounded-2xl p-4 mt-4">
              <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Topic Progress</h3>
              {DSA_TOPICS.slice(0, 5).map((t) => {
                const p = dsaProgress[t.id] || 0
                return (
                  <div key={t.id} className="mb-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white/50">{t.name}</span>
                      <span style={{ color: t.color }}>{p}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-500" style={{ width: `${p}%`, background: t.color }} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DSAAIMentor({ topic }: { topic: string }) {
  const [messages, setMessages] = useState([
    { role: 'ai', text: `I'm your DSA mentor! Currently helping with **${topic}**. Ask me anything — I'll guide you without giving away the answer directly.` },
  ])
  const [input, setInput] = useState('')

  const hints = [
    'Give me a hint',
    'Explain time complexity',
    'What pattern should I use?',
    'Show me an approach',
  ]

  function sendMessage(text: string) {
    if (!text.trim()) return
    setMessages((prev) => [...prev, { role: 'user', text }])
    setInput('')
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          text: `For "${text}", think about it this way: in ${topic}, the key insight is usually about how you traverse or access the data. Try thinking about the problem from a different angle first. What approach have you considered so far? (Connect to Claude API for intelligent responses)`,
        },
      ])
    }, 800)
  }

  return (
    <div className="card-void rounded-2xl overflow-hidden flex flex-col"
      style={{ height: '420px', border: '1px solid rgba(124,110,250,0.2)' }}>
      <div className="px-4 py-3 border-b border-white/5 flex items-center gap-2">
        <div className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #7C6EFA, #00D2FF)' }}>
          <Brain size={14} className="text-white" />
        </div>
        <div>
          <div className="text-sm font-medium text-white">DSA Mentor</div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-circuit-400 animate-pulse" />
            <span className="text-xs text-white/40">Analyzing your progress</span>
          </div>
        </div>
      </div>

      <div className="flex-1 p-3 overflow-y-auto space-y-3 text-sm">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className="max-w-[90%] px-3 py-2 rounded-xl leading-relaxed text-xs"
              style={m.role === 'ai'
                ? { background: 'rgba(124,110,250,0.1)', border: '1px solid rgba(124,110,250,0.15)', color: 'rgba(255,255,255,0.75)' }
                : { background: 'rgba(0,210,255,0.1)', border: '1px solid rgba(0,210,255,0.15)', color: 'rgba(255,255,255,0.75)' }
              }>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Quick hint pills */}
      <div className="px-3 pb-2 flex gap-1.5 flex-wrap">
        {hints.map((h) => (
          <button key={h} onClick={() => sendMessage(h)}
            className="text-xs px-2 py-1 rounded-full transition-all"
            style={{ background: 'rgba(124,110,250,0.08)', color: 'rgba(124,110,250,0.7)', border: '1px solid rgba(124,110,250,0.15)' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(124,110,250,0.15)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(124,110,250,0.08)' }}
          >
            {h}
          </button>
        ))}
      </div>

      <div className="p-3 border-t border-white/5">
        <div className="flex gap-2">
          <input value={input} onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
            placeholder="Ask for a hint..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-white/30 outline-none focus:border-plasma-400/50 transition-colors" />
          <button onClick={() => sendMessage(input)} className="btn-plasma px-2 py-2 text-xs">→</button>
        </div>
      </div>
    </div>
  )
}
