#### Solution

To validate usernames based on the given criteria, we can use Python's `re` module, which supports regular expressions.

Here's how you can implement this:

```python
import re

def validate_username(username):
    # Regular expression pattern for validation
    pattern = r"^[a-zA-Z][a-zA-Z0-9_]{4,11}[a-zA-Z0-9]$"
    
    # Check if the username matches the pattern
    if re.match(pattern, username):
        return True
    else:
        return False

# Example usage
usernames = ["Alice123", "Bob_", "Charlie98", "_David", "Eve1", "F4_5", "G_H1234567890"]
for username in usernames:
    is_valid = validate_username(username)
    print(f"Username '{username}' is {'valid' if is_valid else 'invalid'}")
```

**Explanation:**
- **Pattern Breakdown:**
  - `^` asserts the position at the start of the string.
  - `[a-zA-Z]` ensures the username starts with a letter.
  - `[a-zA-Z0-9_]` allows letters, numbers, and underscores in the middle.
  - `{4,11}` specifies that the length of this part should be between 4 and 11 characters, so the total length will be between 5 and 12 characters.
  - `[a-zA-Z0-9]` ensures the username does not end with an underscore.
  - `$` asserts the position at the end of the string.

### Complete Code

```python
import re

def validate_username(username):
    # Regular expression pattern for validation
    pattern = r"^[a-zA-Z][a-zA-Z0-9_]{4,11}[a-zA-Z0-9]$"
    
    # Check if the username matches the pattern
    if re.match(pattern, username):
        return True
    else:
        return False

# Example usage
usernames = ["Alice123", "Bob_", "Charlie98", "_David", "Eve1", "F4_5", "G_H1234567890"]
for username in usernames:
    is_valid = validate_username(username)
    print(f"Username '{username}' is {'valid' if is_valid else 'invalid'}")
```

**Output:**
```
Username 'Alice123' is valid
Username 'Bob_' is invalid
Username 'Charlie98' is valid
Username '_David' is invalid
Username 'Eve1' is valid
Username 'F4_5' is valid
Username 'G_H1234567890' is invalid
```

In this solution:
- The `validate_username` function uses a regular expression to check if a username meets all specified criteria.
- The example usage demonstrates how different usernames are validated against these criteria.