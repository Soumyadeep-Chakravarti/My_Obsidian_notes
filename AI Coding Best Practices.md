# Everything You Need to Know About Coding with AI

**Source:** [YouTube - Everything You Need to Know About Coding with AI // NOT vibe coding](https://www.youtube.com/watch?v=5fhcklZe-qE)
**Date:** 2024-11-04
**Tags:** #ai #coding #development #best-practices

---

## Core Philosophy
The key distinction: **Strategic AI guidance vs. Vibe Coding**
- Software developers should strategically guide AI
- Don't just let AI "take the wheel"
- Think of AI as collaboration, not delegation

---

## 1. Foundation Setup (Do Once)

### Codebase Indexing
- Have AI index your full codebase for context
- In Warp: "codebase context"
- Prevents repeating yourself constantly

### Rules Configuration
Two types of rules needed:

#### Global Rules
- Applies to ALL projects
- Contains:
  - Coding standards
  - Preferred libraries
  - Common bash commands
  - Testing philosophy
- In Warp: Goes in "Warp Drive"

#### Project-Specific Rules
- Stored in repo files: `.warp.md`, `.claude.md`, `.cursorrules`
- Contains:
  - Tech stack and versions
  - Database schema
  - API patterns
  - Branch naming conventions
- Can have multiple rules files for different submodules

**Benefit:** Every AI interaction starts with guardrails without repeating "use TypeScript and Postgres" constantly

---

## 2. Prompting Best Practices

### The Golden Rule: BE SPECIFIC

#### Bad Prompt (Amateur):
```
"Make the edit button toggle"
```
- Too vague
- 50 different interpretations
- Leads to hallucinations

#### Good Prompt (Professional):
```
Add a boolean field 'editable' to the users table, 
expose it through API users/:id endpoint, 
and conditionally render the edit button component 
based on that field.
```
- Concrete
- Testable
- Removes margin for error
- Uses your software engineering knowledge

### Prompt Template Structure
- **What** needs to be done
- **Where** it should be implemented
- **How** it should work
- **Context** about relevant files/code
- **Constraints** on what NOT to change

---

## 3. Adding Context

### Why Add Context?
Even though AI knows your codebase:
- Makes tasks more specific
- **Saves money and tokens**
- AI doesn't have to search entire codebase

### Methods to Add Context
1. Reference specific files to modify
2. Reference files needed to understand implementation
3. Highlight code and add to prompt
4. Upload images for UI bugs or mockups
5. Drop in documentation URLs

**Note:** Uploading full pages increases usage/costs as entire page gets sent to model

---

## 4. Model Selection Strategy

### Cost Management
- Don't autopick models
- Opus 4 costs significantly more than others
- Be intentional about model selection

### Don't Switch Mid-Conversation
**Exception:** Switching makes sense if:
- Planning with GPT-5 (better at planning)
- Then coding with Opus 4 or Sonnet 4

**Problem with random switching:**
- Cache doesn't transfer between models
- More requests consumed
- Higher costs

### Keep Conversations Short
- Focus on individual tasks
- Conversation history prepends as context
- Longer conversations = higher cost per prompt

---

## 5. Proper Software Development Workflow

### Treat AI Tasks Like Sprint Tasks
- Small
- Iterative
- Testable
- Professional approach, not "vibe coding"

### Use Your Engineering Knowledge
- Understand architecture
- Understand patterns and logic
- Know the codebase
- Apply that knowledge when working with AI

---

## 6. The Plan-First Approach

### Step 1: Planning Phase
Prompt example:
```
"Create a tool favorites/bookmarks feature for the developer 
tool directory.

Create a detailed implementation plan that breaks down exactly 
what needs to be built, in what order, and how pieces connect.

Consider:
- Data flow
- Key functions/classes
- Potential challenges
- Integration with other components

Focus on practical steps. DON'T write code yet."
```

**Best model for planning:** GPT-5 high reasoning

### Step 2: Review the Plan
- Check if plan matches your vision
- Note any needed restrictions

### Step 3: Implementation Prompt
```
"Implement exactly this plan with the following:

Restrictions:
- Only edit these specific files: [list]
- No new dependencies
- Preserve existing filters

Deliverables:
- Working code
- How to test

If anything is ambiguous, STOP and output two options 
with trade-offs instead of guessing."
```

**Best model for implementation:** Claude 4.5 Sonnet (or similar)

---

## 7. Agent Profiles (Automation)

Instead of manually changing models each time:
- Create agent profiles
- Set base model (e.g., Claude 4.5 Sonnet)
- Set planning model (e.g., GPT-5 high reasoning)
- Specify to "create plan" automatically

---

## 8. Code Review Process

### Review Like Pair Programming
**Don't blindly trust AI** (like juniors shouldn't blindly trust seniors)

