#### Solution

Here's a Python program that uses nested for loops to generate the pattern:

```python
def print_pattern():
    # Number of rows in the upper part of the pattern
    num_rows = 5
    
    # Upper part of the pattern
    for i in range(1, num_rows + 1):
        print('* ' * i)
    
    # Lower part of the pattern
    for i in range(num_rows - 1, 0, -1):
        print('* ' * i)

# Example usage
print_pattern()
```

**Explanation:**
- **Upper Part:**
  - The first `for` loop runs from 1 to `num_rows + 1` (i.e., 1 to 6).
  - In each iteration, it prints `i` stars, where `i` increases with each iteration.
- **Lower Part:**
  - The second `for` loop runs from `num_rows - 1` down to 1.
  - In each iteration, it prints `i` stars, where `i` decreases with each iteration.

### Complete Code

```python
def print_pattern():
    # Number of rows in the upper part of the pattern
    num_rows = 5
    
    # Upper part of the pattern
    for i in range(1, num_rows + 1):
        print('* ' * i)
    
    # Lower part of the pattern
    for i in range(num_rows - 1, 0, -1):
        print('* ' * i)

# Example usage
print_pattern()
```

**Output:**
```
* 
* * 
* * * 
* * * * 
* * * * * 
* * * * 
* * * 
* * 
* 
```

In this solution:
- The `print_pattern` function generates the specified pattern by first printing an increasing number of stars and then printing a decreasing number of stars.
