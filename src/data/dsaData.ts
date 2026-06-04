// ─── Types ────────────────────────────────────────────────────────────────────

export interface VisualizerStep {
  label: string
  array: (number | string)[]
  highlight: number[]
  description: string
}

export interface DryRunStep {
  line: number
  vars: Record<string, string | number>
  desc: string
}

export interface DryRun {
  problem: string
  code: string
  steps: DryRunStep[]
}

export interface QuizQuestion {
  q: string
  options: string[]
  correct: number
  explanation: string
}

export interface CodingChallenge {
  title: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  description: string
  example: string
  starterCode: string
  expectedOutput: string
  hints: string[]
  commonMistakes: string[]
  xp: number
}

export interface DSATopic {
  id: string
  title: string
  icon: string
  color: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  description: string
  xp: number
  concept: string
  visualizerSteps: VisualizerStep[]
  dryRun: DryRun
  quiz: QuizQuestion[]
  challenge: CodingChallenge
}

// ─── Topic Data ────────────────────────────────────────────────────────────────

export const DSA_TOPICS: DSATopic[] = [
  {
    id: 'arrays',
    title: 'Arrays',
    icon: '▦',
    color: '#00D2FF',
    level: 'Beginner',
    description: 'The foundation of all data structures. Learn indexing, traversal, and manipulation.',
    xp: 200,
    concept: `An array is a collection of elements stored at contiguous memory locations.

Key Properties:
• Fixed size (in most languages)
• Elements accessed by index (0-based)
• O(1) access time by index
• O(n) search time in unsorted array
• O(1) amortized insertion at end (dynamic arrays)

When to use Arrays:
• You need fast index-based access
• The size is known in advance
• You're iterating over all elements frequently

Common Operations:
• Access:   O(1)
• Search:   O(n) unsorted, O(log n) sorted
• Insert:   O(n) middle, O(1) end
• Delete:   O(n) middle, O(1) end`,
    visualizerSteps: [
      { label: 'Initial Array', array: [5, 12, 3, 8, 1, 9], highlight: [], description: 'We have an array of 6 integers stored at indices 0–5.' },
      { label: 'Access arr[2]', array: [5, 12, 3, 8, 1, 9], highlight: [2], description: 'Direct index access → value is 3. This is O(1) — instant!' },
      { label: 'Linear Search for 8', array: [5, 12, 3, 8, 1, 9], highlight: [0], description: 'Start at index 0. Is 5 == 8? No. Move forward.' },
      { label: 'Linear Search — step 2', array: [5, 12, 3, 8, 1, 9], highlight: [1, 2, 3], description: 'Check 12, 3, then 8. Found at index 3! This is O(n) worst case.' },
      { label: 'Insert at end', array: [5, 12, 3, 8, 1, 9, 7], highlight: [6], description: 'Appended 7 at end. O(1) amortized time.' },
    ],
    dryRun: {
      problem: 'Find the maximum element in an array',
      code: `def find_max(arr):
    max_val = arr[0]
    for i in range(1, len(arr)):
        if arr[i] > max_val:
            max_val = arr[i]
    return max_val

arr = [3, 7, 1, 9, 4]
print(find_max(arr))`,
      steps: [
        { line: 1, vars: { max_val: 3, i: '-' }, desc: 'Initialize max_val with first element arr[0] = 3' },
        { line: 2, vars: { max_val: 3, i: 1 }, desc: 'Loop starts. i=1. Check arr[1]=7 > max_val=3? YES' },
        { line: 3, vars: { max_val: 7, i: 1 }, desc: 'Update max_val to 7' },
        { line: 2, vars: { max_val: 7, i: 2 }, desc: 'i=2. Check arr[2]=1 > max_val=7? NO, skip' },
        { line: 2, vars: { max_val: 7, i: 3 }, desc: 'i=3. Check arr[3]=9 > max_val=7? YES' },
        { line: 3, vars: { max_val: 9, i: 3 }, desc: 'Update max_val to 9' },
        { line: 2, vars: { max_val: 9, i: 4 }, desc: 'i=4. Check arr[4]=4 > max_val=9? NO, skip' },
        { line: 5, vars: { max_val: 9, i: 4 }, desc: 'Loop ends. Return 9. ✓ Correct!' },
      ],
    },
    quiz: [
      { q: 'What is the time complexity of accessing an array element by index?', options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'], correct: 2, explanation: 'Arrays store elements at contiguous memory locations, so the CPU can calculate the address directly: base_address + index * element_size. This is always O(1).' },
      { q: 'In a 0-indexed array of size 5, what is the last valid index?', options: ['4', '5', '6', '3'], correct: 0, explanation: 'Indices run from 0 to size-1. For size 5: indices are 0, 1, 2, 3, 4. The last valid index is 4.' },
      { q: 'What is the time complexity of inserting an element in the MIDDLE of an array?', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'], correct: 2, explanation: 'Inserting in the middle requires shifting all elements after the insertion point one position right. In the worst case (insert at index 0), all n elements move — O(n).' },
    ],
    challenge: {
      title: 'Two Sum',
      difficulty: 'Easy',
      description: 'Given an array of integers nums and an integer target, return the indices of the two numbers that add up to target. Each input has exactly one solution.',
      example: 'Input: nums = [2, 7, 11, 15], target = 9\nOutput: [0, 1]\nExplanation: nums[0] + nums[1] = 2 + 7 = 9',
      starterCode: `def two_sum(nums, target):
    # Approach 1 (Brute Force O(n²)): check every pair
    # Approach 2 (Hash Map O(n)): store seen numbers
    # Try to implement O(n) solution!
    pass

print(two_sum([2, 7, 11, 15], 9))   # Expected: [0, 1]
print(two_sum([3, 2, 4], 6))        # Expected: [1, 2]
print(two_sum([3, 3], 6))           # Expected: [0, 1]`,
      expectedOutput: '[0, 1]\n[1, 2]\n[0, 1]',
      hints: [
        'Use a dictionary to store {value: index} as you scan',
        'For each element x, check if (target - x) is already in the dict',
        'The complement check runs in O(1) with a hash map',
      ],
      commonMistakes: [
        'Returning the values instead of indices',
        'Using the same element twice (e.g., index 0 + index 0)',
        'Using O(n²) brute force — try to optimise to O(n)',
      ],
      xp: 150,
    },
  },

  {
    id: 'strings',
    title: 'Strings',
    icon: '"A"',
    color: '#7C6EFA',
    level: 'Beginner',
    description: 'Sequences of characters. Master slicing, manipulation, and pattern matching.',
    xp: 200,
    concept: `A string is an immutable sequence of characters.

Key Properties:
• Immutable in Python (can't change in-place)
• 0-indexed like arrays
• Supports slicing: s[start:end:step]
• Iteration: for char in string

Important Operations:
• len(s)          → length in O(1)
• s.upper()       → uppercase copy
• s.split(' ')    → list of words
• s.strip()       → remove whitespace
• s.find('x')     → index of substring
• s.replace(a,b)  → replace all occurrences
• s[::-1]         → reverse the string

Time Complexities:
• Access by index: O(1)
• Search substring: O(n*m) naive
• Concatenation: O(n) — creates new string`,
    visualizerSteps: [
      { label: 'String as char array', array: ['h', 'e', 'l', 'l', 'o'], highlight: [], description: 'The string "hello" is stored as individual characters at indices 0–4.' },
      { label: 'Access s[1]', array: ['h', 'e', 'l', 'l', 'o'], highlight: [1], description: 's[1] = "e". Direct index access, O(1).' },
      { label: 'Slice s[1:4]', array: ['h', 'e', 'l', 'l', 'o'], highlight: [1, 2, 3], description: 's[1:4] = "ell". Indices 1, 2, 3 (4 is excluded).' },
      { label: 'Reverse s[::-1]', array: ['o', 'l', 'l', 'e', 'h'], highlight: [0, 1, 2, 3, 4], description: 's[::-1] = "olleh". Step of -1 reverses the string.' },
    ],
    dryRun: {
      problem: 'Check if a string is a palindrome',
      code: `def is_palindrome(s):
    s = s.lower()
    left = 0
    right = len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True

print(is_palindrome("racecar"))`,
      steps: [
        { line: 1, vars: { s: 'racecar', left: 0, right: 6 }, desc: 'Input is "racecar", convert to lowercase (no change here)' },
        { line: 4, vars: { s: 'racecar', left: 0, right: 6 }, desc: 'left=0, right=6. Check s[0]="r" == s[6]="r"? YES' },
        { line: 6, vars: { s: 'racecar', left: 1, right: 5 }, desc: 'Move pointers: left=1, right=5. Check s[1]="a" == s[5]="a"? YES' },
        { line: 6, vars: { s: 'racecar', left: 2, right: 4 }, desc: 'left=2, right=4. Check s[2]="c" == s[4]="c"? YES' },
        { line: 6, vars: { s: 'racecar', left: 3, right: 3 }, desc: 'left=3, right=3. left is NOT < right. Exit loop.' },
        { line: 9, vars: { s: 'racecar', left: 3, right: 3 }, desc: 'Return True. "racecar" is a palindrome! ✓' },
      ],
    },
    quiz: [
      { q: 'What does s[::-1] do in Python?', options: ['Returns the first character', 'Reverses the string', 'Returns the last character', 'Removes spaces'], correct: 1, explanation: 'The slice [start:stop:step] with step=-1 traverses the string backwards from end to start, effectively reversing it.' },
      { q: 'Strings in Python are:', options: ['Mutable', 'Immutable', 'Dynamic', 'Fixed-size only'], correct: 1, explanation: 'Python strings are immutable. Any operation that appears to modify a string actually creates a new string object in memory.' },
      { q: 'What is the output of "hello"[1:4]?', options: ['"hell"', '"ell"', '"ello"', '"hel"'], correct: 1, explanation: 'Slicing [1:4] includes indices 1, 2, 3 (4 is excluded). Characters at those positions are "e", "l", "l" → "ell".' },
    ],
    challenge: {
      title: 'Longest Substring Without Repeating Characters',
      difficulty: 'Medium',
      description: 'Given a string, find the length of the longest substring without repeating characters.',
      example: 'Input: s = "abcabcbb"\nOutput: 3\nExplanation: "abc" has length 3, no repeating chars.',
      starterCode: `def length_of_longest_substring(s):
    # Use sliding window technique
    # Maintain a set of characters in current window
    # Move right pointer forward, shrink from left on duplicates
    pass

print(length_of_longest_substring("abcabcbb"))  # 3
print(length_of_longest_substring("bbbbb"))     # 1
print(length_of_longest_substring("pwwkew"))    # 3`,
      expectedOutput: '3\n1\n3',
      hints: [
        'Use a sliding window with two pointers: left and right',
        'Keep a set of characters currently in the window',
        'When you see a duplicate, move the left pointer right until duplicate is gone',
      ],
      commonMistakes: [
        'Not handling empty strings',
        'Forgetting to update the max length on each step',
        'Incorrect pointer movement when removing duplicates',
      ],
      xp: 200,
    },
  },

  {
    id: 'searching',
    title: 'Searching',
    icon: '⌕',
    color: '#00F5A0',
    level: 'Beginner',
    description: 'Linear and binary search. Understand when and why to use each.',
    xp: 250,
    concept: `Two fundamental search algorithms every developer must know.

Linear Search:
• Checks every element one by one
• Works on unsorted arrays
• Time: O(n) | Space: O(1)

Binary Search:
• Array MUST be sorted
• Eliminates half the search space each step
• Time: O(log n) | Space: O(1) iterative
• Why log n? For n=1,000,000 → only 20 comparisons!

Binary Search Logic:
  mid = (low + high) // 2
  if arr[mid] == target → found!
  if arr[mid] < target  → search right half
  if arr[mid] > target  → search left half

Common Binary Search Mistakes:
• Forgetting sorted precondition
• Off-by-one errors on boundaries
• Integer overflow: use mid = low + (high - low) // 2`,
    visualizerSteps: [
      { label: 'Sorted Array', array: [1, 3, 5, 7, 9, 11, 13, 15], highlight: [], description: 'Binary search requires a sorted array. Target = 7.' },
      { label: 'Check mid = 3', array: [1, 3, 5, 7, 9, 11, 13, 15], highlight: [3], description: 'low=0, high=7. mid=3. arr[3]=7. Is 7 == 7? YES — Found!' },
      { label: 'Found at index 3', array: [1, 3, 5, 7, 9, 11, 13, 15], highlight: [3], description: 'Binary search found 7 at index 3 in just 1 comparison!' },
    ],
    dryRun: {
      problem: 'Binary search — find target index in sorted array',
      code: `def binary_search(arr, target):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

arr = [1, 3, 5, 7, 9, 11]
print(binary_search(arr, 7))`,
      steps: [
        { line: 1, vars: { low: 0, high: 5, mid: '-' }, desc: 'Initialize: low=0, high=5 (last index)' },
        { line: 4, vars: { low: 0, high: 5, mid: 2 }, desc: 'mid = (0+5)//2 = 2. arr[2]=5. Is 5 == 7? No. Is 5 < 7? Yes.' },
        { line: 7, vars: { low: 3, high: 5, mid: 2 }, desc: 'arr[mid] < target, so low = mid+1 = 3. Search right half.' },
        { line: 4, vars: { low: 3, high: 5, mid: 4 }, desc: 'mid = (3+5)//2 = 4. arr[4]=9. Is 9 == 7? No. Is 9 < 7? No.' },
        { line: 9, vars: { low: 3, high: 3, mid: 4 }, desc: 'arr[mid] > target, so high = mid-1 = 3.' },
        { line: 4, vars: { low: 3, high: 3, mid: 3 }, desc: 'mid = (3+3)//2 = 3. arr[3]=7. Is 7 == 7? YES! Return 3. ✓' },
      ],
    },
    quiz: [
      { q: 'What is the time complexity of binary search?', options: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'], correct: 2, explanation: 'Binary search halves the search space with every comparison. Starting from n elements: n → n/2 → n/4 → ... → 1. This takes log₂(n) steps.' },
      { q: 'Binary search requires the input to be:', options: ['Sorted', 'Unsorted', 'Random', 'Reversed'], correct: 0, explanation: 'Binary search only works on sorted data. The whole algorithm depends on knowing which half to eliminate based on comparison with mid.' },
      { q: 'For an array of 1024 elements, binary search needs at most how many comparisons?', options: ['512', '1024', '10', '32'], correct: 2, explanation: 'log₂(1024) = 10. Binary search needs at most 10 comparisons to find any element in an array of 1024 items.' },
    ],
    challenge: {
      title: 'Search in Rotated Sorted Array',
      difficulty: 'Medium',
      description: 'A sorted array was rotated at some pivot. Find the target element. Must be O(log n).',
      example: 'Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 0\nOutput: 4 (index of 0)\n\nInput: nums = [4, 5, 6, 7, 0, 1, 2], target = 3\nOutput: -1 (not found)',
      starterCode: `def search_rotated(nums, target):
    # Modified binary search
    # At least one half is always sorted
    # Determine which half is sorted, check if target is in it
    low, high = 0, len(nums) - 1
    pass

print(search_rotated([4,5,6,7,0,1,2], 0))   # 4
print(search_rotated([4,5,6,7,0,1,2], 3))   # -1
print(search_rotated([1], 0))               # -1`,
      expectedOutput: '4\n-1\n-1',
      hints: [
        'In a rotated array, at least ONE half is always normally sorted',
        'Check if the left half [low..mid] is sorted: arr[low] <= arr[mid]',
        'If sorted, check if target is within that half; otherwise search the other half',
      ],
      commonMistakes: [
        'Using regular binary search without handling the rotation',
        'Not handling the edge case where the array has only one element',
        'Wrong boundary conditions when checking if target is in a half',
      ],
      xp: 250,
    },
  },

  {
    id: 'sorting',
    title: 'Sorting',
    icon: '↕',
    color: '#FFB347',
    level: 'Intermediate',
    description: 'Bubble, selection, insertion, merge, and quicksort. Know when to use each.',
    xp: 300,
    concept: `Sorting algorithms rearrange elements in order. Choosing the right one matters.

Comparison Chart:
Algorithm     | Best    | Average | Worst   | Space  | Stable
Bubble Sort   | O(n)    | O(n²)   | O(n²)   | O(1)   | Yes
Selection Sort| O(n²)   | O(n²)   | O(n²)   | O(1)   | No
Insertion Sort| O(n)    | O(n²)   | O(n²)   | O(1)   | Yes
Merge Sort    | O(nlogn)| O(nlogn)| O(nlogn)| O(n)   | Yes
Quick Sort    | O(nlogn)| O(nlogn)| O(n²)   | O(logn)| No

When to use which:
• Small arrays (< 20):  Insertion Sort
• Need stability:       Merge Sort
• General purpose:      Quick Sort (fastest in practice)
• Nearly sorted:        Insertion Sort

Stable sort = equal elements maintain their original relative order`,
    visualizerSteps: [
      { label: 'Unsorted', array: [64, 34, 25, 12, 22, 11], highlight: [], description: 'Bubble Sort — compare adjacent pairs and swap if out of order.' },
      { label: 'Pass 1: swap 64↔34', array: [34, 64, 25, 12, 22, 11], highlight: [0, 1], description: 'Compare 64 and 34. 64 > 34, so swap. Largest "bubbles" to end.' },
      { label: 'Pass 1: swap 64↔25', array: [34, 25, 64, 12, 22, 11], highlight: [1, 2], description: 'Compare 64 and 25. 64 > 25, so swap.' },
      { label: 'After Pass 1', array: [34, 25, 12, 22, 11, 64], highlight: [5], description: '64 is now in its final position at the end. One more pass needed.' },
      { label: 'Sorted!', array: [11, 12, 22, 25, 34, 64], highlight: [0, 1, 2, 3, 4, 5], description: 'After all passes, array is sorted. O(n²) total comparisons.' },
    ],
    dryRun: {
      problem: 'Bubble Sort — sort array in ascending order',
      code: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

arr = [5, 3, 8, 1]
print(bubble_sort(arr))`,
      steps: [
        { line: 1, vars: { n: 4, i: 0, j: 0 }, desc: 'n=4. Start outer loop i=0' },
        { line: 3, vars: { n: 4, i: 0, j: 0 }, desc: 'j=0. Compare arr[0]=5 vs arr[1]=3. 5>3, SWAP → [3,5,8,1]' },
        { line: 3, vars: { n: 4, i: 0, j: 1 }, desc: 'j=1. Compare arr[1]=5 vs arr[2]=8. 5<8, no swap → [3,5,8,1]' },
        { line: 3, vars: { n: 4, i: 0, j: 2 }, desc: 'j=2. Compare arr[2]=8 vs arr[3]=1. 8>1, SWAP → [3,5,1,8]' },
        { line: 2, vars: { n: 4, i: 1, j: 0 }, desc: 'i=1. 8 is in place. j=0. Compare arr[0]=3 vs arr[1]=5. No swap.' },
        { line: 3, vars: { n: 4, i: 1, j: 1 }, desc: 'j=1. Compare arr[1]=5 vs arr[2]=1. 5>1, SWAP → [3,1,5,8]' },
        { line: 5, vars: { n: 4, i: 4, j: 0 }, desc: 'Final result: [1,3,5,8]. ✓ Sorted!' },
      ],
    },
    quiz: [
      { q: 'Which sorting algorithm has the best worst-case time complexity?', options: ['Bubble Sort', 'Quick Sort', 'Merge Sort', 'Insertion Sort'], correct: 2, explanation: 'Merge Sort always runs in O(n log n) — even in the worst case. Quick Sort degrades to O(n²) on already-sorted input without randomization.' },
      { q: 'A "stable" sorting algorithm guarantees:', options: ['O(n log n) time', 'Equal elements keep their original order', 'In-place sorting', 'O(1) space'], correct: 1, explanation: 'Stability means if two elements are equal, their relative order from the input is preserved in the output. Important when sorting objects by one key then another.' },
      { q: 'Insertion sort performs best on:', options: ['Random data', 'Reverse-sorted data', 'Nearly sorted data', 'Large datasets'], correct: 2, explanation: 'Insertion sort approaches O(n) on nearly-sorted data because few swaps are needed. It\'s often used as a final pass in hybrid algorithms like Timsort.' },
    ],
    challenge: {
      title: 'Sort Colors (Dutch National Flag)',
      difficulty: 'Medium',
      description: 'Given an array with only 0s, 1s, and 2s, sort it in-place in a single pass. Do NOT use Python\'s built-in sort.',
      example: 'Input:  [2, 0, 2, 1, 1, 0]\nOutput: [0, 0, 1, 1, 2, 2]',
      starterCode: `def sort_colors(nums):
    # Dutch National Flag algorithm
    # Use three pointers: low, mid, high
    # Everything before low is 0
    # Everything after high is 2
    # mid scans the unknown region
    low, mid, high = 0, 0, len(nums) - 1
    pass

arr = [2, 0, 2, 1, 1, 0]
sort_colors(arr)
print(arr)  # [0, 0, 1, 1, 2, 2]`,
      expectedOutput: '[0, 0, 1, 1, 2, 2]',
      hints: [
        'Use three pointers: low=0, mid=0, high=len-1',
        'If nums[mid]==0: swap with low, increment both low and mid',
        'If nums[mid]==1: increment mid only',
        'If nums[mid]==2: swap with high, decrement high only (do NOT increment mid)',
      ],
      commonMistakes: [
        'Incrementing mid after swapping with high — the swapped element is unprocessed',
        'Using extra space when the problem asks for in-place',
      ],
      xp: 250,
    },
  },

  {
    id: 'recursion',
    title: 'Recursion',
    icon: '⟳',
    color: '#FF6B6B',
    level: 'Intermediate',
    description: 'Functions that call themselves. The foundation for trees, graphs, and divide-and-conquer.',
    xp: 350,
    concept: `Recursion is when a function solves a problem by calling itself on smaller subproblems.

Every recursive function has TWO parts:
1. Base case   — when to STOP (prevents infinite loop)
2. Recursive case — reduce the problem and call self

The Call Stack:
• Each recursive call adds a new frame on the stack
• When base case hits, frames unwind (return)
• Too many calls → Stack Overflow error

When to use Recursion:
• Tree/graph traversal
• Divide and conquer (merge sort, binary search)
• Backtracking (maze solving, N-queens)
• Problems with natural recursive structure

Recursion vs Iteration:
• Recursion: cleaner code, harder to optimize
• Iteration: more explicit, usually faster in practice
• Tail recursion: can be optimized to iteration by compiler`,
    visualizerSteps: [
      { label: 'factorial(4)', array: ['factorial(4)', 'factorial(3)', 'factorial(2)', 'factorial(1)', 'factorial(0)'], highlight: [0], description: 'factorial(4) calls factorial(3). Building the call stack.' },
      { label: 'Base case reached', array: ['factorial(4)', 'factorial(3)', 'factorial(2)', 'factorial(1)', 'factorial(0)'], highlight: [4], description: 'factorial(0) = 1 (base case). Now we unwind back up the stack.' },
      { label: 'Unwinding: factorial(1)', array: ['factorial(4)', 'factorial(3)', 'factorial(2)', '1*1=1', '→ 1'], highlight: [3], description: 'factorial(1) = 1 * factorial(0) = 1 * 1 = 1' },
      { label: 'Unwinding: factorial(2)', array: ['factorial(4)', 'factorial(3)', '2*1=2', '→ 1', '→ 1'], highlight: [2], description: 'factorial(2) = 2 * factorial(1) = 2 * 1 = 2' },
      { label: 'Unwinding: factorial(4)', array: ['4*6=24', '3*2=6', '→ 2', '→ 1', '→ 1'], highlight: [0], description: 'factorial(4) = 4 * 6 = 24. Final answer: 24. ✓' },
    ],
    dryRun: {
      problem: 'Recursive Fibonacci — find nth Fibonacci number',
      code: `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(5))  # 5`,
      steps: [
        { line: 1, vars: { n: 5 }, desc: 'fibonacci(5): n=5, not <= 1. Call fib(4) + fib(3)' },
        { line: 1, vars: { n: 4 }, desc: 'fibonacci(4): n=4, not <= 1. Call fib(3) + fib(2)' },
        { line: 1, vars: { n: 1 }, desc: 'fibonacci(1): n=1, <= 1. BASE CASE → return 1' },
        { line: 1, vars: { n: 0 }, desc: 'fibonacci(0): n=0, <= 1. BASE CASE → return 0' },
        { line: 3, vars: { n: 2 }, desc: 'fibonacci(2) = fib(1)+fib(0) = 1+0 = 1. Returns 1.' },
        { line: 3, vars: { n: 5 }, desc: 'After all calls resolve: fib(5) = 3+2 = 5. ✓' },
      ],
    },
    quiz: [
      { q: 'What prevents infinite recursion?', options: ['A loop condition', 'The base case', 'Return statements', 'Memory limits'], correct: 1, explanation: 'The base case is the condition that stops the recursion. Without it, the function would call itself forever until a Stack Overflow occurs.' },
      { q: 'What happens when recursion goes too deep?', options: ['The program slows down', 'Stack Overflow Error', 'Memory Leak', 'Infinite loop'], correct: 1, explanation: 'Each recursive call adds a frame to the call stack. When the stack grows beyond its limit (usually a few thousand frames), Python raises RecursionError (Stack Overflow).' },
      { q: 'The naive recursive Fibonacci fib(n) has time complexity:', options: ['O(n)', 'O(n²)', 'O(2ⁿ)', 'O(log n)'], correct: 2, explanation: 'Naive recursive Fibonacci makes two calls per level, creating a binary tree of calls. This gives O(2ⁿ) time — extremely inefficient. Memoization reduces it to O(n).' },
    ],
    challenge: {
      title: 'Power Function',
      difficulty: 'Easy',
      description: 'Implement pow(x, n) — raise x to the power n using recursion. Optimize to O(log n).',
      example: 'Input: x=2, n=10 → Output: 1024\nInput: x=2, n=0  → Output: 1\nInput: x=2, n=-2 → Output: 0.25',
      starterCode: `def my_pow(x, n):
    # Base case: n=0 → always 1
    # If n is even: x^n = (x^(n//2))^2
    # If n is odd:  x^n = x * x^(n-1)
    # Handle negative n
    pass

print(my_pow(2, 10))   # 1024
print(my_pow(2, 0))    # 1
print(my_pow(2, -2))   # 0.25`,
      expectedOutput: '1024\n1\n0.25',
      hints: [
        'If n is negative, compute pow(1/x, -n)',
        'If n is even: return pow(x*x, n//2) — this halves the problem each time',
        'If n is odd: return x * pow(x, n-1)',
      ],
      commonMistakes: [
        'Forgetting to handle negative exponents',
        'Using the naive O(n) approach instead of O(log n) fast power',
        'Off-by-one when n is odd',
      ],
      xp: 200,
    },
  },

  {
    id: 'linked-list',
    title: 'Linked List',
    icon: '○→○',
    color: '#A78BFA',
    level: 'Intermediate',
    description: 'Dynamic chain of nodes. Master insertion, deletion, and reversal.',
    xp: 350,
    concept: `A linked list is a chain of nodes where each node stores data + a pointer to the next node.

Types:
• Singly Linked:  A → B → C → None
• Doubly Linked:  A ↔ B ↔ C ↔ None
• Circular:       A → B → C → A

vs Arrays:
┌─────────────┬───────────┬──────────────┐
│ Operation   │ Array     │ Linked List  │
├─────────────┼───────────┼──────────────┤
│ Access      │ O(1)      │ O(n)         │
│ Search      │ O(n)      │ O(n)         │
│ Insert head │ O(n)      │ O(1)         │
│ Insert tail │ O(1)*     │ O(n) or O(1) │
│ Delete head │ O(n)      │ O(1)         │
└─────────────┴───────────┴──────────────┘

Use Linked Lists when:
• Frequent insertions/deletions at head
• Size is unknown and changes often
• No random access needed`,
    visualizerSteps: [
      { label: 'Linked List', array: ['1', '→', '2', '→', '3', '→', 'None'], highlight: [], description: 'Each node holds a value and a pointer to the next node.' },
      { label: 'Insert at head (0)', array: ['0', '→', '1', '→', '2', '→', '3', '→', 'None'], highlight: [0], description: 'New node 0 added at head. O(1) — just update the head pointer.' },
      { label: 'Delete node 2', array: ['0', '→', '1', '→', '3', '→', 'None'], highlight: [3], description: 'Remove node 2 by making node 1 point directly to node 3. O(n) to find, O(1) to remove.' },
    ],
    dryRun: {
      problem: 'Reverse a singly linked list',
      code: `def reverse_list(head):
    prev = None
    curr = head
    while curr:
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node
    return prev

# 1 → 2 → 3 → None becomes 3 → 2 → 1 → None`,
      steps: [
        { line: 1, vars: { prev: 'None', curr: '1→2→3' }, desc: 'prev=None, curr points to node 1' },
        { line: 3, vars: { prev: 'None', curr: '1', next_node: '2→3' }, desc: 'Save next=node2. Make node1.next=None. prev=node1, curr=node2.' },
        { line: 3, vars: { prev: '1', curr: '2', next_node: '3' }, desc: 'Save next=node3. Make node2.next=node1. prev=node2, curr=node3.' },
        { line: 3, vars: { prev: '2→1', curr: '3', next_node: 'None' }, desc: 'Save next=None. Make node3.next=node2. prev=node3, curr=None.' },
        { line: 8, vars: { prev: '3→2→1', curr: 'None' }, desc: 'curr is None. Return prev (node3). List is reversed! ✓' },
      ],
    },
    quiz: [
      { q: 'What is the time complexity of accessing the kth element in a linked list?', options: ['O(1)', 'O(log n)', 'O(k)', 'O(n²)'], correct: 2, explanation: 'Unlike arrays, linked lists have no random access. You must traverse from head, following .next pointers until reaching position k.' },
      { q: 'Which operation is O(1) in a singly linked list (with a head pointer)?', options: ['Access by index', 'Insert at tail', 'Delete last node', 'Insert at head'], correct: 3, explanation: 'Inserting at the head is O(1): create new node, set new_node.next = head, update head = new_node. No traversal needed.' },
      { q: 'To detect a cycle in a linked list, use:', options: ['Hash set or Floyd\'s algorithm', 'Sorting', 'Binary search', 'Stack'], correct: 0, explanation: 'Floyd\'s "tortoise and hare" algorithm uses two pointers (slow moves 1 step, fast moves 2). If they ever meet, there\'s a cycle. O(n) time, O(1) space.' },
    ],
    challenge: {
      title: 'Find Middle of Linked List',
      difficulty: 'Easy',
      description: 'Find the middle node of a linked list. For even length, return the second middle node.',
      example: 'Input: 1 → 2 → 3 → 4 → 5\nOutput: Node with value 3\n\nInput: 1 → 2 → 3 → 4\nOutput: Node with value 3',
      starterCode: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def find_middle(head):
    # Use slow and fast pointer technique
    # slow moves 1 step, fast moves 2 steps
    # when fast reaches end, slow is at middle
    pass

# Build: 1 → 2 → 3 → 4 → 5
head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
print(find_middle(head).val)   # Expected: 3`,
      expectedOutput: '3',
      hints: [
        'Use two pointers: slow (1 step) and fast (2 steps)',
        'When fast reaches None or fast.next is None, slow is at the middle',
        'This works because fast covers twice the distance in the same time',
      ],
      commonMistakes: [
        'Not handling the case where the list has only one node',
        'Confusing first vs second middle for even-length lists',
      ],
      xp: 200,
    },
  },

  {
    id: 'stack',
    title: 'Stack',
    icon: '⊡',
    color: '#38BDF8',
    level: 'Intermediate',
    description: 'Last-In-First-Out (LIFO). Powers function calls, undo features, and expression parsing.',
    xp: 300,
    concept: `A stack is a LIFO (Last-In, First-Out) data structure.

Operations (all O(1)):
• push(x)  — add element to top
• pop()    — remove and return top element
• peek()   — view top element without removing
• isEmpty()— check if stack is empty

Think of it like a stack of plates:
• You always add/remove from the TOP
• The last plate placed is the first removed

Python implementation: use a list
  stack = []
  stack.append(x)   # push
  stack.pop()       # pop
  stack[-1]         # peek

Real-World Uses:
• Function call stack (recursion)
• Browser back button history
• Undo/Redo in editors
• Expression evaluation (calculators)
• Balanced parentheses checking`,
    visualizerSteps: [
      { label: 'Empty Stack', array: ['[ ]'], highlight: [], description: 'Stack starts empty. Top pointer is None.' },
      { label: 'push(5)', array: ['[5]'], highlight: [0], description: 'Push 5. Stack: [5]. Top = 5.' },
      { label: 'push(3), push(8)', array: ['[5, 3, 8]'], highlight: [0], description: 'Push 3 then 8. Stack: [5, 3, 8]. Top = 8.' },
      { label: 'pop() → 8', array: ['[5, 3]'], highlight: [0], description: 'Pop removes 8 (the top). LIFO — last in, first out.' },
      { label: 'peek() → 3', array: ['[5, 3]'], highlight: [0], description: 'Peek sees 3 on top without removing it.' },
    ],
    dryRun: {
      problem: 'Valid parentheses — check if brackets are balanced',
      code: `def is_valid(s):
    stack = []
    pairs = {')':'(', ']':'[', '}':'{'}
    for char in s:
        if char in '([{':
            stack.append(char)
        elif char in ')]}':
            if not stack or stack[-1] != pairs[char]:
                return False
            stack.pop()
    return len(stack) == 0

print(is_valid("()[]{}"))  # True
print(is_valid("([)]"))    # False`,
      steps: [
        { line: 1, vars: { stack: '[]', char: '(' }, desc: '( is an opener. Push to stack. stack=["("]' },
        { line: 1, vars: { stack: '["("]', char: ')' }, desc: ') is a closer. pairs[")"]="(". stack[-1]="(". Match! Pop. stack=[]' },
        { line: 1, vars: { stack: '[]', char: '[' }, desc: '[ is opener. Push. stack=["["]' },
        { line: 1, vars: { stack: '["["]', char: ']' }, desc: '] is closer. Match with "[". Pop. stack=[]' },
        { line: 9, vars: { stack: '[]' }, desc: 'String exhausted. stack is empty → return True ✓' },
      ],
    },
    quiz: [
      { q: 'What does LIFO stand for?', options: ['Last In First Out', 'Last In First Over', 'List Input First Output', 'Linear Input Fixed Output'], correct: 0, explanation: 'LIFO = Last In, First Out. The most recently added element is always the first to be removed. Like a stack of plates.' },
      { q: 'Which Python method is used to add an element to a stack (list)?', options: ['add()', 'push()', 'append()', 'insert()'], correct: 2, explanation: 'Python uses list.append(x) to add to the end (top of stack) and list.pop() to remove from the end. Both are O(1).' },
      { q: 'The call stack in programming uses which data structure principle?', options: ['FIFO', 'LIFO', 'Priority Queue', 'Random Access'], correct: 1, explanation: 'Function calls follow LIFO: when a function calls another, the new function frame goes on top. When it returns, that frame is removed (popped), resuming the caller.' },
    ],
    challenge: {
      title: 'Min Stack',
      difficulty: 'Medium',
      description: 'Design a stack that supports push, pop, top, and getMin — all in O(1) time.',
      example: 'minStack = MinStack()\nminStack.push(-2)\nminStack.push(0)\nminStack.push(-3)\nminStack.getMin()  # -3\nminStack.pop()\nminStack.getMin()  # -2',
      starterCode: `class MinStack:
    def __init__(self):
        # Use two stacks: main and min_tracker
        pass

    def push(self, val: int) -> None:
        pass

    def pop(self) -> None:
        pass

    def top(self) -> int:
        pass

    def getMin(self) -> int:
        pass`,
      expectedOutput: '-3\n-2',
      hints: [
        'Use a second stack to track minimums',
        'When pushing x: push to main stack, push min(x, min_stack.top()) to min_stack',
        'When popping: pop from both stacks simultaneously',
      ],
      commonMistakes: [
        'Only tracking the global minimum — misses cases when the min is popped',
        'Not updating min_stack on every push',
      ],
      xp: 300,
    },
  },

  {
    id: 'trees',
    title: 'Trees',
    icon: '⑂',
    color: '#00F5A0',
    level: 'Advanced',
    description: 'Hierarchical data. BSTs, traversals (inorder, preorder, postorder), and tree problems.',
    xp: 500,
    concept: `A tree is a hierarchical data structure with nodes connected by edges.

Binary Tree:
• Each node has at most 2 children (left, right)
• Root: top node (no parent)
• Leaf: node with no children
• Height: longest path from root to leaf

Binary Search Tree (BST):
• left subtree values < node value
• right subtree values > node value
• Search/Insert/Delete: O(log n) average, O(n) worst

Tree Traversals:
• Inorder   (L → Root → R): gives sorted output in BST
• Preorder  (Root → L → R): copy/serialize tree
• Postorder (L → R → Root): delete tree

BFS (Level Order):
• Visit nodes level by level using a Queue
• Finds shortest path in unweighted trees`,
    visualizerSteps: [
      { label: 'Binary Search Tree', array: ['4', '2', '6', '1', '3', '5', '7'], highlight: [], description: 'A BST with root 4. Left subtree has values < 4, right has values > 4.' },
      { label: 'Inorder: 1,2,3,4,5,6,7', array: ['1', '2', '3', '4', '5', '6', '7'], highlight: [0, 1, 2, 3, 4, 5, 6], description: 'Inorder traversal (L→Root→R) of a BST always produces a sorted sequence.' },
      { label: 'Search for 5', array: ['4', '6', '5'], highlight: [0, 1, 2], description: '5 > 4, go right. 5 < 6, go left. Found 5! Only 3 comparisons.' },
    ],
    dryRun: {
      problem: 'Inorder traversal of a binary tree',
      code: `def inorder(root):
    if root is None:
        return []
    left = inorder(root.left)
    mid  = [root.val]
    right = inorder(root.right)
    return left + mid + right

# Tree: 4 with children 2 and 6
print(inorder(root))  # [2, 4, 6]`,
      steps: [
        { line: 1, vars: { root: '4', left: '?', right: '?' }, desc: 'Call inorder(4). Root is not None.' },
        { line: 3, vars: { root: '2', left: '[]', right: '?' }, desc: 'Recursively call inorder(2). Then inorder(2.left=None)=[].' },
        { line: 3, vars: { root: '2', left: '[]', mid: '[2]' }, desc: 'mid=[2]. Then inorder(2.right=None)=[].' },
        { line: 6, vars: { root: '4', left: '[2]', mid: '[4]' }, desc: 'Return []+[2]+[] = [2] for left subtree. mid=[4].' },
        { line: 6, vars: { root: '4', right: '[6]' }, desc: 'inorder(6) returns [6]. Combine: [2]+[4]+[6]=[2,4,6]. ✓' },
      ],
    },
    quiz: [
      { q: 'Inorder traversal of a BST produces:', options: ['Random order', 'Reverse sorted order', 'Sorted order', 'Level order'], correct: 2, explanation: 'BST property guarantees left < root < right at every node. Inorder visits left, then root, then right — naturally yielding sorted order.' },
      { q: 'What is the height of a balanced binary tree with n nodes?', options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'], correct: 1, explanation: 'A balanced binary tree has each level roughly half full. With n nodes, the height is O(log n). This is why balanced BST operations are O(log n).' },
      { q: 'Which traversal would you use to delete all nodes of a tree?', options: ['Inorder', 'Preorder', 'Postorder', 'Level order'], correct: 2, explanation: 'Postorder (L → R → Root) processes children before their parent. This ensures children are deleted before their parent, so no node is orphaned.' },
    ],
    challenge: {
      title: 'Maximum Depth of Binary Tree',
      difficulty: 'Easy',
      description: 'Find the maximum depth (height) of a binary tree. Depth = number of nodes along the longest path from root to a leaf.',
      example: 'Input:\n    3\n   / \\\n  9  20\n     /  \\\n    15   7\nOutput: 3',
      starterCode: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def max_depth(root):
    # Base case: empty tree has depth 0
    # Recursive case: 1 + max(left depth, right depth)
    pass

# Build the example tree
root = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))
print(max_depth(root))  # 3`,
      expectedOutput: '3',
      hints: [
        'Base case: if root is None, return 0',
        'Recursive case: return 1 + max(max_depth(root.left), max_depth(root.right))',
        'The recursion naturally explores every path and takes the maximum',
      ],
      commonMistakes: [
        'Returning -1 for None nodes instead of 0',
        'Using min() instead of max()',
        'Not adding 1 for the current node',
      ],
      xp: 250,
    },
  },

  {
    id: 'graphs',
    title: 'Graphs',
    icon: '◇',
    color: '#FFB347',
    level: 'Advanced',
    description: 'Networks of nodes and edges. BFS, DFS, shortest paths, and real-world applications.',
    xp: 600,
    concept: `A graph is a collection of nodes (vertices) connected by edges.

Types:
• Directed: edges have direction (A → B, not B → A)
• Undirected: edges are bidirectional (A — B)
• Weighted: edges have costs/distances
• Unweighted: all edges equal

Representations:
• Adjacency List: {node: [neighbors]} — space efficient
• Adjacency Matrix: 2D array — fast edge lookup

Graph Algorithms:
• BFS (Breadth-First Search): shortest path in unweighted
• DFS (Depth-First Search): cycle detection, topological sort
• Dijkstra: shortest path in weighted graph
• Union-Find: detect cycles, connected components

Real uses: Maps, social networks, recommendation systems, routing`,
    visualizerSteps: [
      { label: 'Graph: 5 nodes', array: ['A', 'B', 'C', 'D', 'E'], highlight: [], description: 'Graph with nodes A–E. BFS from A will visit all connected nodes level by level.' },
      { label: 'BFS: Visit A', array: ['A', 'B', 'C', 'D', 'E'], highlight: [0], description: 'Start at A. Queue: [A]. Visited: {A}.' },
      { label: 'BFS: Visit B, C', array: ['A', 'B', 'C', 'D', 'E'], highlight: [1, 2], description: 'Dequeue A. Enqueue neighbors B, C. Queue: [B,C]. Visited: {A,B,C}.' },
      { label: 'BFS: Visit D, E', array: ['A', 'B', 'C', 'D', 'E'], highlight: [3, 4], description: 'Dequeue B→D, Dequeue C→E. All nodes visited in level order.' },
    ],
    dryRun: {
      problem: 'BFS to find shortest path length',
      code: `from collections import deque

def bfs(graph, start, end):
    queue = deque([(start, 0)])
    visited = {start}
    while queue:
        node, dist = queue.popleft()
        if node == end:
            return dist
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, dist+1))
    return -1

graph = {'A':['B','C'], 'B':['D'], 'C':['E'], 'D':[], 'E':[]}
print(bfs(graph, 'A', 'E'))  # 2`,
      steps: [
        { line: 1, vars: { queue: "[('A',0)]", visited: '{A}' }, desc: 'Start: queue=[(A,0)], visited={A}' },
        { line: 4, vars: { node: 'A', dist: 0 }, desc: 'Dequeue A. dist=0. A!=E. Enqueue neighbors B(d=1), C(d=1).' },
        { line: 4, vars: { node: 'B', dist: 1 }, desc: 'Dequeue B. dist=1. B!=E. Enqueue D(d=2).' },
        { line: 4, vars: { node: 'C', dist: 1 }, desc: 'Dequeue C. dist=1. C!=E. Enqueue E(d=2).' },
        { line: 4, vars: { node: 'D', dist: 2 }, desc: 'Dequeue D. dist=2. D!=E. D has no neighbors.' },
        { line: 6, vars: { node: 'E', dist: 2 }, desc: 'Dequeue E. dist=2. E==E! Return 2. ✓' },
      ],
    },
    quiz: [
      { q: 'BFS uses which data structure internally?', options: ['Stack', 'Queue', 'Heap', 'Array'], correct: 1, explanation: 'BFS uses a Queue (FIFO). Nodes are visited level by level — all nodes at distance 1 before distance 2, etc. A queue ensures this ordering.' },
      { q: 'DFS is best used for:', options: ['Shortest path in unweighted graph', 'Detecting cycles and topological sorting', 'Finding minimum spanning tree', 'Shortest path in weighted graph'], correct: 1, explanation: 'DFS explores as deep as possible before backtracking. This makes it ideal for cycle detection, topological sort, and connected components. BFS is better for shortest path.' },
      { q: 'An adjacency list is more efficient than an adjacency matrix when:', options: ['The graph is dense', 'The graph is sparse', 'You need O(1) edge lookup', 'The graph is complete'], correct: 1, explanation: 'Adjacency list uses O(V + E) space. Adjacency matrix uses O(V²). For sparse graphs (few edges relative to nodes), lists are much more space-efficient.' },
    ],
    challenge: {
      title: 'Number of Islands',
      difficulty: 'Medium',
      description: 'Given a 2D grid of "1" (land) and "0" (water), count the number of islands. An island is surrounded by water and formed by connecting adjacent land horizontally or vertically.',
      example: 'Input:\n[["1","1","0","0"],\n ["1","1","0","0"],\n ["0","0","1","0"],\n ["0","0","0","1"]]\nOutput: 3',
      starterCode: `def num_islands(grid):
    if not grid:
        return 0
    count = 0
    # Use DFS: when you find land ("1"), run DFS to mark the whole island
    # then increment count
    def dfs(r, c):
        if r < 0 or r >= len(grid) or c < 0 or c >= len(grid[0]):
            return
        if grid[r][c] != "1":
            return
        grid[r][c] = "0"  # Mark visited
        dfs(r+1, c); dfs(r-1, c); dfs(r, c+1); dfs(r, c-1)
    
    # Your code here: iterate grid, call dfs on each "1"
    pass

grid = [["1","1","0"],["1","1","0"],["0","0","1"]]
print(num_islands(grid))  # 2`,
      expectedOutput: '2',
      hints: [
        'Iterate every cell. When you find "1", increment count and run DFS.',
        'DFS marks all connected "1"s as "0" (visited), so they\'re not counted again.',
        'The 4-directional DFS is already provided — you just need the outer loop.',
      ],
      commonMistakes: [
        'Not marking visited cells, causing infinite recursion',
        'Including diagonal connections (this problem only uses 4 directions)',
        'Forgetting to check boundary conditions in DFS',
      ],
      xp: 350,
    },
  },
]

// ─── Helper to get topic by id ─────────────────────────────────────────────────
export function getDSATopic(id: string): DSATopic | undefined {
  return DSA_TOPICS.find((t) => t.id === id)
}

export const DSA_TOPIC_IDS = DSA_TOPICS.map((t) => t.id)
