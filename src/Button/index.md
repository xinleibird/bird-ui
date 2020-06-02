# Button

> 除了以下自定义属性之外，默认继承 HTML button 元素的一切属性。

## ⚙ btnType

- `null`
- `"primary"`
- `"secondary"`
- `"danger"`

```tsx
import React from 'react';
import { Button } from '@xinleibird/bird-ui';

export default () => (
  <>
    <Button>Default Button</Button>
    <Button btnType="primary">Primary Button</Button>
    <Button btnType="secondary">Primary Button</Button>
    <Button btnType="danger">Primary Button</Button>
  </>
);
```

`btnType` 默认样式表达一般 button 样式，primary 与 secondary 配对使用，danger 用来提示危险或者副作用操作。

<hr />
<br />
<br />

## ⚙ size

- `null`
- `"large"`
- `"small"`

```tsx
import React from 'react';
import { Button } from '@xinleibird/bird-ui';

export default () => (
  <>
    <Button btnType="primary">Primary Button</Button>
    <Button btnType="primary" size="large">
      Primary Button
    </Button>
    <Button btnType="primary" size="small">
      Primary Button
    </Button>
  </>
);
```

`size` 提供 3 种尺寸。

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
    <Button disabled>Default Button</Button>
    <Button disabled btnType="primary">
      Primary Button
    </Button>
    <Button disabled btnType="secondary">
      Primary Button
    </Button>
    <Button disabled btnType="danger">
      Primary Button
    </Button>
    <Button.Link disabled href="https://www.google.com" target="_blank">
      Link Button
    </Button.Link>
  </>
);
```

`disabled` 提供 button 元素的 `[:disabled]` 状态下的样式。

<hr />
<br />
<br />

## ⚙ loading

- `[boolean]`

```tsx
import React from 'react';
import { Button } from '@xinleibird/bird-ui';

export default () => (
  <>
    <Button loading>Default Button</Button>
    <Button loading btnType="primary">
      Primary Button
    </Button>
    <Button loading btnType="secondary">
      Primary Button
    </Button>
    <Button loading btnType="danger">
      Primary Button
    </Button>
  </>
);
```

`loading` 提供 loading 状态的动画效果，方便用户自己维护 loading state。

<hr />
<br />
<br />

## ⚙ onLoading

- `[(callback: setLoadingStateCallback) => void]`

```tsx
import React, { useState } from 'react';
import { Button } from '@xinleibird/bird-ui';

export default () => {
  const [imgUrl, setUrl] = useState('');
  return (
    <>
      <Button
        btnType="primary"
        onLoading={async setLoading => {
          setLoading(true);
          try {
            const dogRes = await fetch('https://dog.ceo/api/breeds/image/random');
            const json = await dogRes.json();
            setUrl(json.message);
          } catch (e) {
            console.error(e.message);
          }
          setLoading(false);
        }}
      >
        Default Button
      </Button>
      <br />
      {imgUrl && <img src={imgUrl} width="100%" />}
    </>
  );
};
```

`onLoading` 是一个 Promise 化的方法，参数是一个包裹为 Promise 实例的回调函数。该回调的参数 setLoadingStateCallback 可以实时的设置 loading 状态。

<hr />
<br />
<br />

## ⚙ onlyIcon

- `[boolean]`

```tsx
import React, { useState } from 'react';
import { Button, Icon } from '@xinleibird/bird-ui';

export default () => {
  return (
    <>
      <Button onlyIcon>
        <Icon.Slider />
      </Button>
      <Button onlyIcon btnType="primary">
        <Icon.Setting />
      </Button>
      <Button onlyIcon btnType="danger">
        <Icon.Error />
      </Button>
    </>
  );
};
```

```tsx
import React, { useState } from 'react';
import { Button, Icon } from '@xinleibird/bird-ui';

export default () => {
  return (
    <>
      <Button onlyIcon size="large">
        <Icon.Slider size="large" />
      </Button>
      <Button onlyIcon size="large" btnType="primary">
        <Icon.Setting size="large" />
      </Button>
      <Button onlyIcon size="large" btnType="danger">
        <Icon.Error size="large" />
      </Button>
    </>
  );
};
```

```tsx
import React, { useState } from 'react';
import { Button, Icon } from '@xinleibird/bird-ui';

export default () => {
  return (
    <>
      <Button onlyIcon size="small">
        <Icon.Slider size="small" />
      </Button>
      <Button onlyIcon size="small" btnType="primary">
        <Icon.Setting size="small" />
      </Button>
      <Button onlyIcon size="small" btnType="danger">
        <Icon.Error size="small" />
      </Button>
    </>
  );
};
```

`onlyIcon` 使用纯图标按钮时的样式。
