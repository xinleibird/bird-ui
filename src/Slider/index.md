# Slider

## ⚙ name | id

- `[string]`

`name | id` form input 元素的 name 和 id。

<hr />
<br />
<br />

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
