---
aliases:
  - "Chapter 1: Introduction"
---
## 1.1 What is a Neural Network?

- A **neural network** is a massively parallel distributed processor made up of simple processing units called **neurons**.
    
- It has a natural propensity for storing experiential knowledge and making it available for use.
    
- Resembles the brain in two respects:
    
    1. Knowledge is acquired by the network from its environment through a **learning process**.
        
    2. Interneuron connection strengths (synaptic weights) are used to store the acquired knowledge.
        

## 1.2 Human Brain

- The brain consists of about 101110^{11} neurons and 101410^{14} to 101510^{15} synapses.
    
- Neurons have **dendrites** (input), **soma** (cell body), and **axon** (output).
    
- Synapse controls the strength of the signal between neurons.
    
- Neurons communicate via **electrochemical processes**.
    
- Processing in the brain is **massively parallel** and **highly fault-tolerant**.
    

## 1.3 Structure of the Brain

- **Cerebral cortex** plays a vital role in learning and memory.
    
- [**Hebbian learning rule**](obsidian://open?vault=My_Obsidian_notes&file=College%2FSEM%206%2FCSA4002%2FTopics%2FHebbian%20learning%20rule): Neurons that fire together, wire together.  

## 1.4 Artificial Neural Networks (ANNs)

- Consist of layers:
    
    - **Input layer**: Receives raw data.
        
    - **Hidden layer(s)**: Extracts features/patterns.
        
    - **Output layer**: Produces the final result.
        
- Weights control the strength of connections.
    
- Learning involves updating these weights.
    

## 1.5 Typical Applications of Neural Networks

- Pattern recognition
    
- Time series prediction
    
- Classification
    
- Control
    
- Signal processing
    
- Image compression
    
- Biomedical applications
    

## 1.6 Benefits and Limitations

#### Benefits

- Learning from data
    
- Fault tolerance
    
- Generalization
    
- Nonlinear mapping
    

#### Limitations

- Requires large datasets
    
- Lack of interpretability
    
- Training can be slow and computationally expensive
    

## 1.7 Historical Developments

- 1943: McCulloch and Pitts introduced the first model of a neuron ( [McCulloch-Pitts Neuron Model](obsidian://open?vault=My_Obsidian_notes&file=College%2FSEM%206%2FCSA4002%2FTopics%2FMcCulloch-Pitts%20Neuron%20Model%20) ).
    
- 1958: Rosenblatt proposed the [**Perceptron**](obsidian://open?vault=My_Obsidian_notes&file=College%2FSEM%206%2FCSA4002%2FTopics%2FThe%20Perceptron).
    
- 1969: Minsky and Papert highlighted limitations of single-layer perceptrons.
    
- 1986: Rumelhart, Hinton, and Williams reintroduced [**backpropagation**](Backpropagation Algorithm), sparking a resurgence.


## 1.8 Learning Paradigms

1. **Supervised Learning**:
    
    - Input-output pairs are known.
        
    - Network learns to map inputs to outputs.
        
2. **Unsupervised Learning**:
    
    - No labels.
        
    - Learns underlying structure.
        
3. **Reinforcement Learning**:
    
    - Learns via rewards and penalties from the environment.
        

## 1.9 Essential Properties of Neural Networks

- **Nonlinearity**: Neurons apply nonlinear transformations (e.g., sigmoid).
    
- **Input-Output Mapping**: Function approximation.
    
- **Adaptivity**: Learns by adjusting weights.
    
- **Evidential Response**: Confidence in outputs.
    
- **Contextual Information**: History and surroundings influence decisions.
    
- **Fault Tolerance**: Robust to noise/failures.
    
- **Uniformity of Analysis and Design**: Homogeneous processing units.
    
- **Neurobiological Analogy**: Conceptual model of brain processes.
    

---
