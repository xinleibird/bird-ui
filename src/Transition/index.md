# Transition

对 [ReactTransitionGroup][1] 中的 CSSTransition 进行了简单包装，仅为了实现组件的简单效果。推荐在实际开发中直接使用 ReactTransitionGroup 或者其他的各种动画库。

Just a simple wrapper of `CSSTransition` in [ReactTransitionGroup][1], just inherited the simplest css transition effect for the components. Recommended to use ReactTransitionGroup or other various animation libraries directly in finally development.

### ⚙ in

- `[boolean]`

```tsx
import React, { useState } from 'react';
import { Button, Transition } from '@xinleibird/bird-ui';

export default () => {
  const [showBlock, setShow] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setShow(!showBlock);
        }}
      >
        Show Block
      </Button>
      <Transition in={showBlock}>
        <div style={{ background: '#b8b8b8', width: '128px', height: '128px' }}></div>
      </Transition>
    </>
  );
};
```

`in` 继承自 CSSTransiton 的属性，控制动画进场的开关。

<hr />
<br />
<br />

### ⚙ animationClassName

- `"zoom-in-top" | "fade-in"`

```tsx
import React, { useState } from 'react';
import { Button, Transition } from '@xinleibird/bird-ui';

export default () => {
  const [showBlock, setShow] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setShow(!showBlock);
        }}
      >
        zoom-in-top
      </Button>
      <Transition in={showBlock}>
        <div style={{ background: '#b8b8b8', width: '128px', height: '128px' }}></div>
      </Transition>
    </>
  );
};
```

```tsx
import React, { useState } from 'react';
import { Button, Transition } from '@xinleibird/bird-ui';

export default () => {
  const [showBlock, setShow] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setShow(!showBlock);
        }}
      >
        fade-in
      </Button>
      <Transition in={showBlock} animationClassName="fade-in">
        <div style={{ background: '#b8b8b8', width: '128px', height: '128px' }}></div>
      </Transition>
    </>
  );
};
```

`animationClassName` 提供两种默认的进场动画

[1]: http://reactcommunity.org/react-transition-group/
