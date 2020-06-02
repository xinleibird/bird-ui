# Alert

## ⚙ type

- `"success"` default
- `"info"`
- `"warning"`
- `"error"`

```tsx
import React from 'react';
import { Alert } from '@xinleibird/bird-ui';

export default () => {
  return (
    <>
      <Alert message="Warnning, this is a Warning" />
      <Alert type="info" message="Warnning, this is a Warning" />
      <Alert type="waring" message="Warnning, this is a Warning" />
      <Alert type="error" message="Warnning, this is a Warning" />
    </>
  );
};
```

`type` 警告的类型。

<hr />
<br />
<br />

## ⚙ message

- `[string]`

```tsx
import React from 'react';
import { Alert } from '@xinleibird/bird-ui';

export default () => <Alert message="Warnning, this is a Warning" />;
```

`message` 警告的信息。

<hr />
<br />
<br />

## ⚙ description

- `[string]`

```tsx
import React from 'react';
import { Alert } from '@xinleibird/bird-ui';

export default () => (
  <Alert type="info" message="Warnning, this is a Warning" description="Warning Description" />
);
```

`description` 警告的详细内容。

<hr />
<br />
<br />

## ⚙ closeable

- `[boolean]`

```tsx
import React from 'react';
import { Alert } from '@xinleibird/bird-ui';

export default () => (
  <Alert
    type="error"
    message="Warnning, this is a Warning"
    description="Warning Description"
    closeable
  />
);
```

`closeable` 设置警告是否可关闭。

<hr />
<br />
<br />

## ⚙ onClose

- `[boolean]`

```tsx
import React from 'react';
import { Alert } from '@xinleibird/bird-ui';

export default () => (
  <Alert
    type="success"
    message="Warnning, this is a Warning"
    description="Warning Description"
    closeable
    onClose={() => {
      console.log('Alert will close!');
    }}
  />
);
```

`onClose` 关闭警告时的事件函数。
