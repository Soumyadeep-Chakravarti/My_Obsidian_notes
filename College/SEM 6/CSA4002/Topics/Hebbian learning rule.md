# Hebbian Learning Rule - Detailed Note

## What is Hebbian Learning?

Hebbian learning is one of the oldest and most influential learning principles in neural networks and neuroscience. Named after psychologist Donald Hebb, it forms the foundation for many associative learning models.

### Principle

> "Neurons that fire together, wire together."

This principle implies that if a presynaptic neuron (input neuron) and a postsynaptic neuron (output neuron) are activated simultaneously, the connection (or weight) between them is strengthened.

### Mathematical Formulation
 $$\Delta w_{ij} = \eta x_i y_j$$
Where: 
- $\Delta w_{ij}$ : change in weight between neuron $i$ and $j$
	
-  $\eta$ : learning rate (a small positive constant)
	
- $x_i$ : input to neuron $i$
	
- $y_j$ : output of neuron $j$
	
### Key Concepts

- **Local learning rule**: Only involves the input and output neurons; no global error term required.
    
- **Associative learning**: Links inputs and outputs based on their co-occurrence.
    
- **Unsupervised**: Does not require labeled data.
    

### Biological Motivation

- Inspired by the functioning of real neurons in the cerebral cortex.
    
- Synapses in the brain are strengthened through repeated activity.
    
- Useful in modeling **long-term potentiation (LTP)**—a biological basis of learning and memory.
    

### Applications

- Pattern association and completion
    
- Feature detectors in unsupervised learning
    
- Competitive learning models
    

### Variants

- **Generalized Hebbian Algorithm (GHA)**: Principal Component Analysis (PCA) using neural networks.
    
- **Oja’s Rule**: Normalized version that prevents unbounded weight growth:
$$\Delta w = \eta (x y - y^2 w)
$$
### Limitations

- Can lead to **runaway excitation** (weights grow without bound).
    
- Not suitable for tasks requiring error correction.
    
- Needs normalization or regulatory mechanisms (e.g., Oja's Rule).
    

### Summary

Hebbian learning provides a biologically inspired, simple, and intuitive way to model how connections in a neural network can be strengthened through co-activation. While powerful for associative memory and unsupervised learning, its naive form requires refinement for broader applications.

---
