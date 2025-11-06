# Nexus - Project Structure & Tooling Specification

**Document**: Implementation Planning  
**Date**: 2025-11-03  
**Status**: Pre-Implementation Planning

---

## 1. Technology Stack Selection

### 1.1 Core Language & Runtime

**Java Version**: **Java 21 LTS** ✅

**Rationale**:
- **Virtual Threads (Project Loom)**: Lightweight concurrency perfect for handling thousands of connections
- **Pattern Matching**: Modern syntax for cleaner protocol parsing
- **Record Types**: Immutable data structures for messages
- **Sealed Classes**: Type-safe message hierarchy
- **Performance**: G1GC improvements, better JIT optimizations
- **LTS Support**: Long-term support until September 2031
- **Vector API (Incubator)**: SIMD operations for serialization optimization

**Alternative Considered**:
- Java 17 LTS: Stable but lacks virtual threads (critical for our use case)
- Java 23: Too bleeding edge, not production-ready

**Decision**: Java 21 gives us modern features while maintaining stability.

---

### 1.2 Build System

**Build Tool**: **Gradle 8.5+** with Kotlin DSL ✅

**Rationale**:
- **Performance**: Incremental builds, build cache, faster than Maven
- **Flexibility**: Kotlin DSL is type-safe and IDE-friendly
- **Multi-module Support**: Essential for our modular architecture
- **Dependency Management**: Version catalogs for centralized dependency management
- **Native Support**: Gradle Native for potential C++ interop
- **Modern Practices**: Better aligned with contemporary Java development

**Alternative Considered**:
- Maven: Verbose XML, slower builds, but more widely adopted in enterprise

**Decision**: Gradle for performance and modern developer experience.

**Build Configuration**:
```kotlin
// settings.gradle.kts
rootProject.name = "nexus"

include(
    "nexus-core",           // Main router implementation
    "nexus-protocol",       // Wire protocol & serialization
    "nexus-common",         // Shared utilities & types
    "nexus-adapters:java",  // Java native adapter
    "nexus-adapters:python",// Python adapter generator
    "nexus-adapters:rust",  // Rust adapter generator
    "nexus-benchmarks",     // Performance testing
    "nexus-examples"        // Demo applications
)
```

---

### 1.3 Testing Framework

**Unit Testing**: **JUnit 5 (Jupiter)** ✅  
**Assertion Library**: **AssertJ** ✅  
**Mocking**: **Mockito 5** ✅  
**Integration Testing**: **Testcontainers** ✅  
**Property-Based Testing**: **jqwik** ✅  

**Rationale**:
- **JUnit 5**: Modern, extensible, parameterized tests
- **AssertJ**: Fluent assertions, better error messages
- **Mockito**: Industry standard, well-documented
- **Testcontainers**: Spin up real services (databases, message brokers) for integration tests
- **jqwik**: Property-based testing to find edge cases in protocol parsing

**Test Structure**:
```
nexus-core/
├── src/
│   ├── main/java/
│   └── test/java/
│       ├── unit/              # Fast, isolated tests
│       ├── integration/       # Multi-component tests
│       ├── performance/       # Benchmark tests
│       └── property/          # Property-based tests
```

---

### 1.4 Performance & Benchmarking

**Benchmarking**: **JMH (Java Microbenchmark Harness) 1.37** ✅  
**Profiling**: **async-profiler 3.0** ✅  
**Memory Analysis**: **JOL (Java Object Layout)** ✅  

**Rationale**:
- **JMH**: Gold standard for JVM benchmarking, prevents JIT tricks
- **async-profiler**: Low-overhead CPU & allocation profiling
- **JOL**: Analyze object memory layout for optimization

**Benchmark Targets**:
- Serialization/deserialization throughput
- Message routing latency (P50, P95, P99)
- Connection handling under load
- Memory allocation patterns

---

### 1.5 Serialization Libraries

**Phase 1 (Development)**: **Jackson 2.16+** (JSON) ✅  
**Phase 2 (Production)**: **FlatBuffers 23.5.26** ✅  
**Alternative Evaluation**: **Cap'n Proto**, **MessagePack**  

**Rationale**:

**Jackson (JSON)**:
- Human-readable for debugging
- Excellent tooling support
- Fast enough for early development
- Easy to inspect messages in logs

**FlatBuffers**:
- **Zero-copy**: No parsing overhead
- **Forward/backward compatibility**: Schema evolution
- **Cross-platform**: Official libraries for all target languages
- **Efficient**: 3-5x faster than Protocol Buffers
- **Memory-mapped**: Direct buffer access

**Why not Protocol Buffers?**:
- Requires parsing step (not zero-copy)
- FlatBuffers is faster for our read-heavy use case

**Schema Example**:
```flatbuffers
// nexus-protocol/schema/message.fbs
namespace nexus.protocol;

table Message {
  id: ulong;
  type: MessageType;
  source: string;
  destination: string;
  payload: [ubyte];
}

enum MessageType : byte { 
  REQUEST = 0, 
  RESPONSE = 1, 
  EVENT = 2 
}
```

---

### 1.6 Networking & I/O

