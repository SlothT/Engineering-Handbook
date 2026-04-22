# CDN

## Overview

Content Delivery Networks cache static (and sometimes dynamic) assets at edge locations close to users, reducing latency and origin load.

## Why This Exists

Latency and bandwidth to a single origin do not scale globally. CDNs also absorb traffic spikes and provide DDoS mitigation at the edge.

## How It Works

Understand **caching headers**, **cache keys**, **purging/invalidation**, **stale-while-revalidate**, **TLS at edge**, and **dynamic acceleration** patterns. Pair with [HTTP caching](../networking/http_https.md).

## Architecture

![architecture](../diagrams/example.png)

```mermaid
flowchart LR
  User --> Edge[Edge POP]
  Edge --> Origin[Origin]
  Edge -. cache hit .-> User
```

## Key Concepts

<div class="topic-box">
<strong>Cache poisoning defense</strong>
Vary cache keys on unambiguous host + path + query + negotiated representations; normalize headers used in the key.
</div>

## Code Examples

=== "HTTP — cacheable response sketch"

    ```http
    HTTP/1.1 200 OK
    Content-Type: application/javascript
    Cache-Control: public, max-age=31536000, immutable
    ETag: "v3-abc123"
    ```

## Interview Questions

??? question "Why use signed URLs with CDNs?"

    To authorize time-limited access to private objects without exposing origin credentials to clients.

??? question "What is a cache stampede?"

    Many concurrent misses for a hot key hit the origin simultaneously—mitigate with request coalescing, early revalidation, or probabilistic TTL jitter.

## Practice Problems

- Decide what to cache at edge for a personalized dashboard vs marketing site  
- Plan a versioned asset URL scheme for painless invalidation  

## Resources

- [Cloudflare Learning Center — CDN](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/)  
- [Fastly — caching best practices](https://docs.fastly.com/en/guides/best-practices-for-using-vcl)  
