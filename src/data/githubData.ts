// ─── Types ────────────────────────────────────────────────────────────────────

export interface GitHubMission {
  id: string
  number: number
  title: string
  description: string
  category: 'Setup' | 'Basics' | 'Collaboration' | 'Advanced' | 'OpenSource'
  instructions: string[]
  tip: string
  externalUrl?: string
  xp: number
  color: string
  commands?: string[]
}

export interface GSoCTask {
  id: string
  title: string
  description: string
  timeframe: string
  resources: string[]
}

// ─── GitHub Missions ─────────────────────────────────────────────────────────

export const GITHUB_MISSIONS: GitHubMission[] = [
  {
    id: 'gh-01',
    number: 1,
    title: 'Create Your GitHub Account',
    description: 'Your GitHub profile is your coding resume — every employer will look at it.',
    category: 'Setup',
    instructions: [
      'Go to github.com and click "Sign up"',
      'Choose a professional username (e.g., firstname-lastname or firstnamelastname)',
      'Use your real email address — this is your professional identity',
      'Verify your email address',
      'Set a professional profile picture (a real photo is best)',
      'Write a short bio: "CS Student | Python | Building cool projects"',
      'Add your city/country and a link to your portfolio if you have one',
    ],
    tip: 'Your GitHub username will appear on your resume and in Pull Requests. Choose something professional — you can\'t easily change it later.',
    externalUrl: 'https://github.com/signup',
    xp: 100,
    color: '#7C6EFA',
  },
  {
    id: 'gh-02',
    number: 2,
    title: 'Create Your First Repository',
    description: 'A repository (repo) is a project folder that GitHub manages with full version history.',
    category: 'Basics',
    instructions: [
      'Click the "+" button in the top right of GitHub',
      'Select "New repository"',
      'Name it "hello-world" (lowercase, hyphens for spaces)',
      'Add a description: "My first GitHub repository"',
      'Choose "Public" (private repos don\'t help your profile)',
      'Check "Add a README file"',
      'Choose a .gitignore template (Python if you\'re using Python)',
      'Click "Create repository"',
    ],
    tip: 'The README.md is the first thing visitors see. It\'s in Markdown format — learn the basics at markdownguide.org.',
    externalUrl: 'https://github.com/new',
    xp: 100,
    color: '#00D2FF',
    commands: [],
  },
  {
    id: 'gh-03',
    number: 3,
    title: 'Install Git & Make Your First Commit',
    description: 'Git is the version control system. GitHub hosts your Git repositories online.',
    category: 'Basics',
    instructions: [
      'Download and install Git from git-scm.com',
      'Open your terminal (Git Bash on Windows)',
      'Configure your identity:\n  git config --global user.name "Your Name"\n  git config --global user.email "you@email.com"',
      'Create a folder for your project: mkdir my-project && cd my-project',
      'Initialize Git: git init',
      'Create a file: echo "# My Project" > README.md',
      'Stage the file: git add README.md',
      'Commit: git commit -m "Initial commit: add README"',
    ],
    tip: 'Write meaningful commit messages! "Fixed bug" is bad. "Fix login page crash when email is empty" is good. Future you will thank present you.',
    xp: 150,
    color: '#00F5A0',
    commands: [
      'git config --global user.name "Your Name"',
      'git config --global user.email "you@email.com"',
      'git init',
      'git add .',
      'git commit -m "Initial commit"',
    ],
  },
  {
    id: 'gh-04',
    number: 4,
    title: 'Push to GitHub (Remote)',
    description: 'Connect your local Git repo to GitHub and push your code to the cloud.',
    category: 'Basics',
    instructions: [
      'Create a new repo on GitHub (do NOT initialize with README this time)',
      'Copy the repository URL (HTTPS or SSH)',
      'In your local project terminal, run:',
      '  git remote add origin https://github.com/USERNAME/REPO.git',
      '  git branch -M main',
      '  git push -u origin main',
      'Refresh your GitHub repo page — your code should appear!',
      'Future pushes only need: git push',
    ],
    tip: 'SSH is more convenient than HTTPS for frequent pushers. Follow GitHub\'s SSH key guide to set it up once and never type your password again.',
    xp: 150,
    color: '#FFB347',
    commands: [
      'git remote add origin https://github.com/USERNAME/REPO.git',
      'git branch -M main',
      'git push -u origin main',
      '# Future pushes:',
      'git push',
    ],
  },
  {
    id: 'gh-05',
    number: 5,
    title: 'Branches — Work Without Breaking Things',
    description: 'Branches let you develop features in isolation, then merge them when ready.',
    category: 'Collaboration',
    instructions: [
      'Create a new branch: git checkout -b feature/add-about-page',
      'Make some changes (edit a file)',
      'Stage and commit: git add . && git commit -m "Add about page"',
      'Push the branch: git push origin feature/add-about-page',
      'On GitHub, click "Compare & pull request"',
      'Add a description of your changes',
      'Click "Create pull request"',
      'Click "Merge pull request" then "Confirm merge"',
      'Pull the changes locally: git pull origin main',
    ],
    tip: 'Always create a new branch for each feature or fix. NEVER commit directly to main/master on a team project. Branch names should describe what you\'re working on.',
    xp: 200,
    color: '#FF6B6B',
    commands: [
      'git checkout -b feature/your-feature-name',
      'git add .',
      'git commit -m "Describe what you changed"',
      'git push origin feature/your-feature-name',
      '# Then create PR on GitHub',
    ],
  },
  {
    id: 'gh-06',
    number: 6,
    title: 'Fork a Repository',
    description: 'Forking copies someone else\'s repo to your account — the foundation of open source.',
    category: 'OpenSource',
    instructions: [
      'Go to any public GitHub repository (try: github.com/public-apis/public-apis)',
      'Click the "Fork" button in the top right',
      'Choose your account as the destination',
      'Clone YOUR fork locally:\n  git clone https://github.com/YOUR_USERNAME/REPO.git',
      'Make a small improvement (fix a typo, improve README)',
      'Commit and push to YOUR fork',
      'Open a Pull Request from your fork to the original repo',
    ],
    tip: 'When contributing to open source, always fork first, then clone YOUR fork. Never clone the original directly — you won\'t have push access.',
    xp: 200,
    color: '#7C6EFA',
    commands: [
      'git clone https://github.com/YOUR_USERNAME/FORKED_REPO.git',
      'cd FORKED_REPO',
      'git remote add upstream https://github.com/ORIGINAL/REPO.git',
      'git fetch upstream',
      'git merge upstream/main',
    ],
  },
  {
    id: 'gh-07',
    number: 7,
    title: 'Write a Professional README',
    description: 'Your README is your project\'s front page. Make it count.',
    category: 'Basics',
    instructions: [
      'Open your repo and click the README.md file',
      'Click the pencil icon to edit',
      'Add these sections:\n  # Project Name\n  Short description\n  ## Features\n  ## Installation\n  ## Usage\n  ## Contributing\n  ## License',
      'Add a badge (shields.io has free badges)',
      'Add a screenshot or demo GIF if possible',
      'Preview your changes with the "Preview" tab',
      'Commit when satisfied',
    ],
    tip: 'A great README answers: What does this do? How do I run it? How do I contribute? Projects with good READMEs get significantly more stars and contributions.',
    xp: 150,
    color: '#00D2FF',
  },
  {
    id: 'gh-08',
    number: 8,
    title: 'GitHub Actions — Automate Your Workflow',
    description: 'GitHub Actions automates testing, building, and deployment when you push code.',
    category: 'Advanced',
    instructions: [
      'In your repo, click "Actions" tab',
      'Click "New workflow" → choose "Python application" if applicable',
      'GitHub creates .github/workflows/python-app.yml',
      'This workflow will automatically run your tests on every push',
      'Commit the workflow file',
      'Push some code and watch the Actions tab',
      'A green checkmark means all tests pass ✓',
    ],
    tip: 'GitHub Actions is free for public repos. Every serious project uses CI/CD (Continuous Integration). Having a green badge on your README signals project quality.',
    xp: 250,
    color: '#00F5A0',
  },
  {
    id: 'gh-09',
    number: 9,
    title: 'Open Your First Issue',
    description: 'Issues track bugs, features, and tasks. Learn to write effective issues.',
    category: 'Collaboration',
    instructions: [
      'Go to any of your repos',
      'Click the "Issues" tab',
      'Click "New issue"',
      'Write a clear title: "Add dark mode support" (not "Dark mode")',
      'In the body, add:\n  - What problem does this solve?\n  - What would the ideal solution look like?\n  - Any relevant screenshots or code',
      'Add labels (enhancement, bug, documentation)',
      'Assign it to yourself',
      'Submit the issue',
    ],
    tip: 'When reporting bugs, always include: what you expected to happen, what actually happened, and steps to reproduce. This is how professionals communicate.',
    xp: 150,
    color: '#FFB347',
  },
  {
    id: 'gh-10',
    number: 10,
    title: 'Contribute to a Real Open Source Project',
    description: 'Your first real open source contribution — the achievement every developer remembers.',
    category: 'OpenSource',
    instructions: [
      'Visit goodfirstissue.dev or github.com/explore',
      'Find a project you use or find interesting',
      'Filter issues by "good first issue" label',
      'Read the CONTRIBUTING.md file first',
      'Comment "I\'d like to work on this" on the issue',
      'Fork → branch → code → commit → push → PR',
      'Respond to review feedback professionally',
      'Celebrate when your PR is merged! 🎉',
    ],
    tip: 'Start with documentation or small bug fixes. Don\'t jump straight to features. Maintainers appreciate contributors who read the contribution guide and ask questions before diving in.',
    externalUrl: 'https://goodfirstissue.dev',
    xp: 500,
    color: '#FF6B6B',
  },
]

