<!--
  Usage:

```md
---
layout: mermaid-left
---

# Mermaid

```mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```

::right::

- This is block diagrams
```
-->

<template>
  <div class="slidev-layout mermaid-left w-full h-full grid grid-cols-2">
    <div class="col-left">
      <slot />
    </div>
    <div class="col-right">
      <slot name="right"/>
    </div>
  </div>
</template>
