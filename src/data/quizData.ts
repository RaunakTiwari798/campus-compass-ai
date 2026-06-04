// ─── Types ────────────────────────────────────────────────────────────────────

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correct: number
  explanation: string
  topic: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  xp: number
}

export interface QuizSet {
  id: string
  title: string
  description: string
  topic: 'python' | 'dsa' | 'github' | 'mixed'
  questions: QuizQuestion[]
  totalXP: number
  estimatedMinutes: number
  color: string
}

// ─── Python MCQs ─────────────────────────────────────────────────────────────

export const PYTHON_QUIZ_QUESTIONS: QuizQuestion[] = [
  { id: 'pq-01', question: 'What is the output of print(type(3.14))?', options: ['<class \'int\'>', '<class \'float\'>', '<class \'double\'>', '<class \'number\'>'], correct: 1, explanation: '3.14 has a decimal point, making it a float. Python has no "double" type.', topic: 'Python Basics', difficulty: 'Easy', xp: 20 },
  { id: 'pq-02', question: 'Which is the correct way to create a list in Python?', options: ['list = (1, 2, 3)', 'list = {1, 2, 3}', 'list = [1, 2, 3]', 'list = <1, 2, 3>'], correct: 2, explanation: 'Lists use square brackets []. Parentheses () are tuples, curly {} are dicts/sets.', topic: 'Python Lists', difficulty: 'Easy', xp: 20 },
  { id: 'pq-03', question: 'What does len("hello") return?', options: ['4', '5', '6', 'Error'], correct: 1, explanation: '"hello" has 5 characters: h,e,l,l,o. len() counts all characters including spaces.', topic: 'Python Strings', difficulty: 'Easy', xp: 20 },
  { id: 'pq-04', question: 'What is the output of: x = 5; x += 3; print(x)?', options: ['5', '3', '8', '53'], correct: 2, explanation: '+= is the addition assignment operator. x += 3 is equivalent to x = x + 3, so 5 + 3 = 8.', topic: 'Python Basics', difficulty: 'Easy', xp: 20 },
  { id: 'pq-05', question: 'Which Python keyword is used to define a function?', options: ['function', 'define', 'func', 'def'], correct: 3, explanation: 'def is Python\'s keyword for function definition. Syntax: def function_name(parameters):', topic: 'Python Functions', difficulty: 'Easy', xp: 20 },
  { id: 'pq-06', question: 'What does range(5) produce?', options: ['[1,2,3,4,5]', '[0,1,2,3,4,5]', '[0,1,2,3,4]', '[1,2,3,4]'], correct: 2, explanation: 'range(n) starts at 0 and ends before n. range(5) = 0,1,2,3,4. For 1-5 you need range(1,6).', topic: 'Python Loops', difficulty: 'Easy', xp: 20 },
  { id: 'pq-07', question: 'How do you access the last element of a list in Python?', options: ['list[last]', 'list.last()', 'list[-1]', 'list[len-1]'], correct: 2, explanation: 'Python supports negative indexing. -1 is the last element, -2 is second to last, etc.', topic: 'Python Lists', difficulty: 'Easy', xp: 20 },
  { id: 'pq-08', question: 'What is the output of: "hello".upper()?', options: ['"Hello"', '"HELLO"', '"hello"', 'Error'], correct: 1, explanation: '.upper() returns a new string with all characters converted to uppercase. Strings are immutable — the original is unchanged.', topic: 'Python Strings', difficulty: 'Easy', xp: 20 },
  { id: 'pq-09', question: 'What does the "pass" statement do?', options: ['Exits the program', 'Skips one iteration', 'Does nothing (placeholder)', 'Passes a value'], correct: 2, explanation: 'pass is a null operation — it does nothing. Used as a placeholder where code is syntactically required but not yet written.', topic: 'Python Basics', difficulty: 'Easy', xp: 20 },
  { id: 'pq-10', question: 'What is a dictionary in Python?', options: ['A sorted list', 'A set of unique values', 'A collection of key-value pairs', 'A type of string'], correct: 2, explanation: 'Dictionaries store data as key-value pairs. Keys must be unique and immutable. Access values by key in O(1) average time.', topic: 'Python Dicts', difficulty: 'Easy', xp: 20 },
  { id: 'pq-11', question: 'What does list.pop() do by default?', options: ['Removes first element', 'Removes last element and returns it', 'Returns last element without removing', 'Clears the list'], correct: 1, explanation: 'pop() without arguments removes and returns the LAST element. pop(0) removes the first. pop(i) removes at index i.', topic: 'Python Lists', difficulty: 'Medium', xp: 30 },
  { id: 'pq-12', question: 'What is the output of: [x**2 for x in range(4)]?', options: ['[0,1,2,3]', '[1,4,9,16]', '[0,1,4,9]', '[1,2,3,4]'], correct: 2, explanation: 'range(4) gives 0,1,2,3. Squaring each: 0²=0, 1²=1, 2²=4, 3²=9. Result: [0,1,4,9].', topic: 'Python Advanced', difficulty: 'Medium', xp: 30 },
  { id: 'pq-13', question: 'What does "mutable" mean?', options: ['Cannot be changed after creation', 'Can be changed after creation', 'Has a fixed type', 'Is always sorted'], correct: 1, explanation: 'Mutable objects (lists, dicts, sets) can be modified in-place. Immutable objects (strings, tuples, numbers) create a new object on every change.', topic: 'Python Concepts', difficulty: 'Medium', xp: 30 },
  { id: 'pq-14', question: 'What is the correct way to open a file in Python?', options: ['open("file.txt")', 'file.open("file.txt")', 'File("file.txt")', 'read("file.txt")'], correct: 0, explanation: 'open() is a built-in function. Best practice: use with open("file.txt", "r") as f: to ensure the file is closed automatically.', topic: 'Python IO', difficulty: 'Medium', xp: 30 },
  { id: 'pq-15', question: 'What does "self" refer to in a class method?', options: ['The class itself', 'The current instance (object)', 'The parent class', 'A keyword for static methods'], correct: 1, explanation: 'self refers to the specific instance of the class the method is called on. It\'s convention (not a keyword) — you could name it anything, but never do.', topic: 'Python OOP', difficulty: 'Medium', xp: 30 },
]