**Core**: **Java NIO (java.nio.channels)** ✅  
**Framework Study**: **Netty 4.1** (for patterns, not direct use)  
**TLS**: **Java Secure Socket Extension (JSSE)** built-in  

**Rationale**:
- **Build from scratch using NIO** for maximum learning
- Study Netty's reactor pattern but implement custom
- Use standard library for TLS (no external dependencies)

**Key Classes**:
- `Selector`: Event loop for non-blocking I/O
- `SocketChannel`: Non-blocking TCP sockets
- `ByteBuffer`: Direct memory buffers for zero-copy
- `AsynchronousSocketChannel`: Alternative async API (evaluation)

---

### 1.7 Concurrency & Async

**Threads**: **Virtual Threads (Project Loom)** ✅  
**Synchronization**: **java.util.concurrent** ✅  
**Lock-Free**: **VarHandle** & **Atomic classes** ✅  

**Rationale**:
- **Virtual threads**: Handle millions of connections with minimal overhead
- **Structured Concurrency**: Clean lifecycle management
- **No external async libraries**: Java 21 has everything we need

**Concurrency Model**:
```java
// Main event loop thread (Selector)
// + Virtual thread per connection for message handling
// + Dedicated thread pool for CPU-intensive tasks (serialization)

try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    while (running) {
        selector.select();
        for (SelectionKey key : selector.selectedKeys()) {
            executor.submit(() -> handleConnection(key));
        }
    }
}
```

---

### 1.8 Observability Stack

**Metrics**: **Micrometer 1.12** (vendor-neutral) ✅  
**Tracing**: **OpenTelemetry Java 1.32** ✅  
**Logging**: **SLF4J 2.0** + **Logback 1.4** ✅  
**Health Checks**: **Custom implementation** ✅  

**Rationale**:
- **Micrometer**: Export to Prometheus, Graphite, etc.
- **OpenTelemetry**: Industry standard for distributed tracing
- **SLF4J**: Logging facade, swap backends easily
- **Logback**: Structured logging, JSON output

**Metrics to Track**:
```java
// Connection metrics
Gauge.builder("nexus.connections.active").register(registry);
Counter.builder("nexus.connections.total").register(registry);

// Message metrics
Timer.builder("nexus.message.routing.latency").register(registry);
Counter.builder("nexus.message.sent").tag("type", "rpc").register(registry);

// Error metrics
Counter.builder("nexus.errors").tag("type", "timeout").register(registry);
```

---

### 1.9 Configuration Management

**Format**: **YAML (SnakeYAML 2.2)** ✅  
**Validation**: **Custom + Bean Validation** ✅  
**Hot Reload**: **WatchService API** ✅  

**Configuration Structure**:
```yaml
# nexus.yaml
nexus:
  server:
    host: "0.0.0.0"
    port: 9090
    transport: tcp  # tcp | unix | tls
    
  performance:
    max_connections: 10000
    buffer_size: 16384
    virtual_threads: true
    
  protocol:
    format: flatbuffers  # json | flatbuffers
    compression: none    # none | lz4 | zstd
    
  reliability:
    enable_acks: true
    retry_attempts: 3
    timeout_ms: 5000
    
  observability:
    metrics:
      enabled: true
      export: prometheus
      port: 9091
    tracing:
      enabled: true
      exporter: otlp
      endpoint: "http://localhost:4317"
    logging:
      level: info
      format: json
```

---

### 1.10 Development Tools

**IDE**: **IntelliJ IDEA Ultimate** (recommended) ✅  
**Code Quality**: **SonarQube** + **SpotBugs** ✅  
**Code Formatting**: **Google Java Format** ✅  
**Static Analysis**: **Error Prone** ✅  
**Dependency Check**: **OWASP Dependency-Check** ✅  

**Rationale**:
- **IntelliJ**: Best Java IDE, excellent Gradle support
- **SonarQube**: Continuous code quality inspection
- **Google Java Format**: Consistent style, zero configuration
- **Error Prone**: Catches common bugs at compile time
- **OWASP**: Security vulnerability scanning

**Git Hooks** (via `pre-commit`):
```yaml
# .pre-commit-config.yaml
repos:
  - repo: local
    hooks:
      - id: format
        name: Google Java Format
        entry: ./gradlew spotlessApply
      - id: test
        name: Run Tests
        entry: ./gradlew test
```

---

### 1.11 CI/CD Pipeline

**CI Platform**: **GitHub Actions** ✅  
**Container Registry**: **GitHub Container Registry (ghcr.io)** ✅  
**Artifact Repository**: **GitHub Packages** (Maven) ✅  

**Pipeline Stages**:
1. **Build**: Compile, run unit tests
2. **Quality**: SonarQube analysis, SpotBugs
3. **Integration**: Run integration tests with Testcontainers
4. **Benchmark**: Run JMH benchmarks, track performance regression
5. **Security**: OWASP dependency check
6. **Package**: Build Docker image, publish artifacts

**GitHub Actions Workflow**:
```yaml
# .github/workflows/ci.yml
name: Nexus CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v4
        with:
          java-version: '21'
          distribution: 'temurin'
      - run: ./gradlew build
      - run: ./gradlew test
      - run: ./gradlew integrationTest
```

---

