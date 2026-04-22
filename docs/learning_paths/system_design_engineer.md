# System Design Engineer Roadmap

## Overview

System design interviews and senior IC work both reward the same skill: mapping requirements to components, trade-offs, and failure modes. This path builds from first principles to distributed patterns.

## Why This Exists

Without a sequence, it is easy to memorize diagrams without understanding *why* load balancers, caches, queues, or shards appear. The roadmap ties each idea to problems it solves.

## How It Works

1. **Clarify requirements** — Functional needs, scale, latency, and consistency expectations.  
2. **High-level architecture** — Clients, APIs, data stores, and async processing.  
3. **Deep dives** — Scaling reads and writes, messaging, and operational concerns.

## Suggested sequence

| Phase | Focus | Start here |
| ----- | ----- | ---------- |
| 1 | Foundations | [Fundamentals](../system_design/fundamentals.md), [Scalability](../system_design/scalability.md) |
| 2 | Traffic & speed | [Load balancers](../system_design/load_balancers.md), [Caching](../system_design/caching.md) |
| 3 | Data at scale | [Database scaling](../system_design/database_scaling.md) |
| 4 | Async & distribution | [Message queues](../system_design/message_queues.md), [Distributed systems](../system_design/distributed_systems.md) |
| Bridge | Networking context | [Load balancing (networking)](../networking/load_balancing.md), [CDN](../networking/cdn.md) |

<div class="topic-box">
<strong>Interview pattern</strong>
For every box you draw, be ready to name a failure mode (e.g., cache stampede, split brain, hot partitions) and a mitigation.
</div>

## Resources

- [YouTube](../resources/youtube.md) — walkthrough-style system design channels  
- [Blogs](../resources/blogs.md) — engineering posts from large-scale systems  
