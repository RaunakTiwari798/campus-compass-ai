// ─── Types ────────────────────────────────────────────────────────────────────

export interface PythonQuiz {
  question: string
  options: string[]
  correct: number
  explanation: string
}

export interface PythonLesson {
  id: string
  title: string
  category: string
  concept: string
  code: string
  output: string
  quiz: PythonQuiz
  xp: number
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
}

export interface PythonChallenge {
  id: string
  title: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  category: string
  description: string
  starterCode: string
  expectedOutput: string
  hints: string[]
  xp: number
}

// ─── Lessons ──────────────────────────────────────────────────────────────────

export const PYTHON_LESSONS: PythonLesson[] = [
  {
    id: 'py-01',
    title: 'Hello, Python!',
    category: 'Basics',
    concept: `Python is a high-level, readable programming language created by Guido van Rossum in 1991.

Why Python?
• Simple, English-like syntax
• Most popular language for AI/ML, data science, web dev
• Huge community and library ecosystem
• Runs on Windows, Mac, Linux

Your first program in Python is always printing to the screen.
The print() function displays output to the console.`,
    code: `# Your first Python program
# Lines starting with # are comments — Python ignores them

print("Hello, World!")
print("Welcome to Campus Compass AI")
print("Let's start coding!")`,
    output: 'Hello, World!\nWelcome to Campus Compass AI\nLet\'s start coding!',
    quiz: {
      question: 'Which function is used to display output in Python?',
      options: ['display()', 'print()', 'output()', 'show()'],
      correct: 1,
      explanation: 'print() is Python\'s built-in function for displaying output to the console. It can print strings, numbers, variables, and more.',
    },
    xp: 50,
    difficulty: 'Beginner',
  },
  {
    id: 'py-02',
    title: 'Variables & Data Types',
    category: 'Basics',
    concept: `Variables are containers for storing data. In Python, you don't declare types — Python figures them out automatically.

4 Basic Types:
• int    — whole numbers: 1, 42, -10
• float  — decimal numbers: 3.14, -0.5
• str    — text (in quotes): "hello", 'world'
• bool   — True or False only

type() function tells you the type of any variable.
f-strings (f"...") let you embed variables inside strings.`,
    code: `name = "Alice"        # str
age = 20              # int
gpa = 3.8             # float
is_student = True     # bool

print(f"Name: {name}")
print(f"Age: {age}")
print(f"GPA: {gpa}")
print(f"Is student: {is_student}")
print(f"Type of age: {type(age)}")`,
    output: 'Name: Alice\nAge: 20\nGPA: 3.8\nIs student: True\nType of age: <class \'int\'>',
    quiz: {
      question: 'What data type is the value 3.14 in Python?',
      options: ['int', 'str', 'float', 'double'],
      correct: 2,
      explanation: 'Any number with a decimal point is a float in Python. Python has no "double" type — float is already double-precision (64-bit).',
    },
    xp: 50,
    difficulty: 'Beginner',
  },
  {
    id: 'py-03',
    title: 'If / Else Conditions',
    category: 'Control Flow',
    concept: `Conditions let your program make decisions.

Syntax:
  if condition:
      # runs when True
  elif other_condition:
      # runs when first is False and this is True
  else:
      # runs when all above are False

IMPORTANT: Python uses INDENTATION (4 spaces) to define blocks.
Unlike C/Java, there are no curly braces {}!

Comparison operators: ==, !=, <, >, <=, >=
Logical operators: and, or, not`,
    code: `score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Score: {score}")
print(f"Grade: {grade}")`,
    output: 'Score: 85\nGrade: B',
    quiz: {
      question: 'What keyword checks an additional condition in Python after if?',
      options: ['else if', 'elseif', 'elif', 'otherwise'],
      correct: 2,
      explanation: 'Python uses elif (not "else if" or "elseif"). It\'s a contraction of "else if" and is unique to Python. You can have as many elif blocks as you need.',
    },
    xp: 75,
    difficulty: 'Beginner',
  },
  {
    id: 'py-04',
    title: 'For Loops',
    category: 'Loops',
    concept: `Loops repeat code. Python's for loop is extremely powerful.

Loop over a list:
  for item in my_list:

Loop a specific number of times:
  for i in range(n):       # 0 to n-1
  for i in range(1, n+1):  # 1 to n
  for i in range(0, n, 2): # 0, 2, 4, ... (step 2)

enumerate() gives you both index AND value:
  for i, item in enumerate(my_list):

Loop over a string (character by character):
  for char in "hello":`,
    code: `# Loop over a list
fruits = ["apple", "banana", "mango"]
for fruit in fruits:
    print(f"I love {fruit}!")

# Range loop
print("\\nCounting:")
for i in range(1, 6):
    print(f"  {i}")

# Enumerate
print("\\nWith index:")
for i, fruit in enumerate(fruits):
    print(f"  {i}: {fruit}")`,
    output: 'I love apple!\nI love banana!\nI love mango!\n\nCounting:\n  1\n  2\n  3\n  4\n  5\n\nWith index:\n  0: apple\n  1: banana\n  2: mango',
    quiz: {
      question: 'What does range(2, 8, 2) produce?',
      options: ['2, 4, 6, 8', '2, 4, 6', '2, 3, 4, 5, 6, 7', '0, 2, 4, 6'],
      correct: 1,
      explanation: 'range(start, stop, step): starts at 2, stops BEFORE 8, steps by 2. So: 2, 4, 6. Note: 8 is excluded because range stops before the stop value.',
    },
    xp: 75,
    difficulty: 'Beginner',
  },
  {
    id: 'py-05',
    title: 'While Loops',
    category: 'Loops',
    concept: `While loops repeat as long as a condition is True.

Use while when you don't know how many iterations in advance.

DANGER: Always ensure the condition eventually becomes False,
or you'll create an infinite loop!

Loop control:
• break    — exit the loop immediately
• continue — skip the rest of this iteration
• else     — runs when loop finishes normally (no break)`,
    code: `# Count down
n = 5
while n > 0:
    print(f"T-{n}...")
    n -= 1
print("Liftoff! 🚀")

# Break example
print("\\nFind first even number > 10:")
num = 11
while True:
    if num % 2 == 0:
        print(f"Found: {num}")
        break
    num += 1`,
    output: 'T-5...\nT-4...\nT-3...\nT-2...\nT-1...\nLiftoff! 🚀\n\nFind first even number > 10:\nFound: 12',
    quiz: {
      question: 'What does the "break" statement do in a loop?',
      options: ['Pauses the loop', 'Exits the loop immediately', 'Skips current iteration', 'Restarts the loop'],
      correct: 1,
      explanation: 'break immediately exits the enclosing loop, regardless of the loop condition. Execution continues with the first statement after the loop.',
    },
    xp: 75,
    difficulty: 'Beginner',
  },
  {
    id: 'py-06',
    title: 'Functions',
    category: 'Functions',
    concept: `Functions are reusable blocks of code. They make programs organized and DRY (Don't Repeat Yourself).

Anatomy:
  def function_name(param1, param2):
      # code
      return result

Default parameters: def greet(name, greeting="Hello")
Multiple return values: return a, b, c (returns a tuple)
*args: accept any number of positional arguments
**kwargs: accept any number of keyword arguments

A function that doesn't return explicitly returns None.`,
    code: `def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

def add(a, b):
    return a + b

def min_max(numbers):
    return min(numbers), max(numbers)

print(greet("Alice"))
print(greet("Bob", "Good morning"))
print(add(10, 25))

low, high = min_max([3, 1, 7, 2, 9])
print(f"Min: {low}, Max: {high}")`,
    output: 'Hello, Alice!\nGood morning, Bob!\n35\nMin: 1, Max: 9',
    quiz: {
      question: 'What keyword is used to send a result back from a function?',
      options: ['give', 'output', 'return', 'send'],
      correct: 2,
      explanation: 'return sends a value back to the caller and exits the function. A function can return any type: number, string, list, or even another function.',
    },
    xp: 100,
    difficulty: 'Beginner',
  },
  {
    id: 'py-07',
    title: 'Lists',
    category: 'Data Structures',
    concept: `Lists are ordered, mutable collections. They're Python's most-used data structure.

Creation:
  my_list = [1, 2, 3]
  my_list = list(range(5))  # [0,1,2,3,4]

Common methods:
  .append(x)   — add to end: O(1)
  .insert(i,x) — add at index i: O(n)
  .remove(x)   — remove first occurrence: O(n)
  .pop()       — remove & return last: O(1)
  .sort()      — sort in place: O(n log n)
  .reverse()   — reverse in place: O(n)
  len(lst)     — length: O(1)

List comprehension (Pythonic way to create lists):
  squares = [x**2 for x in range(5)]`,
    code: `# Creating and modifying lists
nums = [3, 1, 4, 1, 5, 9, 2, 6]
print(f"Original: {nums}")

nums.append(7)
nums.sort()
print(f"Sorted: {nums}")

# Slicing
print(f"First 3: {nums[:3]}")
print(f"Last 3: {nums[-3:]}")

# List comprehension
squares = [x**2 for x in range(1, 6)]
print(f"Squares: {squares}")

# Filter with comprehension
evens = [x for x in nums if x % 2 == 0]
print(f"Evens: {evens}")`,
    output: 'Original: [3, 1, 4, 1, 5, 9, 2, 6]\nSorted: [1, 1, 2, 3, 4, 5, 6, 9, 7]\nFirst 3: [1, 1, 2]\nLast 3: [6, 9, 7]\nSquares: [1, 4, 9, 16, 25]\nEvens: [2, 4, 6]',
    quiz: {
      question: 'What is the time complexity of list.append() in Python?',
      options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
      correct: 2,
      explanation: 'append() is amortized O(1). Python lists are dynamic arrays — when the internal array fills up, Python allocates a larger array (typically 2x), but this doesn\'t happen often enough to matter.',
    },
    xp: 100,
    difficulty: 'Beginner',
  },
  {
    id: 'py-08',
    title: 'Dictionaries',
    category: 'Data Structures',
    concept: `Dictionaries store key-value pairs. Keys must be unique and immutable.

Creation:
  person = {"name": "Alice", "age": 20}
  person = dict(name="Alice", age=20)

Access:
  person["name"]        # raises KeyError if missing
  person.get("name")    # returns None if missing
  person.get("name", "Unknown")  # default value

Iteration:
  for key in person:
  for key, val in person.items():
  for key in person.keys():
  for val in person.values():

Time complexity: O(1) average for get/set/delete (hash table internally)`,
    code: `# Student grade tracker
grades = {
    "Alice": 92,
    "Bob": 85,
    "Carol": 78,
    "Dave": 95
}

# Access and update
print(f"Alice's grade: {grades['Alice']}")
grades["Eve"] = 88
print(f"Students: {len(grades)}")

# Find top student
top = max(grades, key=grades.get)
print(f"Top student: {top} with {grades[top]}")

# Average
avg = sum(grades.values()) / len(grades)
print(f"Class average: {avg:.1f}")`,
    output: "Alice's grade: 92\nStudents: 5\nTop student: Dave with 95\nClass average: 87.6",
    quiz: {
      question: 'What does dict.get("key", default) return if "key" doesn\'t exist?',
      options: ['Raises KeyError', 'Returns None', 'Returns the default value', 'Returns False'],
      correct: 2,
      explanation: 'dict.get(key, default) is safe — it returns the default value (or None if not specified) instead of raising a KeyError when the key is missing. Use it whenever a key might not exist.',
    },
    xp: 100,
    difficulty: 'Beginner',
  },
  {
    id: 'py-09',
    title: 'List Comprehensions & Lambdas',
    category: 'Advanced Python',
    concept: `Two powerful Pythonic features that make code concise.

List comprehension:
  [expression for item in iterable if condition]

Dict comprehension:
  {key: val for item in iterable}

Lambda (anonymous function):
  double = lambda x: x * 2
  square = lambda x: x ** 2

Used with map(), filter(), sorted():
  sorted(words, key=lambda w: len(w))
  list(map(lambda x: x*2, nums))
  list(filter(lambda x: x>0, nums))`,
    code: `# List comprehensions
squares = [x**2 for x in range(1, 8)]
evens = [x for x in range(20) if x % 2 == 0]
words = ["hello", "world", "python"]
upper = [w.upper() for w in words]
print(squares)
print(evens)
print(upper)

# Dict comprehension
word_lengths = {w: len(w) for w in words}
print(word_lengths)

# Lambda with sorted
students = [("Alice", 92), ("Bob", 85), ("Carol", 97)]
by_grade = sorted(students, key=lambda s: s[1], reverse=True)
print(by_grade)`,
    output: "[1, 4, 9, 16, 25, 36, 49]\n[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]\n['HELLO', 'WORLD', 'PYTHON']\n{'hello': 5, 'world': 5, 'python': 6}\n[('Carol', 97), ('Alice', 92), ('Bob', 85)]",
    quiz: {
      question: 'What does [x*2 for x in range(4)] produce?',
      options: ['[0, 1, 2, 3]', '[0, 2, 4, 6]', '[2, 4, 6, 8]', '[1, 2, 3, 4]'],
      correct: 1,
      explanation: 'range(4) produces 0,1,2,3. Multiplying each by 2 gives 0,2,4,6. List comprehension collects these into a list.',
    },
    xp: 125,
    difficulty: 'Intermediate',
  },
  {
    id: 'py-10',
    title: 'Object-Oriented Programming',
    category: 'OOP',
    concept: `OOP organizes code around objects — instances of classes.

Key concepts:
• Class: blueprint for creating objects
• Object: instance of a class
• __init__: constructor (runs when object is created)
• self: reference to the current instance
• Method: function inside a class

Three pillars of OOP:
• Encapsulation: bundling data + methods together
• Inheritance: child class inherits from parent
• Polymorphism: same method, different behaviour`,
    code: `class Student:
    school = "Campus Compass"  # class variable

    def __init__(self, name, age):
        self.name = name        # instance variable
        self.age = age
        self.grades = []

    def add_grade(self, grade):
        self.grades.append(grade)

    def average(self):
        if not self.grades:
            return 0
        return sum(self.grades) / len(self.grades)

    def __str__(self):
        return f"{self.name} (avg: {self.average():.1f})"

alice = Student("Alice", 20)
alice.add_grade(92)
alice.add_grade(88)
alice.add_grade(95)
print(alice)
print(f"School: {Student.school}")`,
    output: 'Alice (avg: 91.7)\nSchool: Campus Compass',
    quiz: {
      question: 'What is the purpose of __init__ in a Python class?',
      options: ['To delete an object', 'To initialize object attributes when created', 'To print the object', 'To define class variables'],
      correct: 1,
      explanation: '__init__ is Python\'s constructor. It runs automatically when you create a new object (Student("Alice", 20)), letting you set initial attribute values.',
    },
    xp: 150,
    difficulty: 'Intermediate',
  },
]