### 1.12 Documentation Tools

**API Docs**: **Javadoc** (built-in) ✅  
**Architecture Docs**: **Markdown** + **Mermaid diagrams** ✅  
**Protocol Spec**: **AsciiDoc** ✅  
**Website**: **MkDocs Material** or **Docusaurus** ✅  

**Documentation Structure**:
```
docs/
├── architecture/
│   ├── overview.md
│   ├── protocol.md
│   └── diagrams/
├── guides/
│   ├── quickstart.md
│   ├── java-adapter.md
│   ├── python-adapter.md
│   └── performance-tuning.md
├── reference/
│   ├── api/              # Generated Javadoc
│   ├── configuration.md
│   └── metrics.md
└── contributing/
    ├── development.md
    └── testing.md
```

---

## 2. Project Structure & Package Organization

### 2.1 Module Structure

```
nexus/
├── nexus-core/                    # Main router implementation
│   └── src/main/java/io/nexus/
│       ├── core/
│       │   ├── NexusServer.java         # Main entry point
│       │   ├── NexusRouter.java         # Message routing engine
│       │   └── ServiceRegistry.java     # Service discovery
│       ├── network/
│       │   ├── ConnectionManager.java   # NIO connection handling
│       │   ├── SocketHandler.java       # Per-connection handler
│       │   └── MessageFramer.java       # Message framing
│       ├── protocol/
│       │   ├── MessageCodec.java        # Encode/decode messages
│       │   ├── TypeMapper.java          # Universal type system
│       │   └── SchemaValidator.java     # Schema validation
│       ├── reliability/
│       │   ├── AckManager.java          # Message acknowledgment
│       │   ├── RetryHandler.java        # Retry logic
│       │   └── CircuitBreaker.java      # Fault isolation
│       ├── observability/
│       │   ├── MetricsCollector.java    # Metrics publishing
│       │   ├── TracingContext.java      # Distributed tracing
│       │   └── StructuredLogger.java    # Logging utilities
│       └── security/
│           ├── TlsConfig.java           # TLS setup
│           ├── Authenticator.java       # Node authentication
│           └── Authorizer.java          # Access control
│
├── nexus-protocol/                # Wire protocol & serialization
│   ├── schema/                    # FlatBuffers schemas
│   │   ├── message.fbs
│   │   ├── types.fbs
│   │   └── service.fbs
│   └── src/main/java/io/nexus/protocol/
│       ├── Message.java           # Generated from FlatBuffers
│       ├── Serializer.java        # Serialization interface
│       └── impl/
│           ├── JsonSerializer.java      # Phase 1
│           └── FlatBuffersSerializer.java # Phase 2
│
├── nexus-common/                  # Shared utilities
│   └── src/main/java/io/nexus/common/
│       ├── types/
│       │   ├── NodeId.java
│       │   ├── ServiceDescriptor.java
│       │   └── MessageType.java
│       ├── config/
│       │   └── NexusConfig.java   # Configuration model
│       └── util/
│           ├── ByteBufferPool.java      # Object pooling
│           └── ConcurrentRegistry.java  # Thread-safe collections
│
├── nexus-adapters/                # Language adapter implementations
│   ├── java/                      # Native Java adapter
│   │   └── src/main/java/io/nexus/adapter/
│   │       ├── NexusClient.java   # Client API
│   │       └── ServiceProxy.java  # RPC proxy generator
│   ├── python/                    # Python adapter
│   │   ├── setup.py
│   │   └── nexus_py/
│   │       ├── client.py
│   │       └── protocol.py
│   └── rust/                      # Rust adapter
│       ├── Cargo.toml
│       └── src/
│           ├── lib.rs
│           └── client.rs
│
├── nexus-benchmarks/              # Performance benchmarks
│   └── src/main/java/io/nexus/benchmarks/
│       ├── MessageRoutingBenchmark.java
│       ├── SerializationBenchmark.java
│       └── ConnectionBenchmark.java
│
├── nexus-examples/                # Example applications
│   ├── hello-world/
│   ├── python-rust-rpc/
│   └── pub-sub-demo/
│
├── docs/                          # Documentation
├── gradle/                        # Gradle wrapper
├── build.gradle.kts               # Root build script
├── settings.gradle.kts            # Multi-module setup
├── gradle.properties              # Build configuration
└── README.md                      # Project overview
```

---

### 2.2 Package Naming Convention

**Base Package**: `io.nexus`

**Rationale**: 
- `io.` prefix: Common for I/O and networking libraries
- Short, memorable, professional

**Sub-packages**:
```
io.nexus
├── core           # Core routing logic
├── network        # NIO networking
├── protocol       # Wire protocol & serialization
├── reliability    # Acks, retries, circuit breakers
├── observability  # Metrics, tracing, logging
├── security       # TLS, auth, authz
├── adapter        # Client adapter API
└── common         # Shared utilities
```

---

### 2.3 Naming Conventions

**Classes**:
- **Interfaces**: Descriptive nouns (`MessageRouter`, `Serializer`)
- **Implementations**: Interface name + descriptor (`DefaultMessageRouter`, `FlatBuffersSerializer`)
- **Abstract classes**: `Abstract` prefix (`AbstractConnectionHandler`)
- **Enums**: Singular noun (`MessageType`, `ConnectionState`)
- **Records**: Noun describing immutable data (`ConnectionInfo`, `RoutingResult`)

