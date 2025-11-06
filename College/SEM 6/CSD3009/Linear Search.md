# Algorithm

``` c
// Function to perform linear search
int linearSearch(int arr[], int n, int target) {
    // Loop through each element of the array
    for (int i = 0; i < n; i++) {
        // If the current element matches the target
        if (arr[i] == target) {
            // Return the index of the element
            return i;
        }
    }
    // If the loop finishes without finding the element, return -1
    return -1;
}

```
The linear search algorithm, also known as a sequential search, is a simple method for finding a specific value in a list of items. It works by systematically checking each item in the list, one by one, until it finds a match or reaches the end of the list.

### How It Works

1.  **Start at the beginning:** The algorithm begins its search at the first element of the list (index 0).
2.  **Compare:** It compares the current element to the **target value** you're looking for.
3.  **Match found?**
      * If the current element matches the target, the search is successful, and the algorithm returns the index of the element.
4.  **No match?**
      * If the elements don't match, the algorithm moves to the next element and repeats the comparison.
5.  **End of the list:** If the algorithm reaches the end of the list without finding a match, the search is unsuccessful.

-----

### Pseudo code

A simple way to represent the algorithm is with pseudo code:

```text

function linear_search(list, target_value):

    for each element in list:

        if element == target_value:

            return the index of element

    return -1 // Indicates the element was not found

```

### Efficiency

The performance of a linear search is evaluated using **Big O notation**:

  * **Best Case:** **O(1)**. The target value is the first element in the list, so the algorithm finds it in a single step.
  * **Worst Case:** **O(n)**. The target value is the last element or not in the list at all. The algorithm must check every one of the 'n' elements.
  * **Average Case:** **O(n)**. On average, the algorithm will need to check about half of the elements.

