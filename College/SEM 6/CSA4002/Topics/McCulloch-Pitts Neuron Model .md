
# Introduction

The McCulloch-Pitts neuron, introduced in 1943 by Warren McCulloch and Walter Pitts, was the **first mathematical model of a biological neuron**. It forms the foundation of early artificial neural networks and demonstrates how neurons can be used to perform logical computations.

---

# Biological Inspiration

- Based on the idea that the brain can be modeled as a network of simple units (neurons) with binary output (firing or not).
    
- Each neuron receives multiple inputs, processes them, and emits an output depending on a threshold.
    

---

# Structure and Assumptions

- Neuron receives **binary inputs** $x_1, x_2, \ldots, x_n \in \{0,1\}$
    
- Each input has a **weight** $w_i$
    
- Neuron computes a **weighted sum** $S = \sum w_i x_i$
    
- If $S \geq \theta$ (threshold), the neuron **fires** (outputs 1); otherwise, it outputs 0.
    

## Output Function

$$y = \begin{cases} 1 & \text{if } \sum_{i=1}^n w_i x_i \geq \theta \\ 0 & \text{otherwise} \end{cases}$$

---

# Logical Computation

The McCulloch-Pitts neuron can be configured to compute basic logic gates:

## AND Gate:

- Inputs: $x_1, x_2$
    
- Weights: $w_1 = 1, w_2 = 1$
    
- Threshold: $\theta = 2$
    

## OR Gate:

- Inputs: $x_1, x_2$
    
- Weights: $w_1 = 1, w_2 = 1$
    
- Threshold: $\theta = 1$
    

## NOT Gate:

- Needs inhibitory input.
    
- Special rule: If an inhibitory input is active (value 1), output is 0 regardless of other inputs.
    

---

# Limitations

- **Binary output** only; can't model analog or graded responses.
    
- **No learning mechanism** — weights are fixed.
    
- **Linearly separable functions only** (e.g., can't solve XOR).
    

---

# Importance

- First model to show how **neural networks can compute logical functions**.
    
- Inspired development of more advanced models like the **Perceptron** and **multilayer networks**.
    
- Key idea: networks of simple binary units can exhibit complex behavior.
    

---

# Summary

The McCulloch-Pitts neuron is a simple but foundational concept in neural networks. It established the basic unit of computation for artificial neurons, showing how threshold logic could be used to mimic brain-like processes using formal mathematical tools.