**Methods**:
- **Actions**: Verb phrases (`routeMessage()`, `registerService()`)
- **Queries**: Noun phrases (`activeConnections()`, `isConnected()`)
- **Boolean getters**: `is`/`has` prefix (`isHealthy()`, `hasCapability()`)

**Constants**:
- **ALL_CAPS_SNAKE_CASE**: `MAX_CONNECTIONS`, `DEFAULT_PORT`

**Variables**:
- **camelCase**: `messageBuffer`, `connectionPool`
- **Descriptive**: No abbreviations except standard ones (`id`, `msg` OK, `cn` not OK)

**Test Methods**:
- **Pattern**: `methodName_scenario_expectedOutcome`
- **Example**: `routeMessage_whenDestinationUnknown_throwsRoutingException`

---

### 2.4 Version Control Strategy

**Branching Model**: **GitHub Flow** (simplified Git Flow) ✅

**Branches**:
- `main`: Stable, production-ready code
- `develop`: Integration branch for features
- `feature/*`: Feature development (`feature/protocol-v2`)
- `bugfix/*`: Bug fixes (`bugfix/connection-leak`)
- `release/*`: Release preparation (`release/v1.0.0`)

**Commit Convention**: **Conventional Commits** ✅

```
type(scope): subject

Body (optional)

Footer (optional)
```

**Types**: `feat`, `fix`, `docs`, `refactor`, `test`, `perf`, `chore`

**Examples**:
```
feat(protocol): implement FlatBuffers serialization

fix(network): resolve connection leak in Selector loop

perf(router): optimize routing table lookup with trie

docs(api): add Javadoc for public adapter API
```

**Versioning**: **Semantic Versioning 2.0.0** ✅
- Format: `MAJOR.MINOR.PATCH`
- Example: `1.2.3`
  - `1`: Major version (breaking changes)
  - `2`: Minor version (new features, backward compatible)
  - `3`: Patch version (bug fixes)

---

## 3. Dependency Management

### 3.1 Version Catalog

```kotlin
// gradle/libs.versions.toml
[versions]
java = "21"
junit = "5.10.1"
assertj = "3.24.2"
mockito = "5.7.0"
testcontainers = "1.19.3"
jmh = "1.37"
jackson = "2.16.0"
flatbuffers = "23.5.26"
micrometer = "1.12.0"
opentelemetry = "1.32.0"
slf4j = "2.0.9"
logback = "1.4.14"
snakeyaml = "2.2"

[libraries]
# Testing
junit-jupiter = { module = "org.junit.jupiter:junit-jupiter", version.ref = "junit" }
assertj = { module = "org.assertj:assertj-core", version.ref = "assertj" }
mockito = { module = "org.mockito:mockito-core", version.ref = "mockito" }
testcontainers = { module = "org.testcontainers:testcontainers", version.ref = "testcontainers" }
jmh-core = { module = "org.openjdk.jmh:jmh-core", version.ref = "jmh" }
jmh-generator = { module = "org.openjdk.jmh:jmh-generator-annprocess", version.ref = "jmh" }

# Serialization
jackson-databind = { module = "com.fasterxml.jackson.core:jackson-databind", version.ref = "jackson" }
flatbuffers = { module = "com.google.flatbuffers:flatbuffers-java", version.ref = "flatbuffers" }

# Observability
micrometer = { module = "io.micrometer:micrometer-core", version.ref = "micrometer" }
opentelemetry-api = { module = "io.opentelemetry:opentelemetry-api", version.ref = "opentelemetry" }
slf4j = { module = "org.slf4j:slf4j-api", version.ref = "slf4j" }
logback = { module = "ch.qos.logback:logback-classic", version.ref = "logback" }

# Configuration
snakeyaml = { module = "org.yaml:snakeyaml", version.ref = "snakeyaml" }

[bundles]
testing = ["junit-jupiter", "assertj", "mockito"]
observability = ["micrometer", "opentelemetry-api", "slf4j", "logback"]
```

---

## 4. Build Configuration

### 4.1 Root build.gradle.kts

```kotlin
plugins {
    java
    id("com.google.osdetector") version "1.7.3"
    id("com.google.protobuf") version "0.9.4" apply false
}

allprojects {
    group = "io.nexus"
    version = "0.1.0-SNAPSHOT"
    
    repositories {
        mavenCentral()
    }
}

subprojects {
    apply(plugin = "java")
    apply(plugin = "java-library")
    
    java {
        toolchain {
            languageVersion.set(JavaLanguageVersion.of(21))
        }
    }
    
    dependencies {
        // Common test dependencies
        testImplementation(libs.bundles.testing)
    }
    
    tasks.test {
        useJUnitPlatform()
        maxParallelForks = Runtime.getRuntime().availableProcessors()
        
        systemProperty("java.util.logging.manager", "org.jboss.logmanager.LogManager")
    }
}
```

---

## 5. Summary: Why These Choices?

### Language & Runtime
✅ **Java 21**: Virtual threads, modern syntax, LTS stability