#### Questions to Ask:
- Why did you choose this pattern?
- What are the error cases?
- How does this impact performance?
- Why this implementation over alternatives?

### Active Participation
- Jump into the code
- Review thoroughly
- Edit the code yourself when needed
- Have AI refactor around your changes if desired

**Remember:** This is **collaboration**, not delegation

**Key difference from human pair programming:**
> "The AI won't judge your variable names and eat your lunch"

---

## 9. Advanced: Multiple Agents

### Three Approaches

#### Approach 1: Independent Tasks
- Three agents on separate tasks
- Use multiple git worktrees/checkouts
- Run AI sessions in parallel
- Approve/deny operations as they go
- Like "Magnus Carlsen playing chess against 20 people"

#### Approach 2: Same Task, Different Roles
- Agent 1: Writes code
- Agent 2: Reviews code and provides feedback
- Agent 3: Writes tests
- Optional Agent 4: Refactors based on feedback/tests

**Why this works:**
- Different context helps (fresh perspectives)
- Not just affirming work already done
- Multiple "sets of eyes"

#### Approach 3: Practical Balance
Author's preference: 2-3 agents max
- One coding
- One exploring codebase
- One refactoring or testing
- More manageable than full feature development

**Critical:** YOU (human) must also review code, tests, and dive into implementation

---

## 10. Additional AI Capabilities

### Git Operations in Natural Language
Example: "Create a release branch and cherry-pick the auth fixes"
- Handles git operations without memorizing commands

### Exploring Unfamiliar Codebases
Great for:
- Contributing to open source
- Joining new teams
- Onboarding process

**Think of it as:** Conversing with the codebase

#### What to Ask:
- Summarize component responsibilities
- Trace data flow
- Explain architectural decisions
- Create flowcharts showing connections
- Anything you're curious about

---

## 11. Permission & Control

### Permission Checks
- Some tasks need approval
- Others can run autonomously
- Don't want to approve EVERY single task
- Set appropriately based on risk

### Know When to Pull the Plug

**If losing control:**
1. Stop immediately
2. Revert completely OR
3. Revert to previous working checkpoint
4. Restart with clearer direction

**Don't let chaos accumulate**

---

## 12. Key Mindset Principles

### AI is NOT Here to Replace You
Current state: AI amplifies your engineering judgment

### What AI Actually Does
- Helps with pain points
- Codes faster while maintaining quality
- Explores new codebases without existential dread
- Writes tests without questioning life choices

### The Intern Analogy
> "Treat AI like a very capable intern with brilliant potential"

You wouldn't just say:
- ❌ "Hey, go make this button toggleable"

You would:
- ✅ Be specific
- ✅ Provide guidance
- ✅ Give clear requirements

### You Still Need to Know:
- What good code looks like
- The "why" behind decisions
- Architecture and patterns
- Your codebase

---

## 13. Summary: AI Coding vs Vibe Coding

### AI Coding (Professional):
- Strategic guidance
- Specific prompts
- Active code review
- Collaboration mindset
- Engineering knowledge applied

### Vibe Coding (Amateur):
- Letting AI take the wheel
- Vague prompts
- Blind trust
- Delegation mindset
- "Vibing your way to production disaster"

---

## Action Items
- [ ] Set up `.cursorrules` file in projects
- [ ] Define global coding preferences
- [ ] Create prompt templates
- [ ] Practice specific prompting
- [ ] Review AI code critically
- [ ] Test AI-generated code thoroughly

---

## Tools Mentioned
- **Warp Code** (video sponsor)
- Claude Code / Cursor
- GPT-5 (for planning)
- Claude 4.5 Sonnet / Opus 4 (for implementation)

---

## Notes
*This is about strategic collaboration with AI, not replacement. Your engineering skills and judgment remain essential. AI is the tool; you're the engineer.*
