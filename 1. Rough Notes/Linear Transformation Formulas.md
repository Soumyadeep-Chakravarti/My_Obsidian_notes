### 1. Linear Transformation Formula

A **linear transformation** $T:\mathbb{R}^n \rightarrow \mathbb{R}^m$ can generally be written as:

$$T(\mathbf{x}) =A\mathbf{x}$$

where:

- $A$ is an $m×n$ matrix.
- $\mathbf{x}$ is a vector in $\mathbb{R}^n$.
- $T(\mathbf{x})$ is the resulting vector in $\mathbb{R}^m$.

### 2. Matrix Representation of a Linear Transformation

If $T: \mathbb{R}^n \rightarrow \mathbb{R}^m$ is a linear transformation and AAA is its corresponding $m \times n$ matrix, then $A$ can be found by applying TTT to each of the standard basis vectors of Rn\mathbb{R}^nRn:

A=[T(e1)T(e2)…T(en)]A = \begin{bmatrix} T(\mathbf{e}_1) & T(\mathbf{e}_2) & \dots & T(\mathbf{e}_n) \end{bmatrix}A=[T(e1​)​T(e2​)​…​T(en​)​]

where e1,e2,…,en\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_ne1​,e2​,…,en​ are the standard basis vectors in Rn\mathbb{R}^nRn.

### 3. Composition of Linear Transformations

If T1:Rn→RmT_1: \mathbb{R}^n \rightarrow \mathbb{R}^mT1​:Rn→Rm with matrix AAA and T2:Rm→RpT_2: \mathbb{R}^m \rightarrow \mathbb{R}^pT2​:Rm→Rp with matrix BBB, then the composition T2∘T1:Rn→RpT_2 \circ T_1: \mathbb{R}^n \rightarrow \mathbb{R}^pT2​∘T1​:Rn→Rp is given by:

(T2∘T1)(x)=B(Ax)=(BA)x(T_2 \circ T_1)(\mathbf{x}) = B(A\mathbf{x}) = (BA)\mathbf{x}(T2​∘T1​)(x)=B(Ax)=(BA)x

The matrix of the composition T2∘T1T_2 \circ T_1T2​∘T1​ is the product BABABA.

### 4. Determining Inverses of Linear Transformations

A linear transformation T:Rn→RnT: \mathbb{R}^n \rightarrow \mathbb{R}^nT:Rn→Rn with matrix AAA is **invertible** if AAA is a square matrix (same number of rows and columns) and its determinant is non-zero (det⁡(A)≠0\det(A) \neq 0det(A)=0). The inverse transformation T−1T^{-1}T−1 is given by:

T−1(y)=A−1yT^{-1}(\mathbf{y}) = A^{-1}\mathbf{y}T−1(y)=A−1y

where A−1A^{-1}A−1 is the inverse matrix of AAA.

### 5. Image (Range) and Kernel (Null Space)

- **Image (Range)** of TTT: The image of TTT, denoted as Im(T)\text{Im}(T)Im(T), is the set of all possible outputs:
    
    Im(T)={T(x):x∈Rn}\text{Im}(T) = \{ T(\mathbf{x}) : \mathbf{x} \in \mathbb{R}^n \}Im(T)={T(x):x∈Rn}
- **Kernel (Null Space)** of TTT: The kernel of TTT, denoted as ker⁡(T)\ker(T)ker(T), is the set of all vectors that map to the zero vector:
    
    ker⁡(T)={x∈Rn:T(x)=0}\ker(T) = \{ \mathbf{x} \in \mathbb{R}^n : T(\mathbf{x}) = \mathbf{0} \}ker(T)={x∈Rn:T(x)=0}
    
    The **dimension of the kernel** is known as the **nullity** of TTT, and the **dimension of the image** is known as the **rank** of TTT.
    

### 6. Rank-Nullity Theorem

The **Rank-Nullity Theorem** is a fundamental result in linear algebra for linear transformations:

rank(T)+nullity(T)=n\text{rank}(T) + \text{nullity}(T) = nrank(T)+nullity(T)=n

where nnn is the dimension of the domain of TTT.

### 7. Rotation in R2\mathbb{R}^2R2

For a linear transformation that rotates vectors in R2\mathbb{R}^2R2 by an angle θ\thetaθ:

T(x)=(cos⁡θ−sin⁡θsin⁡θcos⁡θ)xT(\mathbf{x}) = \begin{pmatrix} \cos \theta & -\sin \theta \\ \sin \theta & \cos \theta \end{pmatrix} \mathbf{x}T(x)=(cosθsinθ​−sinθcosθ​)x

where x=(x,y)\mathbf{x} = (x, y)x=(x,y) is a vector in R2\mathbb{R}^2R2.

### 8. Reflection in R2\mathbb{R}^2R2

A linear transformation that reflects vectors across a line through the origin in R2\mathbb{R}^2R2 can be represented using the angle θ\thetaθ of the line:

T(x)=(cos⁡(2θ)sin⁡(2θ)sin⁡(2θ)−cos⁡(2θ))xT(\mathbf{x}) = \begin{pmatrix} \cos(2\theta) & \sin(2\theta) \\ \sin(2\theta) & -\cos(2\theta) \end{pmatrix} \mathbf{x}T(x)=(cos(2θ)sin(2θ)​sin(2θ)−cos(2θ)​)x

### 9. Projection Matrix

A projection onto a line in R2\mathbb{R}^2R2 defined by a unit vector u\mathbf{u}u can be represented as:

P=uuTP = \mathbf{u} \mathbf{u}^TP=uuT

where u\mathbf{u}u is a unit vector (a vector with magnitude 1). If u\mathbf{u}u is (ab)\begin{pmatrix} a \\ b \end{pmatrix}(ab​), then the projection matrix is:

P=(a2ababb2)P = \begin{pmatrix} a^2 & ab \\ ab & b^2 \end{pmatrix}P=(a2ab​abb2​)

### 10. Shear Transformation Matrix

A shear transformation in R2\mathbb{R}^2R2 that shifts xxx-coordinates based on yyy can be represented as:

T(x)=(1k01)xT(\mathbf{x}) = \begin{pmatrix} 1 & k \\ 0 & 1 \end{pmatrix} \mathbf{x}T(x)=(10​k1​)x

where kkk is the shear factor.