// ─── DSA MCQs ─────────────────────────────────────────────────────────────────

export const DSA_QUIZ_QUESTIONS: QuizQuestion[] = [
  { id: 'dq-01', question: 'What is the time complexity of accessing an element by index in an array?', options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'], correct: 2, explanation: 'Arrays store elements at contiguous memory. CPU calculates address = base + index * size in one step. Always O(1) regardless of size.', topic: 'Arrays', difficulty: 'Easy', xp: 25 },
  { id: 'dq-02', question: 'Which data structure uses LIFO (Last In, First Out)?', options: ['Queue', 'Array', 'Stack', 'Linked List'], correct: 2, explanation: 'Stack = LIFO. Think of a stack of plates — you always add/remove from the top. Queue = FIFO.', topic: 'Stack', difficulty: 'Easy', xp: 25 },
  { id: 'dq-03', question: 'What is the average time complexity of binary search?', options: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'], correct: 2, explanation: 'Binary search halves the search space with each comparison. Starting from n: n → n/2 → n/4 → ... → 1. This takes log₂(n) steps.', topic: 'Searching', difficulty: 'Easy', xp: 25 },
  { id: 'dq-04', question: 'What is required for binary search to work?', options: ['Array must be sorted', 'Array must have unique values', 'Array must be a power of 2 in length', 'Array must start at 0'], correct: 0, explanation: 'Binary search only works on sorted data. The whole algorithm depends on knowing which half can\'t contain the target.', topic: 'Searching', difficulty: 'Easy', xp: 25 },
  { id: 'dq-05', question: 'Which sorting algorithm has worst-case O(n log n)?', options: ['Bubble Sort', 'Insertion Sort', 'Merge Sort', 'Selection Sort'], correct: 2, explanation: 'Merge Sort always performs O(n log n) regardless of input. Quick Sort is O(n log n) average but O(n²) worst case.', topic: 'Sorting', difficulty: 'Medium', xp: 35 },
  { id: 'dq-06', question: 'What is the space complexity of recursive Fibonacci?', options: ['O(1)', 'O(n)', 'O(2ⁿ)', 'O(log n)'], correct: 1, explanation: 'The recursion depth is n. At any point, only one branch of the call tree is on the stack. So space is O(n) for the call stack.', topic: 'Recursion', difficulty: 'Medium', xp: 35 },
  { id: 'dq-07', question: 'Inorder traversal of a BST gives elements in:', options: ['Random order', 'Reverse sorted order', 'Sorted order', 'Level order'], correct: 2, explanation: 'BST: left < root < right at every node. Inorder (L → Root → R) naturally visits nodes in ascending sorted order.', topic: 'Trees', difficulty: 'Medium', xp: 35 },
  { id: 'dq-08', question: 'BFS uses which data structure?', options: ['Stack', 'Queue', 'Priority Queue', 'Deque'], correct: 1, explanation: 'BFS uses a Queue (FIFO) to ensure nodes are visited level by level. DFS uses a Stack (or recursion).', topic: 'Graphs', difficulty: 'Easy', xp: 25 },
  { id: 'dq-09', question: 'What is the worst-case insertion time for a linked list at the head?', options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'], correct: 2, explanation: 'Inserting at the head: create node, set node.next = head, update head = node. Only 3 operations regardless of list size. Always O(1).', topic: 'Linked List', difficulty: 'Easy', xp: 25 },
  { id: 'dq-10', question: 'What does "stable" mean in sorting algorithms?', options: ['Always O(n log n)', 'Equal elements maintain original order', 'Sorts in-place', 'Uses constant space'], correct: 1, explanation: 'A stable sort preserves the relative order of equal elements. Important when sorting by multiple keys. Merge Sort is stable; Quick Sort typically is not.', topic: 'Sorting', difficulty: 'Medium', xp: 35 },
  { id: 'dq-11', question: 'The height of a balanced binary tree with n nodes is:', options: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'], correct: 2, explanation: 'A balanced tree has each level half-full. With n nodes, the number of levels is log₂(n). This is why balanced BST ops are O(log n).', topic: 'Trees', difficulty: 'Medium', xp: 35 },
  { id: 'dq-12', question: 'Which traversal is best for deleting a tree?', options: ['Preorder', 'Inorder', 'Postorder', 'BFS'], correct: 2, explanation: 'Postorder (L → R → Root) processes children before parent. Deleting in this order means a node is only deleted after all its children, preventing orphaned nodes.', topic: 'Trees', difficulty: 'Hard', xp: 50 },
]

// ─── GitHub MCQs ─────────────────────────────────────────────────────────────

export const GITHUB_QUIZ_QUESTIONS: QuizQuestion[] = [
  { id: 'ghq-01', question: 'What does "git init" do?', options: ['Creates a new branch', 'Initializes a new Git repository', 'Clones a repository', 'Commits all files'], correct: 1, explanation: 'git init creates a hidden .git folder in the current directory, turning it into a Git repository that can track changes.', topic: 'Git Basics', difficulty: 'Easy', xp: 20 },
  { id: 'ghq-02', question: 'What does "git add ." do?', options: ['Commits all files', 'Stages all changed files', 'Pushes to GitHub', 'Creates a branch'], correct: 1, explanation: 'git add stages files for the next commit. "." means all changed files in the current directory. Staging lets you choose exactly what goes into a commit.', topic: 'Git Basics', difficulty: 'Easy', xp: 20 },
  { id: 'ghq-03', question: 'A "fork" in GitHub means:', options: ['Deleting a repository', 'Copying someone\'s repo to your account', 'Creating a new branch', 'Reverting commits'], correct: 1, explanation: 'Forking creates a full copy of a repository under your account. It\'s the foundation of open source collaboration — you fork, make changes, then create a Pull Request.', topic: 'GitHub', difficulty: 'Easy', xp: 20 },
  { id: 'ghq-04', question: 'What is a Pull Request?', options: ['Downloading code from GitHub', 'A proposal to merge your changes into another branch', 'A type of issue', 'Cloning a repository'], correct: 1, explanation: 'A PR is a request for maintainers to review and merge your branch. It includes your commits, a description, and enables discussion and code review.', topic: 'GitHub', difficulty: 'Easy', xp: 20 },
  { id: 'ghq-05', question: 'What does "git push" do?', options: ['Downloads remote changes', 'Uploads local commits to remote', 'Creates a new branch', 'Merges branches'], correct: 1, explanation: 'git push uploads your local committed changes to the remote repository (e.g., GitHub). Use git pull to download changes made by others.', topic: 'Git Basics', difficulty: 'Easy', xp: 20 },
  { id: 'ghq-06', question: 'The purpose of .gitignore is:', options: ['To list collaborators', 'To specify files Git should not track', 'To define merge rules', 'To store commit messages'], correct: 1, explanation: '.gitignore tells Git which files to exclude from version control — like node_modules/, .env files, build outputs, and IDE config files.', topic: 'Git Advanced', difficulty: 'Medium', xp: 30 },
  { id: 'ghq-07', question: 'What does "git stash" do?', options: ['Deletes uncommitted changes', 'Temporarily saves uncommitted changes', 'Creates a new commit', 'Switches branches'], correct: 1, explanation: 'git stash saves your uncommitted changes temporarily so you can switch branches. Use git stash pop to restore them later.', topic: 'Git Advanced', difficulty: 'Medium', xp: 30 },
]

// ─── Quiz Sets ────────────────────────────────────────────────────────────────

export const QUIZ_SETS: QuizSet[] = [
  {
    id: 'python-basics-quiz',
    title: 'Python Fundamentals',
    description: 'Test your Python basics: types, loops, functions, lists, and dicts.',
    topic: 'python',
    questions: PYTHON_QUIZ_QUESTIONS.slice(0, 10),
    totalXP: PYTHON_QUIZ_QUESTIONS.slice(0, 10).reduce((sum, q) => sum + q.xp, 0),
    estimatedMinutes: 10,
    color: '#00D2FF',
  },
  {
    id: 'dsa-fundamentals-quiz',
    title: 'DSA Fundamentals',
    description: 'Arrays, sorting, searching, trees, and graphs — core CS concepts.',
    topic: 'dsa',
    questions: DSA_QUIZ_QUESTIONS,
    totalXP: DSA_QUIZ_QUESTIONS.reduce((sum, q) => sum + q.xp, 0),
    estimatedMinutes: 15,
    color: '#7C6EFA',
  },
  {
    id: 'github-quiz',
    title: 'GitHub & Git',
    description: 'Version control, branches, PRs, and open source workflows.',
    topic: 'github',
    questions: GITHUB_QUIZ_QUESTIONS,
    totalXP: GITHUB_QUIZ_QUESTIONS.reduce((sum, q) => sum + q.xp, 0),
    estimatedMinutes: 8,
    color: '#00F5A0',
  },
  {
    id: 'mixed-quiz',
    title: 'Mixed Challenge',
    description: 'Random questions from Python, DSA, and GitHub. The ultimate test.',
    topic: 'mixed',
    questions: [
      ...PYTHON_QUIZ_QUESTIONS.slice(0, 5),
      ...DSA_QUIZ_QUESTIONS.slice(0, 5),
      ...GITHUB_QUIZ_QUESTIONS.slice(0, 3),
    ],
    totalXP: 350,
    estimatedMinutes: 15,
    color: '#FFB347',
  },
]

export function getQuizSet(id: string): QuizSet | undefined {
  return QUIZ_SETS.find((q) => q.id === id)
}
