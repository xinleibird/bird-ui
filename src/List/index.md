# List

## 📦 List

### ⚙ data

- `[key: string, node: ReactNode]`

```tsx
import React, { useState } from 'react';
import { List } from '@xinleibird/bird-ui';

const test = [
  {
    key: '1',
    node: (
      <>
        <span style={{ margin: '0 3rem 0 1rem' }}>
          <strong>title </strong>
        </span>
        <span>description</span>
      </>
    ),
  },
  {
    key: '2',
    node: (
      <>
        <span style={{ margin: '0 3rem 0 1rem' }}>
          <strong>title </strong>
        </span>
        <span>description</span>
      </>
    ),
  },
  {
    key: '3',
    node: (
      <>
        <span style={{ margin: '0 3rem 0 1rem' }}>
          <strong>title </strong>
        </span>
        <span>description</span>
      </>
    ),
  },
];

export default () => {
  return <List data={test} />;
};
```

`List` 提供一个简单的 unordered list 包装, `data` 数组是其中要填充的数据。

## 📦 List.Ul

`List.Ul` 提供一个简单的 ul 包装。

## 📦 List.Li

`List.Li` 提供一个简单的 li 包装。