### Build & Tooling
✅ **Gradle**: Fast, flexible, modern  
✅ **JUnit 5**: Modern testing  
✅ **JMH**: Accurate benchmarking  

### Serialization
✅ **Jackson → FlatBuffers**: Easy debugging → Zero-copy performance

### Observability
✅ **Micrometer + OpenTelemetry**: Vendor-neutral, industry standard

### Architecture
✅ **Java NIO + Virtual Threads**: Maximum learning, production performance

### Developer Experience
✅ **Google Java Format**: Consistent style  
✅ **Conventional Commits**: Clear history  
✅ **Semantic Versioning**: Predictable releases  

---

**This stack gives us**:
- Modern Java features (virtual threads, records, pattern matching)
- Production-grade performance targets
- Deep learning of networking fundamentals
- Clean, maintainable codebase
- Strong observability from day one

**Next Step**: Set up the initial project structure and start implementing the core NIO connection manager.

---

**Document Status**: Complete and ready for implementation  
**Last Updated**: 2025-11-03


---

## 6. IMPROVED Structure (2025-11-04 Revision)

### 6.1 Problems with Current Structure

**Issue #1: Repetitive Naming**
```
❌ io.nexus.core           # "nexus" + "core" = redundant
❌ io.nexus.network        # "nexus" + "network" = redundant
❌ nexus-core              # "nexus" prefix everywhere
❌ nexus-protocol
❌ nexus-common
```

**Issue #2: Generic Package Names**
```
❌ core      # What does "core" actually contain?
❌ common    # "Common" is vague
❌ network   # Too broad, what specifically?
```

**Issue #3: Inconsistent Module Organization**
```
❌ nexus-adapters/java/    # Mixing module and folder structure
❌ nexus-adapters/python/
```

---

### 6.2 IMPROVED Module Structure

```
nexus/                                    # Root project
├── router/                               # Main routing engine (was: nexus-core)
│   └── src/main/java/io/nexus/
│       ├── Router.java                   # Main routing logic
│       ├── ServiceRegistry.java
│       ├── connection/                   # Connection management (was: network/)
│       │   ├── Manager.java              # Connection pool manager
│       │   ├── Handler.java              # Per-connection handler
│       │   └── Framer.java               # Message framing
│       ├── codec/                        # Message encoding (was: protocol/)
│       │   ├── Codec.java
│       │   ├── TypeMapper.java
│       │   └── SchemaValidator.java
│       ├── fault/                        # Fault tolerance (was: reliability/)
│       │   ├── Acknowledger.java
│       │   ├── Retrier.java
│       │   └── CircuitBreaker.java
│       ├── telemetry/                    # Observability (was: observability/)
│       │   ├── Metrics.java
│       │   ├── Tracer.java
│       │   └── Logger.java
│       └── auth/                         # Security (was: security/)
│           ├── TlsConfig.java
│           ├── Authenticator.java
│           └── Authorizer.java
│
├── protocol/                             # Wire protocol definitions
│   ├── schema/                           # FlatBuffers schemas
│   │   ├── message.fbs
│   │   ├── types.fbs
│   │   └── service.fbs
│   └── src/main/java/io/nexus/protocol/
│       ├── Message.java                  # Generated
│       ├── Serializer.java               # Interface
│       └── serializer/                   # Implementations
│           ├── JsonSerializer.java
│           └── FlatBuffersSerializer.java
│
├── shared/                               # Shared utilities (was: nexus-common)
│   └── src/main/java/io/nexus/shared/
│       ├── model/                        # Domain models (was: types/)
│       │   ├── NodeId.java
│       │   ├── ServiceDescriptor.java
│       │   └── MessageType.java
│       ├── config/                       # Configuration
│       │   └── Config.java
│       └── pool/                         # Object pooling (was: util/)
│           ├── ByteBufferPool.java
│           └── Registry.java
│
├── bridge/                               # Language adapters (was: nexus-adapters/)
│   ├── java/                             # Java client library
│   │   └── src/main/java/io/nexus/bridge/
│   │       ├── Client.java               # Client API
│   │       └── ServiceProxy.java
│   ├── python/                           # Python client library
│   │   ├── pyproject.toml               # Modern Python packaging
│   │   └── nexus/                        # Package name (not nexus_py)
│   │       ├── __init__.py
│   │       ├── client.py
│   │       └── protocol.py
│   └── rust/                             # Rust client library
│       ├── Cargo.toml
│       └── src/
│           ├── lib.rs
│           └── client.rs
│
├── bench/                                # Benchmarks (was: nexus-benchmarks)
│   └── src/main/java/io/nexus/bench/
│       ├── RoutingBenchmark.java
│       ├── SerializationBenchmark.java
│       └── ConnectionBenchmark.java
│
├── examples/                             # Example applications
│   ├── hello/                            # Hello world (was: hello-world/)
│   ├── rpc/                              # Python-Rust RPC demo
│   └── pubsub/                           # Pub-sub demo
│
├── cli/                                  # Command-line tool (NEW)
│   └── src/main/java/io/nexus/cli/
│       ├── Main.java
│       ├── commands/
│       │   ├── StartCommand.java
│       │   ├── TestCommand.java
│       │   ├── TraceCommand.java
│       │   └── GenerateCommand.java
│       └── output/
│           └── Formatter.java
│
├── dashboard/                            # Web UI (NEW)
│   ├── frontend/                         # React app
│   │   ├── package.json
│   │   ├── src/
│   │   │   ├── App.tsx
│   │   │   ├── components/
│   │   │   └── hooks/
│   │   └── public/
│   └── backend/                          # Dashboard backend
│       └── src/main/java/io/nexus/dashboard/
│           ├── DashboardServer.java
│           └── api/
│
├── docs/                                 # Documentation
│   ├── architecture/
│   ├── guides/
│   ├── reference/
│   └── contributing/
│
├── gradle/                               # Gradle wrapper
├── build.gradle.kts                      # Root build
├── settings.gradle.kts                   # Module configuration
└── README.md
```

