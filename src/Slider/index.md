# Slider

## ⚙ defaultValue

- `[number]`

```jsx
import React from 'react';
import { Slider } from '@xinleibird/bird-ui';

export default () => {
  return (
    <>
      <Slider defaultValue={20} />
    </>
  );
};
```

`defaultValue` 默认初始值

<hr />
<br />
<br />

## ⚙ range

- `[number]`

```jsx
import React from 'react';
import { Slider } from '@xinleibird/bird-ui';

export default () => {
  return (
    <>
      <Slider range={20} />
    </>
  );
};
```

`range` 取值范围

<hr />
<br />
<br />

## ⚙ width

- `[number]`

```jsx
import React from 'react';
import { Slider } from '@xinleibird/bird-ui';

export default () => {
  return (
    <>
      <Slider width={300} />
    </>
  );
};
```

`width` Slider 组件宽度，以像素计。

<hr />
<br />
<br />

## ⚙ name

- `[string]`

`name` 内部 input 的 name 属性，实际上是 form input 元素。其中有 name， value。
