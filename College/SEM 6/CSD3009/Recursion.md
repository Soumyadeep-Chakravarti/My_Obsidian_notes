 # Methods
1. Substitution
2. Master Theory
3. Recursive Tree

# Substitution Method
## Binary Search

---

### 🔍 Binary Search Algorithm

#### ✅ **Prerequisites**

- The array `A` **must be sorted** (ascending or descending).  
---

## 🔁 **Iterative Binary Search – Mathematical Pseudo code**

### **Function Definition**

```text
Function BS(A, i, j, k)
    Input: 
        A — a sorted array (indices i to j)
        k — the key to search
    Output:
        The index of k in A, or -1 if not found
```

---

### **Algorithm**

```text
while i ≤ j do
    mid ← ⌊(i + j) / 2⌋

    if A[mid] = k then
        return mid

    else if A[mid] < k then
        i ← mid + 1

    else
        j ← mid - 1
end while

return -1
```

---

### 📌 Notes

- The **loop invariant** is that if $k$ exists in the array, it must be in the current sub-array $A[i \dots j]$.  
- Time complexity: $O(\log n)$
- Space complexity: $O(1)$ since it uses no recursion or stack.

---

## 🔁 **Recursive Binary Search – Mathematical Pseudo code**

### **Function Definition**

```text
Function BS(A, i, j, k)
    Input:
        A — a sorted array (indices i to j)
        k — the key to search
    Output:
        The index of k in A, or -1 if not found
```

---

### **Algorithm**

```text
if i > j then
    return -1

mid ← ⌊(i + j) / 2⌋

if A[mid] = k then
    return mid

else if A[mid] < k then
    return BS(A, mid + 1, j, k)

else
    return BS(A, i, mid - 1, k)
```

---

### 📌 Example Call

```text
BS(A, 0, n − 1, k)
```

---

### 🧠 Notes

- The base case is $i > j$, which means the sub-array is empty → element not found.
- Time complexity: $O(\log n)$
- Space complexity:$O(\log n)$ due to recursive call stack

---

### ✅ **C Code: Iterative and Recursive Binary Search**

```c
#include <stdio.h>

// Iterative Binary Search
int binarySearchIterative(int arr[], int n, int key) {
    int low = 0, high = n - 1;

    while (low <= high) {
        int mid = low + (high - low) / 2;

        if (arr[mid] == key){
            return mid;
        } else if (arr[mid] < key) {
            low = mid + 1;
        } else {
	        high = mid - 1;
	    }
    }

    return -1; // Not found
}

// Recursive Binary Search
int binarySearchRecursive(int arr[], int low, int high, int key) {
    if (low > high){
        return -1;
    }
    
    int mid = low + (high - low) / 2;

    if (arr[mid] == key){
        return mid;
    } else if (arr[mid] < key){
	    return binarySearchRecursive(arr, mid + 1, high, key);
	} else {
		return binarySearchRecursive(arr, low, mid - 1, key);
	}
}

// Test both versions
int main() {
    int arr[] = {2, 4, 6, 8, 10, 12, 14};
    int n = sizeof(arr) / sizeof(arr[0]);
    int key = 10;

    // Iterative version
    int resultIter = binarySearchIterative(arr, n, key);
    if (resultIter != -1)
        printf("Iterative: Element %d found at index %d\n", key, resultIter);
    else
        printf("Iterative: Element %d not found\n", key);

    // Recursive version
    int resultRec = binarySearchRecursive(arr, 0, n - 1, key);
    if (resultRec != -1)
        printf("Recursive: Element %d found at index %d\n", key, resultRec);
    else
        printf("Recursive: Element %d not found\n", key);

    return 0;
}
```

---

#### 🧪 Output (for `key = 10`)

```
Iterative: Element 10 found at index 4
Recursive: Element 10 found at index 4
```

---

# Master Theorem
---

## 🧠 What is the Master Theorem?

The **Master Theorem** is a shortcut for solving recurrence relations of divide-and-conquer algorithms of the form:

$T(n) = aT\left(\frac{n}{b}\right) + f(n)$

Where:

- $a \geq 1$ → number of sub-problems
    
- $b > 1$ → the input size reduction per sub-problem
    
- $f(n)$ → the cost outside the recursive calls (like merging, looping, etc.)
    

It tells you the time complexity of $T(n)$ by comparing $f(n)$ to $n^{\log_b a}$.

---

## 📘 Master Theorem Cases

There are **3 cases** to determine the asymptotic behavior:

---

### **Case 1: $f(n)$ grows slower than $n^{\log_b a}$**

$$\text{If } f(n) = O(n^{\log_b a - \epsilon}) \text{ for some } \epsilon > 0,

then:

T(n) = \Theta(n^{\log_b a})
$$
**→ Recursion dominates.**

---

### **Case 2: $f(n)$grows at the same rate as $n^{\log_b a}$**

$$\text{If } f(n) = \Theta(n^{\log_b a} \cdot \log^k n),

then:

T(n) = \Theta(n^{\log_b a} \cdot \log^{k+1} n)
$$
**→ Equal contribution from recursion and non-recursive work.**

---

### **Case 3: $f(n)$ grows faster than $n^{\log_b a}$**

$$\text{If } f(n) = \Omega(n^{\log_b a + \epsilon}) \text{ for some } \epsilon > 0,$$

and a regularity condition is satisfied (see below), then:
$$
T(n)=Θ(f(n))T(n) = \Theta(f(n))
$$
**→ The work outside the recursion dominates.**

✅ _Regularity condition_: $a \cdot f(n/b) \leq c \cdot f(n)$ for some constant $c<1$ and large $n$

---