// ─── GSoC Timeline ────────────────────────────────────────────────────────────

export const GSOC_TASKS: GSoCTask[] = [
  {
    id: 'gsoc-01',
    title: 'Explore Organizations (September–November)',
    description: 'Review last year\'s accepted organizations. Find orgs that use technologies you know.',
    timeframe: 'Sep–Nov',
    resources: ['summerofcode.withgoogle.com', 'github.com/explore'],
  },
  {
    id: 'gsoc-02',
    title: 'Set Up Development Environment (December)',
    description: 'Fork an org\'s repo, set it up locally, run the tests. Understand the project structure.',
    timeframe: 'Dec',
    resources: ['Project CONTRIBUTING.md', 'Project README'],
  },
  {
    id: 'gsoc-03',
    title: 'Fix Starter Issues (December–January)',
    description: 'Find "good first issue" or "beginner" labeled issues. Make your first contributions.',
    timeframe: 'Dec–Jan',
    resources: ['goodfirstissue.dev', 'github.com/explore/topics/good-first-issue'],
  },
  {
    id: 'gsoc-04',
    title: 'Engage with the Community (January–February)',
    description: 'Join mailing lists, IRC, Slack, or forums. Introduce yourself. Ask questions.',
    timeframe: 'Jan–Feb',
    resources: ['Project mailing list', 'Project Slack/Discord'],
  },
  {
    id: 'gsoc-05',
    title: 'Write Your Proposal (February–April)',
    description: 'A strong proposal shows deep understanding of the project and a realistic plan.',
    timeframe: 'Feb–Apr',
    resources: ['GSoC Student Guide', 'Past accepted proposals on GitHub'],
  },
  {
    id: 'gsoc-06',
    title: 'Submit Before Deadline (April)',
    description: 'Submit your proposal on the GSoC website. Submit early — technical issues happen.',
    timeframe: 'April',
    resources: ['summerofcode.withgoogle.com/get-started'],
  },
]

export function getGitHubMission(id: string): GitHubMission | undefined {
  return GITHUB_MISSIONS.find((m) => m.id === id)
}