---

### 6.3 IMPROVED Package Naming

**Base**: `io.nexus` (unchanged)

**Better Sub-packages**:
```
OLD (Generic)              NEW (Specific)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
io.nexus.core           →  io.nexus            # Router is the core
io.nexus.network        →  io.nexus.connection # More specific
io.nexus.protocol       →  io.nexus.codec      # What it actually does
io.nexus.reliability    →  io.nexus.fault      # Shorter, clearer
io.nexus.observability  →  io.nexus.telemetry  # Industry term
io.nexus.security       →  io.nexus.auth       # Shorter
io.nexus.adapter        →  io.nexus.bridge     # Better metaphor
io.nexus.common         →  io.nexus.shared     # Less vague
```

**Rationale**:
- **Shorter**: Fewer characters to type
- **Specific**: Clear what each package does
- **Industry standard**: Uses recognized terms (telemetry, codec, bridge)
- **No redundancy**: Don't repeat "nexus" in sub-packages

---

### 6.4 IMPROVED Module Names

```
OLD Module Name         NEW Module Name      Why Better?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
nexus-core          →   router              # Main thing it does
nexus-protocol      →   protocol            # Already under nexus/
nexus-common        →   shared              # Less vague
nexus-adapters      →   bridge              # Better metaphor
nexus-benchmarks    →   bench               # Shorter
nexus-examples      →   examples            # No prefix needed
```

**Directory Structure**:
```
OLD                         NEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
nexus/                      nexus/              # Root stays same
├── nexus-core/         →   ├── router/         # Clearer name
├── nexus-protocol/     →   ├── protocol/       # No prefix
├── nexus-common/       →   ├── shared/         # Less generic
├── nexus-adapters/     →   ├── bridge/         # Better metaphor
│   ├── java/               │   ├── java/
│   ├── python/             │   ├── python/
│   └── rust/               │   └── rust/
├── nexus-benchmarks/   →   ├── bench/          # Shorter
└── nexus-examples/     →   └── examples/       # No prefix
```

---

### 6.5 IMPROVED Class Naming

**Pattern**: `[Descriptor][Function][Type]`

**Examples**:
```
OLD (Verbose)                   NEW (Concise)              Rationale
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NexusServer                  →  Server                     # Already in io.nexus
NexusRouter                  →  Router                     # Context is clear
ConnectionManager            →  ConnectionPool             # What it actually is
MessageCodec                 →  Codec                      # Generic is fine here
DefaultMessageRouter         →  BasicRouter                # "Default" is vague
FlatBuffersSerializer        →  FlatBufferCodec            # Consistent naming
AckManager                   →  Acknowledger               # Active voice
RetryHandler                 →  Retrier                    # Shorter
MetricsCollector             →  Metrics                    # Job not role
TracingContext               →  Tracer                     # Shorter
StructuredLogger             →  Logger                     # Simpler
ServiceRegistry              →  Registry                   # Context clear
```

**Rationale**:
- **No prefix redundancy**: We're already in `io.nexus` package
- **Shorter names**: Easier to type and read
- **Active voice**: `-er` suffix for objects that perform actions
- **Consistent**: All follow same pattern

---

### 6.6 IMPROVED File Organization

**Configuration Files**:
```
OLD                         NEW                          Why?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
nexus.yaml              →   config.yaml                  # Shorter
nexus.properties        →   nexus.properties             # Keep (standard)
application.yml         →   application.yml              # Keep (Spring standard)
```

**Build Files**:
```
✅ build.gradle.kts         # Root build config
✅ settings.gradle.kts      # Multi-module setup
✅ gradle.properties        # Build properties
✅ gradle/libs.versions.toml # Version catalog
```

---

### 6.7 IMPROVED settings.gradle.kts

```kotlin
// settings.gradle.kts
rootProject.name = "nexus"

// Core modules
include("router")          // Main routing engine
include("protocol")        // Wire protocol & serialization
include("shared")          // Shared utilities

// Client bridges
include("bridge:java")
include("bridge:python") 
include("bridge:rust")

// Tooling
include("cli")             // Command-line tool
include("dashboard")       // Web UI

// Development
include("bench")           // Benchmarks
include("examples")        // Example apps
```

**Benefits**:
- Clean module names (no `nexus-` prefix)
- Logical grouping with comments
- Easy to scan and understand

