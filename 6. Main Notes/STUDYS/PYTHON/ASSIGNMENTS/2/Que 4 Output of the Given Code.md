
```python
var = 10
for i in range(10):
    for j in range(2, 10, 1):
        if var % 2 == 0:
            continue
        var += 1
    var += 1
else:
    var += 1
print(var)
```

#### Analysis and Explanation:

1. **Initialization**: The variable `var` starts with a value of 10.

2. **Outer Loop**: Runs 10 times (`i` ranges from 0 to 9).

3. **Inner Loop**: Runs 8 times for each iteration of the outer loop (`j` ranges from 2 to 9).

4. **Condition Check**:
   - Inside the inner loop, the condition `if var % 2 == 0:` checks if `var` is even.
   - If `var` is even, `continue` is executed, skipping the rest of the inner loop's code, which means `var` is not incremented within that iteration.
   - If `var` is odd, `var += 1` increments `var` by 1.

5. **Increment Outside Inner Loop**: After the inner loop completes, `var` is incremented by 1 with `var += 1`.

6. **Final Increment**: After the outer loop completes, the `else` block runs, incrementing `var` by 1 more.

#### Step-by-Step Execution:

- Starting with `var = 10`, during the first iteration of the outer loop, since `var` is even, the `continue` statement is executed repeatedly, and `var` only gets incremented once after the inner loop completes. This pattern continues, with `var` typically being incremented once per outer loop iteration because it often starts even.
- The final increment after the outer loop makes an additional increment.

**Output Calculation:**
- Initial value of `var`: 10
- Increment in the outer loop (10 times, usually by 1 per iteration): +10
- Final increment in the `else` block: +1

Final value of `var` = 10 (initial) + 10 (outer loop) + 1 (else block) = 21

**Output**: `21`

Therefore, the correct answer is **b. 21**.