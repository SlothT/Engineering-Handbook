# AI Engineer Roadmap

## Overview

Building with LLMs blends classical backend skills with retrieval, evaluation, and safety considerations. This path moves from model basics to production RAG and serving patterns.

## Why This Exists

The field changes quickly, but durable concepts—tokenization, embeddings, vector search, prompt contracts, and observability—stay relevant across model generations.

## How It Works

1. **Model literacy** — What LLMs optimize and where they fail.  
2. **Representation** — Embeddings and vector stores as searchable memory.  
3. **RAG & prompts** — Grounded answers and reliable interfaces.  
4. **Production** — Latency, cost, guardrails, and operations.

## Suggested sequence

| Phase | Focus | Start here |
| ----- | ----- | ---------- |
| 1 | Foundations | [Introduction](../ai_systems/introduction.md), [LLM basics](../ai_systems/llm_basics.md) |
| 2 | Retrieval | [Embeddings](../ai_systems/embeddings.md), [Vector databases](../ai_systems/vector_databases.md) |
| 3 | Applications | [RAG architecture](../ai_systems/rag_architecture.md), [Prompt engineering](../ai_systems/prompt_engineering.md) |
| 4 | Shipping | [Production LLM systems](../ai_systems/production_llm_systems.md) |
| Bridge | Platform skills | [Backend caching](../backend_engineering/caching.md), [API scalability](../backend_engineering/api_scalability.md) |

<div class="warning-box">
<strong>Reality check</strong>
Prototype with the simplest stack that proves value; add vector databases and complex RAG only when baseline prompts and evaluation justify them.
</div>

## Resources

- [Courses](../resources/courses.md) — ML and LLM application courses  
- [Blogs](../resources/blogs.md) — labs and product engineering writeups  
