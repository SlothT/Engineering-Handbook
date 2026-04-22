# ESOPs

## Overview

Employee Stock Option Plans (ESOPs) grant options to buy shares at a **strike price**, aiming to align employees with company growth. Value depends on exit outcomes, dilution, and exercise costs.

## Why This Exists

Startups compete for talent with equity; understanding vesting and taxation prevents painful surprises.

## How It Works

Terms: **grant size**, **strike**, **vesting schedule**, **cliff**, **post-termination exercise window**, **409A valuations**, **preferred stock** preferences affecting common stock value.

## Architecture

![architecture](../diagrams/example.png)

```mermaid
flowchart LR
  Grant[Option grant] --> Vest[Vesting]
  Vest --> Exercise[Exercise]
  Exercise --> Liquidity[Liquidity event]
```

## Key Concepts

<div class="warning-box">
<strong>Illiquidity risk</strong>
Options may expire worthless; early exercise and tax implications vary—get professional advice for large amounts.
</div>

## Code Examples

=== "Text — due diligence questions"

    ```text
    - Fully diluted share count and your percent ownership
    - Latest 409A and preferred round price
    - Exercise window after leaving
    - Company repurchase rights and transfer restrictions
    ```

## Interview Questions

??? question "What is dilution?"

    New shares issued reduce relative ownership unless you participate pro rata—common in fundraising.

??? question "Why do employees early exercise?"

    Potentially favorable tax treatment in some jurisdictions—depends on rules and company policy.

## Practice Problems

- Model exit scenarios with different multiples and dilution assumptions  
- Compare ISO vs NSO at a high level for your jurisdiction  

## Resources

- [Carta equity education](https://carta.com/learn/)  
- [Holloway — equity compensation](https://www.holloway.com/g/equity-compensation)  