// ─── Practice Challenges ──────────────────────────────────────────────────────

export const PYTHON_CHALLENGES: PythonChallenge[] = [
  {
    id: 'pyc-01',
    title: 'FizzBuzz',
    difficulty: 'Easy',
    category: 'Basics',
    description: 'Print numbers 1–20. For multiples of 3 print "Fizz", for multiples of 5 print "Buzz", for both print "FizzBuzz".',
    starterCode: `for i in range(1, 21):
    # Your solution here
    pass`,
    expectedOutput: '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz',
    hints: ['Check divisibility with % operator', 'Check both (% 15 == 0) first, then % 3, then % 5'],
    xp: 75,
  },
  {
    id: 'pyc-02',
    title: 'Reverse a String',
    difficulty: 'Easy',
    category: 'Strings',
    description: 'Write a function that returns the reverse of a given string without using built-in reverse.',
    starterCode: `def reverse_string(s):
    # Hint: loop backwards, or use slicing
    pass

print(reverse_string("hello"))    # olleh
print(reverse_string("python"))   # nohtyp
print(reverse_string("racecar"))  # racecar`,
    expectedOutput: 'olleh\nnohtyp\nracecar',
    hints: ['Try: return s[::-1]', 'Or: build string by looping from end to start'],
    xp: 75,
  },
  {
    id: 'pyc-03',
    title: 'Count Word Frequency',
    difficulty: 'Easy',
    category: 'Dictionaries',
    description: 'Given a sentence, return a dictionary with the count of each word.',
    starterCode: `def word_count(sentence):
    # Split sentence into words
    # Count each word using a dict
    pass

print(word_count("the cat sat on the mat"))
# Expected: {'the': 2, 'cat': 1, 'sat': 1, 'on': 1, 'mat': 1}`,
    expectedOutput: "{'the': 2, 'cat': 1, 'sat': 1, 'on': 1, 'mat': 1}",
    hints: ['Use sentence.split() to get words', 'For each word: d[word] = d.get(word, 0) + 1'],
    xp: 100,
  },
  {
    id: 'pyc-04',
    title: 'List Flattener',
    difficulty: 'Medium',
    category: 'Lists',
    description: 'Write a function that flattens a nested list (one level deep).',
    starterCode: `def flatten(nested):
    result = []
    # Iterate through nested, extend result with each sublist
    pass

print(flatten([[1,2],[3,4],[5,6]]))      # [1,2,3,4,5,6]
print(flatten([[1],[2,3,4],[5]]))        # [1,2,3,4,5]`,
    expectedOutput: '[1, 2, 3, 4, 5, 6]\n[1, 2, 3, 4, 5]',
    hints: ['Use result.extend(sublist) instead of append', 'Or use a list comprehension: [x for sub in nested for x in sub]'],
    xp: 125,
  },
]

export function getPythonLesson(id: string): PythonLesson | undefined {
  return PYTHON_LESSONS.find((l) => l.id === id)
}

export const PYTHON_CATEGORIES = [...new Set(PYTHON_LESSONS.map((l) => l.category))]
