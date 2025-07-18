# Introduction

Backpropagation (short for **backward propagation of errors**) is a supervised learning algorithm used to train **multilayer feedforward neural networks**. Reintroduced in 1986 by Rumelhart, Hinton, and Williams, it made deep learning practically viable by enabling efficient weight updates in networks with **hidden layers**.

---

# Motivation

- The **Perceptron** cannot solve non-linearly separable problems.
    
- **Multilayer Perceptrons (MLPs)** solve this by adding hidden layers.
    
- Backpropagation provides a way to compute **gradients** for all weights via the **chain rule**, allowing for efficient learning in deep networks.
    

---

# Key Concepts

## 1. **Forward Pass**

- Input is passed layer by layer to compute output.
    
- Activation at each neuron is:  
    $$a_j = f\left(\sum_i w_{ji} x_i + b_j \right)$$
    

## 2. **Loss Function**

- Measures the difference between predicted output $y$ and target $d$.
    
- Common choice: **Mean Squared Error (MSE)**  
    $$E = \frac{1}{2} \sum_k (d_k - y_k)^2$$
    

## 3. **Backward Pass (Gradient Calculation)**

- Error is propagated backward from output to input using the **chain rule** of calculus.
    
- Computes the gradient $\frac{\partial E}{\partial w_{ji}}$ for each weight.
    

## 4. **Weight Update Rule**

$$w_{ji}^{(new)} = w_{ji}^{(old)} - \eta \frac{\partial E}{\partial w_{ji}}$$

Where:

- $\eta$: Learning rate
    
- $\frac{\partial E}{\partial w_{ji}}$: Gradient of error $w.r.t.$ weight
    

---

# Activation Functions

Backpropagation requires **differentiable activation functions**. Common choices:

- **Sigmoid**: $f(x) = \frac{1}{1 + e^{-x}}$
    
- **Tanh**: $f(x) = \tanh(x)$
    
- **ReLU** (used in modern deep networks): $f(x) = \max(0, x)$
    

---

# Assumptions

- The network uses differentiable activation functions.
    
- Errors are computed using a differentiable cost function.
    

---

# Issues and Solutions

## Problems:

- **Vanishing gradients**: Gradients shrink through layers, slowing learning.
    
- **Overfitting**: Network memorizes training data.
    

## Solutions:

- Better initialization (e.g., Xavier/He initialization)
    
- Use of ReLU or variants
    
- Regularization techniques (dropout, weight decay)
    
- Batch normalization
    

---

# Summary

Backpropagation is the cornerstone of modern deep learning. By enabling efficient training of multilayer networks, it overcomes the limitations of single-layer perceptrons and forms the backbone of most supervised learning in neural networks.
