const PROBLEMS_DATA = [
  {
    "id": 1,
    "name": "Two Sum",
    "count": 420,
    "url": "https://leetcode.com/problems/two-sum/",
    "topics": [
      "Array",
      "Hash Table"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 2,
    "name": "Merge Intervals",
    "count": 376,
    "url": "https://leetcode.com/problems/merge-intervals/",
    "topics": [
      "Array",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 3,
    "name": "LRU Cache",
    "count": 368,
    "url": "https://leetcode.com/problems/lru-cache/",
    "topics": [
      "Hash Table",
      "Linked List",
      "Design",
      "Doubly-Linked List"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 4,
    "name": "Number of Islands",
    "count": 348,
    "url": "https://leetcode.com/problems/number-of-islands/",
    "topics": [
      "Array",
      "Depth-First Search",
      "Breadth-First Search",
      "Union-Find",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 5,
    "name": "Minimum Remove to Make Valid Parentheses",
    "count": 306,
    "url": "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/",
    "topics": [
      "String",
      "Stack"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 6,
    "name": "Valid Palindrome II",
    "count": 269,
    "url": "https://leetcode.com/problems/valid-palindrome-ii/",
    "topics": [
      "Two Pointers",
      "String",
      "Greedy"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 7,
    "name": "Lowest Common Ancestor of a Binary Tree",
    "count": 245,
    "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 8,
    "name": "Valid Parentheses",
    "count": 224,
    "url": "https://leetcode.com/problems/valid-parentheses/",
    "topics": [
      "String",
      "Stack"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 9,
    "name": "Subarray Sum Equals K",
    "count": 223,
    "url": "https://leetcode.com/problems/subarray-sum-equals-k/",
    "topics": [
      "Array",
      "Hash Table",
      "Prefix Sum"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 10,
    "name": "Longest Substring Without Repeating Characters",
    "count": 209,
    "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    "topics": [
      "Hash Table",
      "String",
      "Sliding Window"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 11,
    "name": "\"Pow(x, n)\"",
    "count": 207,
    "url": "https://leetcode.com/problems/powx-n/",
    "topics": [
      "Math",
      "Recursion"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 12,
    "name": "Kth Largest Element in an Array",
    "count": 205,
    "url": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    "topics": [
      "Array",
      "Divide and Conquer",
      "Sorting",
      "Heap (Priority Queue)",
      "Quickselect"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 13,
    "name": "Random Pick with Weight",
    "count": 205,
    "url": "https://leetcode.com/problems/random-pick-with-weight/",
    "topics": [
      "Array",
      "Math",
      "Binary Search",
      "Prefix Sum",
      "Randomized"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 14,
    "name": "Trapping Rain Water",
    "count": 204,
    "url": "https://leetcode.com/problems/trapping-rain-water/",
    "topics": [
      "Array",
      "Two Pointers",
      "Dynamic Programming",
      "Stack",
      "Monotonic Stack"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 15,
    "name": "Binary Tree Vertical Order Traversal",
    "count": 203,
    "url": "https://leetcode.com/problems/binary-tree-vertical-order-traversal/",
    "topics": [
      "Hash Table",
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Sorting",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 16,
    "name": "Maximum Subarray",
    "count": 202,
    "url": "https://leetcode.com/problems/maximum-subarray/",
    "topics": [
      "Array",
      "Divide and Conquer",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 17,
    "name": "Best Time to Buy and Sell Stock",
    "count": 196,
    "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    "topics": [
      "Array",
      "Dynamic Programming"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 18,
    "name": "K Closest Points to Origin",
    "count": 194,
    "url": "https://leetcode.com/problems/k-closest-points-to-origin/",
    "topics": [
      "Array",
      "Math",
      "Divide and Conquer",
      "Geometry",
      "Sorting",
      "Heap (Priority Queue)",
      "Quickselect"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 19,
    "name": "Merge k Sorted Lists",
    "count": 179,
    "url": "https://leetcode.com/problems/merge-k-sorted-lists/",
    "topics": [
      "Linked List",
      "Divide and Conquer",
      "Heap (Priority Queue)",
      "Merge Sort"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 20,
    "name": "3Sum",
    "count": 178,
    "url": "https://leetcode.com/problems/3sum/",
    "topics": [
      "Array",
      "Two Pointers",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 21,
    "name": "Group Anagrams",
    "count": 177,
    "url": "https://leetcode.com/problems/group-anagrams/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 22,
    "name": "Lowest Common Ancestor of a Binary Tree III",
    "count": 176,
    "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/",
    "topics": [
      "Hash Table",
      "Two Pointers",
      "Tree",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 23,
    "name": "Top K Frequent Elements",
    "count": 174,
    "url": "https://leetcode.com/problems/top-k-frequent-elements/",
    "topics": [
      "Array",
      "Hash Table",
      "Divide and Conquer",
      "Sorting",
      "Heap (Priority Queue)",
      "Bucket Sort",
      "Counting",
      "Quickselect"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 24,
    "name": "Search in Rotated Sorted Array",
    "count": 167,
    "url": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    "topics": [
      "Array",
      "Binary Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 25,
    "name": "Basic Calculator II",
    "count": 160,
    "url": "https://leetcode.com/problems/basic-calculator-ii/",
    "topics": [
      "Math",
      "String",
      "Stack"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 26,
    "name": "Meeting Rooms II",
    "count": 157,
    "url": "https://leetcode.com/problems/meeting-rooms-ii/",
    "topics": [
      "Array",
      "Two Pointers",
      "Greedy",
      "Sorting",
      "Heap (Priority Queue)",
      "Prefix Sum"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 27,
    "name": "Range Sum of BST",
    "count": 156,
    "url": "https://leetcode.com/problems/range-sum-of-bst/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 28,
    "name": "Add Two Numbers",
    "count": 152,
    "url": "https://leetcode.com/problems/add-two-numbers/",
    "topics": [
      "Linked List",
      "Math",
      "Recursion"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 29,
    "name": "Word Search",
    "count": 151,
    "url": "https://leetcode.com/problems/word-search/",
    "topics": [
      "Array",
      "String",
      "Backtracking",
      "Depth-First Search",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 30,
    "name": "Median of Two Sorted Arrays",
    "count": 145,
    "url": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    "topics": [
      "Array",
      "Binary Search",
      "Divide and Conquer"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 31,
    "name": "Nested List Weight Sum",
    "count": 138,
    "url": "https://leetcode.com/problems/nested-list-weight-sum/",
    "topics": [
      "Depth-First Search",
      "Breadth-First Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 32,
    "name": "Binary Tree Right Side View",
    "count": 137,
    "url": "https://leetcode.com/problems/binary-tree-right-side-view/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 33,
    "name": "Decode String",
    "count": 134,
    "url": "https://leetcode.com/problems/decode-string/",
    "topics": [
      "String",
      "Stack",
      "Recursion"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 34,
    "name": "Dot Product of Two Sparse Vectors",
    "count": 131,
    "url": "https://leetcode.com/problems/dot-product-of-two-sparse-vectors/",
    "topics": [
      "Array",
      "Hash Table",
      "Two Pointers",
      "Design"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 35,
    "name": "Merge Sorted Array",
    "count": 131,
    "url": "https://leetcode.com/problems/merge-sorted-array/",
    "topics": [
      "Array",
      "Two Pointers",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 36,
    "name": "Valid Palindrome",
    "count": 128,
    "url": "https://leetcode.com/problems/valid-palindrome/",
    "topics": [
      "Two Pointers",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 37,
    "name": "Simplify Path",
    "count": 128,
    "url": "https://leetcode.com/problems/simplify-path/",
    "topics": [
      "String",
      "Stack"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 38,
    "name": "Word Search II",
    "count": 119,
    "url": "https://leetcode.com/problems/word-search-ii/",
    "topics": [
      "Array",
      "String",
      "Backtracking",
      "Trie",
      "Matrix"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 39,
    "name": "Valid Word Abbreviation",
    "count": 117,
    "url": "https://leetcode.com/problems/valid-word-abbreviation/",
    "topics": [
      "Two Pointers",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 40,
    "name": "Insert Delete GetRandom O(1)",
    "count": 116,
    "url": "https://leetcode.com/problems/insert-delete-getrandom-o1/",
    "topics": [
      "Array",
      "Hash Table",
      "Math",
      "Design",
      "Randomized"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 41,
    "name": "Find Peak Element",
    "count": 115,
    "url": "https://leetcode.com/problems/find-peak-element/",
    "topics": [
      "Array",
      "Binary Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 42,
    "name": "Diameter of Binary Tree",
    "count": 113,
    "url": "https://leetcode.com/problems/diameter-of-binary-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 43,
    "name": "Product of Array Except Self",
    "count": 111,
    "url": "https://leetcode.com/problems/product-of-array-except-self/",
    "topics": [
      "Array",
      "Prefix Sum"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 44,
    "name": "Longest Palindromic Substring",
    "count": 109,
    "url": "https://leetcode.com/problems/longest-palindromic-substring/",
    "topics": [
      "Two Pointers",
      "String",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 45,
    "name": "Minimum Add to Make Parentheses Valid",
    "count": 108,
    "url": "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/",
    "topics": [
      "String",
      "Stack",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 46,
    "name": "Vertical Order Traversal of a Binary Tree",
    "count": 107,
    "url": "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/",
    "topics": [
      "Hash Table",
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Sorting",
      "Binary Tree"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 47,
    "name": "Course Schedule II",
    "count": 104,
    "url": "https://leetcode.com/problems/course-schedule-ii/",
    "topics": [
      "Depth-First Search",
      "Breadth-First Search",
      "Graph Theory",
      "Topological Sort"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 48,
    "name": "Shortest Path in Binary Matrix",
    "count": 103,
    "url": "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
    "topics": [
      "Array",
      "Breadth-First Search",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 49,
    "name": "Copy List with Random Pointer",
    "count": 103,
    "url": "https://leetcode.com/problems/copy-list-with-random-pointer/",
    "topics": [
      "Hash Table",
      "Linked List"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 50,
    "name": "Word Break",
    "count": 102,
    "url": "https://leetcode.com/problems/word-break/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Dynamic Programming",
      "Trie",
      "Memoization"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 51,
    "name": "Add Strings",
    "count": 100,
    "url": "https://leetcode.com/problems/add-strings/",
    "topics": [
      "Math",
      "String",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 52,
    "name": "Roman to Integer",
    "count": 99,
    "url": "https://leetcode.com/problems/roman-to-integer",
    "topics": [
      "Hash Table",
      "Math",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 53,
    "name": "Find Leaves of Binary Tree",
    "count": 96,
    "url": "https://leetcode.com/problems/find-leaves-of-binary-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 54,
    "name": "Sliding Window Maximum",
    "count": 95,
    "url": "https://leetcode.com/problems/sliding-window-maximum/",
    "topics": [
      "Array",
      "Queue",
      "Sliding Window",
      "Heap (Priority Queue)",
      "Monotonic Queue"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 55,
    "name": "Evaluate Reverse Polish Notation",
    "count": 95,
    "url": "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
    "topics": [
      "Array",
      "Math",
      "Stack"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 56,
    "name": "Binary Tree Maximum Path Sum",
    "count": 94,
    "url": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    "topics": [
      "Dynamic Programming",
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 57,
    "name": "Letter Combinations of a Phone Number",
    "count": 94,
    "url": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
    "topics": [
      "Hash Table",
      "String",
      "Backtracking"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 58,
    "name": "Longest Common Prefix",
    "count": 92,
    "url": "https://leetcode.com/problems/longest-common-prefix/",
    "topics": [
      "Array",
      "String",
      "Trie"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 59,
    "name": "Word Ladder",
    "count": 90,
    "url": "https://leetcode.com/problems/word-ladder/",
    "topics": [
      "Hash Table",
      "String",
      "Breadth-First Search"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 60,
    "name": "Serialize and Deserialize Binary Tree",
    "count": 84,
    "url": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
    "topics": [
      "String",
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Design",
      "Binary Tree"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 61,
    "name": "Search Suggestions System",
    "count": 81,
    "url": "https://leetcode.com/problems/search-suggestions-system/",
    "topics": [
      "Array",
      "String",
      "Binary Search",
      "Trie",
      "Sorting",
      "Heap (Priority Queue)"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 62,
    "name": "Generate Parentheses",
    "count": 80,
    "url": "https://leetcode.com/problems/generate-parentheses/",
    "topics": [
      "String",
      "Dynamic Programming",
      "Backtracking"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 63,
    "name": "String to Integer (atoi)",
    "count": 80,
    "url": "https://leetcode.com/problems/string-to-integer-atoi/",
    "topics": [
      "String"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 64,
    "name": "Subsets",
    "count": 78,
    "url": "https://leetcode.com/problems/subsets/",
    "topics": [
      "Array",
      "Backtracking",
      "Bit Manipulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 65,
    "name": "Spiral Matrix",
    "count": 78,
    "url": "https://leetcode.com/problems/spiral-matrix/",
    "topics": [
      "Array",
      "Matrix",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 66,
    "name": "Subdomain Visit Count",
    "count": 78,
    "url": "https://leetcode.com/problems/subdomain-visit-count/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Counting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 67,
    "name": "Text Justification",
    "count": 77,
    "url": "https://leetcode.com/problems/text-justification/",
    "topics": [
      "Array",
      "String",
      "Simulation"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 68,
    "name": "Merge Two Sorted Lists",
    "count": 75,
    "url": "https://leetcode.com/problems/merge-two-sorted-lists/",
    "topics": [
      "Linked List",
      "Recursion"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 69,
    "name": "Binary Tree Zigzag Level Order Traversal",
    "count": 75,
    "url": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
    "topics": [
      "Tree",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 70,
    "name": "Minimum Window Substring",
    "count": 74,
    "url": "https://leetcode.com/problems/minimum-window-substring/",
    "topics": [
      "Hash Table",
      "String",
      "Sliding Window"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 71,
    "name": "First Unique Character in a String",
    "count": 74,
    "url": "https://leetcode.com/problems/first-unique-character-in-a-string/",
    "topics": [
      "Hash Table",
      "String",
      "Queue",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 72,
    "name": "Continuous Subarray Sum",
    "count": 72,
    "url": "https://leetcode.com/problems/continuous-subarray-sum/",
    "topics": [
      "Array",
      "Hash Table",
      "Math",
      "Prefix Sum"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 73,
    "name": "Binary Search Tree Iterator",
    "count": 72,
    "url": "https://leetcode.com/problems/binary-search-tree-iterator/",
    "topics": [
      "Stack",
      "Tree",
      "Design",
      "Binary Search Tree",
      "Binary Tree",
      "Iterator"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 74,
    "name": "Shortest Word Distance II",
    "count": 71,
    "url": "https://leetcode.com/problems/shortest-word-distance-ii/",
    "topics": [
      "Array",
      "Hash Table",
      "Two Pointers",
      "String",
      "Design"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 75,
    "name": "Max Area of Island",
    "count": 70,
    "url": "https://leetcode.com/problems/max-area-of-island/",
    "topics": [
      "Array",
      "Depth-First Search",
      "Breadth-First Search",
      "Union-Find",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 76,
    "name": "Move Zeroes",
    "count": 69,
    "url": "https://leetcode.com/problems/move-zeroes/",
    "topics": [
      "Array",
      "Two Pointers"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 77,
    "name": "Rotate Image",
    "count": 69,
    "url": "https://leetcode.com/problems/rotate-image/",
    "topics": [
      "Array",
      "Math",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 78,
    "name": "Container With Most Water",
    "count": 69,
    "url": "https://leetcode.com/problems/container-with-most-water/",
    "topics": [
      "Array",
      "Two Pointers",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 79,
    "name": "Custom Sort String",
    "count": 69,
    "url": "https://leetcode.com/problems/custom-sort-string/",
    "topics": [
      "Hash Table",
      "String",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 80,
    "name": "Reconstruct Original Digits from English",
    "count": 69,
    "url": "https://leetcode.com/problems/reconstruct-original-digits-from-english/",
    "topics": [
      "Hash Table",
      "Math",
      "String"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 81,
    "name": "Course Schedule",
    "count": 68,
    "url": "https://leetcode.com/problems/course-schedule/",
    "topics": [
      "Depth-First Search",
      "Breadth-First Search",
      "Graph Theory",
      "Topological Sort"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 82,
    "name": "Moving Average from Data Stream",
    "count": 67,
    "url": "https://leetcode.com/problems/moving-average-from-data-stream/",
    "topics": [
      "Array",
      "Design",
      "Queue",
      "Data Stream"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 83,
    "name": "Validate Binary Search Tree",
    "count": 65,
    "url": "https://leetcode.com/problems/validate-binary-search-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 84,
    "name": "Palindrome Linked List",
    "count": 64,
    "url": "https://leetcode.com/problems/palindrome-linked-list/",
    "topics": [
      "Linked List",
      "Two Pointers",
      "Stack",
      "Recursion"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 85,
    "name": "Design Underground System",
    "count": 64,
    "url": "https://leetcode.com/problems/design-underground-system/",
    "topics": [
      "Hash Table",
      "String",
      "Design"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 86,
    "name": "Clone Graph",
    "count": 63,
    "url": "https://leetcode.com/problems/clone-graph/",
    "topics": [
      "Hash Table",
      "Depth-First Search",
      "Breadth-First Search",
      "Graph Theory"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 87,
    "name": "Valid Number",
    "count": 63,
    "url": "https://leetcode.com/problems/valid-number/",
    "topics": [
      "String"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 88,
    "name": "Alien Dictionary",
    "count": 61,
    "url": "https://leetcode.com/problems/alien-dictionary/",
    "topics": [
      "Array",
      "String",
      "Depth-First Search",
      "Breadth-First Search",
      "Graph Theory",
      "Topological Sort"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 89,
    "name": "Top K Frequent Words",
    "count": 61,
    "url": "https://leetcode.com/problems/top-k-frequent-words/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Trie",
      "Sorting",
      "Heap (Priority Queue)",
      "Bucket Sort",
      "Counting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 90,
    "name": "Regular Expression Matching",
    "count": 60,
    "url": "https://leetcode.com/problems/regular-expression-matching/",
    "topics": [
      "String",
      "Dynamic Programming",
      "Recursion"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 91,
    "name": "Integer to English Words",
    "count": 60,
    "url": "https://leetcode.com/problems/integer-to-english-words/",
    "topics": [
      "Math",
      "String",
      "Recursion"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 92,
    "name": "Maximum Product Subarray",
    "count": 59,
    "url": "https://leetcode.com/problems/maximum-product-subarray/",
    "topics": [
      "Array",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 93,
    "name": "First Missing Positive",
    "count": 59,
    "url": "https://leetcode.com/problems/first-missing-positive/",
    "topics": [
      "Array",
      "Hash Table"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 94,
    "name": "Unique Paths",
    "count": 58,
    "url": "https://leetcode.com/problems/unique-paths/",
    "topics": [
      "Math",
      "Dynamic Programming",
      "Combinatorics"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 95,
    "name": "House Robber",
    "count": 57,
    "url": "https://leetcode.com/problems/house-robber/",
    "topics": [
      "Array",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 96,
    "name": "Word Break II",
    "count": 57,
    "url": "https://leetcode.com/problems/word-break-ii/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Dynamic Programming",
      "Backtracking",
      "Trie",
      "Memoization"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 97,
    "name": "Combination Sum",
    "count": 57,
    "url": "https://leetcode.com/problems/combination-sum/",
    "topics": [
      "Array",
      "Backtracking"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 98,
    "name": "Remove Duplicates from Sorted Array",
    "count": 57,
    "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
    "topics": [
      "Array",
      "Two Pointers"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 99,
    "name": "Evaluate Division",
    "count": 56,
    "url": "https://leetcode.com/problems/evaluate-division/",
    "topics": [
      "Array",
      "String",
      "Depth-First Search",
      "Breadth-First Search",
      "Union-Find",
      "Graph Theory",
      "Shortest Path"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 100,
    "name": "Analyze User Website Visit Pattern",
    "count": 56,
    "url": "https://leetcode.com/problems/analyze-user-website-visit-pattern/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 101,
    "name": "Diagonal Traverse",
    "count": 56,
    "url": "https://leetcode.com/problems/diagonal-traverse/",
    "topics": [
      "Array",
      "Matrix",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 102,
    "name": "First Bad Version",
    "count": 55,
    "url": "https://leetcode.com/problems/first-bad-version/",
    "topics": [
      "Binary Search",
      "Interactive"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 103,
    "name": "Gas Station",
    "count": 55,
    "url": "https://leetcode.com/problems/gas-station/",
    "topics": [
      "Array",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 104,
    "name": "3Sum Closest",
    "count": 55,
    "url": "https://leetcode.com/problems/3sum-closest/",
    "topics": [
      "Array",
      "Two Pointers",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 105,
    "name": "Reverse Nodes in k-Group",
    "count": 55,
    "url": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
    "topics": [
      "Linked List",
      "Recursion"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 106,
    "name": "Contains Duplicate",
    "count": 54,
    "url": "https://leetcode.com/problems/contains-duplicate/",
    "topics": [
      "Array",
      "Hash Table",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 107,
    "name": "Squares of a Sorted Array",
    "count": 54,
    "url": "https://leetcode.com/problems/squares-of-a-sorted-array/",
    "topics": [
      "Array",
      "Two Pointers",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 108,
    "name": "Valid Sudoku",
    "count": 54,
    "url": "https://leetcode.com/problems/valid-sudoku/",
    "topics": [
      "Array",
      "Hash Table",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 109,
    "name": "Remove Nth Node From End of List",
    "count": 54,
    "url": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    "topics": [
      "Linked List",
      "Two Pointers"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 110,
    "name": "Find All Anagrams in a String",
    "count": 53,
    "url": "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
    "topics": [
      "Hash Table",
      "String",
      "Sliding Window"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 111,
    "name": "Search a 2D Matrix",
    "count": 53,
    "url": "https://leetcode.com/problems/search-a-2d-matrix/",
    "topics": [
      "Array",
      "Binary Search",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 112,
    "name": "Rotting Oranges",
    "count": 53,
    "url": "https://leetcode.com/problems/rotting-oranges/",
    "topics": [
      "Array",
      "Breadth-First Search",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 113,
    "name": "Asteroid Collision",
    "count": 53,
    "url": "https://leetcode.com/problems/asteroid-collision/",
    "topics": [
      "Array",
      "Stack",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 114,
    "name": "Basic Calculator",
    "count": 52,
    "url": "https://leetcode.com/problems/basic-calculator/",
    "topics": [
      "Math",
      "String",
      "Stack",
      "Recursion"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 115,
    "name": "Remove All Adjacent Duplicates in String II",
    "count": 52,
    "url": "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/",
    "topics": [
      "String",
      "Stack"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 116,
    "name": "Coin Change",
    "count": 52,
    "url": "https://leetcode.com/problems/coin-change/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Breadth-First Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 117,
    "name": "Accounts Merge",
    "count": 50,
    "url": "https://leetcode.com/problems/accounts-merge/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Depth-First Search",
      "Breadth-First Search",
      "Union-Find",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 118,
    "name": "Max Stack",
    "count": 50,
    "url": "https://leetcode.com/problems/max-stack/",
    "topics": [
      "Linked List",
      "Stack",
      "Design",
      "Doubly-Linked List",
      "Ordered Set"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 119,
    "name": "Maximum Swap",
    "count": 50,
    "url": "https://leetcode.com/problems/maximum-swap/",
    "topics": [
      "Math",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 120,
    "name": "Decode Ways",
    "count": 50,
    "url": "https://leetcode.com/problems/decode-ways/",
    "topics": [
      "String",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 121,
    "name": "Min Stack",
    "count": 49,
    "url": "https://leetcode.com/problems/min-stack/",
    "topics": [
      "Stack",
      "Design"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 122,
    "name": "Integer to Roman",
    "count": 49,
    "url": "https://leetcode.com/problems/integer-to-roman/",
    "topics": [
      "Hash Table",
      "Math",
      "String"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 123,
    "name": "Reverse Integer",
    "count": 49,
    "url": "https://leetcode.com/problems/reverse-integer/",
    "topics": [
      "Math"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 124,
    "name": "String Compression",
    "count": 49,
    "url": "https://leetcode.com/problems/string-compression/",
    "topics": [
      "Two Pointers",
      "String"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 125,
    "name": "Exclusive Time of Functions",
    "count": 49,
    "url": "https://leetcode.com/problems/exclusive-time-of-functions/",
    "topics": [
      "Array",
      "Stack"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 126,
    "name": "Group Shifted Strings",
    "count": 49,
    "url": "https://leetcode.com/problems/group-shifted-strings/",
    "topics": [
      "Array",
      "Hash Table",
      "String"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 127,
    "name": "Valid Anagram",
    "count": 48,
    "url": "https://leetcode.com/problems/valid-anagram/",
    "topics": [
      "Hash Table",
      "String",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 128,
    "name": "Implement Trie",
    "count": 48,
    "url": "https://leetcode.com/problems/implement-trie-prefix-tree/",
    "topics": [
      "Hash Table",
      "String",
      "Design",
      "Trie"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 129,
    "name": "Binary Tree Level Order Traversal",
    "count": 48,
    "url": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    "topics": [
      "Tree",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 130,
    "name": "Nested List Weight Sum II",
    "count": 48,
    "url": "https://leetcode.com/problems/nested-list-weight-sum-ii/",
    "topics": [
      "Stack",
      "Depth-First Search",
      "Breadth-First Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 131,
    "name": "Palindrome Number",
    "count": 46,
    "url": "https://leetcode.com/problems/palindrome-number/",
    "topics": [
      "Math"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 132,
    "name": "Happy Number",
    "count": 46,
    "url": "https://leetcode.com/problems/happy-number/",
    "topics": [
      "Hash Table",
      "Math",
      "Two Pointers"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 133,
    "name": "Climbing Stairs",
    "count": 46,
    "url": "https://leetcode.com/problems/climbing-stairs/",
    "topics": [
      "Math",
      "Dynamic Programming",
      "Memoization"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 134,
    "name": "Sudoku Solver",
    "count": 46,
    "url": "https://leetcode.com/problems/sudoku-solver/",
    "topics": [
      "Array",
      "Hash Table",
      "Backtracking",
      "Matrix"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 135,
    "name": "Reverse Linked List",
    "count": 46,
    "url": "https://leetcode.com/problems/reverse-linked-list/",
    "topics": [
      "Linked List",
      "Recursion"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 136,
    "name": "Design Hit Counter",
    "count": 45,
    "url": "https://leetcode.com/problems/design-hit-counter/",
    "topics": [
      "Array",
      "Binary Search",
      "Design",
      "Queue",
      "Data Stream"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 137,
    "name": "Logger Rate Limiter",
    "count": 45,
    "url": "https://leetcode.com/problems/logger-rate-limiter/",
    "topics": [
      "Hash Table",
      "Design",
      "Data Stream"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 138,
    "name": "Walls and Gates",
    "count": 45,
    "url": "https://leetcode.com/problems/walls-and-gates/",
    "topics": [
      "Array",
      "Breadth-First Search",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 139,
    "name": "Reverse Words in a String",
    "count": 45,
    "url": "https://leetcode.com/problems/reverse-words-in-a-string/",
    "topics": [
      "Two Pointers",
      "String"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 140,
    "name": "Jump Game",
    "count": 45,
    "url": "https://leetcode.com/problems/jump-game/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 141,
    "name": "Sign of the Product of an Array",
    "count": 45,
    "url": "https://leetcode.com/problems/sign-of-the-product-of-an-array/",
    "topics": [
      "Array",
      "Math"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 142,
    "name": "Remove All Adjacent Duplicates In String",
    "count": 44,
    "url": "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/",
    "topics": [
      "String",
      "Stack"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 143,
    "name": "Design Tic-Tac-Toe",
    "count": 43,
    "url": "https://leetcode.com/problems/design-tic-tac-toe/",
    "topics": [
      "Array",
      "Hash Table",
      "Design",
      "Matrix",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 144,
    "name": "Permutations",
    "count": 43,
    "url": "https://leetcode.com/problems/permutations/",
    "topics": [
      "Array",
      "Backtracking"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 145,
    "name": "Snapshot Array",
    "count": 43,
    "url": "https://leetcode.com/problems/snapshot-array/",
    "topics": [
      "Array",
      "Hash Table",
      "Binary Search",
      "Design"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 146,
    "name": "Symmetric Tree",
    "count": 42,
    "url": "https://leetcode.com/problems/symmetric-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 147,
    "name": "Multiply Strings",
    "count": 42,
    "url": "https://leetcode.com/problems/multiply-strings/",
    "topics": [
      "Math",
      "String",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 148,
    "name": "Can Place Flowers",
    "count": 42,
    "url": "https://leetcode.com/problems/can-place-flowers/",
    "topics": [
      "Array",
      "Greedy"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 149,
    "name": "Find Winner on a Tic Tac Toe Game",
    "count": 41,
    "url": "https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/",
    "topics": [
      "Array",
      "Hash Table",
      "Matrix",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 150,
    "name": "Find the Duplicate Number",
    "count": 41,
    "url": "https://leetcode.com/problems/find-the-duplicate-number/",
    "topics": [
      "Array",
      "Two Pointers",
      "Binary Search",
      "Bit Manipulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 151,
    "name": "Kth Smallest Element in a Sorted Matrix",
    "count": 40,
    "url": "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
    "topics": [
      "Array",
      "Binary Search",
      "Sorting",
      "Heap (Priority Queue)",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 152,
    "name": "Longest Consecutive Sequence",
    "count": 40,
    "url": "https://leetcode.com/problems/longest-consecutive-sequence/",
    "topics": [
      "Array",
      "Hash Table",
      "Union-Find"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 153,
    "name": "Max Consecutive Ones III",
    "count": 40,
    "url": "https://leetcode.com/problems/max-consecutive-ones-iii/",
    "topics": [
      "Array",
      "Binary Search",
      "Sliding Window",
      "Prefix Sum"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 154,
    "name": "Shortest Distance from All Buildings",
    "count": 40,
    "url": "https://leetcode.com/problems/shortest-distance-from-all-buildings/",
    "topics": [
      "Array",
      "Breadth-First Search",
      "Matrix"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 155,
    "name": "Find Pivot Index",
    "count": 39,
    "url": "https://leetcode.com/problems/find-pivot-index/",
    "topics": [
      "Array",
      "Prefix Sum"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 156,
    "name": "Game of Life",
    "count": 39,
    "url": "https://leetcode.com/problems/game-of-life/",
    "topics": [
      "Array",
      "Matrix",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 157,
    "name": "Missing Number",
    "count": 39,
    "url": "https://leetcode.com/problems/missing-number/",
    "topics": [
      "Array",
      "Hash Table",
      "Math",
      "Binary Search",
      "Bit Manipulation",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 158,
    "name": "Daily Temperatures",
    "count": 39,
    "url": "https://leetcode.com/problems/daily-temperatures/",
    "topics": [
      "Array",
      "Stack",
      "Monotonic Stack"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 159,
    "name": "Binary Search",
    "count": 38,
    "url": "https://leetcode.com/problems/binary-search/",
    "topics": [
      "Array",
      "Binary Search"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 160,
    "name": "Single Number",
    "count": 38,
    "url": "https://leetcode.com/problems/single-number/",
    "topics": [
      "Array",
      "Bit Manipulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 161,
    "name": "Search Insert Position",
    "count": 38,
    "url": "https://leetcode.com/problems/search-insert-position/",
    "topics": [
      "Array",
      "Binary Search"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 162,
    "name": "Find K Closest Elements",
    "count": 38,
    "url": "https://leetcode.com/problems/find-k-closest-elements/",
    "topics": [
      "Array",
      "Two Pointers",
      "Binary Search",
      "Sliding Window",
      "Sorting",
      "Heap (Priority Queue)"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 163,
    "name": "Design In-Memory File System",
    "count": 38,
    "url": "https://leetcode.com/problems/design-in-memory-file-system/",
    "topics": [
      "Hash Table",
      "String",
      "Design",
      "Trie",
      "Sorting"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 164,
    "name": "Remove Invalid Parentheses",
    "count": 38,
    "url": "https://leetcode.com/problems/remove-invalid-parentheses/",
    "topics": [
      "String",
      "Backtracking",
      "Breadth-First Search"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 165,
    "name": "Sum Root to Leaf Numbers",
    "count": 38,
    "url": "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 166,
    "name": "Unique Paths II",
    "count": 38,
    "url": "https://leetcode.com/problems/unique-paths-ii/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 167,
    "name": "Intersection of Two Linked Lists",
    "count": 37,
    "url": "https://leetcode.com/problems/intersection-of-two-linked-lists/",
    "topics": [
      "Hash Table",
      "Linked List",
      "Two Pointers"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 168,
    "name": "Sort Colors",
    "count": 37,
    "url": "https://leetcode.com/problems/sort-colors/",
    "topics": [
      "Array",
      "Two Pointers",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 169,
    "name": "Jump Game II",
    "count": 37,
    "url": "https://leetcode.com/problems/jump-game-ii/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 170,
    "name": "Kth Missing Positive Number",
    "count": 37,
    "url": "https://leetcode.com/problems/kth-missing-positive-number/",
    "topics": [
      "Array",
      "Binary Search"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 171,
    "name": "Reorganize String",
    "count": 37,
    "url": "https://leetcode.com/problems/reorganize-string/",
    "topics": [
      "Hash Table",
      "String",
      "Greedy",
      "Sorting",
      "Heap (Priority Queue)",
      "Counting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 172,
    "name": "Design HashMap",
    "count": 37,
    "url": "https://leetcode.com/problems/design-hashmap/",
    "topics": [
      "Array",
      "Hash Table",
      "Linked List",
      "Design",
      "Hash Function"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 173,
    "name": "Fibonacci Number",
    "count": 36,
    "url": "https://leetcode.com/problems/fibonacci-number/",
    "topics": [
      "Math",
      "Dynamic Programming",
      "Recursion",
      "Memoization"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 174,
    "name": "Majority Element",
    "count": 36,
    "url": "https://leetcode.com/problems/majority-element/",
    "topics": [
      "Array",
      "Hash Table",
      "Divide and Conquer",
      "Sorting",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 175,
    "name": "Largest Rectangle in Histogram",
    "count": 36,
    "url": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    "topics": [
      "Array",
      "Stack",
      "Monotonic Stack"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 176,
    "name": "Sqrt(x)",
    "count": 36,
    "url": "https://leetcode.com/problems/sqrtx/",
    "topics": [
      "Math",
      "Binary Search"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 177,
    "name": "Pairs of Songs With Total Durations Divisible by 60",
    "count": 36,
    "url": "https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/",
    "topics": [
      "Array",
      "Hash Table",
      "Counting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 178,
    "name": "LFU Cache",
    "count": 36,
    "url": "https://leetcode.com/problems/lfu-cache/",
    "topics": [
      "Hash Table",
      "Linked List",
      "Design",
      "Doubly-Linked List"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 179,
    "name": "Best Time to Buy and Sell Stock II",
    "count": 36,
    "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 180,
    "name": "Maximum Length of Subarray With Positive Product",
    "count": 35,
    "url": "https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 181,
    "name": "Intersection of Two Arrays",
    "count": 35,
    "url": "https://leetcode.com/problems/intersection-of-two-arrays/",
    "topics": [
      "Array",
      "Hash Table",
      "Two Pointers",
      "Binary Search",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 182,
    "name": "Divide Two Integers",
    "count": 34,
    "url": "https://leetcode.com/problems/divide-two-integers/",
    "topics": [
      "Math",
      "Bit Manipulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 183,
    "name": "Flatten a Multilevel Doubly Linked List",
    "count": 34,
    "url": "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
    "topics": [
      "Linked List",
      "Depth-First Search",
      "Doubly-Linked List"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 184,
    "name": "Edit Distance",
    "count": 34,
    "url": "https://leetcode.com/problems/edit-distance/",
    "topics": [
      "String",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 185,
    "name": "Maximum Units on a Truck",
    "count": 33,
    "url": "https://leetcode.com/problems/maximum-units-on-a-truck/",
    "topics": [
      "Array",
      "Greedy",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 186,
    "name": "Concatenated Words",
    "count": 33,
    "url": "https://leetcode.com/problems/concatenated-words/",
    "topics": [
      "Array",
      "String",
      "Dynamic Programming",
      "Depth-First Search",
      "Trie",
      "Sorting"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 187,
    "name": "Lowest Common Ancestor of a Binary Search Tree",
    "count": 33,
    "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 188,
    "name": "Insert Intervals",
    "count": 33,
    "url": "https://leetcode.com/problems/insert-interval/",
    "topics": [
      "Array"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 189,
    "name": "Toeplitz Matrix",
    "count": 33,
    "url": "https://leetcode.com/problems/toeplitz-matrix/",
    "topics": [
      "Array",
      "Matrix"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 190,
    "name": "Alert Using Same Key-Card Three or More Times in a One Hour Period",
    "count": 33,
    "url": "https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 191,
    "name": "Find Minimum in Rotated Sorted Array",
    "count": 32,
    "url": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    "topics": [
      "Array",
      "Binary Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 192,
    "name": "Minimum Time Difference",
    "count": 32,
    "url": "https://leetcode.com/problems/minimum-time-difference/",
    "topics": [
      "Array",
      "Math",
      "String",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 193,
    "name": "4 Sum",
    "count": 31,
    "url": "https://leetcode.com/problems/4sum/",
    "topics": [
      "Array",
      "Two Pointers",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 194,
    "name": "The kth Factor of n",
    "count": 31,
    "url": "https://leetcode.com/problems/the-kth-factor-of-n/",
    "topics": [
      "Math",
      "Number Theory"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 195,
    "name": "Time Based Key-Value Store",
    "count": 31,
    "url": "https://leetcode.com/problems/time-based-key-value-store/",
    "topics": [
      "Hash Table",
      "String",
      "Binary Search",
      "Design"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 196,
    "name": "Battleships in a Board",
    "count": 31,
    "url": "https://leetcode.com/problems/battleships-in-a-board/",
    "topics": [
      "Array",
      "Depth-First Search",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 197,
    "name": "Maximum Depth of Binary Tree",
    "count": 31,
    "url": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 198,
    "name": "Cutting Ribbons",
    "count": 31,
    "url": "https://leetcode.com/problems/cutting-ribbons/",
    "topics": [
      "Array",
      "Binary Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 199,
    "name": "Maximum Length of Repeated Subarray",
    "count": 31,
    "url": "https://leetcode.com/problems/maximum-length-of-repeated-subarray/",
    "topics": [
      "Array",
      "Binary Search",
      "Dynamic Programming",
      "Sliding Window",
      "Rolling Hash",
      "Hash Function"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 200,
    "name": "Count Primes",
    "count": 30,
    "url": "https://leetcode.com/problems/count-primes/",
    "topics": [
      "Array",
      "Math",
      "Enumeration",
      "Number Theory"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 201,
    "name": "Swap Nodes in Pairs",
    "count": 30,
    "url": "https://leetcode.com/problems/swap-nodes-in-pairs/",
    "topics": [
      "Linked List",
      "Recursion"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 202,
    "name": "Flatten Nested List Iterator",
    "count": 30,
    "url": "https://leetcode.com/problems/flatten-nested-list-iterator/",
    "topics": [
      "Stack",
      "Tree",
      "Depth-First Search",
      "Design",
      "Queue",
      "Iterator"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 203,
    "name": "Car Pooling",
    "count": 30,
    "url": "https://leetcode.com/problems/car-pooling/",
    "topics": [
      "Array",
      "Sorting",
      "Heap (Priority Queue)",
      "Simulation",
      "Prefix Sum"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 204,
    "name": "Reconstruct Itinerary",
    "count": 30,
    "url": "https://leetcode.com/problems/reconstruct-itinerary/",
    "topics": [
      "Array",
      "String",
      "Depth-First Search",
      "Graph Theory",
      "Sorting",
      "Heap (Priority Queue)",
      "Eulerian Circuit"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 205,
    "name": "Kth Smallest Element in a BST",
    "count": 30,
    "url": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 206,
    "name": "Stock Price Fluctuation",
    "count": 30,
    "url": "https://leetcode.com/problems/stock-price-fluctuation/",
    "topics": [
      "Hash Table",
      "Design",
      "Heap (Priority Queue)",
      "Data Stream",
      "Ordered Set"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 207,
    "name": "Contains Duplicate II",
    "count": 29,
    "url": "https://leetcode.com/problems/contains-duplicate-ii/",
    "topics": [
      "Array",
      "Hash Table",
      "Sliding Window"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 208,
    "name": "N-Queens",
    "count": 29,
    "url": "https://leetcode.com/problems/n-queens/",
    "topics": [
      "Array",
      "Backtracking"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 209,
    "name": "Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit",
    "count": 29,
    "url": "https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/",
    "topics": [
      "Array",
      "Queue",
      "Sliding Window",
      "Heap (Priority Queue)",
      "Ordered Set",
      "Monotonic Queue"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 210,
    "name": "Split Array Largest Sum",
    "count": 29,
    "url": "https://leetcode.com/problems/split-array-largest-sum/",
    "topics": [
      "Array",
      "Binary Search",
      "Dynamic Programming",
      "Greedy",
      "Prefix Sum"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 211,
    "name": "Maximal Square",
    "count": 29,
    "url": "https://leetcode.com/problems/maximal-square/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 212,
    "name": "Minimum Path Sum",
    "count": 29,
    "url": "https://leetcode.com/problems/minimum-path-sum/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 213,
    "name": "Wildcard Matching",
    "count": 29,
    "url": "https://leetcode.com/problems/wildcard-matching/",
    "topics": [
      "String",
      "Dynamic Programming",
      "Greedy",
      "Recursion"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 214,
    "name": "Recover Binary Search Tree",
    "count": 28,
    "url": "https://leetcode.com/problems/recover-binary-search-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 215,
    "name": "Verifying an Alien Dictionary",
    "count": 28,
    "url": "https://leetcode.com/problems/verifying-an-alien-dictionary/",
    "topics": [
      "Array",
      "Hash Table",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 216,
    "name": "Design Search Autocomplete System",
    "count": 28,
    "url": "https://leetcode.com/problems/design-search-autocomplete-system/",
    "topics": [
      "String",
      "Depth-First Search",
      "Design",
      "Trie",
      "Sorting",
      "Heap (Priority Queue)",
      "Data Stream"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 217,
    "name": "Minimum Size Subarray Sum",
    "count": 28,
    "url": "https://leetcode.com/problems/minimum-size-subarray-sum/",
    "topics": [
      "Array",
      "Binary Search",
      "Sliding Window",
      "Prefix Sum"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 218,
    "name": "Rotate Array",
    "count": 28,
    "url": "https://leetcode.com/problems/rotate-array/",
    "topics": [
      "Array",
      "Math",
      "Two Pointers"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 219,
    "name": "Palindromic Substrings",
    "count": 28,
    "url": "https://leetcode.com/problems/palindromic-substrings/",
    "topics": [
      "Two Pointers",
      "String",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 220,
    "name": "Closest Binary Search Tree Value II",
    "count": 28,
    "url": "https://leetcode.com/problems/closest-binary-search-tree-value-ii/",
    "topics": [
      "Two Pointers",
      "Stack",
      "Tree",
      "Depth-First Search",
      "Binary Search Tree",
      "Heap (Priority Queue)",
      "Binary Tree"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 221,
    "name": "Two Sum II - Input array is sorted",
    "count": 27,
    "url": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
    "topics": [
      "Array",
      "Two Pointers",
      "Binary Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 222,
    "name": "Plus One",
    "count": 27,
    "url": "https://leetcode.com/problems/plus-one/",
    "topics": [
      "Array",
      "Math"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 223,
    "name": "Palindrome Pairs",
    "count": 27,
    "url": "https://leetcode.com/problems/palindrome-pairs/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Trie",
      "Hash Function"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 224,
    "name": "Number of 1 Bits",
    "count": 27,
    "url": "https://leetcode.com/problems/number-of-1-bits/",
    "topics": [
      "Divide and Conquer",
      "Bit Manipulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 225,
    "name": "Reverse String",
    "count": 26,
    "url": "https://leetcode.com/problems/reverse-string/",
    "topics": [
      "Two Pointers",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 226,
    "name": "Permutation in String",
    "count": 26,
    "url": "https://leetcode.com/problems/permutation-in-string/",
    "topics": [
      "Hash Table",
      "Two Pointers",
      "String",
      "Sliding Window"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 227,
    "name": "Boundary of Binary Tree",
    "count": 26,
    "url": "https://leetcode.com/problems/boundary-of-binary-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 228,
    "name": "Single Element in a Sorted Array",
    "count": 26,
    "url": "https://leetcode.com/problems/single-element-in-a-sorted-array/",
    "topics": [
      "Array",
      "Binary Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 229,
    "name": "Partition Equal Subset Sum",
    "count": 26,
    "url": "https://leetcode.com/problems/partition-equal-subset-sum/",
    "topics": [
      "Array",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 230,
    "name": "Random Pick Index",
    "count": 26,
    "url": "https://leetcode.com/problems/random-pick-index/",
    "topics": [
      "Hash Table",
      "Math",
      "Reservoir Sampling",
      "Randomized"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 231,
    "name": "Burst Balloons",
    "count": 26,
    "url": "https://leetcode.com/problems/burst-balloons/",
    "topics": [
      "Array",
      "Dynamic Programming"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 232,
    "name": "Add and Search Word - Data structure design",
    "count": 26,
    "url": "https://leetcode.com/problems/add-and-search-word-data-structure-design/",
    "topics": [
      "String",
      "Depth-First Search",
      "Design",
      "Trie"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 233,
    "name": "Linked List Cycle",
    "count": 26,
    "url": "https://leetcode.com/problems/linked-list-cycle/",
    "topics": [
      "Hash Table",
      "Linked List",
      "Two Pointers"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 234,
    "name": "Set Matrix Zeroes",
    "count": 26,
    "url": "https://leetcode.com/problems/set-matrix-zeroes/",
    "topics": [
      "Array",
      "Hash Table",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 235,
    "name": "Longest Valid Parentheses",
    "count": 26,
    "url": "https://leetcode.com/problems/longest-valid-parentheses/",
    "topics": [
      "String",
      "Dynamic Programming",
      "Stack"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 236,
    "name": "Reformat Date",
    "count": 26,
    "url": "https://leetcode.com/problems/reformat-date/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 237,
    "name": "Largest Number",
    "count": 25,
    "url": "https://leetcode.com/problems/largest-number/",
    "topics": [
      "Array",
      "String",
      "Greedy",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 238,
    "name": "Reorder List",
    "count": 25,
    "url": "https://leetcode.com/problems/reorder-list/",
    "topics": [
      "Linked List",
      "Two Pointers",
      "Stack",
      "Recursion"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 239,
    "name": "Add Binary",
    "count": 25,
    "url": "https://leetcode.com/problems/add-binary/",
    "topics": [
      "Math",
      "String",
      "Bit Manipulation",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 240,
    "name": "Last Stone Weight",
    "count": 25,
    "url": "https://leetcode.com/problems/last-stone-weight/",
    "topics": [
      "Array",
      "Heap (Priority Queue)"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 241,
    "name": "Knight Dialer",
    "count": 25,
    "url": "https://leetcode.com/problems/knight-dialer/",
    "topics": [
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 242,
    "name": "Valid Parenthesis String",
    "count": 25,
    "url": "https://leetcode.com/problems/valid-parenthesis-string/",
    "topics": [
      "String",
      "Dynamic Programming",
      "Stack",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 243,
    "name": "Remove K Digits",
    "count": 24,
    "url": "https://leetcode.com/problems/remove-k-digits/",
    "topics": [
      "String",
      "Stack",
      "Greedy",
      "Monotonic Stack"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 244,
    "name": "Reverse Linked List II",
    "count": 24,
    "url": "https://leetcode.com/problems/reverse-linked-list-ii/",
    "topics": [
      "Linked List"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 245,
    "name": "Minesweeper",
    "count": 24,
    "url": "https://leetcode.com/problems/minesweeper/",
    "topics": [
      "Array",
      "Depth-First Search",
      "Breadth-First Search",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 246,
    "name": "Delete Node in a BST",
    "count": 24,
    "url": "https://leetcode.com/problems/delete-node-in-a-bst/",
    "topics": [
      "Tree",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 247,
    "name": "Search a 2D Matrix II",
    "count": 24,
    "url": "https://leetcode.com/problems/search-a-2d-matrix-ii/",
    "topics": [
      "Array",
      "Binary Search",
      "Divide and Conquer",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 248,
    "name": "Flatten Binary Tree to Linked List",
    "count": 24,
    "url": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
    "topics": [
      "Linked List",
      "Stack",
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 249,
    "name": "Rank Teams by Votes",
    "count": 24,
    "url": "https://leetcode.com/problems/rank-teams-by-votes/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Sorting",
      "Counting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 250,
    "name": "Unique Number of Occurrences",
    "count": 23,
    "url": "https://leetcode.com/problems/unique-number-of-occurrences/",
    "topics": [
      "Array",
      "Hash Table"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 251,
    "name": "Target Sum",
    "count": 23,
    "url": "https://leetcode.com/problems/target-sum/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Backtracking"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 252,
    "name": "Maximum Twin Sum of a Linked List",
    "count": 23,
    "url": "https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/",
    "topics": [
      "Linked List",
      "Two Pointers",
      "Stack"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 253,
    "name": "Range Addition",
    "count": 23,
    "url": "https://leetcode.com/problems/range-addition/",
    "topics": [
      "Array",
      "Prefix Sum"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 254,
    "name": "Find the Celebrity",
    "count": 23,
    "url": "https://leetcode.com/problems/find-the-celebrity/",
    "topics": [
      "Two Pointers",
      "Graph Theory",
      "Interactive"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 255,
    "name": "Convert Sorted List to Binary Search Tree",
    "count": 23,
    "url": "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/",
    "topics": [
      "Linked List",
      "Divide and Conquer",
      "Tree",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 256,
    "name": "Height Checker",
    "count": 23,
    "url": "https://leetcode.com/problems/height-checker/",
    "topics": [
      "Array",
      "Sorting",
      "Counting Sort"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 257,
    "name": "Expression Add Operators",
    "count": 23,
    "url": "https://leetcode.com/problems/expression-add-operators/",
    "topics": [
      "Math",
      "String",
      "Backtracking"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 258,
    "name": "Maximum Points You Can Obtain from Cards",
    "count": 22,
    "url": "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/",
    "topics": [
      "Array",
      "Sliding Window",
      "Prefix Sum"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 259,
    "name": "Degree of an Array",
    "count": 22,
    "url": "https://leetcode.com/problems/degree-of-an-array/",
    "topics": [
      "Array",
      "Hash Table"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 260,
    "name": "Inorder Successor In BST",
    "count": 22,
    "url": "https://leetcode.com/problems/inorder-successor-in-bst/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 261,
    "name": "Find Words That Can Be Formed by Characters",
    "count": 22,
    "url": "https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 262,
    "name": "Find Duplicate Subtrees",
    "count": 22,
    "url": "https://leetcode.com/problems/find-duplicate-subtrees/",
    "topics": [
      "Hash Table",
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 263,
    "name": "All O`one Data Structure",
    "count": 22,
    "url": "https://leetcode.com/problems/all-oone-data-structure/",
    "topics": [
      "Hash Table",
      "Linked List",
      "Design",
      "Doubly-Linked List"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 264,
    "name": "Word Ladder II",
    "count": 22,
    "url": "https://leetcode.com/problems/word-ladder-ii/",
    "topics": [
      "Hash Table",
      "String",
      "Backtracking",
      "Breadth-First Search"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 265,
    "name": "Pascal's Triangle",
    "count": 22,
    "url": "https://leetcode.com/problems/pascals-triangle/",
    "topics": [
      "Array",
      "Dynamic Programming"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 266,
    "name": "Implement strStr()",
    "count": 22,
    "url": "https://leetcode.com/problems/implement-strstr/",
    "topics": [
      "Two Pointers",
      "String",
      "String Matching"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 267,
    "name": "Backspace String Compare",
    "count": 22,
    "url": "https://leetcode.com/problems/backspace-string-compare/",
    "topics": [
      "Two Pointers",
      "String",
      "Stack",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 268,
    "name": "Leftmost Column with at Least a One",
    "count": 22,
    "url": "https://leetcode.com/problems/leftmost-column-with-at-least-a-one/",
    "topics": [
      "Array",
      "Binary Search",
      "Matrix",
      "Interactive"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 269,
    "name": "Find N Unique Integers Sum up to Zero",
    "count": 22,
    "url": "https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/",
    "topics": [
      "Array",
      "Math"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 270,
    "name": "Maximum Frequency Stack",
    "count": 21,
    "url": "https://leetcode.com/problems/maximum-frequency-stack/",
    "topics": [
      "Hash Table",
      "Stack",
      "Design",
      "Ordered Set"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 271,
    "name": "Middle of the Linked List",
    "count": 21,
    "url": "https://leetcode.com/problems/middle-of-the-linked-list/",
    "topics": [
      "Linked List",
      "Two Pointers"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 272,
    "name": "Design Circular Queue",
    "count": 21,
    "url": "https://leetcode.com/problems/design-circular-queue/",
    "topics": [
      "Array",
      "Linked List",
      "Design",
      "Queue"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 273,
    "name": "Angle Between Hands of a Clock",
    "count": 21,
    "url": "https://leetcode.com/problems/angle-between-hands-of-a-clock/",
    "topics": [
      "Math"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 274,
    "name": "Minimum Swaps to Group All 1's Together",
    "count": 21,
    "url": "https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/",
    "topics": [
      "Array",
      "Sliding Window"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 275,
    "name": "Range Sum Query 2D - Immutable",
    "count": 21,
    "url": "https://leetcode.com/problems/range-sum-query-2d-immutable/",
    "topics": [
      "Array",
      "Design",
      "Matrix",
      "Prefix Sum"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 276,
    "name": "Invert Binary Tree",
    "count": 21,
    "url": "https://leetcode.com/problems/invert-binary-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 277,
    "name": "Path Sum",
    "count": 21,
    "url": "https://leetcode.com/problems/path-sum/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 278,
    "name": "Same Tree",
    "count": 21,
    "url": "https://leetcode.com/problems/same-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 279,
    "name": "Closest Binary Search Tree Value",
    "count": 21,
    "url": "https://leetcode.com/problems/closest-binary-search-tree-value/",
    "topics": [
      "Binary Search",
      "Tree",
      "Depth-First Search",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 280,
    "name": "Strobogrammatic Number",
    "count": 21,
    "url": "https://leetcode.com/problems/strobogrammatic-number/",
    "topics": [
      "Hash Table",
      "Two Pointers",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 281,
    "name": "Longest Repeating Character Replacement",
    "count": 20,
    "url": "https://leetcode.com/problems/longest-repeating-character-replacement/",
    "topics": [
      "Hash Table",
      "String",
      "Sliding Window"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 282,
    "name": "Boats to Save People",
    "count": 20,
    "url": "https://leetcode.com/problems/boats-to-save-people/",
    "topics": [
      "Array",
      "Two Pointers",
      "Greedy",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 283,
    "name": "Longest Palindromic Subsequence",
    "count": 20,
    "url": "https://leetcode.com/problems/longest-palindromic-subsequence/",
    "topics": [
      "String",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 284,
    "name": "Design Snake Game",
    "count": 20,
    "url": "https://leetcode.com/problems/design-snake-game/",
    "topics": [
      "Array",
      "Hash Table",
      "Design",
      "Queue",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 285,
    "name": "Shortest Word Distance",
    "count": 20,
    "url": "https://leetcode.com/problems/shortest-word-distance/",
    "topics": [
      "Array",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 286,
    "name": "Max Points on a Line",
    "count": 20,
    "url": "https://leetcode.com/problems/max-points-on-a-line/",
    "topics": [
      "Array",
      "Hash Table",
      "Math",
      "Geometry"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 287,
    "name": "Restore IP Addresses",
    "count": 20,
    "url": "https://leetcode.com/problems/restore-ip-addresses/",
    "topics": [
      "String",
      "Backtracking"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 288,
    "name": "Design an Ordered Stream",
    "count": 20,
    "url": "https://leetcode.com/problems/design-an-ordered-stream/",
    "topics": [
      "Array",
      "Hash Table",
      "Design",
      "Data Stream"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 289,
    "name": "Slowest Key",
    "count": 19,
    "url": "https://leetcode.com/problems/slowest-key/",
    "topics": [
      "Array",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 290,
    "name": "Design Browser History",
    "count": 19,
    "url": "https://leetcode.com/problems/design-browser-history/",
    "topics": [
      "Array",
      "Linked List",
      "Stack",
      "Design",
      "Doubly-Linked List",
      "Data Stream"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 291,
    "name": "Cinema Seat Allocation",
    "count": 19,
    "url": "https://leetcode.com/problems/cinema-seat-allocation/",
    "topics": [
      "Array",
      "Hash Table",
      "Greedy",
      "Bit Manipulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 292,
    "name": "Maximize Distance to Closest Person",
    "count": 19,
    "url": "https://leetcode.com/problems/maximize-distance-to-closest-person/",
    "topics": [
      "Array"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 293,
    "name": "Reverse Words in a String III",
    "count": 19,
    "url": "https://leetcode.com/problems/reverse-words-in-a-string-iii/",
    "topics": [
      "Two Pointers",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 294,
    "name": "Sparse Matrix Multiplication",
    "count": 19,
    "url": "https://leetcode.com/problems/sparse-matrix-multiplication/",
    "topics": [
      "Array",
      "Hash Table",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 295,
    "name": "Minimum Number of Steps to Make Two Strings Anagram",
    "count": 19,
    "url": "https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/",
    "topics": [
      "Hash Table",
      "String",
      "Counting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 296,
    "name": "License Key Formatting",
    "count": 19,
    "url": "https://leetcode.com/problems/license-key-formatting/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 297,
    "name": "Ransom Note",
    "count": 18,
    "url": "https://leetcode.com/problems/ransom-note/",
    "topics": [
      "Hash Table",
      "String",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 298,
    "name": "Odd Even Linked List",
    "count": 18,
    "url": "https://leetcode.com/problems/odd-even-linked-list/",
    "topics": [
      "Linked List"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 299,
    "name": "H-Index",
    "count": 18,
    "url": "https://leetcode.com/problems/h-index/",
    "topics": [
      "Array",
      "Sorting",
      "Counting Sort"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 300,
    "name": "Peak Index in a Mountain Array",
    "count": 18,
    "url": "https://leetcode.com/problems/peak-index-in-a-mountain-array/",
    "topics": [
      "Array",
      "Binary Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 301,
    "name": "Delete and Earn",
    "count": 18,
    "url": "https://leetcode.com/problems/delete-and-earn/",
    "topics": [
      "Array",
      "Hash Table",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 302,
    "name": "Maximum Width of Binary Tree",
    "count": 18,
    "url": "https://leetcode.com/problems/maximum-width-of-binary-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 303,
    "name": "The Maze",
    "count": 18,
    "url": "https://leetcode.com/problems/the-maze/",
    "topics": [
      "Array",
      "Depth-First Search",
      "Breadth-First Search",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 304,
    "name": "Number of Connected Components in an Undirected Graph",
    "count": 18,
    "url": "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
    "topics": [
      "Depth-First Search",
      "Breadth-First Search",
      "Union-Find",
      "Graph Theory"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 305,
    "name": "Implement Queue using Stacks",
    "count": 18,
    "url": "https://leetcode.com/problems/implement-queue-using-stacks/",
    "topics": [
      "Stack",
      "Design",
      "Queue"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 306,
    "name": "Find Largest Value in Each Tree Row",
    "count": 18,
    "url": "https://leetcode.com/problems/find-largest-value-in-each-tree-row/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 307,
    "name": "Sliding Window Median",
    "count": 18,
    "url": "https://leetcode.com/problems/sliding-window-median/",
    "topics": [
      "Array",
      "Hash Table",
      "Sliding Window",
      "Heap (Priority Queue)"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 308,
    "name": "Kth Largest Element in a Stream",
    "count": 17,
    "url": "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
    "topics": [
      "Tree",
      "Design",
      "Binary Search Tree",
      "Heap (Priority Queue)",
      "Binary Tree",
      "Data Stream"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 309,
    "name": "Intersection of Two Arrays II",
    "count": 17,
    "url": "https://leetcode.com/problems/intersection-of-two-arrays-ii/",
    "topics": [
      "Array",
      "Hash Table",
      "Two Pointers",
      "Binary Search",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 310,
    "name": "Time Needed to Inform All Employees",
    "count": 17,
    "url": "https://leetcode.com/problems/time-needed-to-inform-all-employees/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 311,
    "name": "Pacific Atlantic Water Flow",
    "count": 17,
    "url": "https://leetcode.com/problems/pacific-atlantic-water-flow/",
    "topics": [
      "Array",
      "Depth-First Search",
      "Breadth-First Search",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 312,
    "name": "Find K Pairs with Smallest Sums",
    "count": 17,
    "url": "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/",
    "topics": [
      "Array",
      "Heap (Priority Queue)"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 313,
    "name": "Sort List",
    "count": 17,
    "url": "https://leetcode.com/problems/sort-list/",
    "topics": [
      "Linked List",
      "Two Pointers",
      "Divide and Conquer",
      "Sorting",
      "Merge Sort"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 314,
    "name": "Construct Binary Tree from Preorder and Inorder Traversal",
    "count": 17,
    "url": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    "topics": [
      "Array",
      "Hash Table",
      "Divide and Conquer",
      "Tree",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 315,
    "name": "Delete Nodes And Return Forest",
    "count": 17,
    "url": "https://leetcode.com/problems/delete-nodes-and-return-forest/",
    "topics": [
      "Array",
      "Hash Table",
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 316,
    "name": "Number of Matching Subsequences",
    "count": 17,
    "url": "https://leetcode.com/problems/number-of-matching-subsequences/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Binary Search",
      "Dynamic Programming",
      "Trie",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 317,
    "name": "01 Matrix",
    "count": 16,
    "url": "https://leetcode.com/problems/01-matrix/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Breadth-First Search",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 318,
    "name": "K-diff Pairs in an Array",
    "count": 16,
    "url": "https://leetcode.com/problems/k-diff-pairs-in-an-array/",
    "topics": [
      "Array",
      "Hash Table",
      "Two Pointers",
      "Binary Search",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 319,
    "name": "Count of Smaller Numbers After Self",
    "count": 16,
    "url": "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
    "topics": [
      "Array",
      "Binary Search",
      "Divide and Conquer",
      "Binary Indexed Tree",
      "Segment Tree",
      "Merge Sort",
      "Ordered Set"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 320,
    "name": "Remove Duplicates from Sorted List",
    "count": 16,
    "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
    "topics": [
      "Linked List"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 321,
    "name": "Count and Say",
    "count": 16,
    "url": "https://leetcode.com/problems/count-and-say/",
    "topics": [
      "String"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 322,
    "name": "Optimal Account Balancing",
    "count": 16,
    "url": "https://leetcode.com/problems/optimal-account-balancing/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Backtracking",
      "Bit Manipulation",
      "Bitmask"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 323,
    "name": "Longest Common Subsequence",
    "count": 16,
    "url": "https://leetcode.com/problems/longest-common-subsequence/",
    "topics": [
      "String",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 324,
    "name": "Number of Distinct Islands",
    "count": 16,
    "url": "https://leetcode.com/problems/number-of-distinct-islands/",
    "topics": [
      "Array",
      "Hash Table",
      "Depth-First Search",
      "Breadth-First Search",
      "Union-Find",
      "Sorting",
      "Matrix",
      "Hash Function"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 325,
    "name": "Subtree of Another Tree",
    "count": 16,
    "url": "https://leetcode.com/problems/subtree-of-another-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "String Matching",
      "Binary Tree",
      "Hash Function"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 326,
    "name": "Find All Numbers Disappeared in an Array",
    "count": 16,
    "url": "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
    "topics": [
      "Array",
      "Hash Table"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 327,
    "name": "Peeking Iterator",
    "count": 16,
    "url": "https://leetcode.com/problems/peeking-iterator/",
    "topics": [
      "Array",
      "Design",
      "Iterator"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 328,
    "name": "Count Complete Tree Nodes",
    "count": 16,
    "url": "https://leetcode.com/problems/count-complete-tree-nodes/",
    "topics": [
      "Binary Search",
      "Bit Manipulation",
      "Tree",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 329,
    "name": "Isomorphic Strings",
    "count": 16,
    "url": "https://leetcode.com/problems/isomorphic-strings/",
    "topics": [
      "Hash Table",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 330,
    "name": "Path Sum II",
    "count": 16,
    "url": "https://leetcode.com/problems/path-sum-ii/",
    "topics": [
      "Backtracking",
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 331,
    "name": "Two City Scheduling",
    "count": 16,
    "url": "https://leetcode.com/problems/two-city-scheduling/",
    "topics": [
      "Array",
      "Greedy",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 332,
    "name": "Expressive Words",
    "count": 16,
    "url": "https://leetcode.com/problems/expressive-words/",
    "topics": [
      "Array",
      "Two Pointers",
      "String"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 333,
    "name": "Making File Names Unique",
    "count": 16,
    "url": "https://leetcode.com/problems/making-file-names-unique/",
    "topics": [
      "Array",
      "Hash Table",
      "String"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 334,
    "name": "Read N Characters Given Read4 II - Call multiple times",
    "count": 16,
    "url": "https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/",
    "topics": [
      "Array",
      "Simulation",
      "Interactive"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 335,
    "name": "Find Original Array From Doubled Array",
    "count": 16,
    "url": "https://leetcode.com/problems/find-original-array-from-doubled-array/",
    "topics": [
      "Array",
      "Hash Table",
      "Greedy",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 336,
    "name": "Find All Duplicates in an Array",
    "count": 15,
    "url": "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
    "topics": [
      "Array",
      "Hash Table",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 337,
    "name": "Balanced Binary Tree",
    "count": 15,
    "url": "https://leetcode.com/problems/balanced-binary-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 338,
    "name": "Remove Element",
    "count": 15,
    "url": "https://leetcode.com/problems/remove-element/",
    "topics": [
      "Array",
      "Two Pointers"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 339,
    "name": "Fraction to Recurring Decimal",
    "count": 15,
    "url": "https://leetcode.com/problems/fraction-to-recurring-decimal/",
    "topics": [
      "Hash Table",
      "Math",
      "String"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 340,
    "name": "Score of Parentheses",
    "count": 15,
    "url": "https://leetcode.com/problems/score-of-parentheses/",
    "topics": [
      "String",
      "Stack"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 341,
    "name": "Island Perimeter",
    "count": 15,
    "url": "https://leetcode.com/problems/island-perimeter/",
    "topics": [
      "Array",
      "Depth-First Search",
      "Breadth-First Search",
      "Matrix"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 342,
    "name": "Add Two Numbers II",
    "count": 15,
    "url": "https://leetcode.com/problems/add-two-numbers-ii/",
    "topics": [
      "Linked List",
      "Math",
      "Stack"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 343,
    "name": "Frog Jump",
    "count": 15,
    "url": "https://leetcode.com/problems/frog-jump/",
    "topics": [
      "Array",
      "Dynamic Programming"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 344,
    "name": "Graph Valid Tree",
    "count": 15,
    "url": "https://leetcode.com/problems/graph-valid-tree/",
    "topics": [
      "Depth-First Search",
      "Breadth-First Search",
      "Union-Find",
      "Graph Theory"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 345,
    "name": "Compare Version Numbers",
    "count": 15,
    "url": "https://leetcode.com/problems/compare-version-numbers/",
    "topics": [
      "Two Pointers",
      "String"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 346,
    "name": "Interleaving String",
    "count": 15,
    "url": "https://leetcode.com/problems/interleaving-string/",
    "topics": [
      "String",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 347,
    "name": "Combination Sum II",
    "count": 15,
    "url": "https://leetcode.com/problems/combination-sum-ii/",
    "topics": [
      "Array",
      "Backtracking"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 348,
    "name": "Buddy Strings",
    "count": 15,
    "url": "https://leetcode.com/problems/buddy-strings/",
    "topics": [
      "Hash Table",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 349,
    "name": "House Robber III",
    "count": 14,
    "url": "https://leetcode.com/problems/house-robber-iii/",
    "topics": [
      "Dynamic Programming",
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 350,
    "name": "Search in Rotated Sorted Array II",
    "count": 14,
    "url": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
    "topics": [
      "Array",
      "Binary Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 351,
    "name": "Sort Array by Increasing Frequency",
    "count": 14,
    "url": "https://leetcode.com/problems/sort-array-by-increasing-frequency/",
    "topics": [
      "Array",
      "Hash Table",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 352,
    "name": "Least Number of Unique Integers after K Removals",
    "count": 14,
    "url": "https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/",
    "topics": [
      "Array",
      "Hash Table",
      "Greedy",
      "Sorting",
      "Counting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 353,
    "name": "Product of the Last K Numbers",
    "count": 14,
    "url": "https://leetcode.com/problems/product-of-the-last-k-numbers/",
    "topics": [
      "Array",
      "Math",
      "Design",
      "Data Stream",
      "Prefix Sum"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 354,
    "name": "Monotonic Array",
    "count": 14,
    "url": "https://leetcode.com/problems/monotonic-array/",
    "topics": [
      "Array"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 355,
    "name": "Partition to K Equal Sum Subsets",
    "count": 14,
    "url": "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Backtracking",
      "Bit Manipulation",
      "Memoization",
      "Bitmask"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 356,
    "name": "Merge Two Binary Trees",
    "count": 14,
    "url": "https://leetcode.com/problems/merge-two-binary-trees/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 357,
    "name": "Contiguous Array",
    "count": 14,
    "url": "https://leetcode.com/problems/contiguous-array/",
    "topics": [
      "Array",
      "Hash Table",
      "Prefix Sum"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 358,
    "name": "Sort Characters By Frequency",
    "count": 14,
    "url": "https://leetcode.com/problems/sort-characters-by-frequency/",
    "topics": [
      "Hash Table",
      "String",
      "Sorting",
      "Heap (Priority Queue)",
      "Bucket Sort",
      "Counting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 359,
    "name": "Power of Two",
    "count": 14,
    "url": "https://leetcode.com/problems/power-of-two/",
    "topics": [
      "Math",
      "Bit Manipulation",
      "Recursion"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 360,
    "name": "Best Time to Buy and Sell Stock IV",
    "count": 14,
    "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",
    "topics": [
      "Array",
      "Dynamic Programming"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 361,
    "name": "Dungeon Game",
    "count": 14,
    "url": "https://leetcode.com/problems/dungeon-game/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Matrix"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 362,
    "name": "Combinations",
    "count": 14,
    "url": "https://leetcode.com/problems/combinations/",
    "topics": [
      "Backtracking"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 363,
    "name": "Candy Crush",
    "count": 14,
    "url": "https://leetcode.com/problems/candy-crush/",
    "topics": [
      "Array",
      "Two Pointers",
      "Matrix",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 364,
    "name": "Path Sum III",
    "count": 14,
    "url": "https://leetcode.com/problems/path-sum-iii/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 365,
    "name": "Bulls and Cows",
    "count": 14,
    "url": "https://leetcode.com/problems/bulls-and-cows/",
    "topics": [
      "Hash Table",
      "String",
      "Counting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 366,
    "name": "One Edit Distance",
    "count": 14,
    "url": "https://leetcode.com/problems/one-edit-distance/",
    "topics": [
      "Two Pointers",
      "String"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 367,
    "name": "Student Attendance Record II",
    "count": 14,
    "url": "https://leetcode.com/problems/student-attendance-record-ii/",
    "topics": [
      "Dynamic Programming"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 368,
    "name": "4Sum II",
    "count": 13,
    "url": "https://leetcode.com/problems/4sum-ii/",
    "topics": [
      "Array",
      "Hash Table"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 369,
    "name": "Binary Tree Inorder Traversal",
    "count": 13,
    "url": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    "topics": [
      "Stack",
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 370,
    "name": "Non-overlapping Intervals",
    "count": 13,
    "url": "https://leetcode.com/problems/non-overlapping-intervals/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Greedy",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 371,
    "name": "Maximum Size Subarray Sum Equals k",
    "count": 13,
    "url": "https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/",
    "topics": [
      "Array",
      "Hash Table",
      "Prefix Sum"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 372,
    "name": "House Robber II",
    "count": 13,
    "url": "https://leetcode.com/problems/house-robber-ii/",
    "topics": [
      "Array",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 373,
    "name": "Read N Characters Given Read4",
    "count": 13,
    "url": "https://leetcode.com/problems/read-n-characters-given-read4/",
    "topics": [
      "Array",
      "Simulation",
      "Interactive"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 374,
    "name": "Palindrome Partitioning",
    "count": 13,
    "url": "https://leetcode.com/problems/palindrome-partitioning/",
    "topics": [
      "String",
      "Dynamic Programming",
      "Backtracking"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 375,
    "name": "Rotate String",
    "count": 13,
    "url": "https://leetcode.com/problems/rotate-string/",
    "topics": [
      "String",
      "String Matching"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 376,
    "name": "Reverse Bits",
    "count": 13,
    "url": "https://leetcode.com/problems/reverse-bits/",
    "topics": [
      "Divide and Conquer",
      "Bit Manipulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 377,
    "name": "Surrounded Regions",
    "count": 13,
    "url": "https://leetcode.com/problems/surrounded-regions/",
    "topics": [
      "Array",
      "Depth-First Search",
      "Breadth-First Search",
      "Union-Find",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 378,
    "name": "Add Bold Tag in String",
    "count": 13,
    "url": "https://leetcode.com/problems/add-bold-tag-in-string/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Trie",
      "String Matching"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 379,
    "name": "Minimum Moves to Equal Array Elements",
    "count": 13,
    "url": "https://leetcode.com/problems/minimum-moves-to-equal-array-elements/",
    "topics": [
      "Array",
      "Math"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 380,
    "name": "Count Good Nodes in Binary Tree",
    "count": 13,
    "url": "https://leetcode.com/problems/count-good-nodes-in-binary-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 381,
    "name": "Design a Stack With Increment Operation",
    "count": 13,
    "url": "https://leetcode.com/problems/design-a-stack-with-increment-operation/",
    "topics": [
      "Array",
      "Stack",
      "Design"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 382,
    "name": "Build Array from Permutation",
    "count": 12,
    "url": "https://leetcode.com/problems/build-array-from-permutation/",
    "topics": [
      "Array",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 383,
    "name": "Is Subsequence",
    "count": 12,
    "url": "https://leetcode.com/problems/is-subsequence/",
    "topics": [
      "Two Pointers",
      "String",
      "Dynamic Programming"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 384,
    "name": "Insert Delete GetRandom O(1) - Duplicates allowed",
    "count": 12,
    "url": "https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/",
    "topics": [
      "Array",
      "Hash Table",
      "Math",
      "Design",
      "Randomized"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 385,
    "name": "Design Parking System",
    "count": 12,
    "url": "https://leetcode.com/problems/design-parking-system/",
    "topics": [
      "Design",
      "Simulation",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 386,
    "name": "Reorder Routes to Make All Paths Lead to the City Zero",
    "count": 12,
    "url": "https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/",
    "topics": [
      "Depth-First Search",
      "Breadth-First Search",
      "Graph Theory"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 387,
    "name": "Count Number of Teams",
    "count": 12,
    "url": "https://leetcode.com/problems/count-number-of-teams/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Binary Indexed Tree",
      "Segment Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 388,
    "name": "Subarray Sums Divisible by K",
    "count": 12,
    "url": "https://leetcode.com/problems/subarray-sums-divisible-by-k/",
    "topics": [
      "Array",
      "Hash Table",
      "Prefix Sum"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 389,
    "name": "Monotone Increasing Digits",
    "count": 12,
    "url": "https://leetcode.com/problems/monotone-increasing-digits/",
    "topics": [
      "Math",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 390,
    "name": "Task Scheduler",
    "count": 12,
    "url": "https://leetcode.com/problems/task-scheduler/",
    "topics": [
      "Array",
      "Hash Table",
      "Greedy",
      "Sorting",
      "Heap (Priority Queue)",
      "Counting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 391,
    "name": "Validate IP Address",
    "count": 12,
    "url": "https://leetcode.com/problems/validate-ip-address/",
    "topics": [
      "String"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 392,
    "name": "Binary Tree Paths",
    "count": 12,
    "url": "https://leetcode.com/problems/binary-tree-paths/",
    "topics": [
      "String",
      "Backtracking",
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 393,
    "name": "Paint House",
    "count": 12,
    "url": "https://leetcode.com/problems/paint-house/",
    "topics": [
      "Array",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 394,
    "name": "Best Time to Buy and Sell Stock III",
    "count": 12,
    "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
    "topics": [
      "Array",
      "Dynamic Programming"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 395,
    "name": "Spiral Matrix II",
    "count": 12,
    "url": "https://leetcode.com/problems/spiral-matrix-ii/",
    "topics": [
      "Array",
      "Matrix",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 396,
    "name": "Substring with Concatenation of All Words",
    "count": 12,
    "url": "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
    "topics": [
      "Hash Table",
      "String",
      "Sliding Window"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 397,
    "name": "Coin Change 2",
    "count": 12,
    "url": "https://leetcode.com/problems/coin-change-2/",
    "topics": [
      "Array",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 398,
    "name": "Rotating the Box",
    "count": 12,
    "url": "https://leetcode.com/problems/rotating-the-box/",
    "topics": [
      "Array",
      "Two Pointers",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 399,
    "name": "Palindrome Permutation",
    "count": 12,
    "url": "https://leetcode.com/problems/palindrome-permutation/",
    "topics": [
      "Hash Table",
      "String",
      "Bit Manipulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 400,
    "name": "High Five",
    "count": 12,
    "url": "https://leetcode.com/problems/high-five/",
    "topics": [
      "Array",
      "Hash Table",
      "Sorting",
      "Heap (Priority Queue)"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 401,
    "name": "Min Cost Climbing Stairs",
    "count": 11,
    "url": "https://leetcode.com/problems/min-cost-climbing-stairs/",
    "topics": [
      "Array",
      "Dynamic Programming"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 402,
    "name": "Word Pattern",
    "count": 11,
    "url": "https://leetcode.com/problems/word-pattern/",
    "topics": [
      "Hash Table",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 403,
    "name": "Remove Linked List Elements",
    "count": 11,
    "url": "https://leetcode.com/problems/remove-linked-list-elements/",
    "topics": [
      "Linked List",
      "Recursion"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 404,
    "name": "ZigZag Conversion",
    "count": 11,
    "url": "https://leetcode.com/problems/zigzag-conversion/",
    "topics": [
      "String"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 405,
    "name": "Jump Game IV",
    "count": 11,
    "url": "https://leetcode.com/problems/jump-game-iv/",
    "topics": [
      "Array",
      "Hash Table",
      "Breadth-First Search"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 406,
    "name": "All Elements in Two Binary Search Trees",
    "count": 11,
    "url": "https://leetcode.com/problems/all-elements-in-two-binary-search-trees/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Search Tree",
      "Sorting",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 407,
    "name": "Construct Binary Search Tree from Preorder Traversal",
    "count": 11,
    "url": "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/",
    "topics": [
      "Array",
      "Stack",
      "Tree",
      "Binary Search Tree",
      "Monotonic Stack",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 408,
    "name": "Network Delay Time",
    "count": 11,
    "url": "https://leetcode.com/problems/network-delay-time/",
    "topics": [
      "Depth-First Search",
      "Breadth-First Search",
      "Graph Theory",
      "Heap (Priority Queue)",
      "Shortest Path"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 409,
    "name": "My Calendar I",
    "count": 11,
    "url": "https://leetcode.com/problems/my-calendar-i/",
    "topics": [
      "Array",
      "Binary Search",
      "Design",
      "Segment Tree",
      "Ordered Set"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 410,
    "name": "Average of Levels in Binary Tree",
    "count": 11,
    "url": "https://leetcode.com/problems/average-of-levels-in-binary-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 411,
    "name": "Encode and Decode TinyURL",
    "count": 11,
    "url": "https://leetcode.com/problems/encode-and-decode-tinyurl/",
    "topics": [
      "Hash Table",
      "String",
      "Design",
      "Hash Function"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 412,
    "name": "Find the Difference",
    "count": 11,
    "url": "https://leetcode.com/problems/find-the-difference/",
    "topics": [
      "Hash Table",
      "String",
      "Bit Manipulation",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 413,
    "name": "Combination Sum IV",
    "count": 11,
    "url": "https://leetcode.com/problems/combination-sum-iv/",
    "topics": [
      "Array",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 414,
    "name": "Zigzag Iterator",
    "count": 11,
    "url": "https://leetcode.com/problems/zigzag-iterator/",
    "topics": [
      "Array",
      "Design",
      "Queue",
      "Iterator"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 415,
    "name": "Convert Sorted Array to Binary Search Tree",
    "count": 11,
    "url": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
    "topics": [
      "Array",
      "Divide and Conquer",
      "Tree",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 416,
    "name": "Zuma Game",
    "count": 11,
    "url": "https://leetcode.com/problems/zuma-game/",
    "topics": [
      "String",
      "Dynamic Programming",
      "Stack",
      "Breadth-First Search",
      "Memoization"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 417,
    "name": "Largest BST Subtree",
    "count": 11,
    "url": "https://leetcode.com/problems/largest-bst-subtree/",
    "topics": [
      "Dynamic Programming",
      "Tree",
      "Depth-First Search",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 418,
    "name": "The Skyline Problem",
    "count": 11,
    "url": "https://leetcode.com/problems/the-skyline-problem/",
    "topics": [
      "Array",
      "Divide and Conquer",
      "Binary Indexed Tree",
      "Segment Tree",
      "Sweep Line",
      "Sorting",
      "Heap (Priority Queue)",
      "Ordered Set"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 419,
    "name": "Balance a Binary Search Tree",
    "count": 11,
    "url": "https://leetcode.com/problems/balance-a-binary-search-tree/",
    "topics": [
      "Divide and Conquer",
      "Greedy",
      "Tree",
      "Depth-First Search",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 420,
    "name": "Check Completeness of a Binary Tree",
    "count": 11,
    "url": "https://leetcode.com/problems/check-completeness-of-a-binary-tree/",
    "topics": [
      "Tree",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 421,
    "name": "Second Minimum Node In a Binary Tree",
    "count": 11,
    "url": "https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 422,
    "name": "Online Stock Span",
    "count": 10,
    "url": "https://leetcode.com/problems/online-stock-span/",
    "topics": [
      "Stack",
      "Design",
      "Monotonic Stack",
      "Data Stream"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 423,
    "name": "Elimination Game",
    "count": 10,
    "url": "https://leetcode.com/problems/elimination-game/",
    "topics": [
      "Math",
      "Recursion"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 424,
    "name": "Contains Duplicate III",
    "count": 10,
    "url": "https://leetcode.com/problems/contains-duplicate-iii/",
    "topics": [
      "Array",
      "Sliding Window",
      "Sorting",
      "Bucket Sort",
      "Ordered Set"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 425,
    "name": "Increasing Decreasing String",
    "count": 10,
    "url": "https://leetcode.com/problems/increasing-decreasing-string/",
    "topics": [
      "Hash Table",
      "String",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 426,
    "name": "Furthest Building You Can Reach",
    "count": 10,
    "url": "https://leetcode.com/problems/furthest-building-you-can-reach/",
    "topics": [
      "Array",
      "Greedy",
      "Heap (Priority Queue)"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 427,
    "name": "Distribute Coins in Binary Tree",
    "count": 10,
    "url": "https://leetcode.com/problems/distribute-coins-in-binary-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 428,
    "name": "Trim a Binary Search Tree",
    "count": 10,
    "url": "https://leetcode.com/problems/trim-a-binary-search-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 429,
    "name": "Kill Process",
    "count": 10,
    "url": "https://leetcode.com/problems/kill-process/",
    "topics": [
      "Array",
      "Hash Table",
      "Tree",
      "Depth-First Search",
      "Breadth-First Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 430,
    "name": "Remove Duplicate Letters",
    "count": 10,
    "url": "https://leetcode.com/problems/remove-duplicate-letters/",
    "topics": [
      "String",
      "Stack",
      "Greedy",
      "Monotonic Stack"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 431,
    "name": "Remove Duplicates from Sorted List II",
    "count": 10,
    "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
    "topics": [
      "Linked List",
      "Two Pointers"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 432,
    "name": "Excel Sheet Column Number",
    "count": 10,
    "url": "https://leetcode.com/problems/excel-sheet-column-number/",
    "topics": [
      "Math",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 433,
    "name": "Count Square Submatrices with All Ones",
    "count": 10,
    "url": "https://leetcode.com/problems/count-square-submatrices-with-all-ones/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 434,
    "name": "The Number of Weak Characters in the Game",
    "count": 10,
    "url": "https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/",
    "topics": [
      "Array",
      "Stack",
      "Greedy",
      "Sorting",
      "Monotonic Stack"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 435,
    "name": "Rearrange String k Distance Apart",
    "count": 10,
    "url": "https://leetcode.com/problems/rearrange-string-k-distance-apart/",
    "topics": [
      "Hash Table",
      "String",
      "Greedy",
      "Sorting",
      "Heap (Priority Queue)",
      "Counting"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 436,
    "name": "Sort Transformed Array",
    "count": 10,
    "url": "https://leetcode.com/problems/sort-transformed-array/",
    "topics": [
      "Array",
      "Math",
      "Two Pointers",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 437,
    "name": "Finding the Users Active Minutes",
    "count": 10,
    "url": "https://leetcode.com/problems/finding-the-users-active-minutes/",
    "topics": [
      "Array",
      "Hash Table"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 438,
    "name": "Majority Element II",
    "count": 9,
    "url": "https://leetcode.com/problems/majority-element-ii/",
    "topics": [
      "Array",
      "Hash Table",
      "Sorting",
      "Counting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 439,
    "name": "Subsets II",
    "count": 9,
    "url": "https://leetcode.com/problems/subsets-ii/",
    "topics": [
      "Array",
      "Backtracking",
      "Bit Manipulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 440,
    "name": "Flatten 2D Vector",
    "count": 9,
    "url": "https://leetcode.com/problems/flatten-2d-vector/",
    "topics": [
      "Array",
      "Two Pointers",
      "Design",
      "Iterator"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 441,
    "name": "Remove All Occurrences of a Substring",
    "count": 9,
    "url": "https://leetcode.com/problems/remove-all-occurrences-of-a-substring/",
    "topics": [
      "String",
      "Stack",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 442,
    "name": "Maximum Sum Circular Subarray",
    "count": 9,
    "url": "https://leetcode.com/problems/maximum-sum-circular-subarray/",
    "topics": [
      "Array",
      "Divide and Conquer",
      "Dynamic Programming",
      "Queue",
      "Monotonic Queue"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 443,
    "name": "Transpose Matrix",
    "count": 9,
    "url": "https://leetcode.com/problems/transpose-matrix/",
    "topics": [
      "Array",
      "Matrix",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 444,
    "name": "Lemonade Change",
    "count": 9,
    "url": "https://leetcode.com/problems/lemonade-change/",
    "topics": [
      "Array",
      "Greedy"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 445,
    "name": "Shopping Offers",
    "count": 9,
    "url": "https://leetcode.com/problems/shopping-offers/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Backtracking",
      "Bit Manipulation",
      "Memoization",
      "Bitmask"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 446,
    "name": "Strong Password Checker",
    "count": 9,
    "url": "https://leetcode.com/problems/strong-password-checker/",
    "topics": [
      "String",
      "Greedy",
      "Heap (Priority Queue)"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 447,
    "name": "Longest Absolute File Path",
    "count": 9,
    "url": "https://leetcode.com/problems/longest-absolute-file-path/",
    "topics": [
      "String",
      "Stack",
      "Depth-First Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 448,
    "name": "Counting Bits",
    "count": 9,
    "url": "https://leetcode.com/problems/counting-bits/",
    "topics": [
      "Dynamic Programming",
      "Bit Manipulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 449,
    "name": "Range Sum Query - Mutable",
    "count": 9,
    "url": "https://leetcode.com/problems/range-sum-query-mutable/",
    "topics": [
      "Array",
      "Divide and Conquer",
      "Design",
      "Binary Indexed Tree",
      "Segment Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 450,
    "name": "Linked List Cycle II",
    "count": 9,
    "url": "https://leetcode.com/problems/linked-list-cycle-ii/",
    "topics": [
      "Hash Table",
      "Linked List",
      "Two Pointers"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 451,
    "name": "Distinct Subsequences",
    "count": 9,
    "url": "https://leetcode.com/problems/distinct-subsequences/",
    "topics": [
      "String",
      "Dynamic Programming"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 452,
    "name": "Maximal Rectangle",
    "count": 9,
    "url": "https://leetcode.com/problems/maximal-rectangle/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Stack",
      "Matrix",
      "Monotonic Stack"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 453,
    "name": "Maximum Difference Between Increasing Elements",
    "count": 9,
    "url": "https://leetcode.com/problems/maximum-difference-between-increasing-elements/",
    "topics": [
      "Array"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 454,
    "name": "Strobogrammatic Number II",
    "count": 9,
    "url": "https://leetcode.com/problems/strobogrammatic-number-ii/",
    "topics": [
      "Array",
      "String",
      "Recursion"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 455,
    "name": "Russian Doll Envelopes",
    "count": 9,
    "url": "https://leetcode.com/problems/russian-doll-envelopes/",
    "topics": [
      "Array",
      "Binary Search",
      "Dynamic Programming",
      "Sorting"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 456,
    "name": "Equal Sum Arrays With Minimum Number of Operations",
    "count": 9,
    "url": "https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/",
    "topics": [
      "Array",
      "Hash Table",
      "Greedy",
      "Counting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 457,
    "name": "Binary Tree Upside Down",
    "count": 9,
    "url": "https://leetcode.com/problems/binary-tree-upside-down/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 458,
    "name": "Remove Colored Pieces if Both Neighbors are the Same Color",
    "count": 9,
    "url": "https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/",
    "topics": [
      "Math",
      "String",
      "Greedy",
      "Game Theory"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 459,
    "name": "Count Odd Numbers in an Interval Range",
    "count": 8,
    "url": "https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/",
    "topics": [
      "Math"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 460,
    "name": "Number of Good Pairs",
    "count": 8,
    "url": "https://leetcode.com/problems/number-of-good-pairs/",
    "topics": [
      "Array",
      "Hash Table",
      "Math",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 461,
    "name": "Split a String in Balanced Strings",
    "count": 8,
    "url": "https://leetcode.com/problems/split-a-string-in-balanced-strings/",
    "topics": [
      "String",
      "Greedy",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 462,
    "name": "Find the Town Judge",
    "count": 8,
    "url": "https://leetcode.com/problems/find-the-town-judge/",
    "topics": [
      "Array",
      "Hash Table",
      "Graph Theory"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 463,
    "name": "Swapping Nodes in a Linked List",
    "count": 8,
    "url": "https://leetcode.com/problems/swapping-nodes-in-a-linked-list/",
    "topics": [
      "Linked List",
      "Two Pointers"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 464,
    "name": "Maximum Product of Splitted Binary Tree",
    "count": 8,
    "url": "https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 465,
    "name": "Maximum Difference Between Node and Ancestor",
    "count": 8,
    "url": "https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 466,
    "name": "Validate Stack Sequences",
    "count": 8,
    "url": "https://leetcode.com/problems/validate-stack-sequences/",
    "topics": [
      "Array",
      "Stack",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 467,
    "name": "Keys and Rooms",
    "count": 8,
    "url": "https://leetcode.com/problems/keys-and-rooms/",
    "topics": [
      "Depth-First Search",
      "Breadth-First Search",
      "Graph Theory"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 468,
    "name": "Find Smallest Letter Greater Than Target",
    "count": 8,
    "url": "https://leetcode.com/problems/find-smallest-letter-greater-than-target/",
    "topics": [
      "Array",
      "Binary Search"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 469,
    "name": "Subarray Product Less Than K",
    "count": 8,
    "url": "https://leetcode.com/problems/subarray-product-less-than-k/",
    "topics": [
      "Array",
      "Binary Search",
      "Sliding Window",
      "Prefix Sum"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 470,
    "name": "Shortest Unsorted Continuous Subarray",
    "count": 8,
    "url": "https://leetcode.com/problems/shortest-unsorted-continuous-subarray/",
    "topics": [
      "Array",
      "Two Pointers",
      "Stack",
      "Greedy",
      "Sorting",
      "Monotonic Stack"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 471,
    "name": "Friend Circles",
    "count": 8,
    "url": "https://leetcode.com/problems/friend-circles/",
    "topics": [
      "Depth-First Search",
      "Breadth-First Search",
      "Union Find",
      "Graph"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 472,
    "name": "Convert BST to Greater Tree",
    "count": 8,
    "url": "https://leetcode.com/problems/convert-bst-to-greater-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 473,
    "name": "Perfect Squares",
    "count": 8,
    "url": "https://leetcode.com/problems/perfect-squares/",
    "topics": [
      "Math",
      "Dynamic Programming",
      "Breadth-First Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 474,
    "name": "Excel Sheet Column Title",
    "count": 8,
    "url": "https://leetcode.com/problems/excel-sheet-column-title/",
    "topics": [
      "Math",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 475,
    "name": "Candy",
    "count": 8,
    "url": "https://leetcode.com/problems/candy/",
    "topics": [
      "Array",
      "Greedy"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 476,
    "name": "Employee Importance",
    "count": 8,
    "url": "https://leetcode.com/problems/employee-importance/",
    "topics": [
      "Array",
      "Hash Table",
      "Tree",
      "Depth-First Search",
      "Breadth-First Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 477,
    "name": "Find Duplicate File in System",
    "count": 8,
    "url": "https://leetcode.com/problems/find-duplicate-file-in-system/",
    "topics": [
      "Array",
      "Hash Table",
      "String"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 478,
    "name": "Fizz Buzz",
    "count": 8,
    "url": "https://leetcode.com/problems/fizz-buzz/",
    "topics": [
      "Math",
      "String",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 479,
    "name": "Shortest Palindrome",
    "count": 8,
    "url": "https://leetcode.com/problems/shortest-palindrome/",
    "topics": [
      "String",
      "Rolling Hash",
      "String Matching",
      "Hash Function"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 480,
    "name": "Different Ways to Add Parentheses",
    "count": 8,
    "url": "https://leetcode.com/problems/different-ways-to-add-parentheses/",
    "topics": [
      "Math",
      "String",
      "Dynamic Programming",
      "Recursion",
      "Memoization"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 481,
    "name": "Set Intersection Size At Least Two",
    "count": 8,
    "url": "https://leetcode.com/problems/set-intersection-size-at-least-two/",
    "topics": [
      "Array",
      "Greedy",
      "Sorting"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 482,
    "name": "Best Meeting Point",
    "count": 8,
    "url": "https://leetcode.com/problems/best-meeting-point/",
    "topics": [
      "Array",
      "Math",
      "Sorting",
      "Matrix"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 483,
    "name": "Lowest Common Ancestor of a Binary Tree II",
    "count": 8,
    "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 484,
    "name": "Minimum Insertions to Balance a Parentheses String",
    "count": 8,
    "url": "https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/",
    "topics": [
      "String",
      "Stack",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 485,
    "name": "Missing Ranges",
    "count": 8,
    "url": "https://leetcode.com/problems/missing-ranges/",
    "topics": [
      "Array"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 486,
    "name": "Valid Square",
    "count": 8,
    "url": "https://leetcode.com/problems/valid-square/",
    "topics": [
      "Math",
      "Geometry"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 487,
    "name": "Sentence Screen Fitting",
    "count": 8,
    "url": "https://leetcode.com/problems/sentence-screen-fitting/",
    "topics": [
      "Array",
      "String",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 488,
    "name": "Number of Digit One",
    "count": 8,
    "url": "https://leetcode.com/problems/number-of-digit-one/",
    "topics": [
      "Math",
      "Dynamic Programming",
      "Recursion"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 489,
    "name": "Summary Ranges",
    "count": 8,
    "url": "https://leetcode.com/problems/summary-ranges/",
    "topics": [
      "Array"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 490,
    "name": "Sum of All Odd Length Subarrays",
    "count": 7,
    "url": "https://leetcode.com/problems/sum-of-all-odd-length-subarrays/",
    "topics": [
      "Array",
      "Math",
      "Prefix Sum"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 491,
    "name": "Partition Array for Maximum Sum",
    "count": 7,
    "url": "https://leetcode.com/problems/partition-array-for-maximum-sum/",
    "topics": [
      "Array",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 492,
    "name": "Jewels and Stones",
    "count": 7,
    "url": "https://leetcode.com/problems/jewels-and-stones/",
    "topics": [
      "Hash Table",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 493,
    "name": "Self Dividing Numbers",
    "count": 7,
    "url": "https://leetcode.com/problems/self-dividing-numbers/",
    "topics": [
      "Math"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 494,
    "name": "Arithmetic Slices II - Subsequence",
    "count": 7,
    "url": "https://leetcode.com/problems/arithmetic-slices-ii-subsequence/",
    "topics": [
      "Array",
      "Dynamic Programming"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 495,
    "name": "Smallest Common Region",
    "count": 7,
    "url": "https://leetcode.com/problems/smallest-common-region/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Tree",
      "Depth-First Search",
      "Breadth-First Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 496,
    "name": "Find if Path Exists in Graph",
    "count": 7,
    "url": "https://leetcode.com/problems/find-if-path-exists-in-graph/",
    "topics": [
      "Depth-First Search",
      "Breadth-First Search",
      "Union-Find",
      "Graph Theory"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 497,
    "name": "Design an Expression Tree With Evaluate Function",
    "count": 7,
    "url": "https://leetcode.com/problems/design-an-expression-tree-with-evaluate-function/",
    "topics": [
      "Array",
      "Math",
      "Stack",
      "Tree",
      "Design",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 498,
    "name": "Water Bottles",
    "count": 7,
    "url": "https://leetcode.com/problems/water-bottles/",
    "topics": [
      "Math",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 499,
    "name": "Maximum Number of Events That Can Be Attended",
    "count": 7,
    "url": "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/",
    "topics": [
      "Array",
      "Greedy",
      "Sorting",
      "Heap (Priority Queue)"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 500,
    "name": "Next Greater Node In Linked List",
    "count": 7,
    "url": "https://leetcode.com/problems/next-greater-node-in-linked-list/",
    "topics": [
      "Array",
      "Linked List",
      "Stack",
      "Monotonic Stack"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 501,
    "name": "Cousins in Binary Tree",
    "count": 7,
    "url": "https://leetcode.com/problems/cousins-in-binary-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 502,
    "name": "Insert into a Binary Search Tree",
    "count": 7,
    "url": "https://leetcode.com/problems/insert-into-a-binary-search-tree/",
    "topics": [
      "Tree",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 503,
    "name": "2 Keys Keyboard",
    "count": 7,
    "url": "https://leetcode.com/problems/2-keys-keyboard/",
    "topics": [
      "Math",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 504,
    "name": "Solve the Equation",
    "count": 7,
    "url": "https://leetcode.com/problems/solve-the-equation/",
    "topics": [
      "Math",
      "String",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 505,
    "name": "Serialize and Deserialize BST",
    "count": 7,
    "url": "https://leetcode.com/problems/serialize-and-deserialize-bst/",
    "topics": [
      "String",
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Design",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 506,
    "name": "Design Twitter",
    "count": 7,
    "url": "https://leetcode.com/problems/design-twitter/",
    "topics": [
      "Hash Table",
      "Linked List",
      "Design",
      "Heap (Priority Queue)"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 507,
    "name": "Binary Tree Longest Consecutive Sequence",
    "count": 7,
    "url": "https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 508,
    "name": "Repeated DNA Sequences",
    "count": 7,
    "url": "https://leetcode.com/problems/repeated-dna-sequences/",
    "topics": [
      "Hash Table",
      "String",
      "Bit Manipulation",
      "Sliding Window",
      "Rolling Hash",
      "Hash Function"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 509,
    "name": "Triangle",
    "count": 7,
    "url": "https://leetcode.com/problems/triangle/",
    "topics": [
      "Array",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 510,
    "name": "Permutations II",
    "count": 7,
    "url": "https://leetcode.com/problems/permutations-ii/",
    "topics": [
      "Array",
      "Backtracking",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 511,
    "name": "Maximum Nesting Depth of the Parentheses",
    "count": 7,
    "url": "https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/",
    "topics": [
      "String",
      "Stack"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 512,
    "name": "Rotate List",
    "count": 7,
    "url": "https://leetcode.com/problems/rotate-list/",
    "topics": [
      "Linked List",
      "Two Pointers"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 513,
    "name": "Word Pattern II",
    "count": 7,
    "url": "https://leetcode.com/problems/word-pattern-ii/",
    "topics": [
      "Hash Table",
      "String",
      "Backtracking"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 514,
    "name": "Closest Dessert Cost",
    "count": 7,
    "url": "https://leetcode.com/problems/closest-dessert-cost/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Backtracking"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 515,
    "name": "Element Appearing More Than 25% In Sorted Array",
    "count": 7,
    "url": "https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/",
    "topics": [
      "Array"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 516,
    "name": "Maximum Average Subarray I",
    "count": 7,
    "url": "https://leetcode.com/problems/maximum-average-subarray-i/",
    "topics": [
      "Array",
      "Sliding Window"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 517,
    "name": "Construct Binary Tree from String",
    "count": 7,
    "url": "https://leetcode.com/problems/construct-binary-tree-from-string/",
    "topics": [
      "String",
      "Stack",
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 518,
    "name": "Number of Students Unable to Eat Lunch",
    "count": 7,
    "url": "https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/",
    "topics": [
      "Array",
      "Stack",
      "Queue",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 519,
    "name": "Destination City",
    "count": 7,
    "url": "https://leetcode.com/problems/destination-city/",
    "topics": [
      "Array",
      "Hash Table",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 520,
    "name": "Minimum Absolute Difference",
    "count": 7,
    "url": "https://leetcode.com/problems/minimum-absolute-difference/",
    "topics": [
      "Array",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 521,
    "name": "Strange Printer",
    "count": 7,
    "url": "https://leetcode.com/problems/strange-printer/",
    "topics": [
      "String",
      "Dynamic Programming"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 522,
    "name": "Lonely Pixel I",
    "count": 7,
    "url": "https://leetcode.com/problems/lonely-pixel-i/",
    "topics": [
      "Array",
      "Hash Table",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 523,
    "name": "Number of Islands II",
    "count": 7,
    "url": "https://leetcode.com/problems/number-of-islands-ii/",
    "topics": [
      "Array",
      "Hash Table",
      "Union-Find"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 524,
    "name": "Smallest Rectangle Enclosing Black Pixels",
    "count": 7,
    "url": "https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/",
    "topics": [
      "Array",
      "Binary Search",
      "Depth-First Search",
      "Breadth-First Search",
      "Matrix"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 525,
    "name": "Bulb Switcher",
    "count": 7,
    "url": "https://leetcode.com/problems/bulb-switcher/",
    "topics": [
      "Math",
      "Brainteaser"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 526,
    "name": "Verify Preorder Sequence in Binary Search Tree",
    "count": 7,
    "url": "https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/",
    "topics": [
      "Array",
      "Stack",
      "Tree",
      "Binary Search Tree",
      "Recursion",
      "Monotonic Stack",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 527,
    "name": "Maximum Product of Three Numbers",
    "count": 7,
    "url": "https://leetcode.com/problems/maximum-product-of-three-numbers/",
    "topics": [
      "Array",
      "Math",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 528,
    "name": "Construct K Palindrome Strings",
    "count": 7,
    "url": "https://leetcode.com/problems/construct-k-palindrome-strings/",
    "topics": [
      "Hash Table",
      "String",
      "Greedy",
      "Counting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 529,
    "name": "Minimum ASCII Delete Sum for Two Strings",
    "count": 6,
    "url": "https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/",
    "topics": [
      "String",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 530,
    "name": "Concatenation of Array",
    "count": 6,
    "url": "https://leetcode.com/problems/concatenation-of-array/",
    "topics": [
      "Array",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 531,
    "name": "Complement of Base 10 Integer",
    "count": 6,
    "url": "https://leetcode.com/problems/complement-of-base-10-integer/",
    "topics": [
      "Bit Manipulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 532,
    "name": "Champagne Tower",
    "count": 6,
    "url": "https://leetcode.com/problems/champagne-tower/",
    "topics": [
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 533,
    "name": "Rabbits in Forest",
    "count": 6,
    "url": "https://leetcode.com/problems/rabbits-in-forest/",
    "topics": [
      "Array",
      "Hash Table",
      "Math",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 534,
    "name": "Guess Number Higher or Lower",
    "count": 6,
    "url": "https://leetcode.com/problems/guess-number-higher-or-lower/",
    "topics": [
      "Binary Search",
      "Interactive"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 535,
    "name": "Pour Water",
    "count": 6,
    "url": "https://leetcode.com/problems/pour-water/",
    "topics": [
      "Array",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 536,
    "name": "Number of Laser Beams in a Bank",
    "count": 6,
    "url": "https://leetcode.com/problems/number-of-laser-beams-in-a-bank/",
    "topics": [
      "Array",
      "Math",
      "String",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 537,
    "name": "Plates Between Candles",
    "count": 6,
    "url": "https://leetcode.com/problems/plates-between-candles/",
    "topics": [
      "Array",
      "String",
      "Binary Search",
      "Prefix Sum"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 538,
    "name": "Shortest Subarray to be Removed to Make Array Sorted",
    "count": 6,
    "url": "https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/",
    "topics": [
      "Array",
      "Two Pointers",
      "Binary Search",
      "Stack",
      "Monotonic Stack"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 539,
    "name": "First Unique Number",
    "count": 6,
    "url": "https://leetcode.com/problems/first-unique-number/",
    "topics": [
      "Array",
      "Hash Table",
      "Design",
      "Queue",
      "Data Stream"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 540,
    "name": "Longest ZigZag Path in a Binary Tree",
    "count": 6,
    "url": "https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/",
    "topics": [
      "Dynamic Programming",
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 541,
    "name": "Synonymous Sentences",
    "count": 6,
    "url": "https://leetcode.com/problems/synonymous-sentences/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Backtracking",
      "Sort",
      "Union-Find"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 542,
    "name": "Two Sum Less Than K",
    "count": 6,
    "url": "https://leetcode.com/problems/two-sum-less-than-k/",
    "topics": [
      "Array",
      "Two Pointers",
      "Binary Search",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 543,
    "name": "Brace Expansion",
    "count": 6,
    "url": "https://leetcode.com/problems/brace-expansion/",
    "topics": [
      "String",
      "Backtracking",
      "Stack",
      "Breadth-First Search",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 544,
    "name": "Sum of Root To Leaf Binary Numbers",
    "count": 6,
    "url": "https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 545,
    "name": "Partition Labels",
    "count": 6,
    "url": "https://leetcode.com/problems/partition-labels/",
    "topics": [
      "Hash Table",
      "Two Pointers",
      "String",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 546,
    "name": "Split Linked List in Parts",
    "count": 6,
    "url": "https://leetcode.com/problems/split-linked-list-in-parts/",
    "topics": [
      "Linked List"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 547,
    "name": "Valid Triangle Number",
    "count": 6,
    "url": "https://leetcode.com/problems/valid-triangle-number/",
    "topics": [
      "Array",
      "Two Pointers",
      "Binary Search",
      "Greedy",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 548,
    "name": "Third Maximum Number",
    "count": 6,
    "url": "https://leetcode.com/problems/third-maximum-number/",
    "topics": [
      "Array",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 549,
    "name": "Rotate Function",
    "count": 6,
    "url": "https://leetcode.com/problems/rotate-function/",
    "topics": [
      "Array",
      "Math",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 550,
    "name": "Meeting Rooms",
    "count": 6,
    "url": "https://leetcode.com/problems/meeting-rooms/",
    "topics": [
      "Array",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 551,
    "name": "Factorial Trailing Zeroes",
    "count": 6,
    "url": "https://leetcode.com/problems/factorial-trailing-zeroes/",
    "topics": [
      "Math"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 552,
    "name": "Longest Substring with At Most Two Distinct Characters",
    "count": 6,
    "url": "https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/",
    "topics": [
      "Hash Table",
      "String",
      "Sliding Window"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 553,
    "name": "Number of Steps to Reduce a Number to Zero",
    "count": 6,
    "url": "https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/",
    "topics": [
      "Math",
      "Bit Manipulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 554,
    "name": "Binary Tree Pruning",
    "count": 6,
    "url": "https://leetcode.com/problems/binary-tree-pruning/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 555,
    "name": "Perfect Rectangle",
    "count": 6,
    "url": "https://leetcode.com/problems/perfect-rectangle/",
    "topics": [
      "Array",
      "Hash Table",
      "Math",
      "Geometry",
      "Sweep Line"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 556,
    "name": "Super Ugly Number",
    "count": 6,
    "url": "https://leetcode.com/problems/super-ugly-number/",
    "topics": [
      "Array",
      "Math",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 557,
    "name": "Maximum Population Year",
    "count": 6,
    "url": "https://leetcode.com/problems/maximum-population-year/",
    "topics": [
      "Array",
      "Counting",
      "Prefix Sum"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 558,
    "name": "Find the Winner of the Circular Game",
    "count": 6,
    "url": "https://leetcode.com/problems/find-the-winner-of-the-circular-game/",
    "topics": [
      "Array",
      "Math",
      "Recursion",
      "Queue",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 559,
    "name": "Minimum Depth of Binary Tree",
    "count": 6,
    "url": "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 560,
    "name": "The Maze II",
    "count": 6,
    "url": "https://leetcode.com/problems/the-maze-ii/",
    "topics": [
      "Array",
      "Depth-First Search",
      "Breadth-First Search",
      "Graph Theory",
      "Heap (Priority Queue)",
      "Matrix",
      "Shortest Path"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 561,
    "name": "Rectangle Overlap",
    "count": 6,
    "url": "https://leetcode.com/problems/rectangle-overlap/",
    "topics": [
      "Math",
      "Geometry"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 562,
    "name": "Find Target Indices After Sorting Array",
    "count": 6,
    "url": "https://leetcode.com/problems/find-target-indices-after-sorting-array/",
    "topics": [
      "Array",
      "Binary Search",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 563,
    "name": "Rotated Digits",
    "count": 6,
    "url": "https://leetcode.com/problems/rotated-digits/",
    "topics": [
      "Math",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 564,
    "name": "Minimum Number of Arrows to Burst Balloons",
    "count": 6,
    "url": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
    "topics": [
      "Array",
      "Greedy",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 565,
    "name": "Paint House II",
    "count": 6,
    "url": "https://leetcode.com/problems/paint-house-ii/",
    "topics": [
      "Array",
      "Dynamic Programming"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 566,
    "name": "Rings and Rods",
    "count": 6,
    "url": "https://leetcode.com/problems/rings-and-rods/",
    "topics": [
      "Hash Table",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 567,
    "name": "Longest Word in Dictionary",
    "count": 6,
    "url": "https://leetcode.com/problems/longest-word-in-dictionary/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Trie",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 568,
    "name": "Design Excel Sum Formula",
    "count": 6,
    "url": "https://leetcode.com/problems/design-excel-sum-formula/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Graph Theory",
      "Design",
      "Topological Sort",
      "Matrix"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 569,
    "name": "Valid Perfect Square",
    "count": 6,
    "url": "https://leetcode.com/problems/valid-perfect-square/",
    "topics": [
      "Math",
      "Binary Search"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 570,
    "name": "Bulb Switcher III",
    "count": 6,
    "url": "https://leetcode.com/problems/bulb-switcher-iii/",
    "topics": [
      "Array",
      "Prefix Sum"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 571,
    "name": "Most Visited Sector in a Circular Track",
    "count": 6,
    "url": "https://leetcode.com/problems/most-visited-sector-in-a-circular-track/",
    "topics": [
      "Array",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 572,
    "name": "Unique Email Addresses",
    "count": 6,
    "url": "https://leetcode.com/problems/unique-email-addresses/",
    "topics": [
      "Array",
      "Hash Table",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 573,
    "name": "Check if Every Row and Column Contains All Numbers",
    "count": 6,
    "url": "https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/",
    "topics": [
      "Array",
      "Hash Table",
      "Matrix"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 574,
    "name": "Count Servers that Communicate",
    "count": 6,
    "url": "https://leetcode.com/problems/count-servers-that-communicate/",
    "topics": [
      "Array",
      "Depth-First Search",
      "Breadth-First Search",
      "Union-Find",
      "Matrix",
      "Counting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 575,
    "name": "Tweet Counts Per Frequency",
    "count": 6,
    "url": "https://leetcode.com/problems/tweet-counts-per-frequency/",
    "topics": [
      "Hash Table",
      "String",
      "Binary Search",
      "Design",
      "Sorting",
      "Ordered Set"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 576,
    "name": "Count Items Matching a Rule",
    "count": 5,
    "url": "https://leetcode.com/problems/count-items-matching-a-rule/",
    "topics": [
      "Array",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 577,
    "name": "Count Good Meals",
    "count": 5,
    "url": "https://leetcode.com/problems/count-good-meals/",
    "topics": [
      "Array",
      "Hash Table"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 578,
    "name": "Number of Substrings Containing All Three Characters",
    "count": 5,
    "url": "https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/",
    "topics": [
      "Hash Table",
      "String",
      "Sliding Window"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 579,
    "name": "Nim Game",
    "count": 5,
    "url": "https://leetcode.com/problems/nim-game/",
    "topics": [
      "Math",
      "Brainteaser",
      "Game Theory"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 580,
    "name": "Find the Smallest Divisor Given a Threshold",
    "count": 5,
    "url": "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/",
    "topics": [
      "Array",
      "Binary Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 581,
    "name": "Pyramid Transition Matrix",
    "count": 5,
    "url": "https://leetcode.com/problems/pyramid-transition-matrix/",
    "topics": [
      "Hash Table",
      "String",
      "Backtracking",
      "Bit Manipulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 582,
    "name": "Minimum Operations to Reduce X to Zero",
    "count": 5,
    "url": "https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/",
    "topics": [
      "Array",
      "Hash Table",
      "Binary Search",
      "Sliding Window",
      "Prefix Sum"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 583,
    "name": "Shuffle the Array",
    "count": 5,
    "url": "https://leetcode.com/problems/shuffle-the-array/",
    "topics": [
      "Array"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 584,
    "name": "Rearrange Words in a Sentence",
    "count": 5,
    "url": "https://leetcode.com/problems/rearrange-words-in-a-sentence/",
    "topics": [
      "String",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 585,
    "name": "String Matching in an Array",
    "count": 5,
    "url": "https://leetcode.com/problems/string-matching-in-an-array/",
    "topics": [
      "Array",
      "String",
      "String Matching"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 586,
    "name": "Create Target Array in the Given Order",
    "count": 5,
    "url": "https://leetcode.com/problems/create-target-array-in-the-given-order/",
    "topics": [
      "Array",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 587,
    "name": "Number of Days Between Two Dates",
    "count": 5,
    "url": "https://leetcode.com/problems/number-of-days-between-two-dates/",
    "topics": [
      "Math",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 588,
    "name": "Decompress Run-Length Encoded List",
    "count": 5,
    "url": "https://leetcode.com/problems/decompress-run-length-encoded-list/",
    "topics": [
      "Array"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 589,
    "name": "Sequential Digits",
    "count": 5,
    "url": "https://leetcode.com/problems/sequential-digits/",
    "topics": [
      "Enumeration"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 590,
    "name": "Unique Paths III",
    "count": 5,
    "url": "https://leetcode.com/problems/unique-paths-iii/",
    "topics": [
      "Array",
      "Backtracking",
      "Bit Manipulation",
      "Matrix"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 591,
    "name": "Sort an Array",
    "count": 5,
    "url": "https://leetcode.com/problems/sort-an-array/",
    "topics": [
      "Array",
      "Divide and Conquer",
      "Sorting",
      "Heap (Priority Queue)",
      "Merge Sort",
      "Bucket Sort",
      "Radix Sort",
      "Counting Sort"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 592,
    "name": "Max Increase to Keep City Skyline",
    "count": 5,
    "url": "https://leetcode.com/problems/max-increase-to-keep-city-skyline/",
    "topics": [
      "Array",
      "Greedy",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 593,
    "name": "Reach a Number",
    "count": 5,
    "url": "https://leetcode.com/problems/reach-a-number/",
    "topics": [
      "Math",
      "Binary Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 594,
    "name": "Best Time to Buy and Sell Stock with Transaction Fee",
    "count": 5,
    "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 595,
    "name": "Design HashSet",
    "count": 5,
    "url": "https://leetcode.com/problems/design-hashset/",
    "topics": [
      "Array",
      "Hash Table",
      "Linked List",
      "Design",
      "Hash Function"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 596,
    "name": "Cut Off Trees for Golf Event",
    "count": 5,
    "url": "https://leetcode.com/problems/cut-off-trees-for-golf-event/",
    "topics": [
      "Array",
      "Breadth-First Search",
      "Heap (Priority Queue)",
      "Matrix"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 597,
    "name": "Print Binary Tree",
    "count": 5,
    "url": "https://leetcode.com/problems/print-binary-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 598,
    "name": "Longest Substring with At Least K Repeating Characters",
    "count": 5,
    "url": "https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/",
    "topics": [
      "Hash Table",
      "String",
      "Divide and Conquer",
      "Sliding Window"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 599,
    "name": "Linked List Random Node",
    "count": 5,
    "url": "https://leetcode.com/problems/linked-list-random-node/",
    "topics": [
      "Linked List",
      "Math",
      "Reservoir Sampling",
      "Randomized"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 600,
    "name": "Self Crossing",
    "count": 5,
    "url": "https://leetcode.com/problems/self-crossing/",
    "topics": [
      "Array",
      "Math",
      "Geometry"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 601,
    "name": "Delete Node in a Linked List",
    "count": 5,
    "url": "https://leetcode.com/problems/delete-node-in-a-linked-list/",
    "topics": [
      "Linked List"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 602,
    "name": "Single Number II",
    "count": 5,
    "url": "https://leetcode.com/problems/single-number-ii/",
    "topics": [
      "Array",
      "Bit Manipulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 603,
    "name": "Length of Last Word",
    "count": 5,
    "url": "https://leetcode.com/problems/length-of-last-word/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 604,
    "name": "Reducing Dishes",
    "count": 5,
    "url": "https://leetcode.com/problems/reducing-dishes/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Greedy",
      "Sorting"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 605,
    "name": "Consecutive Characters",
    "count": 5,
    "url": "https://leetcode.com/problems/consecutive-characters/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 606,
    "name": "Minimum Index Sum of Two Lists",
    "count": 5,
    "url": "https://leetcode.com/problems/minimum-index-sum-of-two-lists/",
    "topics": [
      "Array",
      "Hash Table",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 607,
    "name": "Increasing Subsequences",
    "count": 5,
    "url": "https://leetcode.com/problems/increasing-subsequences/",
    "topics": [
      "Array",
      "Hash Table",
      "Backtracking",
      "Bit Manipulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 608,
    "name": "Greatest Common Divisor of Strings",
    "count": 5,
    "url": "https://leetcode.com/problems/greatest-common-divisor-of-strings/",
    "topics": [
      "Math",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 609,
    "name": "Check if All Characters Have Equal Number of Occurrences",
    "count": 5,
    "url": "https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/",
    "topics": [
      "Hash Table",
      "String",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 610,
    "name": "Additive Number",
    "count": 5,
    "url": "https://leetcode.com/problems/additive-number/",
    "topics": [
      "String",
      "Backtracking"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 611,
    "name": "Palindrome Permutation II",
    "count": 5,
    "url": "https://leetcode.com/problems/palindrome-permutation-ii/",
    "topics": [
      "Hash Table",
      "String",
      "Backtracking"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 612,
    "name": "Maximum Number of Coins You Can Get",
    "count": 5,
    "url": "https://leetcode.com/problems/maximum-number-of-coins-you-can-get/",
    "topics": [
      "Array",
      "Math",
      "Greedy",
      "Sorting",
      "Game Theory"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 613,
    "name": "Process Restricted Friend Requests",
    "count": 5,
    "url": "https://leetcode.com/problems/process-restricted-friend-requests/",
    "topics": [
      "Union-Find",
      "Graph Theory"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 614,
    "name": "Check if the Sentence Is Pangram",
    "count": 5,
    "url": "https://leetcode.com/problems/check-if-the-sentence-is-pangram/",
    "topics": [
      "Hash Table",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 615,
    "name": "Maximum Product of Two Elements in an Array",
    "count": 5,
    "url": "https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/",
    "topics": [
      "Array",
      "Sorting",
      "Heap (Priority Queue)"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 616,
    "name": "Rank Transform of an Array",
    "count": 5,
    "url": "https://leetcode.com/problems/rank-transform-of-an-array/",
    "topics": [
      "Array",
      "Hash Table",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 617,
    "name": "Uncommon Words from Two Sentences",
    "count": 5,
    "url": "https://leetcode.com/problems/uncommon-words-from-two-sentences/",
    "topics": [
      "Hash Table",
      "String",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 618,
    "name": "Goat Latin",
    "count": 5,
    "url": "https://leetcode.com/problems/goat-latin/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 619,
    "name": "Implement Magic Dictionary",
    "count": 5,
    "url": "https://leetcode.com/problems/implement-magic-dictionary/",
    "topics": [
      "Hash Table",
      "String",
      "Depth-First Search",
      "Design",
      "Trie"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 620,
    "name": "Increasing Triplet Subsequence",
    "count": 5,
    "url": "https://leetcode.com/problems/increasing-triplet-subsequence/",
    "topics": [
      "Array",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 621,
    "name": "Encode and Decode Strings",
    "count": 5,
    "url": "https://leetcode.com/problems/encode-and-decode-strings/",
    "topics": [
      "Array",
      "String",
      "Design"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 622,
    "name": "Fraction Addition and Subtraction",
    "count": 5,
    "url": "https://leetcode.com/problems/fraction-addition-and-subtraction/",
    "topics": [
      "Math",
      "String",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 623,
    "name": "Count Sorted Vowel Strings",
    "count": 5,
    "url": "https://leetcode.com/problems/count-sorted-vowel-strings/",
    "topics": [
      "Math",
      "Dynamic Programming",
      "Combinatorics"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 624,
    "name": "Path with Maximum Probability",
    "count": 5,
    "url": "https://leetcode.com/problems/path-with-maximum-probability/",
    "topics": [
      "Array",
      "Graph Theory",
      "Heap (Priority Queue)",
      "Shortest Path"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 625,
    "name": "Reformat The String",
    "count": 5,
    "url": "https://leetcode.com/problems/reformat-the-string/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 626,
    "name": "Minimum Falling Path Sum II",
    "count": 5,
    "url": "https://leetcode.com/problems/minimum-falling-path-sum-ii/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Matrix"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 627,
    "name": "24 Game",
    "count": 5,
    "url": "https://leetcode.com/problems/24-game/",
    "topics": [
      "Array",
      "Math",
      "Backtracking"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 628,
    "name": "Longest Line of Consecutive One in Matrix",
    "count": 5,
    "url": "https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 629,
    "name": "Student Attendance Record I",
    "count": 5,
    "url": "https://leetcode.com/problems/student-attendance-record-i/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 630,
    "name": "Number of Boomerangs",
    "count": 5,
    "url": "https://leetcode.com/problems/number-of-boomerangs/",
    "topics": [
      "Array",
      "Hash Table",
      "Math"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 631,
    "name": "Count Univalue Subtrees",
    "count": 5,
    "url": "https://leetcode.com/problems/count-univalue-subtrees/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 632,
    "name": "Factor Combinations",
    "count": 5,
    "url": "https://leetcode.com/problems/factor-combinations/",
    "topics": [
      "Backtracking"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 633,
    "name": "Max Consecutive Ones II",
    "count": 5,
    "url": "https://leetcode.com/problems/max-consecutive-ones-ii/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Sliding Window"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 634,
    "name": "Minimum Moves to Equal Array Elements II",
    "count": 5,
    "url": "https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/",
    "topics": [
      "Array",
      "Math",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 635,
    "name": "Android Unlock Patterns",
    "count": 5,
    "url": "https://leetcode.com/problems/android-unlock-patterns/",
    "topics": [
      "Dynamic Programming",
      "Backtracking",
      "Bit Manipulation",
      "Bitmask"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 636,
    "name": "Design Log Storage System",
    "count": 5,
    "url": "https://leetcode.com/problems/design-log-storage-system/",
    "topics": [
      "Hash Table",
      "String",
      "Design",
      "Ordered Set"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 637,
    "name": "Subtract the Product and Sum of Digits of an Integer",
    "count": 5,
    "url": "https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/",
    "topics": [
      "Math"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 638,
    "name": "IPO",
    "count": 5,
    "url": "https://leetcode.com/problems/ipo/",
    "topics": [
      "Array",
      "Greedy",
      "Sorting",
      "Heap (Priority Queue)"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 639,
    "name": "Sorting the Sentence",
    "count": 4,
    "url": "https://leetcode.com/problems/sorting-the-sentence/",
    "topics": [
      "String",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 640,
    "name": "Maximum Absolute Sum of Any Subarray",
    "count": 4,
    "url": "https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/",
    "topics": [
      "Array",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 641,
    "name": "3Sum With Multiplicity",
    "count": 4,
    "url": "https://leetcode.com/problems/3sum-with-multiplicity/",
    "topics": [
      "Array",
      "Hash Table",
      "Two Pointers",
      "Sorting",
      "Counting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 642,
    "name": "Array Nesting",
    "count": 4,
    "url": "https://leetcode.com/problems/array-nesting/",
    "topics": [
      "Array",
      "Depth-First Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 643,
    "name": "Total Hamming Distance",
    "count": 4,
    "url": "https://leetcode.com/problems/total-hamming-distance/",
    "topics": [
      "Array",
      "Math",
      "Bit Manipulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 644,
    "name": "Maximum XOR of Two Numbers in an Array",
    "count": 4,
    "url": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",
    "topics": [
      "Array",
      "Hash Table",
      "Bit Manipulation",
      "Trie"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 645,
    "name": "Binary Tree Preorder Traversal",
    "count": 4,
    "url": "https://leetcode.com/problems/binary-tree-preorder-traversal/",
    "topics": [
      "Stack",
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 646,
    "name": "Permutation Sequence",
    "count": 4,
    "url": "https://leetcode.com/problems/permutation-sequence/",
    "topics": [
      "Math",
      "Recursion"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 647,
    "name": "Tag Validator",
    "count": 4,
    "url": "https://leetcode.com/problems/tag-validator/",
    "topics": [
      "String",
      "Stack"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 648,
    "name": "Number of Smooth Descent Periods of a Stock",
    "count": 4,
    "url": "https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/",
    "topics": [
      "Array",
      "Math",
      "Two Pointers",
      "Dynamic Programming",
      "Sliding Window"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 649,
    "name": "Matrix Diagonal Sum",
    "count": 4,
    "url": "https://leetcode.com/problems/matrix-diagonal-sum/",
    "topics": [
      "Array",
      "Matrix"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 650,
    "name": "Minimum Number of Vertices to Reach All Nodes",
    "count": 4,
    "url": "https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/",
    "topics": [
      "Graph Theory"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 651,
    "name": "Minimum Value to Get Positive Step by Step Sum",
    "count": 4,
    "url": "https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/",
    "topics": [
      "Array",
      "Prefix Sum"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 652,
    "name": "Frog Position After T Seconds",
    "count": 4,
    "url": "https://leetcode.com/problems/frog-position-after-t-seconds/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Graph Theory"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 653,
    "name": "Linked List in Binary Tree",
    "count": 4,
    "url": "https://leetcode.com/problems/linked-list-in-binary-tree/",
    "topics": [
      "Linked List",
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 654,
    "name": "How Many Numbers Are Smaller Than the Current Number",
    "count": 4,
    "url": "https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/",
    "topics": [
      "Array",
      "Hash Table",
      "Sorting",
      "Counting Sort"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 655,
    "name": "Convert Binary Number in a Linked List to Integer",
    "count": 4,
    "url": "https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/",
    "topics": [
      "Linked List",
      "Math"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 656,
    "name": "Defanging an IP Address",
    "count": 4,
    "url": "https://leetcode.com/problems/defanging-an-ip-address/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 657,
    "name": "Find K-Length Substrings With No Repeated Characters",
    "count": 4,
    "url": "https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/",
    "topics": [
      "Hash Table",
      "String",
      "Sliding Window"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 658,
    "name": "Campus Bikes II",
    "count": 4,
    "url": "https://leetcode.com/problems/campus-bikes-ii/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Backtracking",
      "Bit Manipulation",
      "Bitmask"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 659,
    "name": "Binary Search Tree to Greater Sum Tree",
    "count": 4,
    "url": "https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 660,
    "name": "Video Stitching",
    "count": 4,
    "url": "https://leetcode.com/problems/video-stitching/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 661,
    "name": "Find Common Characters",
    "count": 4,
    "url": "https://leetcode.com/problems/find-common-characters/",
    "topics": [
      "Array",
      "Hash Table",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 662,
    "name": "Fruit Into Baskets",
    "count": 4,
    "url": "https://leetcode.com/problems/fruit-into-baskets/",
    "topics": [
      "Array",
      "Hash Table",
      "Sliding Window"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 663,
    "name": "Fair Candy Swap",
    "count": 4,
    "url": "https://leetcode.com/problems/fair-candy-swap/",
    "topics": [
      "Array",
      "Hash Table",
      "Binary Search",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 664,
    "name": "Short Encoding of Words",
    "count": 4,
    "url": "https://leetcode.com/problems/short-encoding-of-words/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Trie"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 665,
    "name": "Max Chunks To Make Sorted",
    "count": 4,
    "url": "https://leetcode.com/problems/max-chunks-to-make-sorted/",
    "topics": [
      "Array",
      "Stack",
      "Greedy",
      "Sorting",
      "Monotonic Stack"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 666,
    "name": "Longest Univalue Path",
    "count": 4,
    "url": "https://leetcode.com/problems/longest-univalue-path/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 667,
    "name": "Number of Longest Increasing Subsequence",
    "count": 4,
    "url": "https://leetcode.com/problems/number-of-longest-increasing-subsequence/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Binary Indexed Tree",
      "Segment Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 668,
    "name": "Two Sum IV - Input is a BST",
    "count": 4,
    "url": "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/",
    "topics": [
      "Hash Table",
      "Two Pointers",
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 669,
    "name": "Maximum Length of Pair Chain",
    "count": 4,
    "url": "https://leetcode.com/problems/maximum-length-of-pair-chain/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Greedy",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 670,
    "name": "Sum of Square Numbers",
    "count": 4,
    "url": "https://leetcode.com/problems/sum-of-square-numbers/",
    "topics": [
      "Math",
      "Two Pointers",
      "Binary Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 671,
    "name": "Out of Boundary Paths",
    "count": 4,
    "url": "https://leetcode.com/problems/out-of-boundary-paths/",
    "topics": [
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 672,
    "name": "Detect Capital",
    "count": 4,
    "url": "https://leetcode.com/problems/detect-capital/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 673,
    "name": "Number Complement",
    "count": 4,
    "url": "https://leetcode.com/problems/number-complement/",
    "topics": [
      "Bit Manipulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 674,
    "name": "Heaters",
    "count": 4,
    "url": "https://leetcode.com/problems/heaters/",
    "topics": [
      "Array",
      "Two Pointers",
      "Binary Search",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 675,
    "name": "132 Pattern",
    "count": 4,
    "url": "https://leetcode.com/problems/132-pattern/",
    "topics": [
      "Array",
      "Binary Search",
      "Stack",
      "Monotonic Stack",
      "Ordered Set"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 676,
    "name": "Find Right Interval",
    "count": 4,
    "url": "https://leetcode.com/problems/find-right-interval/",
    "topics": [
      "Array",
      "Binary Search",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 677,
    "name": "Arithmetic Slices",
    "count": 4,
    "url": "https://leetcode.com/problems/arithmetic-slices/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Sliding Window"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 678,
    "name": "Convert a Number to Hexadecimal",
    "count": 4,
    "url": "https://leetcode.com/problems/convert-a-number-to-hexadecimal/",
    "topics": [
      "Math",
      "String",
      "Bit Manipulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 679,
    "name": "Design Phone Directory",
    "count": 4,
    "url": "https://leetcode.com/problems/design-phone-directory/",
    "topics": [
      "Array",
      "Hash Table",
      "Linked List",
      "Design",
      "Queue"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 680,
    "name": "Longest Substring with At Most K Distinct Characters",
    "count": 4,
    "url": "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/",
    "topics": [
      "Hash Table",
      "String",
      "Sliding Window"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 681,
    "name": "Minimum Height Trees",
    "count": 4,
    "url": "https://leetcode.com/problems/minimum-height-trees/",
    "topics": [
      "Depth-First Search",
      "Breadth-First Search",
      "Graph Theory",
      "Topological Sort"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 682,
    "name": "Shortest Word Distance III",
    "count": 4,
    "url": "https://leetcode.com/problems/shortest-word-distance-iii/",
    "topics": [
      "Array",
      "String"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 683,
    "name": "Maximum Gap",
    "count": 4,
    "url": "https://leetcode.com/problems/maximum-gap/",
    "topics": [
      "Array",
      "Sorting",
      "Bucket Sort",
      "Radix Sort"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 684,
    "name": "Unique Binary Search Trees",
    "count": 4,
    "url": "https://leetcode.com/problems/unique-binary-search-trees/",
    "topics": [
      "Math",
      "Dynamic Programming",
      "Tree",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 685,
    "name": "Implement Trie II (Prefix Tree)",
    "count": 4,
    "url": "https://leetcode.com/problems/implement-trie-ii-prefix-tree/",
    "topics": [
      "Hash Table",
      "String",
      "Design",
      "Trie"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 686,
    "name": "Number of Sub-arrays With Odd Sum",
    "count": 4,
    "url": "https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/",
    "topics": [
      "Array",
      "Math",
      "Dynamic Programming",
      "Prefix Sum"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 687,
    "name": "Group the People Given the Group Size They Belong To",
    "count": 4,
    "url": "https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/",
    "topics": [
      "Array",
      "Hash Table",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 688,
    "name": "Shortest Distance to a Character",
    "count": 4,
    "url": "https://leetcode.com/problems/shortest-distance-to-a-character/",
    "topics": [
      "Array",
      "Two Pointers",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 689,
    "name": "Max Consecutive Ones",
    "count": 4,
    "url": "https://leetcode.com/problems/max-consecutive-ones/",
    "topics": [
      "Array"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 690,
    "name": "Even Odd Tree",
    "count": 4,
    "url": "https://leetcode.com/problems/even-odd-tree/",
    "topics": [
      "Tree",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 691,
    "name": "Sort Integers by The Power Value",
    "count": 4,
    "url": "https://leetcode.com/problems/sort-integers-by-the-power-value/",
    "topics": [
      "Dynamic Programming",
      "Memoization",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 692,
    "name": "Remove Palindromic Subsequences",
    "count": 4,
    "url": "https://leetcode.com/problems/remove-palindromic-subsequences/",
    "topics": [
      "Two Pointers",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 693,
    "name": "Divisor Game",
    "count": 4,
    "url": "https://leetcode.com/problems/divisor-game/",
    "topics": [
      "Math",
      "Dynamic Programming",
      "Brainteaser",
      "Game Theory"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 694,
    "name": "Number of Recent Calls",
    "count": 4,
    "url": "https://leetcode.com/problems/number-of-recent-calls/",
    "topics": [
      "Design",
      "Queue",
      "Data Stream"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 695,
    "name": "Minimum Distance Between BST Nodes",
    "count": 4,
    "url": "https://leetcode.com/problems/minimum-distance-between-bst-nodes/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 696,
    "name": "Split Array into Consecutive Subsequences",
    "count": 4,
    "url": "https://leetcode.com/problems/split-array-into-consecutive-subsequences/",
    "topics": [
      "Array",
      "Hash Table",
      "Greedy",
      "Heap (Priority Queue)"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 697,
    "name": "Reshape the Matrix",
    "count": 4,
    "url": "https://leetcode.com/problems/reshape-the-matrix/",
    "topics": [
      "Array",
      "Matrix",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 698,
    "name": "Brick Wall",
    "count": 4,
    "url": "https://leetcode.com/problems/brick-wall/",
    "topics": [
      "Array",
      "Hash Table"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 699,
    "name": "Freedom Trail",
    "count": 4,
    "url": "https://leetcode.com/problems/freedom-trail/",
    "topics": [
      "String",
      "Dynamic Programming",
      "Depth-First Search",
      "Breadth-First Search"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 700,
    "name": "Find the Kth Largest Integer in the Array",
    "count": 4,
    "url": "https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/",
    "topics": [
      "Array",
      "String",
      "Divide and Conquer",
      "Sorting",
      "Heap (Priority Queue)",
      "Quickselect"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 701,
    "name": "Construct the Lexicographically Largest Valid Sequence",
    "count": 4,
    "url": "https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/",
    "topics": [
      "Array",
      "Backtracking"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 702,
    "name": "Make Two Arrays Equal by Reversing Sub-arrays",
    "count": 4,
    "url": "https://leetcode.com/problems/make-two-arrays-equal-by-reversing-sub-arrays/",
    "topics": [
      "Array",
      "Hash Table",
      "Sorting",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 703,
    "name": "Longest Continuous Increasing Subsequence",
    "count": 4,
    "url": "https://leetcode.com/problems/longest-continuous-increasing-subsequence/",
    "topics": [
      "Array"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 704,
    "name": "Repeated Substring Pattern",
    "count": 4,
    "url": "https://leetcode.com/problems/repeated-substring-pattern/",
    "topics": [
      "String",
      "String Matching"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 705,
    "name": "UTF-8 Validation",
    "count": 4,
    "url": "https://leetcode.com/problems/utf-8-validation/",
    "topics": [
      "Array",
      "Bit Manipulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 706,
    "name": "Unique Word Abbreviation",
    "count": 4,
    "url": "https://leetcode.com/problems/unique-word-abbreviation/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Design"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 707,
    "name": "Binary Tree Postorder Traversal",
    "count": 4,
    "url": "https://leetcode.com/problems/binary-tree-postorder-traversal/",
    "topics": [
      "Stack",
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 708,
    "name": "Remove Duplicates From an Unsorted Linked List",
    "count": 4,
    "url": "https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/",
    "topics": [
      "Hash Table",
      "Linked List"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 709,
    "name": "Pascal's Triangle II",
    "count": 4,
    "url": "https://leetcode.com/problems/pascals-triangle-ii/",
    "topics": [
      "Array",
      "Dynamic Programming"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 710,
    "name": "Check if Word Can Be Placed In Crossword",
    "count": 4,
    "url": "https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/",
    "topics": [
      "Array",
      "Matrix",
      "Enumeration"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 711,
    "name": "Map of Highest Peak",
    "count": 4,
    "url": "https://leetcode.com/problems/map-of-highest-peak/",
    "topics": [
      "Array",
      "Breadth-First Search",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 712,
    "name": "Rearrange Spaces Between Words",
    "count": 4,
    "url": "https://leetcode.com/problems/rearrange-spaces-between-words/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 713,
    "name": "Minimum Number of Increments on Subarrays to Form a Target Array",
    "count": 4,
    "url": "https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Stack",
      "Greedy",
      "Monotonic Stack"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 714,
    "name": "Divide Array in Sets of K Consecutive Numbers",
    "count": 4,
    "url": "https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/",
    "topics": [
      "Array",
      "Hash Table",
      "Greedy",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 715,
    "name": "Letter Tile Possibilities",
    "count": 4,
    "url": "https://leetcode.com/problems/letter-tile-possibilities/",
    "topics": [
      "Hash Table",
      "String",
      "Backtracking",
      "Counting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 716,
    "name": "Redundant Connection",
    "count": 4,
    "url": "https://leetcode.com/problems/redundant-connection/",
    "topics": [
      "Depth-First Search",
      "Breadth-First Search",
      "Union-Find",
      "Graph Theory"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 717,
    "name": "Binary Tree Longest Consecutive Sequence II",
    "count": 4,
    "url": "https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 718,
    "name": "Word Abbreviation",
    "count": 4,
    "url": "https://leetcode.com/problems/word-abbreviation/",
    "topics": [
      "Array",
      "String",
      "Greedy",
      "Trie",
      "Sorting"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 719,
    "name": "Longest Word in Dictionary through Deleting",
    "count": 4,
    "url": "https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/",
    "topics": [
      "Array",
      "Two Pointers",
      "String",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 720,
    "name": "Predict the Winner",
    "count": 4,
    "url": "https://leetcode.com/problems/predict-the-winner/",
    "topics": [
      "Array",
      "Math",
      "Dynamic Programming",
      "Recursion",
      "Game Theory"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 721,
    "name": "Trapping Rain Water II",
    "count": 4,
    "url": "https://leetcode.com/problems/trapping-rain-water-ii/",
    "topics": [
      "Array",
      "Breadth-First Search",
      "Heap (Priority Queue)",
      "Matrix"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 722,
    "name": "Paint Fence",
    "count": 4,
    "url": "https://leetcode.com/problems/paint-fence/",
    "topics": [
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 723,
    "name": "Strobogrammatic Number III",
    "count": 4,
    "url": "https://leetcode.com/problems/strobogrammatic-number-iii/",
    "topics": [
      "Array",
      "String",
      "Recursion"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 724,
    "name": "Water and Jug Problem",
    "count": 4,
    "url": "https://leetcode.com/problems/water-and-jug-problem/",
    "topics": [
      "Math",
      "Depth-First Search",
      "Breadth-First Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 725,
    "name": "Longest Nice Substring",
    "count": 4,
    "url": "https://leetcode.com/problems/longest-nice-substring/",
    "topics": [
      "Hash Table",
      "String",
      "Divide and Conquer",
      "Bit Manipulation",
      "Sliding Window"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 726,
    "name": "Reverse Substrings Between Each Pair of Parentheses",
    "count": 4,
    "url": "https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/",
    "topics": [
      "String",
      "Stack"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 727,
    "name": "Reverse Words in a String II",
    "count": 4,
    "url": "https://leetcode.com/problems/reverse-words-in-a-string-ii/",
    "topics": [
      "Two Pointers",
      "String"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 728,
    "name": "Unique Binary Search Trees II",
    "count": 4,
    "url": "https://leetcode.com/problems/unique-binary-search-trees-ii/",
    "topics": [
      "Dynamic Programming",
      "Backtracking",
      "Tree",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 729,
    "name": "Parallel Courses III",
    "count": 4,
    "url": "https://leetcode.com/problems/parallel-courses-iii/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Graph Theory",
      "Topological Sort"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 730,
    "name": "Kth Smallest Number in Multiplication Table",
    "count": 4,
    "url": "https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/",
    "topics": [
      "Math",
      "Binary Search"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 731,
    "name": "Bomb Enemy",
    "count": 4,
    "url": "https://leetcode.com/problems/bomb-enemy/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 732,
    "name": "The Number of Full Rounds You Have Played",
    "count": 4,
    "url": "https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/",
    "topics": [
      "Math",
      "String"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 733,
    "name": "\"Filter Restaurants by Vegan-Friendly, Price and Distance\"",
    "count": 4,
    "url": "https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/",
    "topics": [
      "Array",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 734,
    "name": "Replace All Digits with Characters",
    "count": 3,
    "url": "https://leetcode.com/problems/replace-all-digits-with-characters/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 735,
    "name": "Maximum Number of Achievable Transfer Requests",
    "count": 3,
    "url": "https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/",
    "topics": [
      "Array",
      "Backtracking",
      "Bit Manipulation",
      "Enumeration"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 736,
    "name": "Make The String Great",
    "count": 3,
    "url": "https://leetcode.com/problems/make-the-string-great/",
    "topics": [
      "String",
      "Stack"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 737,
    "name": "Number of Equivalent Domino Pairs",
    "count": 3,
    "url": "https://leetcode.com/problems/number-of-equivalent-domino-pairs/",
    "topics": [
      "Array",
      "Hash Table",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 738,
    "name": "Set Mismatch",
    "count": 3,
    "url": "https://leetcode.com/problems/set-mismatch/",
    "topics": [
      "Array",
      "Hash Table",
      "Bit Manipulation",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 739,
    "name": "Reverse String II",
    "count": 3,
    "url": "https://leetcode.com/problems/reverse-string-ii/",
    "topics": [
      "Two Pointers",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 740,
    "name": "Remove Duplicates from Sorted Array II",
    "count": 3,
    "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",
    "topics": [
      "Array",
      "Two Pointers"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 741,
    "name": "Path Sum IV",
    "count": 3,
    "url": "https://leetcode.com/problems/path-sum-iv/",
    "topics": [
      "Array",
      "Hash Table",
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 742,
    "name": "Design Front Middle Back Queue",
    "count": 3,
    "url": "https://leetcode.com/problems/design-front-middle-back-queue/",
    "topics": [
      "Array",
      "Linked List",
      "Design",
      "Queue",
      "Doubly-Linked List",
      "Data Stream"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 743,
    "name": "Average Salary Excluding the Minimum and Maximum Salary",
    "count": 3,
    "url": "https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/",
    "topics": [
      "Array",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 744,
    "name": "Kids With the Greatest Number of Candies",
    "count": 3,
    "url": "https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/",
    "topics": [
      "Array"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 745,
    "name": "Minimum Subsequence in Non-Increasing Order",
    "count": 3,
    "url": "https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/",
    "topics": [
      "Array",
      "Greedy",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 746,
    "name": "Maximum Sum BST in Binary Tree",
    "count": 3,
    "url": "https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/",
    "topics": [
      "Dynamic Programming",
      "Tree",
      "Depth-First Search",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 747,
    "name": "Two Sum BSTs",
    "count": 3,
    "url": "https://leetcode.com/problems/two-sum-bsts/",
    "topics": [
      "Two Pointers",
      "Binary Search",
      "Stack",
      "Tree",
      "Depth-First Search",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 748,
    "name": "N-th Tribonacci Number",
    "count": 3,
    "url": "https://leetcode.com/problems/n-th-tribonacci-number/",
    "topics": [
      "Math",
      "Dynamic Programming",
      "Memoization"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 749,
    "name": "Remove Vowels from a String",
    "count": 3,
    "url": "https://leetcode.com/problems/remove-vowels-from-a-string/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 750,
    "name": "Maximize Sum Of Array After K Negations",
    "count": 3,
    "url": "https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/",
    "topics": [
      "Array",
      "Greedy",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 751,
    "name": "Score After Flipping Matrix",
    "count": 3,
    "url": "https://leetcode.com/problems/score-after-flipping-matrix/",
    "topics": [
      "Array",
      "Greedy",
      "Bit Manipulation",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 752,
    "name": "Knight Probability in Chessboard",
    "count": 3,
    "url": "https://leetcode.com/problems/knight-probability-in-chessboard/",
    "topics": [
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 753,
    "name": "Find the Derangement of An Array",
    "count": 3,
    "url": "https://leetcode.com/problems/find-the-derangement-of-an-array/",
    "topics": [
      "Math",
      "Dynamic Programming",
      "Combinatorics"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 754,
    "name": "Reverse Pairs",
    "count": 3,
    "url": "https://leetcode.com/problems/reverse-pairs/",
    "topics": [
      "Array",
      "Binary Search",
      "Divide and Conquer",
      "Binary Indexed Tree",
      "Segment Tree",
      "Merge Sort",
      "Ordered Set"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 755,
    "name": "Count The Repetitions",
    "count": 3,
    "url": "https://leetcode.com/problems/count-the-repetitions/",
    "topics": [
      "Two Pointers",
      "String",
      "Dynamic Programming"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 756,
    "name": "Implement Stack using Queues",
    "count": 3,
    "url": "https://leetcode.com/problems/implement-stack-using-queues/",
    "topics": [
      "Stack",
      "Design",
      "Queue"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 757,
    "name": "Minimum Operations to Make the Array Increasing",
    "count": 3,
    "url": "https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/",
    "topics": [
      "Array",
      "Greedy"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 758,
    "name": "Find the Highest Altitude",
    "count": 3,
    "url": "https://leetcode.com/problems/find-the-highest-altitude/",
    "topics": [
      "Array",
      "Prefix Sum"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 759,
    "name": "Check If Two String Arrays are Equivalent",
    "count": 3,
    "url": "https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/",
    "topics": [
      "Array",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 760,
    "name": "Minimum Time Visiting All Points",
    "count": 3,
    "url": "https://leetcode.com/problems/minimum-time-visiting-all-points/",
    "topics": [
      "Array",
      "Math",
      "Geometry"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 761,
    "name": "Day of the Week",
    "count": 3,
    "url": "https://leetcode.com/problems/day-of-the-week/",
    "topics": [
      "Math"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 762,
    "name": "Unique Substrings in Wraparound String",
    "count": 3,
    "url": "https://leetcode.com/problems/unique-substrings-in-wraparound-string/",
    "topics": [
      "String",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 763,
    "name": "Nth Digit",
    "count": 3,
    "url": "https://leetcode.com/problems/nth-digit/",
    "topics": [
      "Math",
      "Binary Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 764,
    "name": "Create Maximum Number",
    "count": 3,
    "url": "https://leetcode.com/problems/create-maximum-number/",
    "topics": [
      "Array",
      "Two Pointers",
      "Stack",
      "Greedy",
      "Monotonic Stack"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 765,
    "name": "Count Unhappy Friends",
    "count": 3,
    "url": "https://leetcode.com/problems/count-unhappy-friends/",
    "topics": [
      "Array",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 766,
    "name": "Non-decreasing Array",
    "count": 3,
    "url": "https://leetcode.com/problems/non-decreasing-array/",
    "topics": [
      "Array"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 767,
    "name": "Valid Word Square",
    "count": 3,
    "url": "https://leetcode.com/problems/valid-word-square/",
    "topics": [
      "Array",
      "Matrix"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 768,
    "name": "K Inverse Pairs Array",
    "count": 3,
    "url": "https://leetcode.com/problems/k-inverse-pairs-array/",
    "topics": [
      "Dynamic Programming"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 769,
    "name": "K-th Smallest in Lexicographical Order",
    "count": 3,
    "url": "https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/",
    "topics": [
      "Trie"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 770,
    "name": "N-Queens II",
    "count": 3,
    "url": "https://leetcode.com/problems/n-queens-ii/",
    "topics": [
      "Backtracking"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 771,
    "name": "Beautiful Arrangement",
    "count": 3,
    "url": "https://leetcode.com/problems/beautiful-arrangement/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Backtracking",
      "Bit Manipulation",
      "Bitmask"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 772,
    "name": "Find Nearest Point That Has the Same X or Y Coordinate",
    "count": 3,
    "url": "https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/",
    "topics": [
      "Array"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 773,
    "name": "Ways to Make a Fair Array",
    "count": 3,
    "url": "https://leetcode.com/problems/ways-to-make-a-fair-array/",
    "topics": [
      "Array",
      "Prefix Sum"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 774,
    "name": "K Radius Subarray Averages",
    "count": 3,
    "url": "https://leetcode.com/problems/k-radius-subarray-averages/",
    "topics": [
      "Array",
      "Sliding Window"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 775,
    "name": "Minimum Operations to Make a Uni-Value Grid",
    "count": 3,
    "url": "https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/",
    "topics": [
      "Array",
      "Math",
      "Sorting",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 776,
    "name": "Find the Middle Index in Array",
    "count": 3,
    "url": "https://leetcode.com/problems/find-the-middle-index-in-array/",
    "topics": [
      "Array",
      "Prefix Sum"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 777,
    "name": "Intersection of Three Sorted Arrays",
    "count": 3,
    "url": "https://leetcode.com/problems/intersection-of-three-sorted-arrays/",
    "topics": [
      "Array",
      "Hash Table",
      "Binary Search",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 778,
    "name": "Maximum Level Sum of a Binary Tree",
    "count": 3,
    "url": "https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 779,
    "name": "Check If a Number Is Majority Element in a Sorted Array",
    "count": 3,
    "url": "https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/",
    "topics": [
      "Array",
      "Binary Search"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 780,
    "name": "Closest Leaf in a Binary Tree",
    "count": 3,
    "url": "https://leetcode.com/problems/closest-leaf-in-a-binary-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 781,
    "name": "Sentence Similarity",
    "count": 3,
    "url": "https://leetcode.com/problems/sentence-similarity/",
    "topics": [
      "Array",
      "Hash Table",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 782,
    "name": "Find K-th Smallest Pair Distance",
    "count": 3,
    "url": "https://leetcode.com/problems/find-k-th-smallest-pair-distance/",
    "topics": [
      "Array",
      "Two Pointers",
      "Binary Search",
      "Sorting"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 783,
    "name": "Stickers to Spell Word",
    "count": 3,
    "url": "https://leetcode.com/problems/stickers-to-spell-word/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Dynamic Programming",
      "Backtracking",
      "Bit Manipulation",
      "Memoization",
      "Bitmask"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 784,
    "name": "Maximum Sum of 3 Non-Overlapping Subarrays",
    "count": 3,
    "url": "https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Sliding Window",
      "Prefix Sum"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 785,
    "name": "Split Array with Equal Sum",
    "count": 3,
    "url": "https://leetcode.com/problems/split-array-with-equal-sum/",
    "topics": [
      "Array",
      "Hash Table",
      "Prefix Sum"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 786,
    "name": "Queue Reconstruction by Height",
    "count": 3,
    "url": "https://leetcode.com/problems/queue-reconstruction-by-height/",
    "topics": [
      "Array",
      "Binary Indexed Tree",
      "Segment Tree",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 787,
    "name": "Integer Break",
    "count": 3,
    "url": "https://leetcode.com/problems/integer-break/",
    "topics": [
      "Math",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 788,
    "name": "Ugly Number",
    "count": 3,
    "url": "https://leetcode.com/problems/ugly-number/",
    "topics": [
      "Math"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 789,
    "name": "Find Permutation",
    "count": 3,
    "url": "https://leetcode.com/problems/find-permutation/",
    "topics": [
      "Array",
      "String",
      "Stack",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 790,
    "name": "Minimize Maximum Pair Sum in Array",
    "count": 3,
    "url": "https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/",
    "topics": [
      "Array",
      "Two Pointers",
      "Greedy",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 791,
    "name": "Concatenation of Consecutive Binary Numbers",
    "count": 3,
    "url": "https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/",
    "topics": [
      "Math",
      "Bit Manipulation",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 792,
    "name": "Univalued Binary Tree",
    "count": 3,
    "url": "https://leetcode.com/problems/univalued-binary-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 793,
    "name": "Array of Doubled Pairs",
    "count": 3,
    "url": "https://leetcode.com/problems/array-of-doubled-pairs/",
    "topics": [
      "Array",
      "Hash Table",
      "Greedy",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 794,
    "name": "RLE Iterator",
    "count": 3,
    "url": "https://leetcode.com/problems/rle-iterator/",
    "topics": [
      "Array",
      "Design",
      "Counting",
      "Iterator"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 795,
    "name": "Magic Squares In Grid",
    "count": 3,
    "url": "https://leetcode.com/problems/magic-squares-in-grid/",
    "topics": [
      "Array",
      "Hash Table",
      "Math",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 796,
    "name": "Flipping an Image",
    "count": 3,
    "url": "https://leetcode.com/problems/flipping-an-image/",
    "topics": [
      "Array",
      "Two Pointers",
      "Bit Manipulation",
      "Matrix",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 797,
    "name": "Positions of Large Groups",
    "count": 3,
    "url": "https://leetcode.com/problems/positions-of-large-groups/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 798,
    "name": "Split BST",
    "count": 3,
    "url": "https://leetcode.com/problems/split-bst/",
    "topics": [
      "Tree",
      "Binary Search Tree",
      "Recursion",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 799,
    "name": "K Empty Slots",
    "count": 3,
    "url": "https://leetcode.com/problems/k-empty-slots/",
    "topics": [
      "Array",
      "Binary Indexed Tree",
      "Segment Tree",
      "Queue",
      "Sliding Window",
      "Heap (Priority Queue)",
      "Ordered Set",
      "Monotonic Queue"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 800,
    "name": "N-ary Tree Preorder Traversal",
    "count": 3,
    "url": "https://leetcode.com/problems/n-ary-tree-preorder-traversal/",
    "topics": [
      "Stack",
      "Tree",
      "Depth-First Search"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 801,
    "name": "Minimum Absolute Difference in BST",
    "count": 3,
    "url": "https://leetcode.com/problems/minimum-absolute-difference-in-bst/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 802,
    "name": "Base 7",
    "count": 3,
    "url": "https://leetcode.com/problems/base-7/",
    "topics": [
      "Math",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 803,
    "name": "Word Squares",
    "count": 3,
    "url": "https://leetcode.com/problems/word-squares/",
    "topics": [
      "Array",
      "String",
      "Backtracking",
      "Trie"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 804,
    "name": "Range Sum Query 2D - Mutable",
    "count": 3,
    "url": "https://leetcode.com/problems/range-sum-query-2d-mutable/",
    "topics": [
      "Array",
      "Design",
      "Binary Indexed Tree",
      "Segment Tree",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 805,
    "name": "Combination Sum III",
    "count": 3,
    "url": "https://leetcode.com/problems/combination-sum-iii/",
    "topics": [
      "Array",
      "Backtracking"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 806,
    "name": "Can I Win",
    "count": 3,
    "url": "https://leetcode.com/problems/can-i-win/",
    "topics": [
      "Math",
      "Dynamic Programming",
      "Bit Manipulation",
      "Memoization",
      "Game Theory",
      "Bitmask"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 807,
    "name": "Maximum Number of Eaten Apples",
    "count": 3,
    "url": "https://leetcode.com/problems/maximum-number-of-eaten-apples/",
    "topics": [
      "Array",
      "Greedy",
      "Heap (Priority Queue)"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 808,
    "name": "Print Words Vertically",
    "count": 3,
    "url": "https://leetcode.com/problems/print-words-vertically/",
    "topics": [
      "Array",
      "String",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 809,
    "name": "Check If It Is a Straight Line",
    "count": 3,
    "url": "https://leetcode.com/problems/check-if-it-is-a-straight-line/",
    "topics": [
      "Array",
      "Math",
      "Geometry"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 810,
    "name": "N-ary Tree Level Order Traversal",
    "count": 3,
    "url": "https://leetcode.com/problems/n-ary-tree-level-order-traversal/",
    "topics": [
      "Tree",
      "Breadth-First Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 811,
    "name": "Best Team With No Conflicts",
    "count": 3,
    "url": "https://leetcode.com/problems/best-team-with-no-conflicts/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 812,
    "name": "Maximum Repeating Substring",
    "count": 3,
    "url": "https://leetcode.com/problems/maximum-repeating-substring/",
    "topics": [
      "String",
      "Dynamic Programming",
      "String Matching"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 813,
    "name": "Construct Target Array With Multiple Sums",
    "count": 3,
    "url": "https://leetcode.com/problems/construct-target-array-with-multiple-sums/",
    "topics": [
      "Array",
      "Heap (Priority Queue)"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 814,
    "name": "Teemo Attacking",
    "count": 3,
    "url": "https://leetcode.com/problems/teemo-attacking/",
    "topics": [
      "Array",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 815,
    "name": "Construct Binary Tree from Inorder and Postorder Traversal",
    "count": 3,
    "url": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
    "topics": [
      "Array",
      "Hash Table",
      "Divide and Conquer",
      "Tree",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 816,
    "name": "Largest Perimeter Triangle",
    "count": 3,
    "url": "https://leetcode.com/problems/largest-perimeter-triangle/",
    "topics": [
      "Array",
      "Math",
      "Greedy",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 817,
    "name": "Reformat Phone Number",
    "count": 3,
    "url": "https://leetcode.com/problems/reformat-phone-number/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 818,
    "name": "Count Nice Pairs in an Array",
    "count": 3,
    "url": "https://leetcode.com/problems/count-nice-pairs-in-an-array/",
    "topics": [
      "Array",
      "Hash Table",
      "Math",
      "Counting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 819,
    "name": "Merge Strings Alternately",
    "count": 3,
    "url": "https://leetcode.com/problems/merge-strings-alternately/",
    "topics": [
      "Two Pointers",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 820,
    "name": "Largest Plus Sign",
    "count": 3,
    "url": "https://leetcode.com/problems/largest-plus-sign/",
    "topics": [
      "Array",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 821,
    "name": "Longest Subarray of 1's After Deleting One Element",
    "count": 3,
    "url": "https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Sliding Window"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 822,
    "name": "Minimum Time to Type Word Using Special Typewriter",
    "count": 3,
    "url": "https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/",
    "topics": [
      "String",
      "Greedy"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 823,
    "name": "Determine Whether Matrix Can Be Obtained By Rotation",
    "count": 2,
    "url": "https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/",
    "topics": [
      "Array",
      "Matrix"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 824,
    "name": "Sum of All Subset XOR Totals",
    "count": 2,
    "url": "https://leetcode.com/problems/sum-of-all-subset-xor-totals/",
    "topics": [
      "Array",
      "Math",
      "Backtracking",
      "Bit Manipulation",
      "Combinatorics",
      "Enumeration"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 825,
    "name": "Count of Matches in Tournament",
    "count": 2,
    "url": "https://leetcode.com/problems/count-of-matches-in-tournament/",
    "topics": [
      "Math",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 826,
    "name": "Richest Customer Wealth",
    "count": 2,
    "url": "https://leetcode.com/problems/richest-customer-wealth/",
    "topics": [
      "Array",
      "Matrix"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 827,
    "name": "Smallest String With A Given Numeric Value",
    "count": 2,
    "url": "https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/",
    "topics": [
      "String",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 828,
    "name": "Circle and Rectangle Overlapping",
    "count": 2,
    "url": "https://leetcode.com/problems/circle-and-rectangle-overlapping/",
    "topics": [
      "Math",
      "Geometry"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 829,
    "name": "Maximum Number of Balloons",
    "count": 2,
    "url": "https://leetcode.com/problems/maximum-number-of-balloons/",
    "topics": [
      "Hash Table",
      "String",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 830,
    "name": "Reveal Cards In Increasing Order",
    "count": 2,
    "url": "https://leetcode.com/problems/reveal-cards-in-increasing-order/",
    "topics": [
      "Array",
      "Queue",
      "Sorting",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 831,
    "name": "K-th Symbol in Grammar",
    "count": 2,
    "url": "https://leetcode.com/problems/k-th-symbol-in-grammar/",
    "topics": [
      "Math",
      "Bit Manipulation",
      "Recursion"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 832,
    "name": "Perfect Number",
    "count": 2,
    "url": "https://leetcode.com/problems/perfect-number/",
    "topics": [
      "Math"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 833,
    "name": "Sum of Left Leaves",
    "count": 2,
    "url": "https://leetcode.com/problems/sum-of-left-leaves/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 834,
    "name": "Super Pow",
    "count": 2,
    "url": "https://leetcode.com/problems/super-pow/",
    "topics": [
      "Math",
      "Divide and Conquer"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 835,
    "name": "Wiggle Sort II",
    "count": 2,
    "url": "https://leetcode.com/problems/wiggle-sort-ii/",
    "topics": [
      "Array",
      "Divide and Conquer",
      "Greedy",
      "Sorting",
      "Quickselect"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 836,
    "name": "Bitwise AND of Numbers Range",
    "count": 2,
    "url": "https://leetcode.com/problems/bitwise-and-of-numbers-range/",
    "topics": [
      "Bit Manipulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 837,
    "name": "Partition List",
    "count": 2,
    "url": "https://leetcode.com/problems/partition-list/",
    "topics": [
      "Linked List",
      "Two Pointers"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 838,
    "name": "Minimum Swaps to Group All 1's Together II",
    "count": 2,
    "url": "https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/",
    "topics": [
      "Array",
      "Sliding Window"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 839,
    "name": "Check if a Parentheses String Can Be Valid",
    "count": 2,
    "url": "https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/",
    "topics": [
      "String",
      "Stack",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 840,
    "name": "Two Furthest Houses With Different Colors",
    "count": 2,
    "url": "https://leetcode.com/problems/two-furthest-houses-with-different-colors/",
    "topics": [
      "Array",
      "Greedy"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 841,
    "name": "Number of Valid Words in a Sentence",
    "count": 2,
    "url": "https://leetcode.com/problems/number-of-valid-words-in-a-sentence/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 842,
    "name": "Maximize the Confusion of an Exam",
    "count": 2,
    "url": "https://leetcode.com/problems/maximize-the-confusion-of-an-exam/",
    "topics": [
      "String",
      "Binary Search",
      "Sliding Window",
      "Prefix Sum"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 843,
    "name": "Find Unique Binary String",
    "count": 2,
    "url": "https://leetcode.com/problems/find-unique-binary-string/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Backtracking"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 844,
    "name": "Array With Elements Not Equal to Average of Neighbors",
    "count": 2,
    "url": "https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/",
    "topics": [
      "Array",
      "Greedy",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 845,
    "name": "Nearest Exit from Entrance in Maze",
    "count": 2,
    "url": "https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/",
    "topics": [
      "Array",
      "Breadth-First Search",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 846,
    "name": "Count Square Sum Triples",
    "count": 2,
    "url": "https://leetcode.com/problems/count-square-sum-triples/",
    "topics": [
      "Math",
      "Enumeration"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 847,
    "name": "Longer Contiguous Segments of Ones than Zeros",
    "count": 2,
    "url": "https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 848,
    "name": "Maximum Average Pass Ratio",
    "count": 2,
    "url": "https://leetcode.com/problems/maximum-average-pass-ratio/",
    "topics": [
      "Array",
      "Greedy",
      "Heap (Priority Queue)"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 849,
    "name": "Sort Features by Popularity",
    "count": 2,
    "url": "https://leetcode.com/problems/sort-features-by-popularity/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 850,
    "name": "Minimum Number of Operations to Move All Balls to Each Box",
    "count": 2,
    "url": "https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/",
    "topics": [
      "Array",
      "String",
      "Prefix Sum"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 851,
    "name": "Check if Array Is Sorted and Rotated",
    "count": 2,
    "url": "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/",
    "topics": [
      "Array"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 852,
    "name": "Max Number of K-Sum Pairs",
    "count": 2,
    "url": "https://leetcode.com/problems/max-number-of-k-sum-pairs/",
    "topics": [
      "Array",
      "Hash Table",
      "Two Pointers",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 853,
    "name": "Minimize Deviation in Array",
    "count": 2,
    "url": "https://leetcode.com/problems/minimize-deviation-in-array/",
    "topics": [
      "Array",
      "Greedy",
      "Heap (Priority Queue)",
      "Ordered Set"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 854,
    "name": "Number of Good Ways to Split a String",
    "count": 2,
    "url": "https://leetcode.com/problems/number-of-good-ways-to-split-a-string/",
    "topics": [
      "Hash Table",
      "String",
      "Dynamic Programming",
      "Bit Manipulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 855,
    "name": "Final Prices With a Special Discount in a Shop",
    "count": 2,
    "url": "https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/",
    "topics": [
      "Array",
      "Stack",
      "Monotonic Stack"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 856,
    "name": "Check If a Word Occurs As a Prefix of Any Word in a Sentence",
    "count": 2,
    "url": "https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/",
    "topics": [
      "Two Pointers",
      "String",
      "String Matching"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 857,
    "name": "Longest Happy Prefix",
    "count": 2,
    "url": "https://leetcode.com/problems/longest-happy-prefix/",
    "topics": [
      "String",
      "Rolling Hash",
      "String Matching",
      "Hash Function"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 858,
    "name": "Find a Corresponding Node of a Binary Tree in a Clone of That Tree",
    "count": 2,
    "url": "https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 859,
    "name": "Reduce Array Size to The Half",
    "count": 2,
    "url": "https://leetcode.com/problems/reduce-array-size-to-the-half/",
    "topics": [
      "Array",
      "Hash Table",
      "Greedy",
      "Sorting",
      "Heap (Priority Queue)"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 860,
    "name": "Delete Leaves With a Given Value",
    "count": 2,
    "url": "https://leetcode.com/problems/delete-leaves-with-a-given-value/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 861,
    "name": "Sum of Nodes with Even-Valued Grandparent",
    "count": 2,
    "url": "https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 862,
    "name": "Matrix Block Sum",
    "count": 2,
    "url": "https://leetcode.com/problems/matrix-block-sum/",
    "topics": [
      "Array",
      "Matrix",
      "Prefix Sum"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 863,
    "name": "Maximum Number of Occurrences of a Substring",
    "count": 2,
    "url": "https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/",
    "topics": [
      "Hash Table",
      "String",
      "Sliding Window"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 864,
    "name": "Find Numbers with Even Number of Digits",
    "count": 2,
    "url": "https://leetcode.com/problems/find-numbers-with-even-number-of-digits/",
    "topics": [
      "Array",
      "Math"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 865,
    "name": "Prime Arrangements",
    "count": 2,
    "url": "https://leetcode.com/problems/prime-arrangements/",
    "topics": [
      "Math"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 866,
    "name": "Remove Zero Sum Consecutive Nodes from Linked List",
    "count": 2,
    "url": "https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/",
    "topics": [
      "Hash Table",
      "Linked List"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 867,
    "name": "Alphabet Board Path",
    "count": 2,
    "url": "https://leetcode.com/problems/alphabet-board-path/",
    "topics": [
      "Hash Table",
      "String"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 868,
    "name": "Parallel Courses",
    "count": 2,
    "url": "https://leetcode.com/problems/parallel-courses/",
    "topics": [
      "Graph Theory",
      "Topological Sort"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 869,
    "name": "Campus Bikes",
    "count": 2,
    "url": "https://leetcode.com/problems/campus-bikes/",
    "topics": [
      "Array",
      "Sorting",
      "Heap (Priority Queue)"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 870,
    "name": "Powerful Integers",
    "count": 2,
    "url": "https://leetcode.com/problems/powerful-integers/",
    "topics": [
      "Hash Table",
      "Math",
      "Enumeration"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 871,
    "name": "Valid Mountain Array",
    "count": 2,
    "url": "https://leetcode.com/problems/valid-mountain-array/",
    "topics": [
      "Array"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 872,
    "name": "Reverse Only Letters",
    "count": 2,
    "url": "https://leetcode.com/problems/reverse-only-letters/",
    "topics": [
      "Two Pointers",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 873,
    "name": "Surface Area of 3D Shapes",
    "count": 2,
    "url": "https://leetcode.com/problems/surface-area-of-3d-shapes/",
    "topics": [
      "Array",
      "Math",
      "Geometry",
      "Matrix"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 874,
    "name": "Decoded String at Index",
    "count": 2,
    "url": "https://leetcode.com/problems/decoded-string-at-index/",
    "topics": [
      "String",
      "Stack"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 875,
    "name": "Stone Game",
    "count": 2,
    "url": "https://leetcode.com/problems/stone-game/",
    "topics": [
      "Array",
      "Math",
      "Dynamic Programming",
      "Game Theory"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 876,
    "name": "Binary Trees With Factors",
    "count": 2,
    "url": "https://leetcode.com/problems/binary-trees-with-factors/",
    "topics": [
      "Array",
      "Hash Table",
      "Dynamic Programming",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 877,
    "name": "Most Common Word",
    "count": 2,
    "url": "https://leetcode.com/problems/most-common-word/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 878,
    "name": "Sentence Similarity II",
    "count": 2,
    "url": "https://leetcode.com/problems/sentence-similarity-ii/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Depth-First Search",
      "Breadth-First Search",
      "Union-Find"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 879,
    "name": "To Lower Case",
    "count": 2,
    "url": "https://leetcode.com/problems/to-lower-case/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 880,
    "name": "Search in a Binary Search Tree",
    "count": 2,
    "url": "https://leetcode.com/problems/search-in-a-binary-search-tree/",
    "topics": [
      "Tree",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 881,
    "name": "Redundant Connection II",
    "count": 2,
    "url": "https://leetcode.com/problems/redundant-connection-ii/",
    "topics": [
      "Depth-First Search",
      "Breadth-First Search",
      "Union-Find",
      "Graph Theory"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 882,
    "name": "Equal Tree Partition",
    "count": 2,
    "url": "https://leetcode.com/problems/equal-tree-partition/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 883,
    "name": "Maximum Binary Tree",
    "count": 2,
    "url": "https://leetcode.com/problems/maximum-binary-tree/",
    "topics": [
      "Array",
      "Divide and Conquer",
      "Stack",
      "Tree",
      "Monotonic Stack",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 884,
    "name": "Range Addition II",
    "count": 2,
    "url": "https://leetcode.com/problems/range-addition-ii/",
    "topics": [
      "Array",
      "Math"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 885,
    "name": "N-ary Tree Postorder Traversal",
    "count": 2,
    "url": "https://leetcode.com/problems/n-ary-tree-postorder-traversal/",
    "topics": [
      "Stack",
      "Tree",
      "Depth-First Search"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 886,
    "name": "Delete Operation for Two Strings",
    "count": 2,
    "url": "https://leetcode.com/problems/delete-operation-for-two-strings/",
    "topics": [
      "String",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 887,
    "name": "Longest Palindrome",
    "count": 2,
    "url": "https://leetcode.com/problems/longest-palindrome/",
    "topics": [
      "Hash Table",
      "String",
      "Greedy"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 888,
    "name": "Patching Array",
    "count": 2,
    "url": "https://leetcode.com/problems/patching-array/",
    "topics": [
      "Array",
      "Greedy"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 889,
    "name": "Power of Three",
    "count": 2,
    "url": "https://leetcode.com/problems/power-of-three/",
    "topics": [
      "Math",
      "Recursion"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 890,
    "name": "Wiggle Sort",
    "count": 2,
    "url": "https://leetcode.com/problems/wiggle-sort/",
    "topics": [
      "Array",
      "Greedy",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 891,
    "name": "Rectangle Area",
    "count": 2,
    "url": "https://leetcode.com/problems/rectangle-area/",
    "topics": [
      "Math",
      "Geometry"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 892,
    "name": "Palindrome Partitioning II",
    "count": 2,
    "url": "https://leetcode.com/problems/palindrome-partitioning-ii/",
    "topics": [
      "String",
      "Dynamic Programming"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 893,
    "name": "Binary Tree Level Order Traversal II",
    "count": 2,
    "url": "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/",
    "topics": [
      "Tree",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 894,
    "name": "Gray Code",
    "count": 2,
    "url": "https://leetcode.com/problems/gray-code/",
    "topics": [
      "Math",
      "Backtracking",
      "Bit Manipulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 895,
    "name": "Check if Numbers Are Ascending in a Sentence",
    "count": 2,
    "url": "https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 896,
    "name": "Partitioning Into Minimum Number Of Deci-Binary Numbers",
    "count": 2,
    "url": "https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/",
    "topics": [
      "String",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 897,
    "name": "Goal Parser Interpretation",
    "count": 2,
    "url": "https://leetcode.com/problems/goal-parser-interpretation/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 898,
    "name": "Lucky Numbers in a Matrix",
    "count": 2,
    "url": "https://leetcode.com/problems/lucky-numbers-in-a-matrix/",
    "topics": [
      "Array",
      "Matrix"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 899,
    "name": "Deepest Leaves Sum",
    "count": 2,
    "url": "https://leetcode.com/problems/deepest-leaves-sum/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 900,
    "name": "Smallest String Starting From Leaf",
    "count": 2,
    "url": "https://leetcode.com/problems/smallest-string-starting-from-leaf/",
    "topics": [
      "String",
      "Backtracking",
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 901,
    "name": "Find and Replace Pattern",
    "count": 2,
    "url": "https://leetcode.com/problems/find-and-replace-pattern/",
    "topics": [
      "Array",
      "Hash Table",
      "String"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 902,
    "name": "1-bit and 2-bit Characters",
    "count": 2,
    "url": "https://leetcode.com/problems/1-bit-and-2-bit-characters/",
    "topics": [
      "Array"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 903,
    "name": "Array Partition I",
    "count": 2,
    "url": "https://leetcode.com/problems/array-partition-i/",
    "topics": [
      "Array",
      "Greedy",
      "Sorting",
      "Counting Sort"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 904,
    "name": "Longest Uncommon Subsequence II",
    "count": 2,
    "url": "https://leetcode.com/problems/longest-uncommon-subsequence-ii/",
    "topics": [
      "Array",
      "Hash Table",
      "Two Pointers",
      "String",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 905,
    "name": "Most Frequent Subtree Sum",
    "count": 2,
    "url": "https://leetcode.com/problems/most-frequent-subtree-sum/",
    "topics": [
      "Hash Table",
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 906,
    "name": "Ones and Zeroes",
    "count": 2,
    "url": "https://leetcode.com/problems/ones-and-zeroes/",
    "topics": [
      "Array",
      "String",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 907,
    "name": "Assign Cookies",
    "count": 2,
    "url": "https://leetcode.com/problems/assign-cookies/",
    "topics": [
      "Array",
      "Two Pointers",
      "Greedy",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 908,
    "name": "Number of Segments in a String",
    "count": 2,
    "url": "https://leetcode.com/problems/number-of-segments-in-a-string/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 909,
    "name": "Broken Calculator",
    "count": 2,
    "url": "https://leetcode.com/problems/broken-calculator/",
    "topics": [
      "Math",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 910,
    "name": "Design Bitset",
    "count": 2,
    "url": "https://leetcode.com/problems/design-bitset/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Design"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 911,
    "name": "Maximum Score From Removing Stones",
    "count": 2,
    "url": "https://leetcode.com/problems/maximum-score-from-removing-stones/",
    "topics": [
      "Math",
      "Greedy",
      "Heap (Priority Queue)"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 912,
    "name": "Arithmetic Subarrays",
    "count": 2,
    "url": "https://leetcode.com/problems/arithmetic-subarrays/",
    "topics": [
      "Array",
      "Hash Table",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 913,
    "name": "XOR Operation in an Array",
    "count": 2,
    "url": "https://leetcode.com/problems/xor-operation-in-an-array/",
    "topics": [
      "Math",
      "Bit Manipulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 914,
    "name": "Pseudo-Palindromic Paths in a Binary Tree",
    "count": 2,
    "url": "https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/",
    "topics": [
      "Bit Manipulation",
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 915,
    "name": "Find the Kth Smallest Sum of a Matrix With Sorted Rows",
    "count": 2,
    "url": "https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/",
    "topics": [
      "Array",
      "Binary Search",
      "Heap (Priority Queue)",
      "Matrix"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 916,
    "name": "Sum of Mutated Array Closest to Target",
    "count": 2,
    "url": "https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/",
    "topics": [
      "Array",
      "Binary Search",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 917,
    "name": "Shift 2D Grid",
    "count": 2,
    "url": "https://leetcode.com/problems/shift-2d-grid/",
    "topics": [
      "Array",
      "Matrix",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 918,
    "name": "Play with Chips",
    "count": 2,
    "url": "https://leetcode.com/problems/play-with-chips/",
    "topics": [
      "Array",
      "Math",
      "Greedy"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 919,
    "name": "Push Dominoes",
    "count": 2,
    "url": "https://leetcode.com/problems/push-dominoes/",
    "topics": [
      "Two Pointers",
      "String",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 920,
    "name": "Couples Holding Hands",
    "count": 2,
    "url": "https://leetcode.com/problems/couples-holding-hands/",
    "topics": [
      "Greedy",
      "Depth-First Search",
      "Breadth-First Search",
      "Union-Find",
      "Graph Theory"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 921,
    "name": "Course Schedule III",
    "count": 2,
    "url": "https://leetcode.com/problems/course-schedule-iii/",
    "topics": [
      "Array",
      "Greedy",
      "Sorting",
      "Heap (Priority Queue)"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 922,
    "name": "Construct the Rectangle",
    "count": 2,
    "url": "https://leetcode.com/problems/construct-the-rectangle/",
    "topics": [
      "Math"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 923,
    "name": "Integer Replacement",
    "count": 2,
    "url": "https://leetcode.com/problems/integer-replacement/",
    "topics": [
      "Dynamic Programming",
      "Greedy",
      "Bit Manipulation",
      "Memoization"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 924,
    "name": "Wiggle Subsequence",
    "count": 2,
    "url": "https://leetcode.com/problems/wiggle-subsequence/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 925,
    "name": "Count Numbers with Unique Digits",
    "count": 2,
    "url": "https://leetcode.com/problems/count-numbers-with-unique-digits/",
    "topics": [
      "Math",
      "Dynamic Programming",
      "Backtracking"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 926,
    "name": "Reverse Vowels of a String",
    "count": 2,
    "url": "https://leetcode.com/problems/reverse-vowels-of-a-string/",
    "topics": [
      "Two Pointers",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 927,
    "name": "Maximum Product of Word Lengths",
    "count": 2,
    "url": "https://leetcode.com/problems/maximum-product-of-word-lengths/",
    "topics": [
      "Array",
      "String",
      "Bit Manipulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 928,
    "name": "Add Digits",
    "count": 2,
    "url": "https://leetcode.com/problems/add-digits/",
    "topics": [
      "Math",
      "Simulation",
      "Number Theory"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 929,
    "name": "Restore the Array From Adjacent Pairs",
    "count": 2,
    "url": "https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/",
    "topics": [
      "Array",
      "Hash Table",
      "Depth-First Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 930,
    "name": "Max Sum of Rectangle No Larger Than K",
    "count": 2,
    "url": "https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/",
    "topics": [
      "Array",
      "Binary Search",
      "Matrix",
      "Prefix Sum",
      "Ordered Set"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 931,
    "name": "Minimum Number of People to Teach",
    "count": 2,
    "url": "https://leetcode.com/problems/minimum-number-of-people-to-teach/",
    "topics": [
      "Array",
      "Hash Table",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 932,
    "name": "Number of Different Integers in a String",
    "count": 2,
    "url": "https://leetcode.com/problems/number-of-different-integers-in-a-string/",
    "topics": [
      "Hash Table",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 933,
    "name": "Number of Pairs of Strings With Concatenation Equal to Target",
    "count": 2,
    "url": "https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Counting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 934,
    "name": "Remove One Element to Make the Array Strictly Increasing",
    "count": 2,
    "url": "https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/",
    "topics": [
      "Array"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 935,
    "name": "Check if One String Swap Can Make Strings Equal",
    "count": 2,
    "url": "https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/",
    "topics": [
      "Hash Table",
      "String",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 936,
    "name": "Sum of Unique Elements",
    "count": 2,
    "url": "https://leetcode.com/problems/sum-of-unique-elements/",
    "topics": [
      "Array",
      "Hash Table",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 937,
    "name": "Check Array Formation Through Concatenation",
    "count": 2,
    "url": "https://leetcode.com/problems/check-array-formation-through-concatenation/",
    "topics": [
      "Array",
      "Hash Table"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 938,
    "name": "Clone Binary Tree With Random Pointer",
    "count": 2,
    "url": "https://leetcode.com/problems/clone-binary-tree-with-random-pointer/",
    "topics": [
      "Hash Table",
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 939,
    "name": "Validate Binary Tree Nodes",
    "count": 2,
    "url": "https://leetcode.com/problems/validate-binary-tree-nodes/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Union-Find",
      "Graph Theory",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 940,
    "name": "Count Negative Numbers in a Sorted Matrix",
    "count": 2,
    "url": "https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/",
    "topics": [
      "Array",
      "Binary Search",
      "Matrix"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 941,
    "name": "Replace Elements with Greatest Element on Right Side",
    "count": 2,
    "url": "https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/",
    "topics": [
      "Array"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 942,
    "name": "Add to Array-Form of Integer",
    "count": 2,
    "url": "https://leetcode.com/problems/add-to-array-form-of-integer/",
    "topics": [
      "Array",
      "Math"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 943,
    "name": "Increasing Order Search Tree",
    "count": 2,
    "url": "https://leetcode.com/problems/increasing-order-search-tree/",
    "topics": [
      "Stack",
      "Tree",
      "Depth-First Search",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 944,
    "name": "Advantage Shuffle",
    "count": 2,
    "url": "https://leetcode.com/problems/advantage-shuffle/",
    "topics": [
      "Array",
      "Two Pointers",
      "Greedy",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 945,
    "name": "Replace Words",
    "count": 2,
    "url": "https://leetcode.com/problems/replace-words/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Trie"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 946,
    "name": "Construct String from Binary Tree",
    "count": 2,
    "url": "https://leetcode.com/problems/construct-string-from-binary-tree/",
    "topics": [
      "String",
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 947,
    "name": "Sum of Two Integers",
    "count": 2,
    "url": "https://leetcode.com/problems/sum-of-two-integers/",
    "topics": [
      "Math",
      "Bit Manipulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 948,
    "name": "Range Sum Query - Immutable",
    "count": 2,
    "url": "https://leetcode.com/problems/range-sum-query-immutable/",
    "topics": [
      "Array",
      "Design",
      "Prefix Sum"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 949,
    "name": "Circular Array Loop",
    "count": 2,
    "url": "https://leetcode.com/problems/circular-array-loop/",
    "topics": [
      "Array",
      "Hash Table",
      "Two Pointers"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 950,
    "name": "H-Index II",
    "count": 2,
    "url": "https://leetcode.com/problems/h-index-ii/",
    "topics": [
      "Array",
      "Binary Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 951,
    "name": "Evaluate the Bracket Pairs of a String",
    "count": 2,
    "url": "https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/",
    "topics": [
      "Array",
      "Hash Table",
      "String"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 952,
    "name": "Find the Most Competitive Subsequence",
    "count": 2,
    "url": "https://leetcode.com/problems/find-the-most-competitive-subsequence/",
    "topics": [
      "Array",
      "Stack",
      "Greedy",
      "Monotonic Stack"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 953,
    "name": "Largest Substring Between Two Equal Characters",
    "count": 2,
    "url": "https://leetcode.com/problems/largest-substring-between-two-equal-characters/",
    "topics": [
      "Hash Table",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 954,
    "name": "Count Good Triplets",
    "count": 2,
    "url": "https://leetcode.com/problems/count-good-triplets/",
    "topics": [
      "Array",
      "Enumeration"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 955,
    "name": "Shuffle String",
    "count": 2,
    "url": "https://leetcode.com/problems/shuffle-string/",
    "topics": [
      "Array",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 956,
    "name": "Path Crossing",
    "count": 2,
    "url": "https://leetcode.com/problems/path-crossing/",
    "topics": [
      "Hash Table",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 957,
    "name": "Clone N-ary Tree",
    "count": 2,
    "url": "https://leetcode.com/problems/clone-n-ary-tree/",
    "topics": [
      "Hash Table",
      "Tree",
      "Depth-First Search",
      "Breadth-First Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 958,
    "name": "Minimum Number of Days to Make m Bouquets",
    "count": 2,
    "url": "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/",
    "topics": [
      "Array",
      "Binary Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 959,
    "name": "Simplified Fractions",
    "count": 2,
    "url": "https://leetcode.com/problems/simplified-fractions/",
    "topics": [
      "Math",
      "String",
      "Number Theory"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 960,
    "name": "Build an Array With Stack Operations",
    "count": 2,
    "url": "https://leetcode.com/problems/build-an-array-with-stack-operations/",
    "topics": [
      "Array",
      "Stack",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 961,
    "name": "Pizza With 3n Slices",
    "count": 2,
    "url": "https://leetcode.com/problems/pizza-with-3n-slices/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Greedy",
      "Heap (Priority Queue)"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 962,
    "name": "Check If N and Its Double Exist",
    "count": 2,
    "url": "https://leetcode.com/problems/check-if-n-and-its-double-exist/",
    "topics": [
      "Array",
      "Hash Table",
      "Two Pointers",
      "Binary Search",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 963,
    "name": "Cells with Odd Values in a Matrix",
    "count": 2,
    "url": "https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/",
    "topics": [
      "Array",
      "Math",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 964,
    "name": "Find Positive Integer Solution for a Given Equation",
    "count": 2,
    "url": "https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/",
    "topics": [
      "Math",
      "Two Pointers",
      "Binary Search",
      "Interactive"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 965,
    "name": "Relative Sort Array",
    "count": 2,
    "url": "https://leetcode.com/problems/relative-sort-array/",
    "topics": [
      "Array",
      "Hash Table",
      "Sorting",
      "Counting Sort"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 966,
    "name": "Compare Strings by Frequency of the Smallest Character",
    "count": 2,
    "url": "https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Binary Search",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 967,
    "name": "Print in Order",
    "count": 2,
    "url": "https://leetcode.com/problems/print-in-order/",
    "topics": [
      "Concurrency"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 968,
    "name": "Confusing Number",
    "count": 2,
    "url": "https://leetcode.com/problems/confusing-number/",
    "topics": [
      "Math"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 969,
    "name": "Best Sightseeing Pair",
    "count": 2,
    "url": "https://leetcode.com/problems/best-sightseeing-pair/",
    "topics": [
      "Array",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 970,
    "name": "Flip Equivalent Binary Trees",
    "count": 2,
    "url": "https://leetcode.com/problems/flip-equivalent-binary-trees/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 971,
    "name": "Minimum Falling Path Sum",
    "count": 2,
    "url": "https://leetcode.com/problems/minimum-falling-path-sum/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 972,
    "name": "Long Pressed Name",
    "count": 2,
    "url": "https://leetcode.com/problems/long-pressed-name/",
    "topics": [
      "Two Pointers",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 973,
    "name": "X of a Kind in a Deck of Cards",
    "count": 2,
    "url": "https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/",
    "topics": [
      "Array",
      "Hash Table",
      "Math",
      "Counting",
      "Number Theory"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 974,
    "name": "Leaf-Similar Trees",
    "count": 2,
    "url": "https://leetcode.com/problems/leaf-similar-trees/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 975,
    "name": "Global and Local Inversions",
    "count": 2,
    "url": "https://leetcode.com/problems/global-and-local-inversions/",
    "topics": [
      "Array",
      "Math"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 976,
    "name": "Bold Words in String",
    "count": 2,
    "url": "https://leetcode.com/problems/bold-words-in-string/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Trie",
      "String Matching"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 977,
    "name": "Shortest Completing Word",
    "count": 2,
    "url": "https://leetcode.com/problems/shortest-completing-word/",
    "topics": [
      "Array",
      "Hash Table",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 978,
    "name": "Minimum Window Subsequence",
    "count": 2,
    "url": "https://leetcode.com/problems/minimum-window-subsequence/",
    "topics": [
      "String",
      "Dynamic Programming",
      "Sliding Window"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 979,
    "name": "Repeated String Match",
    "count": 2,
    "url": "https://leetcode.com/problems/repeated-string-match/",
    "topics": [
      "String",
      "String Matching"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 980,
    "name": "Map Sum Pairs",
    "count": 2,
    "url": "https://leetcode.com/problems/map-sum-pairs/",
    "topics": [
      "Hash Table",
      "String",
      "Design",
      "Trie"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 981,
    "name": "Remove 9",
    "count": 2,
    "url": "https://leetcode.com/problems/remove-9/",
    "topics": [
      "Math"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 982,
    "name": "Design Compressed String Iterator",
    "count": 2,
    "url": "https://leetcode.com/problems/design-compressed-string-iterator/",
    "topics": [
      "Array",
      "String",
      "Design",
      "Iterator"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 983,
    "name": "The Maze III",
    "count": 2,
    "url": "https://leetcode.com/problems/the-maze-iii/",
    "topics": [
      "Array",
      "String",
      "Depth-First Search",
      "Breadth-First Search",
      "Graph Theory",
      "Heap (Priority Queue)",
      "Matrix",
      "Shortest Path"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 984,
    "name": "Encode String with Shortest Length",
    "count": 2,
    "url": "https://leetcode.com/problems/encode-string-with-shortest-length/",
    "topics": [
      "String",
      "Dynamic Programming"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 985,
    "name": "Hamming Distance",
    "count": 2,
    "url": "https://leetcode.com/problems/hamming-distance/",
    "topics": [
      "Bit Manipulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 986,
    "name": "Sequence Reconstruction",
    "count": 2,
    "url": "https://leetcode.com/problems/sequence-reconstruction/",
    "topics": [
      "Array",
      "Graph Theory",
      "Topological Sort"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 987,
    "name": "Guess Number Higher or Lower II",
    "count": 2,
    "url": "https://leetcode.com/problems/guess-number-higher-or-lower-ii/",
    "topics": [
      "Math",
      "Dynamic Programming",
      "Game Theory"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 988,
    "name": "Largest Divisible Subset",
    "count": 2,
    "url": "https://leetcode.com/problems/largest-divisible-subset/",
    "topics": [
      "Array",
      "Math",
      "Dynamic Programming",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 989,
    "name": "Single Number III",
    "count": 2,
    "url": "https://leetcode.com/problems/single-number-iii/",
    "topics": [
      "Array",
      "Bit Manipulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 990,
    "name": "Find Minimum in Rotated Sorted Array II",
    "count": 2,
    "url": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/",
    "topics": [
      "Array",
      "Binary Search"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 991,
    "name": "Insertion Sort List",
    "count": 2,
    "url": "https://leetcode.com/problems/insertion-sort-list/",
    "topics": [
      "Linked List",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 992,
    "name": "Sort Integers by The Number of 1 Bits",
    "count": 2,
    "url": "https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/",
    "topics": [
      "Array",
      "Bit Manipulation",
      "Sorting",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 993,
    "name": "Two Sum III - Data structure design",
    "count": 2,
    "url": "https://leetcode.com/problems/two-sum-iii-data-structure-design/",
    "topics": [
      "Array",
      "Hash Table",
      "Two Pointers",
      "Design",
      "Data Stream"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 994,
    "name": "Keyboard Row",
    "count": 2,
    "url": "https://leetcode.com/problems/keyboard-row/",
    "topics": [
      "Array",
      "Hash Table",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 995,
    "name": "Remove Digit From Number to Maximize Result",
    "count": 2,
    "url": "https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/",
    "topics": [
      "String",
      "Greedy",
      "Enumeration"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 996,
    "name": "Check if Number is a Sum of Powers of Three",
    "count": 2,
    "url": "https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/",
    "topics": [
      "Math"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 997,
    "name": "Maximum Number of Balls in a Box",
    "count": 2,
    "url": "https://leetcode.com/problems/maximum-number-of-balls-in-a-box/",
    "topics": [
      "Hash Table",
      "Math",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 998,
    "name": "Replace All ?'s to Avoid Consecutive Repeating Characters",
    "count": 2,
    "url": "https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 999,
    "name": "Minimum Operations to Make Array Equal",
    "count": 2,
    "url": "https://leetcode.com/problems/minimum-operations-to-make-array-equal/",
    "topics": [
      "Math"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1000,
    "name": "Running Sum of 1d Array",
    "count": 2,
    "url": "https://leetcode.com/problems/running-sum-of-1d-array/",
    "topics": [
      "Array",
      "Prefix Sum"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1001,
    "name": "Generate a String With Characters That Have Odd Counts",
    "count": 2,
    "url": "https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1002,
    "name": "Sort the Matrix Diagonally",
    "count": 2,
    "url": "https://leetcode.com/problems/sort-the-matrix-diagonally/",
    "topics": [
      "Array",
      "Sorting",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1003,
    "name": "Remove Outermost Parentheses",
    "count": 2,
    "url": "https://leetcode.com/problems/remove-outermost-parentheses/",
    "topics": [
      "String",
      "Stack"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1004,
    "name": "DI String Match",
    "count": 2,
    "url": "https://leetcode.com/problems/di-string-match/",
    "topics": [
      "Array",
      "Two Pointers",
      "String",
      "Greedy"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1005,
    "name": "Sort Array By Parity II",
    "count": 2,
    "url": "https://leetcode.com/problems/sort-array-by-parity-ii/",
    "topics": [
      "Array",
      "Two Pointers",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1006,
    "name": "Letter Case Permutation",
    "count": 2,
    "url": "https://leetcode.com/problems/letter-case-permutation/",
    "topics": [
      "String",
      "Backtracking",
      "Bit Manipulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1007,
    "name": "Image Smoother",
    "count": 2,
    "url": "https://leetcode.com/problems/image-smoother/",
    "topics": [
      "Array",
      "Matrix"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1008,
    "name": "4 Keys Keyboard",
    "count": 2,
    "url": "https://leetcode.com/problems/4-keys-keyboard/",
    "topics": [
      "Math",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1009,
    "name": "Decode Ways II",
    "count": 2,
    "url": "https://leetcode.com/problems/decode-ways-ii/",
    "topics": [
      "String",
      "Dynamic Programming"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 1010,
    "name": "Maximum Vacation Days",
    "count": 2,
    "url": "https://leetcode.com/problems/maximum-vacation-days/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Matrix"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 1011,
    "name": "Maximum Depth of N-ary Tree",
    "count": 2,
    "url": "https://leetcode.com/problems/maximum-depth-of-n-ary-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1012,
    "name": "Super Washing Machines",
    "count": 2,
    "url": "https://leetcode.com/problems/super-washing-machines/",
    "topics": [
      "Array",
      "Greedy"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 1013,
    "name": "Smallest Good Base",
    "count": 2,
    "url": "https://leetcode.com/problems/smallest-good-base/",
    "topics": [
      "Math",
      "Binary Search"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 1014,
    "name": "Matchsticks to Square",
    "count": 2,
    "url": "https://leetcode.com/problems/matchsticks-to-square/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Backtracking",
      "Bit Manipulation",
      "Bitmask"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1015,
    "name": "Data Stream as Disjoint Intervals",
    "count": 2,
    "url": "https://leetcode.com/problems/data-stream-as-disjoint-intervals/",
    "topics": [
      "Hash Table",
      "Binary Search",
      "Union-Find",
      "Design",
      "Data Stream",
      "Ordered Set"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 1016,
    "name": "Ugly Number II",
    "count": 2,
    "url": "https://leetcode.com/problems/ugly-number-ii/",
    "topics": [
      "Hash Table",
      "Math",
      "Dynamic Programming",
      "Heap (Priority Queue)"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1017,
    "name": "Shifting Letters",
    "count": 2,
    "url": "https://leetcode.com/problems/shifting-letters/",
    "topics": [
      "Array",
      "String",
      "Prefix Sum"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1018,
    "name": "Distribute Candies to People",
    "count": 2,
    "url": "https://leetcode.com/problems/distribute-candies-to-people/",
    "topics": [
      "Math",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1019,
    "name": "Fixed Point",
    "count": 2,
    "url": "https://leetcode.com/problems/fixed-point/",
    "topics": [
      "Array",
      "Binary Search"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1020,
    "name": "Prison Cells After N Days",
    "count": 2,
    "url": "https://leetcode.com/problems/prison-cells-after-n-days/",
    "topics": [
      "Array",
      "Hash Table",
      "Math",
      "Bit Manipulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1021,
    "name": "Available Captures for Rook",
    "count": 2,
    "url": "https://leetcode.com/problems/available-captures-for-rook/",
    "topics": [
      "Array",
      "Matrix",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1022,
    "name": "Unique Morse Code Words",
    "count": 2,
    "url": "https://leetcode.com/problems/unique-morse-code-words/",
    "topics": [
      "Array",
      "Hash Table",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1023,
    "name": "Minimum Changes To Make Alternating Binary String",
    "count": 2,
    "url": "https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1024,
    "name": "Spiral Matrix III",
    "count": 2,
    "url": "https://leetcode.com/problems/spiral-matrix-iii/",
    "topics": [
      "Array",
      "Matrix",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1025,
    "name": "Time Needed to Buy Tickets",
    "count": 2,
    "url": "https://leetcode.com/problems/time-needed-to-buy-tickets/",
    "topics": [
      "Array",
      "Queue",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1026,
    "name": "Special Positions in a Binary Matrix",
    "count": 2,
    "url": "https://leetcode.com/problems/special-positions-in-a-binary-matrix/",
    "topics": [
      "Array",
      "Matrix"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1027,
    "name": "Thousand Separator",
    "count": 2,
    "url": "https://leetcode.com/problems/thousand-separator/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1028,
    "name": "Find the Distance Value Between Two Arrays",
    "count": 2,
    "url": "https://leetcode.com/problems/find-the-distance-value-between-two-arrays/",
    "topics": [
      "Array",
      "Two Pointers",
      "Binary Search",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1029,
    "name": "Iterator for Combination",
    "count": 2,
    "url": "https://leetcode.com/problems/iterator-for-combination/",
    "topics": [
      "String",
      "Backtracking",
      "Design",
      "Iterator"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1030,
    "name": "Shortest Distance to Target Color",
    "count": 2,
    "url": "https://leetcode.com/problems/shortest-distance-to-target-color/",
    "topics": [
      "Array",
      "Binary Search",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1031,
    "name": "Baseball Game",
    "count": 2,
    "url": "https://leetcode.com/problems/baseball-game/",
    "topics": [
      "Array",
      "Stack",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1032,
    "name": "Remove Boxes",
    "count": 2,
    "url": "https://leetcode.com/problems/remove-boxes/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Memoization"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 1033,
    "name": "Missing Number In Arithmetic Progression",
    "count": 2,
    "url": "https://leetcode.com/problems/missing-number-in-arithmetic-progression/",
    "topics": [
      "Array",
      "Math"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1034,
    "name": "Longest Repeating Substring",
    "count": 2,
    "url": "https://leetcode.com/problems/longest-repeating-substring/",
    "topics": [
      "String",
      "Binary Search",
      "Dynamic Programming",
      "Rolling Hash",
      "Suffix Array",
      "Hash Function"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1035,
    "name": "Hexspeak",
    "count": 2,
    "url": "https://leetcode.com/problems/hexspeak/",
    "topics": [
      "Math",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1036,
    "name": "Array Transformation",
    "count": 2,
    "url": "https://leetcode.com/problems/array-transformation/",
    "topics": [
      "Array",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1037,
    "name": "How Many Apples Can You Put into the Basket",
    "count": 2,
    "url": "https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/",
    "topics": [
      "Array",
      "Greedy",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1038,
    "name": "Count Substrings with Only One Distinct Letter",
    "count": 2,
    "url": "https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/",
    "topics": [
      "Math",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1039,
    "name": "Find Smallest Common Element in All Rows",
    "count": 2,
    "url": "https://leetcode.com/problems/find-smallest-common-element-in-all-rows/",
    "topics": [
      "Array",
      "Hash Table",
      "Binary Search",
      "Matrix",
      "Counting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1040,
    "name": "Find Bottom Left Tree Value",
    "count": 2,
    "url": "https://leetcode.com/problems/find-bottom-left-tree-value/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1041,
    "name": "Scramble String",
    "count": 2,
    "url": "https://leetcode.com/problems/scramble-string/",
    "topics": [
      "String",
      "Dynamic Programming"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 1042,
    "name": "Number of Students Doing Homework at a Given Time",
    "count": 2,
    "url": "https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/",
    "topics": [
      "Array"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1043,
    "name": "Line Reflection",
    "count": 2,
    "url": "https://leetcode.com/problems/line-reflection/",
    "topics": [
      "Array",
      "Hash Table",
      "Math"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1044,
    "name": "Path with Maximum Gold",
    "count": 2,
    "url": "https://leetcode.com/problems/path-with-maximum-gold/",
    "topics": [
      "Array",
      "Backtracking",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1045,
    "name": "Stone Game VI",
    "count": 1,
    "url": "https://leetcode.com/problems/stone-game-vi/",
    "topics": [
      "Array",
      "Math",
      "Greedy",
      "Sorting",
      "Heap (Priority Queue)",
      "Game Theory"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1046,
    "name": "Find Subsequence of Length K With the Largest Sum",
    "count": 1,
    "url": "https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/",
    "topics": [
      "Array",
      "Hash Table",
      "Sorting",
      "Heap (Priority Queue)"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1047,
    "name": "Smallest Range I",
    "count": 1,
    "url": "https://leetcode.com/problems/smallest-range-i/",
    "topics": [
      "Array",
      "Math"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1048,
    "name": "Mini Parser",
    "count": 1,
    "url": "https://leetcode.com/problems/mini-parser/",
    "topics": [
      "String",
      "Stack",
      "Depth-First Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1049,
    "name": "N-Repeated Element in Size 2N Array",
    "count": 1,
    "url": "https://leetcode.com/problems/n-repeated-element-in-size-2n-array/",
    "topics": [
      "Array",
      "Hash Table"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1050,
    "name": "Split Concatenated Strings",
    "count": 1,
    "url": "https://leetcode.com/problems/split-concatenated-strings/",
    "topics": [
      "Array",
      "String",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1051,
    "name": "Number Of Rectangles That Can Form The Largest Square",
    "count": 1,
    "url": "https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/",
    "topics": [
      "Array"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1052,
    "name": "Minimum Average Difference",
    "count": 1,
    "url": "https://leetcode.com/problems/minimum-average-difference/",
    "topics": [
      "Array",
      "Prefix Sum"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1053,
    "name": "Minimum Rounds to Complete All Tasks",
    "count": 1,
    "url": "https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/",
    "topics": [
      "Array",
      "Hash Table",
      "Greedy",
      "Counting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1054,
    "name": "Partition Array According to Given Pivot",
    "count": 1,
    "url": "https://leetcode.com/problems/partition-array-according-to-given-pivot/",
    "topics": [
      "Array",
      "Two Pointers",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1055,
    "name": "Minimum Sum of Four Digit Number After Splitting Digits",
    "count": 1,
    "url": "https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/",
    "topics": [
      "Math",
      "Greedy",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1056,
    "name": "Rearrange Array Elements by Sign",
    "count": 1,
    "url": "https://leetcode.com/problems/rearrange-array-elements-by-sign/",
    "topics": [
      "Array",
      "Two Pointers",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1057,
    "name": "Adding Spaces to a String",
    "count": 1,
    "url": "https://leetcode.com/problems/adding-spaces-to-a-string/",
    "topics": [
      "Array",
      "Two Pointers",
      "String",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1058,
    "name": "Decode the Slanted Ciphertext",
    "count": 1,
    "url": "https://leetcode.com/problems/decode-the-slanted-ciphertext/",
    "topics": [
      "String",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1059,
    "name": "Kth Distinct String in an Array",
    "count": 1,
    "url": "https://leetcode.com/problems/kth-distinct-string-in-an-array/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1060,
    "name": "Sum of Beauty in the Array",
    "count": 1,
    "url": "https://leetcode.com/problems/sum-of-beauty-in-the-array/",
    "topics": [
      "Array"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1061,
    "name": "Count Number of Pairs With Absolute Difference K",
    "count": 1,
    "url": "https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/",
    "topics": [
      "Array",
      "Hash Table",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1062,
    "name": "Minimize the Difference Between Target and Chosen Elements",
    "count": 1,
    "url": "https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1063,
    "name": "Form Array by Concatenating Subarrays of Another Array",
    "count": 1,
    "url": "https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/",
    "topics": [
      "Array",
      "Two Pointers",
      "Greedy",
      "String Matching"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1064,
    "name": "Minimum Numbers of Function Calls to Make Target Array",
    "count": 1,
    "url": "https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/",
    "topics": [
      "Array",
      "Greedy",
      "Bit Manipulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1065,
    "name": "Can Make Arithmetic Progression From Sequence",
    "count": 1,
    "url": "https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/",
    "topics": [
      "Array",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1066,
    "name": "Maximum Number of Vowels in a Substring of Given Length",
    "count": 1,
    "url": "https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/",
    "topics": [
      "String",
      "Sliding Window"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1067,
    "name": "Queries on a Permutation With Key",
    "count": 1,
    "url": "https://leetcode.com/problems/queries-on-a-permutation-with-key/",
    "topics": [
      "Array",
      "Binary Indexed Tree",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1068,
    "name": "Closest Divisors",
    "count": 1,
    "url": "https://leetcode.com/problems/closest-divisors/",
    "topics": [
      "Math"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1069,
    "name": "The K Weakest Rows in a Matrix",
    "count": 1,
    "url": "https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/",
    "topics": [
      "Array",
      "Binary Search",
      "Sorting",
      "Heap (Priority Queue)",
      "Matrix"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1070,
    "name": "Diet Plan Performance",
    "count": 1,
    "url": "https://leetcode.com/problems/diet-plan-performance/",
    "topics": [
      "Array",
      "Sliding Window"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1071,
    "name": "Armstrong Number",
    "count": 1,
    "url": "https://leetcode.com/problems/armstrong-number/",
    "topics": [
      "Math"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1072,
    "name": "Largest Unique Number",
    "count": 1,
    "url": "https://leetcode.com/problems/largest-unique-number/",
    "topics": [
      "Array",
      "Hash Table",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1073,
    "name": "Number of Days in a Month",
    "count": 1,
    "url": "https://leetcode.com/problems/number-of-days-in-a-month/",
    "topics": [
      "Math"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1074,
    "name": "Sum of Digits in the Minimum Number",
    "count": 1,
    "url": "https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/",
    "topics": [
      "Array",
      "Math"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1075,
    "name": "Index Pairs of a String",
    "count": 1,
    "url": "https://leetcode.com/problems/index-pairs-of-a-string/",
    "topics": [
      "Array",
      "String",
      "Trie",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1076,
    "name": "Prime Number of Set Bits in Binary Representation",
    "count": 1,
    "url": "https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/",
    "topics": [
      "Math",
      "Bit Manipulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1077,
    "name": "Optimal Division",
    "count": 1,
    "url": "https://leetcode.com/problems/optimal-division/",
    "topics": [
      "Array",
      "Math",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1078,
    "name": "Complex Number Multiplication",
    "count": 1,
    "url": "https://leetcode.com/problems/complex-number-multiplication/",
    "topics": [
      "Math",
      "String",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1079,
    "name": "Construct String With Repeat Limit",
    "count": 1,
    "url": "https://leetcode.com/problems/construct-string-with-repeat-limit/",
    "topics": [
      "Hash Table",
      "String",
      "Greedy",
      "Heap (Priority Queue)",
      "Counting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1080,
    "name": "Check if All the Integers in a Range Are Covered",
    "count": 1,
    "url": "https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/",
    "topics": [
      "Array",
      "Hash Table",
      "Prefix Sum"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1081,
    "name": "Truncate Sentence",
    "count": 1,
    "url": "https://leetcode.com/problems/truncate-sentence/",
    "topics": [
      "Array",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1082,
    "name": "Two Out of Three",
    "count": 1,
    "url": "https://leetcode.com/problems/two-out-of-three/",
    "topics": [
      "Array",
      "Hash Table",
      "Bit Manipulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1083,
    "name": "Divide a String Into Groups of Size k",
    "count": 1,
    "url": "https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/",
    "topics": [
      "String",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1084,
    "name": "Four Divisors",
    "count": 1,
    "url": "https://leetcode.com/problems/four-divisors/",
    "topics": [
      "Array",
      "Math"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1085,
    "name": "Maximum Erasure Value",
    "count": 1,
    "url": "https://leetcode.com/problems/maximum-erasure-value/",
    "topics": [
      "Array",
      "Hash Table",
      "Sliding Window"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1086,
    "name": "Check if Binary String Has at Most One Segment of Ones",
    "count": 1,
    "url": "https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1087,
    "name": "Find All Groups of Farmland",
    "count": 1,
    "url": "https://leetcode.com/problems/find-all-groups-of-farmland/",
    "topics": [
      "Array",
      "Depth-First Search",
      "Breadth-First Search",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1088,
    "name": "Count Vowel Substrings of a String",
    "count": 1,
    "url": "https://leetcode.com/problems/count-vowel-substrings-of-a-string/",
    "topics": [
      "Hash Table",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1089,
    "name": "Three Consecutive Odds",
    "count": 1,
    "url": "https://leetcode.com/problems/three-consecutive-odds/",
    "topics": [
      "Array"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1090,
    "name": "Counting Elements",
    "count": 1,
    "url": "https://leetcode.com/problems/counting-elements/",
    "topics": [
      "Array",
      "Hash Table"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1091,
    "name": "The Time When the Network Becomes Idle",
    "count": 1,
    "url": "https://leetcode.com/problems/the-time-when-the-network-becomes-idle/",
    "topics": [
      "Array",
      "Breadth-First Search",
      "Graph Theory"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1092,
    "name": "Find the Winner of an Array Game",
    "count": 1,
    "url": "https://leetcode.com/problems/find-the-winner-of-an-array-game/",
    "topics": [
      "Array",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1093,
    "name": "Seat Reservation Manager",
    "count": 1,
    "url": "https://leetcode.com/problems/seat-reservation-manager/",
    "topics": [
      "Design",
      "Heap (Priority Queue)"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1094,
    "name": "Stone Game VII",
    "count": 1,
    "url": "https://leetcode.com/problems/stone-game-vii/",
    "topics": [
      "Array",
      "Math",
      "Dynamic Programming",
      "Game Theory"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1095,
    "name": "Find Three Consecutive Integers That Sum to a Given Number",
    "count": 1,
    "url": "https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/",
    "topics": [
      "Math",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1096,
    "name": "Count Hills and Valleys in an Array",
    "count": 1,
    "url": "https://leetcode.com/problems/count-hills-and-valleys-in-an-array/",
    "topics": [
      "Array"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1097,
    "name": "Faulty Sensor",
    "count": 1,
    "url": "https://leetcode.com/problems/faulty-sensor/",
    "topics": [
      "Array",
      "Two Pointers"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1098,
    "name": "Apply Discount Every n Orders",
    "count": 1,
    "url": "https://leetcode.com/problems/apply-discount-every-n-orders/",
    "topics": [
      "Array",
      "Hash Table",
      "Design"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1099,
    "name": "Moving Stones Until Consecutive",
    "count": 1,
    "url": "https://leetcode.com/problems/moving-stones-until-consecutive/",
    "topics": [
      "Math",
      "Brainteaser"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1100,
    "name": "Groups of Special-Equivalent Strings",
    "count": 1,
    "url": "https://leetcode.com/problems/groups-of-special-equivalent-strings/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1101,
    "name": "Number Of Corner Rectangles",
    "count": 1,
    "url": "https://leetcode.com/problems/number-of-corner-rectangles/",
    "topics": [
      "Array",
      "Math",
      "Dynamic Programming",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1102,
    "name": "Add One Row to Tree",
    "count": 1,
    "url": "https://leetcode.com/problems/add-one-row-to-tree/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1103,
    "name": "Keep Multiplying Found Values by Two",
    "count": 1,
    "url": "https://leetcode.com/problems/keep-multiplying-found-values-by-two/",
    "topics": [
      "Array",
      "Hash Table",
      "Sorting",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1104,
    "name": "Perform String Shifts",
    "count": 1,
    "url": "https://leetcode.com/problems/perform-string-shifts/",
    "topics": [
      "Array",
      "Math",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1105,
    "name": "Minimum Consecutive Cards to Pick Up",
    "count": 1,
    "url": "https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/",
    "topics": [
      "Array",
      "Hash Table",
      "Sliding Window"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1106,
    "name": "Count Prefixes of a Given String",
    "count": 1,
    "url": "https://leetcode.com/problems/count-prefixes-of-a-given-string/",
    "topics": [
      "Array",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1107,
    "name": "Find the Difference of Two Arrays",
    "count": 1,
    "url": "https://leetcode.com/problems/find-the-difference-of-two-arrays/",
    "topics": [
      "Array",
      "Hash Table"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1108,
    "name": "Find All K-Distant Indices in an Array",
    "count": 1,
    "url": "https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/",
    "topics": [
      "Array",
      "Two Pointers"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1109,
    "name": "Most Frequent Number Following Key In an Array",
    "count": 1,
    "url": "https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/",
    "topics": [
      "Array",
      "Hash Table",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1110,
    "name": "Counting Words With a Given Prefix",
    "count": 1,
    "url": "https://leetcode.com/problems/counting-words-with-a-given-prefix/",
    "topics": [
      "Array",
      "String",
      "String Matching"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1111,
    "name": "All Divisions With the Highest Score of a Binary Array",
    "count": 1,
    "url": "https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/",
    "topics": [
      "Array"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1112,
    "name": "Find All Lonely Numbers in the Array",
    "count": 1,
    "url": "https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/",
    "topics": [
      "Array",
      "Hash Table",
      "Counting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1113,
    "name": "Destroying Asteroids",
    "count": 1,
    "url": "https://leetcode.com/problems/destroying-asteroids/",
    "topics": [
      "Array",
      "Greedy",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1114,
    "name": "Maximum Number of Words Found in Sentences",
    "count": 1,
    "url": "https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/",
    "topics": [
      "Array",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1115,
    "name": "Watering Plants",
    "count": 1,
    "url": "https://leetcode.com/problems/watering-plants/",
    "topics": [
      "Array",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1116,
    "name": "Smallest Index With Equal Value",
    "count": 1,
    "url": "https://leetcode.com/problems/smallest-index-with-equal-value/",
    "topics": [
      "Array"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1117,
    "name": "Convert 1D Array Into 2D Array",
    "count": 1,
    "url": "https://leetcode.com/problems/convert-1d-array-into-2d-array/",
    "topics": [
      "Array",
      "Matrix",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1118,
    "name": "Binary Searchable Numbers in an Unsorted Array",
    "count": 1,
    "url": "https://leetcode.com/problems/binary-searchable-numbers-in-an-unsorted-array/",
    "topics": [
      "Array",
      "Binary Search",
      "Stack",
      "Monotonic Stack"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1119,
    "name": "Minimize Product Sum of Two Arrays",
    "count": 1,
    "url": "https://leetcode.com/problems/minimize-product-sum-of-two-arrays/",
    "topics": [
      "Array",
      "Greedy",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1120,
    "name": "Queries on Number of Points Inside a Circle",
    "count": 1,
    "url": "https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/",
    "topics": [
      "Array",
      "Math",
      "Geometry"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1121,
    "name": "Sentence Similarity III",
    "count": 1,
    "url": "https://leetcode.com/problems/sentence-similarity-iii/",
    "topics": [
      "Array",
      "Two Pointers",
      "String"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1122,
    "name": "Minimum Number of Operations to Reinitialize a Permutation",
    "count": 1,
    "url": "https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/",
    "topics": [
      "Array",
      "Math",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1123,
    "name": "Sum of Beauty of All Substrings",
    "count": 1,
    "url": "https://leetcode.com/problems/sum-of-beauty-of-all-substrings/",
    "topics": [
      "Hash Table",
      "String",
      "Counting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1124,
    "name": "Design Most Recently Used Queue",
    "count": 1,
    "url": "https://leetcode.com/problems/design-most-recently-used-queue/",
    "topics": [
      "Array",
      "Linked List",
      "Divide and Conquer",
      "Design",
      "Simulation",
      "Doubly-Linked List"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1125,
    "name": "Latest Time by Replacing Hidden Digits",
    "count": 1,
    "url": "https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/",
    "topics": [
      "String",
      "Greedy"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1126,
    "name": "Tuple with Same Product",
    "count": 1,
    "url": "https://leetcode.com/problems/tuple-with-same-product/",
    "topics": [
      "Array",
      "Hash Table",
      "Counting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1127,
    "name": "Maximum Score From Removing Substrings",
    "count": 1,
    "url": "https://leetcode.com/problems/maximum-score-from-removing-substrings/",
    "topics": [
      "String",
      "Stack",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1128,
    "name": "Largest Subarray Length K",
    "count": 1,
    "url": "https://leetcode.com/problems/largest-subarray-length-k/",
    "topics": [
      "Array",
      "Greedy"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1129,
    "name": "Mean of Array After Removing Some Elements",
    "count": 1,
    "url": "https://leetcode.com/problems/mean-of-array-after-removing-some-elements/",
    "topics": [
      "Array",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1130,
    "name": "Special Array With X Elements Greater Than or Equal X",
    "count": 1,
    "url": "https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/",
    "topics": [
      "Array",
      "Binary Search",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1131,
    "name": "Range Sum of Sorted Subarray Sums",
    "count": 1,
    "url": "https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/",
    "topics": [
      "Array",
      "Two Pointers",
      "Binary Search",
      "Sorting",
      "Prefix Sum"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1132,
    "name": "The k Strongest Values in an Array",
    "count": 1,
    "url": "https://leetcode.com/problems/the-k-strongest-values-in-an-array/",
    "topics": [
      "Array",
      "Two Pointers",
      "Sorting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1133,
    "name": "Check If a String Contains All Binary Codes of Size K",
    "count": 1,
    "url": "https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/",
    "topics": [
      "Hash Table",
      "String",
      "Bit Manipulation",
      "Rolling Hash",
      "Hash Function"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1134,
    "name": "People Whose List of Favorite Companies Is Not a Subset of Another List",
    "count": 1,
    "url": "https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/",
    "topics": [
      "Array",
      "Hash Table",
      "String"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1135,
    "name": "Maximum Score After Splitting a String",
    "count": 1,
    "url": "https://leetcode.com/problems/maximum-score-after-splitting-a-string/",
    "topics": [
      "String",
      "Prefix Sum"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1136,
    "name": "Find Elements in a Contaminated Binary Tree",
    "count": 1,
    "url": "https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/",
    "topics": [
      "Hash Table",
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Design",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1137,
    "name": "Distance Between Bus Stops",
    "count": 1,
    "url": "https://leetcode.com/problems/distance-between-bus-stops/",
    "topics": [
      "Array"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1138,
    "name": "Single-Row Keyboard",
    "count": 1,
    "url": "https://leetcode.com/problems/single-row-keyboard/",
    "topics": [
      "Hash Table",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1139,
    "name": "Largest Values From Labels",
    "count": 1,
    "url": "https://leetcode.com/problems/largest-values-from-labels/",
    "topics": [
      "Array",
      "Hash Table",
      "Greedy",
      "Sorting",
      "Counting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1140,
    "name": "Occurrences After Bigram",
    "count": 1,
    "url": "https://leetcode.com/problems/occurrences-after-bigram/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1141,
    "name": "Valid Boomerang",
    "count": 1,
    "url": "https://leetcode.com/problems/valid-boomerang/",
    "topics": [
      "Array",
      "Math",
      "Geometry"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1142,
    "name": "Number of Enclaves",
    "count": 1,
    "url": "https://leetcode.com/problems/number-of-enclaves/",
    "topics": [
      "Array",
      "Depth-First Search",
      "Breadth-First Search",
      "Union-Find",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1143,
    "name": "Delete Columns to Make Sorted",
    "count": 1,
    "url": "https://leetcode.com/problems/delete-columns-to-make-sorted/",
    "topics": [
      "Array",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1144,
    "name": "Ambiguous Coordinates",
    "count": 1,
    "url": "https://leetcode.com/problems/ambiguous-coordinates/",
    "topics": [
      "String",
      "Backtracking",
      "Enumeration"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1145,
    "name": "Largest Triangle Area",
    "count": 1,
    "url": "https://leetcode.com/problems/largest-triangle-area/",
    "topics": [
      "Array",
      "Math",
      "Geometry"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1146,
    "name": "Similar RGB Color",
    "count": 1,
    "url": "https://leetcode.com/problems/similar-rgb-color/",
    "topics": [
      "Math",
      "String",
      "Enumeration"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1147,
    "name": "Escape The Ghosts",
    "count": 1,
    "url": "https://leetcode.com/problems/escape-the-ghosts/",
    "topics": [
      "Array",
      "Math"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1148,
    "name": "Find Anagram Mappings",
    "count": 1,
    "url": "https://leetcode.com/problems/find-anagram-mappings/",
    "topics": [
      "Array",
      "Hash Table"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1149,
    "name": "Beautiful Arrangement II",
    "count": 1,
    "url": "https://leetcode.com/problems/beautiful-arrangement-ii/",
    "topics": [
      "Array",
      "Math"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1150,
    "name": "Coin Path",
    "count": 1,
    "url": "https://leetcode.com/problems/coin-path/",
    "topics": [
      "Array",
      "Dynamic Programming"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 1151,
    "name": "Maximum Average Subarray II",
    "count": 1,
    "url": "https://leetcode.com/problems/maximum-average-subarray-ii/",
    "topics": [
      "Array",
      "Binary Search",
      "Prefix Sum"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 1152,
    "name": "Erect the Fence",
    "count": 1,
    "url": "https://leetcode.com/problems/erect-the-fence/",
    "topics": [
      "Array",
      "Math",
      "Geometry"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 1153,
    "name": "Lonely Pixel II",
    "count": 1,
    "url": "https://leetcode.com/problems/lonely-pixel-ii/",
    "topics": [
      "Array",
      "Hash Table",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1154,
    "name": "Longest Uncommon Subsequence I",
    "count": 1,
    "url": "https://leetcode.com/problems/longest-uncommon-subsequence-i/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1155,
    "name": "Relative Ranks",
    "count": 1,
    "url": "https://leetcode.com/problems/relative-ranks/",
    "topics": [
      "Array",
      "Sorting",
      "Heap (Priority Queue)"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1156,
    "name": "Magical String",
    "count": 1,
    "url": "https://leetcode.com/problems/magical-string/",
    "topics": [
      "Two Pointers",
      "String"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1157,
    "name": "Convex Polygon",
    "count": 1,
    "url": "https://leetcode.com/problems/convex-polygon/",
    "topics": [
      "Array",
      "Math",
      "Geometry"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1158,
    "name": "Minimum Unique Word Abbreviation",
    "count": 1,
    "url": "https://leetcode.com/problems/minimum-unique-word-abbreviation/",
    "topics": [
      "Array",
      "String",
      "Backtracking",
      "Bit Manipulation"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 1159,
    "name": "Binary Watch",
    "count": 1,
    "url": "https://leetcode.com/problems/binary-watch/",
    "topics": [
      "Backtracking",
      "Bit Manipulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1160,
    "name": "Plus One Linked List",
    "count": 1,
    "url": "https://leetcode.com/problems/plus-one-linked-list/",
    "topics": [
      "Linked List",
      "Math"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1161,
    "name": "Verify Preorder Serialization of a Binary Tree",
    "count": 1,
    "url": "https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/",
    "topics": [
      "String",
      "Stack",
      "Tree",
      "Binary Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1162,
    "name": "Generalized Abbreviation",
    "count": 1,
    "url": "https://leetcode.com/problems/generalized-abbreviation/",
    "topics": [
      "String",
      "Backtracking",
      "Bit Manipulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1163,
    "name": "Flip Game II",
    "count": 1,
    "url": "https://leetcode.com/problems/flip-game-ii/",
    "topics": [
      "Math",
      "Dynamic Programming",
      "Backtracking",
      "Memoization",
      "Game Theory"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1164,
    "name": "Flip Game",
    "count": 1,
    "url": "https://leetcode.com/problems/flip-game/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1165,
    "name": "Minimum Number of Buckets Required to Collect Rainwater from Houses",
    "count": 1,
    "url": "https://leetcode.com/problems/minimum-number-of-buckets-required-to-collect-rainwater-from-houses/",
    "topics": [
      "String",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1166,
    "name": "Detect Pattern of Length M Repeated K or More Times",
    "count": 1,
    "url": "https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/",
    "topics": [
      "Array",
      "Enumeration"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1167,
    "name": "Maximum 69 Number",
    "count": 1,
    "url": "https://leetcode.com/problems/maximum-69-number/",
    "topics": [
      "Math",
      "Greedy"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1168,
    "name": "Convert Integer to the Sum of Two No-Zero Integers",
    "count": 1,
    "url": "https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/",
    "topics": [
      "Math"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1169,
    "name": "Minimum Distance to the Target Element",
    "count": 1,
    "url": "https://leetcode.com/problems/minimum-distance-to-the-target-element/",
    "topics": [
      "Array"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1170,
    "name": "Count Artifacts That Can Be Extracted",
    "count": 1,
    "url": "https://leetcode.com/problems/count-artifacts-that-can-be-extracted/",
    "topics": [
      "Array",
      "Hash Table",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1171,
    "name": "Sum of Even Numbers After Queries",
    "count": 1,
    "url": "https://leetcode.com/problems/sum-of-even-numbers-after-queries/",
    "topics": [
      "Array",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1172,
    "name": "Binary Tree Tilt",
    "count": 1,
    "url": "https://leetcode.com/problems/binary-tree-tilt/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1173,
    "name": "Find the Minimum and Maximum Number of Nodes Between Critical Points",
    "count": 1,
    "url": "https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/",
    "topics": [
      "Linked List"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1174,
    "name": "Determine Color of a Chessboard Square",
    "count": 1,
    "url": "https://leetcode.com/problems/determine-color-of-a-chessboard-square/",
    "topics": [
      "Math",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1175,
    "name": "Count Common Words With One Occurrence",
    "count": 1,
    "url": "https://leetcode.com/problems/count-common-words-with-one-occurrence/",
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1176,
    "name": "Minimum Moves to Convert String",
    "count": 1,
    "url": "https://leetcode.com/problems/minimum-moves-to-convert-string/",
    "topics": [
      "String",
      "Greedy"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1177,
    "name": "Generate Random Point in a Circle",
    "count": 1,
    "url": "https://leetcode.com/problems/generate-random-point-in-a-circle/",
    "topics": [
      "Math",
      "Geometry",
      "Rejection Sampling",
      "Randomized"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1178,
    "name": "Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold",
    "count": 1,
    "url": "https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/",
    "topics": [
      "Array",
      "Sliding Window"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1179,
    "name": "Longest Harmonious Subsequence",
    "count": 1,
    "url": "https://leetcode.com/problems/longest-harmonious-subsequence/",
    "topics": [
      "Array",
      "Hash Table",
      "Sliding Window",
      "Sorting",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1180,
    "name": "Distribute Candies",
    "count": 1,
    "url": "https://leetcode.com/problems/distribute-candies/",
    "topics": [
      "Array",
      "Hash Table"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1181,
    "name": "Crawler Log Folder",
    "count": 1,
    "url": "https://leetcode.com/problems/crawler-log-folder/",
    "topics": [
      "Array",
      "String",
      "Stack"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1182,
    "name": "Max Difference You Can Get From Changing an Integer",
    "count": 1,
    "url": "https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/",
    "topics": [
      "Math",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1183,
    "name": "Count Largest Group",
    "count": 1,
    "url": "https://leetcode.com/problems/count-largest-group/",
    "topics": [
      "Hash Table",
      "Math",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1184,
    "name": "Minimum Operations to Halve Array Sum",
    "count": 1,
    "url": "https://leetcode.com/problems/minimum-operations-to-halve-array-sum/",
    "topics": [
      "Array",
      "Greedy",
      "Heap (Priority Queue)"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1185,
    "name": "Divide Array Into Equal Pairs",
    "count": 1,
    "url": "https://leetcode.com/problems/divide-array-into-equal-pairs/",
    "topics": [
      "Array",
      "Hash Table",
      "Bit Manipulation",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1186,
    "name": "Merge Nodes in Between Zeros",
    "count": 1,
    "url": "https://leetcode.com/problems/merge-nodes-in-between-zeros/",
    "topics": [
      "Linked List",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1187,
    "name": "Check if All A's Appears Before All B's",
    "count": 1,
    "url": "https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1188,
    "name": "Three Divisors",
    "count": 1,
    "url": "https://leetcode.com/problems/three-divisors/",
    "topics": [
      "Math",
      "Enumeration",
      "Number Theory"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1189,
    "name": "Sum of Digits of String After Convert",
    "count": 1,
    "url": "https://leetcode.com/problems/sum-of-digits-of-string-after-convert/",
    "topics": [
      "String",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1190,
    "name": "Find Center of Star Graph",
    "count": 1,
    "url": "https://leetcode.com/problems/find-center-of-star-graph/",
    "topics": [
      "Graph Theory"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1191,
    "name": "Widest Vertical Area Between Two Points Containing No Points",
    "count": 1,
    "url": "https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/",
    "topics": [
      "Array",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1192,
    "name": "Delete N Nodes After M Nodes of a Linked List",
    "count": 1,
    "url": "https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/",
    "topics": [
      "Linked List"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1193,
    "name": "Find All The Lonely Nodes",
    "count": 1,
    "url": "https://leetcode.com/problems/find-all-the-lonely-nodes/",
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1194,
    "name": "The k-th Lexicographical String of All Happy Strings of Length n",
    "count": 1,
    "url": "https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/",
    "topics": [
      "String",
      "Backtracking"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1195,
    "name": "Find Lucky Integer in an Array",
    "count": 1,
    "url": "https://leetcode.com/problems/find-lucky-integer-in-an-array/",
    "topics": [
      "Array",
      "Hash Table",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1196,
    "name": "Find the Longest Substring Containing Vowels in Even Counts",
    "count": 1,
    "url": "https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/",
    "topics": [
      "Hash Table",
      "String",
      "Bit Manipulation",
      "Prefix Sum"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1197,
    "name": "Delete Tree Nodes",
    "count": 1,
    "url": "https://leetcode.com/problems/delete-tree-nodes/",
    "topics": [
      "Array",
      "Tree",
      "Depth-First Search",
      "Breadth-First Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1198,
    "name": "Bulb Switcher II",
    "count": 1,
    "url": "https://leetcode.com/problems/bulb-switcher-ii/",
    "topics": [
      "Math",
      "Bit Manipulation",
      "Depth-First Search",
      "Breadth-First Search"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1199,
    "name": "Count Integers With Even Digit Sum",
    "count": 1,
    "url": "https://leetcode.com/problems/count-integers-with-even-digit-sum/",
    "topics": [
      "Math",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1200,
    "name": "Redistribute Characters to Make All Strings Equal",
    "count": 1,
    "url": "https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/",
    "topics": [
      "Hash Table",
      "String",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1201,
    "name": "Subrectangle Queries",
    "count": 1,
    "url": "https://leetcode.com/problems/subrectangle-queries/",
    "topics": [
      "Array",
      "Design",
      "Matrix"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1202,
    "name": "Check If Word Is Valid After Substitutions",
    "count": 1,
    "url": "https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/",
    "topics": [
      "String",
      "Stack"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1203,
    "name": "Reverse Prefix of Word",
    "count": 1,
    "url": "https://leetcode.com/problems/reverse-prefix-of-word/",
    "topics": [
      "Two Pointers",
      "String",
      "Stack"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1204,
    "name": "HTML Entity Parser",
    "count": 1,
    "url": "https://leetcode.com/problems/html-entity-parser/",
    "topics": [
      "Hash Table",
      "String"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1205,
    "name": "Simple Bank System",
    "count": 1,
    "url": "https://leetcode.com/problems/simple-bank-system/",
    "topics": [
      "Array",
      "Hash Table",
      "Design",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1206,
    "name": "Non-negative Integers without Consecutive Ones",
    "count": 1,
    "url": "https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/",
    "topics": [
      "Dynamic Programming"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 1207,
    "name": "Determine if Two Strings Are Close",
    "count": 1,
    "url": "https://leetcode.com/problems/determine-if-two-strings-are-close/",
    "topics": [
      "Hash Table",
      "String",
      "Sorting",
      "Counting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1208,
    "name": "Range Frequency Queries",
    "count": 1,
    "url": "https://leetcode.com/problems/range-frequency-queries/",
    "topics": [
      "Array",
      "Hash Table",
      "Binary Search",
      "Design",
      "Segment Tree"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1209,
    "name": "Maximum Number of Words You Can Type",
    "count": 1,
    "url": "https://leetcode.com/problems/maximum-number-of-words-you-can-type/",
    "topics": [
      "Hash Table",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1210,
    "name": "Substrings of Size Three with Distinct Characters",
    "count": 1,
    "url": "https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/",
    "topics": [
      "Hash Table",
      "String",
      "Sliding Window",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1211,
    "name": "Sum of Floored Pairs",
    "count": 1,
    "url": "https://leetcode.com/problems/sum-of-floored-pairs/",
    "topics": [
      "Array",
      "Math",
      "Binary Search",
      "Counting",
      "Enumeration",
      "Prefix Sum"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 1212,
    "name": "Find Kth Bit in Nth Binary String",
    "count": 1,
    "url": "https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/",
    "topics": [
      "String",
      "Recursion",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1213,
    "name": "Maximum Students Taking Exam",
    "count": 1,
    "url": "https://leetcode.com/problems/maximum-students-taking-exam/",
    "topics": [
      "Array",
      "Dynamic Programming",
      "Bit Manipulation",
      "Matrix",
      "Bitmask"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 1214,
    "name": "Check Whether Two Strings are Almost Equivalent",
    "count": 1,
    "url": "https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/",
    "topics": [
      "Hash Table",
      "String",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1215,
    "name": "Largest Merge Of Two Strings",
    "count": 1,
    "url": "https://leetcode.com/problems/largest-merge-of-two-strings/",
    "topics": [
      "Two Pointers",
      "String",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1216,
    "name": "Ternary Expression Parser",
    "count": 1,
    "url": "https://leetcode.com/problems/ternary-expression-parser/",
    "topics": [
      "String",
      "Stack",
      "Recursion"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1217,
    "name": "Second Largest Digit in a String",
    "count": 1,
    "url": "https://leetcode.com/problems/second-largest-digit-in-a-string/",
    "topics": [
      "Hash Table",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1218,
    "name": "Next Greater Numerically Balanced Number",
    "count": 1,
    "url": "https://leetcode.com/problems/next-greater-numerically-balanced-number/",
    "topics": [
      "Hash Table",
      "Math",
      "Backtracking",
      "Counting",
      "Enumeration"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1219,
    "name": "Maximum Subarray Sum After One Operation",
    "count": 1,
    "url": "https://leetcode.com/problems/maximum-subarray-sum-after-one-operation/",
    "topics": [
      "Array",
      "Dynamic Programming"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1220,
    "name": "Squirrel Simulation",
    "count": 1,
    "url": "https://leetcode.com/problems/squirrel-simulation/",
    "topics": [
      "Array",
      "Math"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1221,
    "name": "Grid Game",
    "count": 1,
    "url": "https://leetcode.com/problems/grid-game/",
    "topics": [
      "Array",
      "Matrix",
      "Prefix Sum"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1222,
    "name": "Find Greatest Common Divisor of Array",
    "count": 1,
    "url": "https://leetcode.com/problems/find-greatest-common-divisor-of-array/",
    "topics": [
      "Array",
      "Math",
      "Number Theory"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1223,
    "name": "Minimum Factorization",
    "count": 1,
    "url": "https://leetcode.com/problems/minimum-factorization/",
    "topics": [
      "Math",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1224,
    "name": "Vowel Spellchecker",
    "count": 1,
    "url": "https://leetcode.com/problems/vowel-spellchecker/",
    "topics": [
      "Array",
      "Hash Table",
      "String"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1225,
    "name": "Find Closest Number to Zero",
    "count": 1,
    "url": "https://leetcode.com/problems/find-closest-number-to-zero/",
    "topics": [
      "Array"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1226,
    "name": "Design Authentication Manager",
    "count": 1,
    "url": "https://leetcode.com/problems/design-authentication-manager/",
    "topics": [
      "Hash Table",
      "Linked List",
      "Design",
      "Doubly-Linked List"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1227,
    "name": "Minimum Elements to Add to Form a Given Sum",
    "count": 1,
    "url": "https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/",
    "topics": [
      "Array",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1228,
    "name": "Intersection of Multiple Arrays",
    "count": 1,
    "url": "https://leetcode.com/problems/intersection-of-multiple-arrays/",
    "topics": [
      "Array",
      "Hash Table",
      "Sorting",
      "Counting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1229,
    "name": "Calculate Digit Sum of a String",
    "count": 1,
    "url": "https://leetcode.com/problems/calculate-digit-sum-of-a-string/",
    "topics": [
      "String",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1230,
    "name": "Number of Strings That Appear as Substrings in Word",
    "count": 1,
    "url": "https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/",
    "topics": [
      "Array",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1231,
    "name": "Check If String Is a Prefix of Array",
    "count": 1,
    "url": "https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/",
    "topics": [
      "Array",
      "Two Pointers",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1232,
    "name": "Maximum XOR for Each Query",
    "count": 1,
    "url": "https://leetcode.com/problems/maximum-xor-for-each-query/",
    "topics": [
      "Array",
      "Bit Manipulation",
      "Prefix Sum"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1233,
    "name": "Check If All 1's Are at Least Length K Places Away",
    "count": 1,
    "url": "https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/",
    "topics": [
      "Array"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1234,
    "name": "Dota2 Senate",
    "count": 1,
    "url": "https://leetcode.com/problems/dota2-senate/",
    "topics": [
      "String",
      "Greedy",
      "Queue"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1235,
    "name": "Count Number of Homogenous Substrings",
    "count": 1,
    "url": "https://leetcode.com/problems/count-number-of-homogenous-substrings/",
    "topics": [
      "Math",
      "String"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1236,
    "name": "Minimum Moves to Reach Target Score",
    "count": 1,
    "url": "https://leetcode.com/problems/minimum-moves-to-reach-target-score/",
    "topics": [
      "Math",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1237,
    "name": "Delete Characters to Make Fancy String",
    "count": 1,
    "url": "https://leetcode.com/problems/delete-characters-to-make-fancy-string/",
    "topics": [
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1238,
    "name": "Minimum Number of Steps to Make Two Strings Anagram II",
    "count": 1,
    "url": "https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/",
    "topics": [
      "Hash Table",
      "String",
      "Counting"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1239,
    "name": "Matrix Cells in Distance Order",
    "count": 1,
    "url": "https://leetcode.com/problems/matrix-cells-in-distance-order/",
    "topics": [
      "Array",
      "Math",
      "Geometry",
      "Sorting",
      "Matrix"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1240,
    "name": "Binary Number with Alternating Bits",
    "count": 1,
    "url": "https://leetcode.com/problems/binary-number-with-alternating-bits/",
    "topics": [
      "Bit Manipulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1241,
    "name": "Maximum Distance in Arrays",
    "count": 1,
    "url": "https://leetcode.com/problems/maximum-distance-in-arrays/",
    "topics": [
      "Array",
      "Greedy"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1242,
    "name": "Largest Palindrome Product",
    "count": 1,
    "url": "https://leetcode.com/problems/largest-palindrome-product/",
    "topics": [
      "Math",
      "Enumeration"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 1243,
    "name": "Day of the Year",
    "count": 1,
    "url": "https://leetcode.com/problems/day-of-the-year/",
    "topics": [
      "Math",
      "String"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1244,
    "name": "Sort Even and Odd Indices Independently",
    "count": 1,
    "url": "https://leetcode.com/problems/sort-even-and-odd-indices-independently/",
    "topics": [
      "Array",
      "Sorting"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1245,
    "name": "Reverse Nodes in Even Length Groups",
    "count": 1,
    "url": "https://leetcode.com/problems/reverse-nodes-in-even-length-groups/",
    "topics": [
      "Linked List"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1246,
    "name": "Calculate Money in Leetcode Bank",
    "count": 1,
    "url": "https://leetcode.com/problems/calculate-money-in-leetcode-bank/",
    "topics": [
      "Math"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1247,
    "name": "Count Operations to Obtain Zero",
    "count": 1,
    "url": "https://leetcode.com/problems/count-operations-to-obtain-zero/",
    "topics": [
      "Math",
      "Simulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1248,
    "name": "Coordinate With Maximum Network Quality",
    "count": 1,
    "url": "https://leetcode.com/problems/coordinate-with-maximum-network-quality/",
    "topics": [
      "Array",
      "Enumeration"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1249,
    "name": "Minimum Bit Flips to Convert Number",
    "count": 1,
    "url": "https://leetcode.com/problems/minimum-bit-flips-to-convert-number/",
    "topics": [
      "Bit Manipulation"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1250,
    "name": "Two Best Non-Overlapping Events",
    "count": 1,
    "url": "https://leetcode.com/problems/two-best-non-overlapping-events/",
    "topics": [
      "Array",
      "Binary Search",
      "Dynamic Programming",
      "Sorting",
      "Heap (Priority Queue)"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1251,
    "name": "Maximum Ascending Subarray Sum",
    "count": 1,
    "url": "https://leetcode.com/problems/maximum-ascending-subarray-sum/",
    "topics": [
      "Array"
    ],
    "difficulty": "Easy"
  },
  {
    "id": 1252,
    "name": "Palindrome Partitioning IV",
    "count": 1,
    "url": "https://leetcode.com/problems/palindrome-partitioning-iv/",
    "topics": [
      "String",
      "Dynamic Programming"
    ],
    "difficulty": "Hard"
  },
  {
    "id": 1253,
    "name": "Incremental Memory Leak",
    "count": 1,
    "url": "https://leetcode.com/problems/incremental-memory-leak/",
    "topics": [
      "Math",
      "Simulation"
    ],
    "difficulty": "Medium"
  },
  {
    "id": 1254,
    "name": "Count Equal and Divisible Pairs in an Array",
    "count": 1,
    "url": "https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/",
    "topics": [
      "Array"
    ],
    "difficulty": "Easy"
  }
];
const STATS = { total: 1254, companies: 187, records: 3864 };
