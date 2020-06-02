# Icon

图标的 svg 源文件拷贝自 [Font Awesome Icon](https://fontawesome.com/icons?m=free)

These icons svg source copy from [Font Awesome Icon](https://fontawesome.com/icons?m=free)

## ⚙ size

- `null`
- `"large"`
- `"small"`

```tsx
import React from 'react';
import { Icon } from '@xinleibird/bird-ui';

export default () => (
  <>
    <Icon.Setting />
    <br />
    <br />
    <Icon.Setting size="large" />
    <br />
    <br />
    <Icon.Setting size="small" />
  </>
);
```

`size` 提供 3 种 icon 的大小。

<hr />
<br />
<br />

## ⚙ animate

- `"spin"`
- `"beat"`

```tsx
import React from 'react';
import { Icon } from '@xinleibird/bird-ui';

export default () => (
  <>
    <Icon.Setting size="large" animate="spin" />
    <br />
    <br />
    <Icon.Setting size="large" animate="beat" />
  </>
);
```

`animate` 提供 2 种动画。

<hr />
<br />
<br />

## ⚙ color

- `[string]`

```tsx
import React from 'react';
import { Icon } from '@xinleibird/bird-ui';

export default () => (
  <>
    <Icon.Setting size="large" animate="spin" color="#222" />
    <Icon.Setting size="large" animate="spin" color="#555" />
    <Icon.Setting size="large" animate="spin" color="#777" />
    <Icon.Setting size="large" animate="spin" color="#999" />
    <Icon.Setting size="large" animate="spin" color="#aaa" />
    <Icon.Setting size="large" animate="spin" color="#ccc" />
  </>
);
```

`color` 设置 svg fill attribute 式样的颜色。

<hr />
<br />
<br />

## 📦 Icon's attributes

- `Icon.AngleDown`
- `Icon.AngleRight`
- `Icon.CircleNotch`
- `Icon.Close`
- `Icon.Error`
- `Icon.Info`
- `Icon.Setting`
- `Icon.Slider`
- `Icon.Success`
- `Icon.Table`
- `Icon.Warning`
- `Icon.Search`

```tsx
import React from 'react';
import { Icon } from '@xinleibird/bird-ui';

export default () => (
  <>
    <Icon.AngleDown />
    <Icon.AngleRight />
    <Icon.CircleNotch />
    <Icon.Close />
    <Icon.Error />
    <Icon.Info />
    <Icon.Setting />
    <Icon.Slider />
    <Icon.Success />
    <Icon.Table />
    <Icon.Warning />
    <Icon.Search />
  </>
);
```
