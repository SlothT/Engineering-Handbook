# Embeddings

## Overview

Embeddings map text (or images) into dense vectors so semantic similarity approximates distance in vector space. They power search, clustering, classification, and retrieval for RAG.

## Why This Exists

Keyword search misses paraphrases; embeddings capture meaning well enough for nearest-neighbor retrieval at scale.

## How It Works

Training approaches include **contrastive learning** and **dual encoders**. Operational concerns: **normalization**, **dimensionality**, **domain mismatch**, **staleness** as models update, and **batching** for throughput.

## Architecture

![architecture](../diagrams/example.png)

```mermaid
flowchart LR
  Text[Text] --> Enc[Encoder]
  Enc --> Vec[Vector]
  Vec --> ANN[Approximate NN index]
```

## Key Concepts

<div class="topic-box">
<strong>Metric choice</strong>
Cosine similarity on L2-normalized vectors is common; verify metric matches your index library defaults.
</div>

## Code Examples

=== "Python — cosine similarity"

    ```python
    import math

    def cosine(a: list[float], b: list[float]) -> float:
        dot = sum(x * y for x, y in zip(a, b))
        na = math.sqrt(sum(x * x for x in a))
        nb = math.sqrt(sum(y * y for y in b))
        return dot / (na * nb) if na and nb else 0.0
    ```

## Interview Questions

??? question "Why re-embed documents when upgrading models?"

    Vector spaces are not comparable across unrelated models—plan migrations and dual-write/dual-query strategies.

??? question "What is Matryoshka embedding?"

    Training embeddings where prefixes of the vector remain informative—enables flexible storage tiers.

## Practice Problems

- Evaluate embedding quality with a small labeled relevance set  
- Compare bi-encoder retrieval vs cross-encoder reranking for rerank latency  

## Resources

- [Sentence Transformers](https://www.sbert.net/)  
- [OpenAI embeddings guide](https://platform.openai.com/docs/guides/embeddings)  
