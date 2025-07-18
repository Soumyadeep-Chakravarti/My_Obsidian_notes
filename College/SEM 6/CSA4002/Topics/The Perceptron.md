# Introduction

The **Perceptron**, proposed by **Frank Rosenblatt** in 1958, is a fundamental concept in neural networks. It is a type of **linear classifier** that learns to map input features to binary output labels using a supervised learning rule. The Perceptron extended the McCulloch-Pitts model by introducing **trainable weights** and a **learning algorithm**.

---

# Architecture

- **Inputs**: $x_1, x_2, ..., x_n$
    
- **Weights**: $w_1, w_2, ..., w_n$
    
- **Bias**: $b$ (sometimes treated as $w_0$ with $x_0 = 1$)
    
- **Activation Function**: Step function or sign function
    

## Output Function

$$y = f\left(\sum_{i=1}^n w_i x_i + b\right)$$

Where f(z)={1if z>00otherwisef(z) = \begin{cases} 1 & \text{if } z > 0 \\ 0 & \text{otherwise} \end{cases}

---

# Learning Algorithm (Perceptron Learning Rule)

Used to **adjust weights** based on error:

## Weight Update Rule

$$w_i \leftarrow w_i + \eta (d - y) x_i$$

Where:

- $\eta$ : learning rate
    
- $d$ : desired (target) output
    
- $y$ : actual output
    
- $x_i$ : input value
    

Weights are updated **only when there is an error** in prediction.

---

# Geometric Interpretation

- The perceptron finds a **hyperplane** that separates the input space into two classes.
    
- It is a **linear classifier**: it can only learn **linearly separable** problems.
    

---

# Example: AND Function

- Inputs: (0,0),(0,1),(1,0),(1,1)(0,0), (0,1), (1,0), (1,1)
    
- Outputs: 0,0,0,10, 0, 0, 1
    
- This is linearly separable → the perceptron can learn this perfectly.
    

# Example: XOR Problem

- Inputs: $(0,0), (0,1), (1,0), (1,1)$
    
- Outputs: $0, 1, 1, 0$
    
- **Not linearly separable** → perceptron **fails** to learn this.
    

This limitation was highlighted by **Minsky and Papert (1969)**, slowing neural network research until the development of **multilayer perceptrons** and **backpropagation**.

---

# Strengths

- Simple and intuitive
    
- Guaranteed to converge if data is linearly separable
    
- Online learning: updates happen incrementally
    

# Weaknesses

- Cannot solve non-linearly separable problems (e.g., XOR)
    
- Output is binary only (not probabilistic or multi-class)
    
- Fixed step activation; not differentiable
    

---

# Importance

- First model to include **learnable parameters**.
    
- Introduced a clear algorithm for **supervised learning**.
    
- Served as a stepping stone toward deep learning.
    

---

# Summary

The perceptron is a foundational model in machine learning. It laid the groundwork for later architectures and revealed both the potential and limitations of simple neural networks. Its failure on the XOR problem directly motivated the development of **multilayer** networks and the **backpropagation algorithm**.
