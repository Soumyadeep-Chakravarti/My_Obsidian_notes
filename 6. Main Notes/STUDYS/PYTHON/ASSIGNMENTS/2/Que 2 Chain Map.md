
A `Chain Map` is a class in the `collections` module that groups multiple dictionaries into a single view, allowing you to search through multiple dictionaries as though they were one.

#### a) Creating a Chain Map

```python
from collections import ChainMap

# Define two dictionaries
dict1 = {'a': 1, 'b': 2}
dict2 = {'b': 3, 'c': 4}

# Create a ChainMap
chain_map = ChainMap(dict1, dict2)

# Display the ChainMap
print("ChainMap:", chain_map)
```

#### b) Accessing individual values in a Chain Map using keys

```python
# Accessing values in ChainMap
print("Value of key 'a':", chain_map['a'])  # Output: 1 (from dict1)
print("Value of key 'b':", chain_map['b'])  # Output: 2 (from dict1, overrides dict2)
print("Value of key 'c':", chain_map['c'])  # Output: 4 (from dict2)
```

**Explanation:**
- In the `Chain Map`, if a key appears in multiple dictionaries, the value from the first dictionary is used.
- In the example, both `dict1` and `dict2` have the key `'b'`, but `dict1`'s value (`2`) is used because `dict1` is listed first in the `ChainMap`.
