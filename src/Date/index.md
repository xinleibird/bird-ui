# Date

> 一个功能相对完善的 Date | Calendar 组件，附带 Date Picker 功能，可 Input 输入，实时数据验证。

## ⚙ name | id

- `[string]`

`name | id` form input 元素的 name 和 id。

<hr />
<br />
<br />

## ⚙ size

- `[number]`

```tsx
import React from 'react';
import { Date } from '@xinleibird/bird-ui';

export default () => {
  return (
    <>
      <Date />
      <span style={{ padding: '0 5px' }} />
      <Date size={28} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
```

`size` 由 Input 输入框决定的组件宽度，默认 20 个字符。

<hr />
<br />
<br />
