# Dropdown

要解决的问题是，例如 Menu 那样的组件，当点击展开的子菜单之外的部分时，收缩子菜单。

> 在外层包裹了一个 div, 除了以下自定义属性之外，默认继承 HTML div 元素的一切属性。

## ⚙ onClickOutside

- `[CallbackFunction(e: MouseEvent)]`

```tsx
import React, { useState } from 'react';
import { Dropdown } from '@xinleibird/bird-ui';

export default () => {
  const [showBlock, setShow] = useState(true);

  return (
    <Dropdown
      onClickOutside={() => {
        setShow(false);
      }}
    >
      {showBlock && <div style={{ width: '128px', height: '128px', background: 'red' }}></div>}
    </Dropdown>
  );
};
```

<hr />
<br />
<br />
<br />
<br />
<br />

> 简单看一下实现：didMount 阶段在 document 上注册一个监听函数，监听 click 事件。只要事件的目标不是 Dropdown 包裹下的，就触发 onClickOutside。

```ts
  ...
  const ref = useRef(null as any);

  useEffect(() => {
    const documentClickListener = (e: MouseEvent) => {
      const div = ref.current as HTMLDivElement;
      const tar = e.target as HTMLElement;

      if (div.contains(tar)) {
        return;
      }
      onClickOutside(e);
    };
    window.addEventListener('click', documentClickListener);

    return () => {
      window.removeEventListener('click', documentClickListener);
    };
  }, [onClickOutside]);

  return (
    <div
      className={`${prefix}-dropdown`}
      ref={(r) => {
        ref.current = r;
      }}
    >
      {children}
    </div>
  );
```
