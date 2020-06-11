# Select

## 📦 Select

### ⚙ size

- `[number]`

```tsx
import React from 'react';
import { Select } from '@xinleibird/bird-ui';

export default () => {
  return (
    <>
      <Select size={8}>
        <Select.Option>Option 1</Select.Option>
        <Select.Option>Option 2</Select.Option>
        <Select.Option>Option 3</Select.Option>
        <Select.Option>Option 4</Select.Option>
        <Select.Option>Option 5</Select.Option>
      </Select>
      <br />
      <br />
      <Select size={16}>
        <Select.Option>Option 1</Select.Option>
        <Select.Option>Option 2</Select.Option>
        <Select.Option>Option 3</Select.Option>
        <Select.Option>Option 4</Select.Option>
        <Select.Option>Option 5</Select.Option>
      </Select>
    </>
  );
};
```

`size` 由 Input 决定的字符宽度

<hr />
<br />
<br />

### ⚙ icon

- `[<Icon>]`

```tsx
import React from 'react';
import { Select, Icon } from '@xinleibird/bird-ui';

export default () => {
  return (
    <Select size={8} icon={<Icon.Success />}>
      <Select.Option>Option 1</Select.Option>
      <Select.Option>Option 2</Select.Option>
      <Select.Option>Option 3</Select.Option>
      <Select.Option>Option 4</Select.Option>
      <Select.Option>Option 5</Select.Option>
    </Select>
  );
};
```

`icon` Input 框中的图标

<hr />
<br />
<br />

## 📦 Select.Option

### ⚙ selected

- `[boolean]`

```tsx
import React from 'react';
import { Select, Icon } from '@xinleibird/bird-ui';

export default () => {
  return (
    <Select size={8} icon={<Icon.Success />}>
      <Select.Option>Option 1</Select.Option>
      <Select.Option>Option 2</Select.Option>
      <Select.Option>Option 3</Select.Option>
      <Select.Option selected>Option 4</Select.Option>
      <Select.Option selected>Option 5</Select.Option>
    </Select>
  );
};
```

`selected` 默认选中项，同时有多个存在时，仅第一个生效。