---

### 6.8 NEW CLI Tool Structure

```
cli/
└── src/main/java/io/nexus/cli/
    ├── Main.java                    # Entry point
    ├── Cli.java                     # CLI framework setup
    ├── commands/
    │   ├── Command.java             # Base interface
    │   ├── Start.java               # nexus start
    │   ├── Test.java                # nexus test <lang1> <lang2>
    │   ├── Trace.java               # nexus trace <message-id>
    │   ├── Generate.java            # nexus generate adapter --lang=X
    │   ├── Benchmark.java           # nexus benchmark
    │   └── Health.java              # nexus health
    ├── output/
    │   ├── Formatter.java           # Output formatting
    │   └── Colors.java              # ANSI colors
    └── config/
        └── CliConfig.java           # CLI configuration
```

**CLI Usage**:
```bash
$ nexus start                         # Launch router
$ nexus test python rust              # Test integration
$ nexus trace msg-12345              # Debug message flow
$ nexus generate adapter --lang=go   # Generate Go adapter
$ nexus benchmark                     # Run benchmarks
$ nexus health                        # Check system health
```

---

### 6.9 NEW Dashboard Structure

```
dashboard/
├── frontend/                         # React web app
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── src/
│   │   ├── App.tsx                  # Main app
│   │   ├── main.tsx                 # Entry point
│   │   ├── components/
│   │   │   ├── MessageFlow.tsx      # Live message visualization
│   │   │   ├── Topology.tsx         # Network topology graph
│   │   │   ├── Metrics.tsx          # Performance metrics
│   │   │   └── Logs.tsx             # Log streaming
│   │   ├── hooks/
│   │   │   ├── useWebSocket.ts      # WebSocket connection
│   │   │   └── useMetrics.ts        # Metrics data
│   │   └── api/
│   │       └── client.ts            # API client
│   └── public/
│       └── index.html
│
└── backend/                          # Dashboard API server
    └── src/main/java/io/nexus/dashboard/
        ├── Server.java              # HTTP server
        ├── api/
        │   ├── MetricsApi.java      # Metrics endpoint
        │   ├── TopologyApi.java     # Topology endpoint
        │   └── LogsApi.java         # Log streaming
        └── websocket/
            └── MessageStream.java   # Live message updates
```

---

### 6.10 Comparison Summary

**Module Names**:
```
BEFORE                      AFTER                   Improvement
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
nexus-core                  router                  ✅ More descriptive
nexus-protocol              protocol                ✅ No redundant prefix
nexus-common                shared                  ✅ Less vague
nexus-adapters/java         bridge/java             ✅ Better metaphor
nexus-benchmarks            bench                   ✅ Shorter
nexus-examples              examples                ✅ Simpler
```

**Package Names**:
```
BEFORE                      AFTER                   Improvement
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
io.nexus.core               io.nexus                ✅ No redundancy
io.nexus.network            io.nexus.connection     ✅ More specific
io.nexus.protocol           io.nexus.codec          ✅ Clearer purpose
io.nexus.reliability        io.nexus.fault          ✅ Industry standard term
io.nexus.observability      io.nexus.telemetry      ✅ Shorter, standard
io.nexus.common             io.nexus.shared         ✅ Less generic
```

**Class Names**:
```
BEFORE                      AFTER                   Improvement
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NexusServer                 Server                  ✅ No prefix needed
NexusRouter                 Router                  ✅ Context is clear
DefaultMessageRouter        BasicRouter             ✅ More specific
MessageCodec                Codec                   ✅ Simpler
MetricsCollector            Metrics                 ✅ Noun not role
```

---

### 6.11 Why These Changes Matter

**Developer Experience**:
```java
// BEFORE (Verbose)
import io.nexus.core.NexusRouter;
import io.nexus.network.ConnectionManager;
import io.nexus.protocol.MessageCodec;

NexusRouter router = new DefaultNexusRouter();

// AFTER (Clean)
import io.nexus.Router;
import io.nexus.connection.Pool;
import io.nexus.codec.Codec;

Router router = new BasicRouter();
```

**File Paths**:
```
BEFORE: nexus/nexus-core/src/main/java/io/nexus/core/NexusRouter.java
AFTER:  nexus/router/src/main/java/io/nexus/Router.java

Saved: 23 characters (28% shorter)
```

**Import Statements**:
```
BEFORE: import io.nexus.core.NexusRouter;              (34 chars)
AFTER:  import io.nexus.Router;                        (23 chars)

Saved: 11 characters (32% shorter)
```

---

### 6.12 Migration Plan

**Phase 1: Rename Modules** (Week 1)
- [ ] `nexus-core` → `router`
- [ ] `nexus-protocol` → `protocol`
- [ ] `nexus-common` → `shared`
- [ ] `nexus-adapters` → `bridge`
- [ ] `nexus-benchmarks` → `bench`

**Phase 2: Rename Packages** (Week 1-2)
- [ ] `io.nexus.core` → `io.nexus`
- [ ] `io.nexus.network` → `io.nexus.connection`
- [ ] `io.nexus.protocol` → `io.nexus.codec`
- [ ] `io.nexus.reliability` → `io.nexus.fault`
- [ ] `io.nexus.observability` → `io.nexus.telemetry`

