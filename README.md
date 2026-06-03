# Campus Compass AI

> From Beginner to Industry Ready — An AI-powered coding learning platform for students.

![Campus Compass AI](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Vite](https://img.shields.io/badge/Vite-5-yellow) ![TanStack Router](https://img.shields.io/badge/TanStack_Router-1-red)

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| TypeScript 5 | Type safety |
| Vite 5 | Build tool + dev server |
| TanStack Router | File-based routing |
| Zustand | State management (XP, progress) |
| Tailwind CSS 3 | Utility-first styling |
| Framer Motion | Animations |
| Lucide React | Icons |

---

## Project Structure

```
campus-compass/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.tsx
│   │   ├── ui/
│   │   │   └── Toaster.tsx
│   │   ├── landing/
│   │   │   └── LandingPage.tsx
│   │   ├── journey/
│   │   │   ├── JourneyPage.tsx
│   │   │   ├── BeginnerPage.tsx
│   │   │   ├── AdvancedPage.tsx
│   │   │   ├── ProPage.tsx
│   │   │   └── GSoCHub.tsx
│   │   ├── python/
│   │   │   └── PythonLearning.tsx
│   │   ├── github/
│   │   │   └── GitHubMissions.tsx
│   │   └── dsa/
│   │       └── DSAAcademy.tsx
│   ├── routes/
│   │   ├── __root.tsx
│   │   ├── index.tsx
│   │   ├── journey.tsx
│   │   ├── beginner.tsx
│   │   ├── beginner/
│   │   │   ├── python.tsx
│   │   │   └── github.tsx
│   │   ├── advanced.tsx
│   │   ├── advanced/
│   │   │   └── dsa.tsx
│   │   ├── pro.tsx
│   │   └── pro/
│   │       └── gsoc.tsx
│   ├── stores/
│   │   └── userStore.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── styles/
│   │   └── globals.css
│   ├── routeTree.gen.ts
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── .gitignore
```

---

## Local Development

### 1. Install dependencies
```bash
npm install
```

### 2. Start dev server
```bash
npm run dev
```

Open http://localhost:5173

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

---

## Deploy to Vercel

### Option A — Vercel CLI (fastest)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (first time)
vercel

# Deploy to production
vercel --prod
```

### Option B — GitHub + Vercel Dashboard

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "initial commit: campus compass ai"
git remote add origin https://github.com/YOUR_USERNAME/campus-compass-ai.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click **New Project**
4. Import your GitHub repository
5. Settings:
   - Framework: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click **Deploy**

The `vercel.json` file is already configured to handle SPA routing correctly.

---

## Push to GitHub

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# First commit
git commit -m "feat: initial campus compass ai setup"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/campus-compass-ai.git
git branch -M main
git push -u origin main

# Future pushes
git add .
git commit -m "your message"
git push
```

---

## Routes

| Path | Page |
|------|------|
| `/` | Landing page |
| `/journey` | Path selection (Beginner/Advanced/Pro) |
| `/beginner` | Beginner dashboard |
| `/beginner/python` | Python learning + quiz + code editor |
| `/beginner/github` | GitHub missions |
| `/advanced` | Advanced dashboard |
| `/advanced/dsa` | DSA Academy (visualizer, dry-run, quiz, challenge) |
| `/pro` | Pro dashboard |
| `/pro/gsoc` | GSoC preparation hub |

---

## Feature Roadmap

### MVP (Current)
- [x] Landing page with animated hero
- [x] Journey path selection
- [x] Python learning (5 lessons, quiz, code editor)
- [x] GitHub missions (5 missions, step-by-step)
- [x] DSA Academy (Arrays with visualizer, dry-run, quiz, challenge)
- [x] AI Mentor chat panel
- [x] XP system with Zustand + localStorage persistence
- [x] Level progression
- [x] Streak tracking
- [x] Toast notifications

### Version 2
- [ ] Judge0 API integration (live code execution)
- [ ] Claude API integration (real AI mentor)
- [ ] All 9 DSA topics fully implemented
- [ ] User authentication (Clerk or Supabase)
- [ ] Leaderboard
- [ ] Badge system
- [ ] Mobile app (React Native)

---

## Connect Real AI

Replace the simulated AI responses in `PythonLearning.tsx` and `DSAAcademy.tsx` with real Claude API calls:

```typescript
const response = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': import.meta.env.VITE_ANTHROPIC_KEY,
    'anthropic-version': '2023-06-01',
  },
  body: JSON.stringify({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 500,
    system: 'You are a coding mentor. Guide students without directly giving answers.',
    messages: [{ role: 'user', content: userMessage }],
  }),
})
```

Add to `.env`:
```
VITE_ANTHROPIC_KEY=your_key_here
```

---

Built with ❤️ for students who want to become great engineers.
