# Input

> 除了以下自定义属性之外，默认继承 HTML input 元素的一切属性。

## ⚙ inputSize

- `null` default
- `"large"`
- `"small"`

```tsx
import React from 'react';
import { Input, Icon } from '@xinleibird/bird-ui';

export default () => {
  return (
    <>
      <Input icon={<Icon.Search />} />
      <br />
      <br />
      <Input inputSize="large" icon={<Icon.Search />} />
      <br />
      <br />
      <Input inputSize="small" icon={<Icon.Search />} />
    </>
  );
};
```

`inputSize` 输入框的大小。

<hr />
<br />
<br />

## ⚙ icon

- `[ReactElement]`

```tsx
import React from 'react';
import { Input, Icon } from '@xinleibird/bird-ui';

export default () => {
  return (
    <>
      <Input icon={<Icon.Search />} />
      <br />
      <br />
      <Input icon={<Icon.Slider />} />
      <br />
      <br />
      <Input icon={<Icon.Table />} />
    </>
  );
};
```

`icon` 输入框的指示图标。

<hr />
<br />
<br />

## ⚙ disabled

- `[boolean]`

```tsx
import React from 'react';
import { Input, Icon } from '@xinleibird/bird-ui';

export default () => {
  return <Input icon={<Icon.Search />} disabled />;
};
```

`disabled` 输入框的 disabled 样式。

<hr />
<br />
<br />

## ⚙ prepand & append

- `[string | ReactElement]`

```tsx
import React from 'react';
import { Input, Icon } from '@xinleibird/bird-ui';

export default () => {
  return (
    <>
      <Input icon={<Icon.Search />} prepand="prepand" />
      <br />
      <br />
      <Input icon={<Icon.Search />} append="append" />
      <br />
      <br />
      <Input icon={<Icon.Search />} prepand="pre" append="end" size={16} />
    </>
  );
};
```

`prepand & append` 输入框的前按钮和后按钮。
