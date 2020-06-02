# Button.Link

> 除了以下自定义属性之外，默认继承 HTML a 元素的一切属性。

## ⚙ size

- `null` default
- `"large"`
- `"small"`

```tsx
import React from 'react';
import { Button } from '@xinleibird/bird-ui';

export default () => (
  <>
    <Button.Link href="https://www.google.com" target="_blank">
      Link Default
    </Button.Link>
    <Button.Link size="large" href="https://www.google.com" target="_blank">
      Link Large
    </Button.Link>
    <Button.Link size="small" href="https://www.google.com" target="_blank">
      Link Small
    </Button.Link>
  </>
);
```

`size` 提供 3 种尺寸的外观。

<hr />
<br />
<br />

## ⚙ disabled

- `[boolean]`

```tsx
import React from 'react';
import { Button } from '@xinleibird/bird-ui';

export default () => (
  <>
    <Button.Link disabled href="https://www.google.com" target="_blank">
      Link Default
    </Button.Link>
    <Button.Link disabled size="large" href="https://www.google.com" target="_blank">
      Link Large
    </Button.Link>
    <Button.Link disabled size="small" href="https://www.google.com" target="_blank">
      Link Large
    </Button.Link>
  </>
);
```

`disabled` Link 基于 a 元素没有 [:disabled] 状态，仅提供类似的外观与交互效果。
