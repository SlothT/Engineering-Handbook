# Arrays

## Overview

Arrays store elements in contiguous memory, enabling O(1) index access and predictable cache behavior. Most interview problems manipulate indices, prefixes, or windows over arrays.

## Why This Exists

Arrays are the default representation for sequences in memory. Understanding indexing, mutability, and copying is prerequisite for strings, matrices, and many dynamic programming states.

## How It Works

Common techniques include **prefix sums** for range queries, **two pointers** for sorted arrays, **sliding windows** for subarray constraints, and **in-place rearrangement** with careful swap logic.

## Architecture

![architecture](../diagrams/example.png)

```mermaid
flowchart LR
  A[Array memory] --> B[Index i]
  B --> C[Read O(1)]
  B --> D[Write O(1)]
```

## Key Concepts

<div class="topic-box">
<strong>Contiguity trade-off</strong>
Fast random access comes with insertion/deletion costs in the middle—often O(n) due to shifting elements.
</div>

## Code Examples

=== "Python — prefix sum"

    ```python
    def prefix_sums(nums: list[int]) -> list[int]:
        ps = [0] * (len(nums) + 1)
        for i, x in enumerate(nums):
            ps[i + 1] = ps[i] + x
        return ps

    def range_sum(ps: list[int], l: int, r: int) -> int:
        return ps[r + 1] - ps[l]
    ```

=== "Python — sliding window (fixed size k)"

    ```python
    def max_sum_subarray(nums: list[int], k: int) -> int:
        if not nums or k <= 0:
            return 0
        window = sum(nums[:k])
        best = window
        for i in range(k, len(nums)):
            window += nums[i] - nums[i - k]
            best = max(best, window)
        return best
    ```

## Interview Questions

??? question "Given an array, find the maximum subarray sum (Kadane)."

    Track the best ending here and the running sum; reset running sum when it drops below zero. Handles negative numbers; empty array edge cases need explicit policy.

??? question "How do you rotate an array in-place?"

    Use triple reverse for rotation by k: reverse whole array, reverse first k, reverse remainder—O(n) time, O(1) extra space.

## Practice Problems

- LeetCode 53 — Maximum Subarray  
- LeetCode 238 — Product of Array Except Self  
- LeetCode 56 — Merge Intervals  

## Resources

- [GeeksforGeeks — Array data structure](https://www.geeksforgeeks.org/array-data-structure/)  
- [CP-Algorithms — Prefix sums](https://cp-algorithms.com/data_structures/prefix_sum.html)  
