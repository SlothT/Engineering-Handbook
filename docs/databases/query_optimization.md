# Query Optimization

## Overview

Query optimization bridges declarative SQL and efficient execution: statistics, cost models, join ordering, and index selection. Profiling slow queries is a core backend skill.

## Why This Exists

The same logical query can differ in runtime by orders of magnitude depending on plans and data distribution. Optimization prevents regressions as data grows.

## How It Works

Use **`EXPLAIN`** plans, understand **sequential scan**, **index scan**, **bitmap** scans, **join order**, and **sort/hash aggregate**. Maintain **statistics**, manage **vacuum/ANALYZE** (or equivalents), and watch for **N+1** ORM patterns.

## Architecture

![architecture](../diagrams/example.png)

```mermaid
flowchart LR
  SQL[Query] --> Parse[Parse]
  Parse --> Rewrite[Rewrite]
  Rewrite --> Plan[Planner]
  Plan --> Exec[Executor]
```

## Key Concepts

<div class="warning-box">
<strong>Correlation vs causation in plans</strong>
High cost in plans points to investigation; confirm with runtime, buffers, and actual row counts versus estimates.
</div>

## Code Examples

=== "SQL — hint via rewrite (PostgreSQL style)"

    ```sql
    -- Prefer enabling parallel query / adjusting work_mem in session for large sorts
    SET LOCAL work_mem = '256MB';
    SELECT customer_id, SUM(amount)
    FROM orders
    WHERE created_at > now() - interval '30 days'
    GROUP BY customer_id;
    ```

## Interview Questions

??? question "What makes a query planner choose a sequential scan?"

    Large fraction of rows selected, missing indexes, low selectivity, or small tables where setup cost dominates.

??? question "How do you diagnose an N+1 query problem?"

    Observe many similar queries per request in logs; batch with joins or `WHERE IN` loaders.

## Practice Problems

- Take a slow join and iterate: index → rewrite → denormalize (last resort)  
- Compare plans before/after adding a composite index  

## Resources

- [PostgreSQL EXPLAIN](https://www.postgresql.org/docs/current/sql-explain.html)  
- [Use The Index, Luke — SQL rewrites](https://use-the-index-luke.com/sql/where-clause)  