**Phase 3: Rename Classes** (Week 2)
- [ ] Remove `Nexus` prefix from all classes
- [ ] Simplify `Default*` to `Basic*`
- [ ] Use active voice for handlers (`-er` suffix)

**Phase 4: Add New Modules** (Week 3+)
- [ ] Add `cli` module
- [ ] Add `dashboard` module

---

### 6.13 Updated Gradle Configuration

```kotlin
// build.gradle.kts (root)
plugins {
    java
    id("com.github.johnrengelman.shadow") version "8.1.1" apply false
}

allprojects {
    group = "io.nexus"
    version = "0.1.0-SNAPSHOT"
}

subprojects {
    apply(plugin = "java")
    
    java {
        toolchain {
            languageVersion = JavaLanguageVersion.of(21)
        }
    }
    
    // Shorter artifact names
    tasks.jar {
        archiveBaseName = project.name // Not "nexus-${project.name}"
    }
}
```

**Result**:
```
BEFORE: nexus-core-0.1.0.jar
AFTER:  router-0.1.0.jar        ✅ Cleaner artifact names
```

---

### 6.14 Final Structure at a Glance

```
nexus/
├── router/          # Main routing engine
├── protocol/        # Wire protocol
├── shared/          # Shared utilities
├── bridge/          # Language adapters
│   ├── java/
│   ├── python/
│   └── rust/
├── cli/             # Command-line tool
├── dashboard/       # Web UI
├── bench/           # Benchmarks
└── examples/        # Examples
```

**Benefits**:
✅ No repetitive naming  
✅ Shorter, clearer names  
✅ Industry-standard terminology  
✅ Easier to navigate  
✅ Scales better as project grows  

---

**Document Updated**: 2025-11-04  
**Status**: Improved structure ready for implementation


---

## Documentation Structure Reorganization

### Current Problems

**Repetitive Naming**:
```
❌ Project Notes/COBALT/Nexus - Design Discussion.md
❌ Project Notes/COBALT/Nexus - Project Structure & Tooling.md
❌ Project Notes/COBALT/Nexus - Technical Specification.md
❌ Project Notes/COBALT/COBALT.md
❌ Project Notes/COBALT/Project COBALT.md
```

**Issues**:
- "Project Notes" is vague
- "Nexus -" prefix on every file
- Duplicate COBALT files
- Nexus is under COBALT but it's now its own project

---

### Proposed Reorganization

```
Projects/                                    # Was: Project Notes/
├── COBALT/
│   ├── README.md                           # Merge: COBALT.md + Project COBALT.md
│   └── Architecture.md                     # Keep as is
│
└── Nexus/                                   # Move out from under COBALT
    ├── README.md                            # Quick overview
    ├── Design-Discussion.md                 # Was: Nexus - Design Discussion.md
    ├── Technical-Spec.md                    # Was: Nexus - Technical Specification.md
    ├── Project-Structure.md                 # Was: Nexus - Project Structure & Tooling.md
    └── Enhancements-Roadmap.md              # Session 2 content (optional separate file)
```

---

### Benefits

**Shorter Paths**:
```
BEFORE: Project Notes/COBALT/Nexus - Design Discussion.md
AFTER:  Projects/Nexus/Design-Discussion.md
```

**Clearer Organization**:
- COBALT and Nexus are siblings (both are projects)
- No "Project Notes" prefix
- No "Nexus -" prefix on files
- Consistent hyphenated multi-word filenames

**Better Scalability**:
```
Projects/
├── COBALT/
├── Nexus/
├── YourNextProject/         # Easy to add new projects
└── AnotherProject/
```

---

### Migration Steps

1. **Create new structure**:
   - Create `Projects/` folder
   - Create `Projects/COBALT/` subfolder
   - Create `Projects/Nexus/` subfolder

2. **Move and rename COBALT files**:
   - Merge `COBALT.md` + `Project COBALT.md` → `Projects/COBALT/README.md`
   - Move `Architecture.md` → `Projects/COBALT/Architecture.md`

3. **Move and rename Nexus files**:
   - Create new `Projects/Nexus/README.md` (overview)
   - Move `Nexus - Design Discussion.md` → `Projects/Nexus/Design-Discussion.md`
   - Move `Nexus - Technical Specification.md` → `Projects/Nexus/Technical-Spec.md`
   - Move `Nexus - Project Structure & Tooling.md` → `Projects/Nexus/Project-Structure.md`

4. **Update internal links**:
   - Update any [[wikilinks]] or markdown links between files

5. **Delete old directory**:
   - Remove `Project Notes/COBALT/` once files are migrated

---

### Optional: Separate Enhancements

If Session 2 content (Enhancements & Features Roadmap) gets too large:

```
Projects/Nexus/
├── README.md
├── Design-Discussion.md        # Core design decisions
├── Technical-Spec.md           # Technical details
├── Project-Structure.md        # Code structure & tooling
└── Enhancements-Roadmap.md     # Future features (NEW separate file)
```

---

**Status**: Ready to reorganize  
**Recommendation**: Do this reorganization before starting implementation
