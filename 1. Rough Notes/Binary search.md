
---

### **Binary Search Algorithm**

#### **Input**:

- A sorted array `arr` of size `n`.
- A target value `key` to find.

#### **Output**:

- Index of `key` in the array if found.
- `-1` if `key` is not found.

---

1. **Initialize Variables**:
    
    - `low = 0` (start of the array).
    - `high = n - 1` (end of the array).
2. **While Loop**:  
    Repeat until `low <= high`:
    
    - Compute the middle index: $\text{mid} = \lfloor \frac{\text{low} + \text{high}}{2} \rfloor$
    - Check the value at `arr[mid]`:
        1. **If `arr[mid] == key`**:
            - Return `mid` (the index where the key is found).
        2. **If `key < arr[mid]`**:
            - Update `high = mid - 1` (search in the left half).
        3. **If `key > arr[mid]`**:
            - Update `low = mid + 1` (search in the right half).
3. **End Loop**:
    
    - If the loop exits without finding `key`, return `-1`.

---

### **Pseudocode**:

```plaintext
BinarySearch(arr, n, key):
    low ← 0
    high ← n - 1

    while low ≤ high do:
        mid ← (low + high) // 2

        if arr[mid] == key:
            return mid  // Key found

        else if key < arr[mid]:
            high ← mid - 1  // Search left half

        else:
            low ← mid + 1  // Search right half

    return -1  // Key not found
```

---

### **Complexity**:

- **Time Complexity**:
    
    $O(\log n)$
    
    (Halves the search space in each step)
    
- **Space Complexity**:
    
    $O(1)$
    
    (No extra space used)
    

---

This algorithm works only for sorted arrays.

### Example

![[Pasted image 20241128144403.png]]

To solve the problem of performing binary search on the given sorted list to find the value `12`, let's go step by step.

### Binary Search Steps

1. **Initial Setup**:
    
    - Start with two pointers: `low` pointing to the first element and `high` pointing to the last element of the array.
    - Compute the middle index using the formula: $mid=⌊low+high2⌋\text{mid} = \lfloor \frac{\text{low} + \text{high}}{2} \rfloor$
2. **Compare**:
    
    - If the element at the `mid` index matches the target (`12`), the search is complete.
    - If the target is smaller than the element at `mid`, update the `high` pointer to `mid - 1`.
    - If the target is larger than the element at `mid`, update the `low` pointer to `mid + 1`.
3. **Repeat**:
    
    - Continue this process until `low` exceeds `high` or the element is found.

### Solve for 12:

#### Initial Array:

$[1, 16, 25, 36, 37, 50, 100, 101, 205, 220, 271, 306, 321]$

#### Step-by-Step:

1. **Pass 1**:
    
    - `low = 0`, `high = 12`
    
    $\text{mid} = \lfloor \frac{0 + 12}{2} \rfloor = 6 ]$
    
    - Element at index `6` is `100`.
    - Since `12 < 100`, update `high = 5`.
2. **Pass 2**:
    
    - `low = 0`, `high = 5`
    
    $\text{mid} = \lfloor \frac{0 + 5}{2} \rfloor = 2 ]$
    
    - Element at index `2` is `25`.
    - Since `12 < 25`, update `high = 1`.
3. **Pass 3**:
    
    - `low = 0`, `high = 1`
    
    $\text{mid} = \lfloor \frac{0 + 1}{2} \rfloor = 0 ]$
    
    - Element at index `0` is `1`.
    - Since `12 > 1`, update `low = 1`.
4. **Pass 4**:
    
    - `low = 1`, `high = 1`
    
    $\text{mid} = \lfloor \frac{1 + 1}{2} \rfloor = 1 ]$
    
    - Element at index `1` is `16`.
    - Since `12 < 16`, update `high = 0`.

At this point, `low > high` (`low = 1`, `high = 0`), so the search terminates. The value `12` is **not found**.

### Conclusion:

- **Number of passes**: **4**
- **Result**: Value `12` is not in the list.