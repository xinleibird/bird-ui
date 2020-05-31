# Menu

## 📦 Menu

### ⚙ direction

- `"hrizontal"` default
- `"vertical"`

```tsx
import React from 'react';
import { Menu } from '@xinleibird/bird-ui';

export default () => (
  <>
    <Menu>
      <Menu.SubMenu title={<span>China</span>}>
        <Menu.MenuItem>Beijing</Menu.MenuItem>
        <Menu.MenuItem>Shanghai</Menu.MenuItem>
        <Menu.MenuItem>Guangzhou</Menu.MenuItem>
        <Menu.MenuItem>Shenzhen</Menu.MenuItem>
        <Menu.SubMenu title={<span>Guangxi</span>}>
          <Menu.MenuItem>Nanning</Menu.MenuItem>
          <Menu.MenuItem>Liuzhou</Menu.MenuItem>
          <Menu.MenuItem>Guilin</Menu.MenuItem>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.SubMenu title={<span>China</span>}>
        <Menu.MenuItem>Beijing</Menu.MenuItem>
        <Menu.MenuItem>Shanghai</Menu.MenuItem>
        <Menu.MenuItem>Guangzhou</Menu.MenuItem>
        <Menu.MenuItem>Shenzhen</Menu.MenuItem>
        <Menu.SubMenu title={<span>Guangxi</span>}>
          <Menu.MenuItem>Nanning</Menu.MenuItem>
          <Menu.MenuItem>Liuzhou</Menu.MenuItem>
          <Menu.MenuItem>Guilin</Menu.MenuItem>
        </Menu.SubMenu>
      </Menu.SubMenu>
    </Menu>
  </>
);
```

```tsx
import React from 'react';
import { Menu } from '@xinleibird/bird-ui';

export default () => (
  <div style={{ width: '20rem' }}>
    <Menu direction="vertical">
      <Menu.SubMenu title={<span>China</span>}>
        <Menu.MenuItem>Beijing</Menu.MenuItem>
        <Menu.MenuItem>Shanghai</Menu.MenuItem>
        <Menu.MenuItem>Guangzhou</Menu.MenuItem>
        <Menu.MenuItem>Shenzhen</Menu.MenuItem>
        <Menu.SubMenu title={<span>Guangxi</span>}>
          <Menu.MenuItem>Nanning</Menu.MenuItem>
          <Menu.MenuItem>Liuzhou</Menu.MenuItem>
          <Menu.MenuItem>Guilin</Menu.MenuItem>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.SubMenu title={<span>China</span>}>
        <Menu.MenuItem>Beijing</Menu.MenuItem>
        <Menu.MenuItem>Shanghai</Menu.MenuItem>
        <Menu.MenuItem>Guangzhou</Menu.MenuItem>
        <Menu.MenuItem>Shenzhen</Menu.MenuItem>
        <Menu.SubMenu title={<span>Guangxi</span>}>
          <Menu.MenuItem>Nanning</Menu.MenuItem>
          <Menu.MenuItem>Liuzhou</Menu.MenuItem>
          <Menu.MenuItem>Guilin</Menu.MenuItem>
        </Menu.SubMenu>
      </Menu.SubMenu>
    </Menu>
  </div>
);
```

### ⚙ sticky

- `[boolean]`

```tsx
import React from 'react';
import { Menu } from '@xinleibird/bird-ui';

export default () => (
  <>
    <Menu direction="horizontal" sticky>
      <Menu.SubMenu title={<span>China</span>}>
        <Menu.MenuItem>Beijing</Menu.MenuItem>
        <Menu.MenuItem>Shanghai</Menu.MenuItem>
        <Menu.MenuItem>Guangzhou</Menu.MenuItem>
        <Menu.MenuItem>Shenzhen</Menu.MenuItem>
        <Menu.SubMenu title={<span>Guangxi</span>}>
          <Menu.MenuItem>Nanning</Menu.MenuItem>
          <Menu.MenuItem>Liuzhou</Menu.MenuItem>
          <Menu.MenuItem>Guilin</Menu.MenuItem>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.SubMenu title={<span>China</span>}>
        <Menu.MenuItem>Beijing</Menu.MenuItem>
        <Menu.MenuItem>Shanghai</Menu.MenuItem>
        <Menu.MenuItem>Guangzhou</Menu.MenuItem>
        <Menu.MenuItem>Shenzhen</Menu.MenuItem>
        <Menu.SubMenu title={<span>Guangxi</span>}>
          <Menu.MenuItem>Nanning</Menu.MenuItem>
          <Menu.MenuItem>Liuzhou</Menu.MenuItem>
          <Menu.MenuItem>Guilin</Menu.MenuItem>
        </Menu.SubMenu>
      </Menu.SubMenu>
    </Menu>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </>
);
```

`sticky` 利用 css 种 position: sticky 使菜单定位在窗口顶部，仅横向有效。

## 📦 Menu.SubMenu

### ⚙ title

- `[ReactNode]`

```tsx
import React from 'react';
import { Menu } from '@xinleibird/bird-ui';

export default () => (
  <div style={{ width: '20rem' }}>
    <Menu direction="vertical">
      <Menu.SubMenu title={<span>China</span>}>
        <Menu.MenuItem>Beijing</Menu.MenuItem>
        <Menu.MenuItem>Shanghai</Menu.MenuItem>
        <Menu.MenuItem>Guangzhou</Menu.MenuItem>
        <Menu.MenuItem>Shenzhen</Menu.MenuItem>
        <Menu.SubMenu title={<span>Guangxi</span>}>
          <Menu.MenuItem>Nanning</Menu.MenuItem>
          <Menu.MenuItem>Liuzhou</Menu.MenuItem>
          <Menu.MenuItem>Guilin</Menu.MenuItem>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.SubMenu title={<span>China</span>}>
        <Menu.MenuItem>Beijing</Menu.MenuItem>
        <Menu.MenuItem>Shanghai</Menu.MenuItem>
        <Menu.MenuItem>Guangzhou</Menu.MenuItem>
        <Menu.MenuItem>Shenzhen</Menu.MenuItem>
        <Menu.SubMenu title={<span>Guangxi</span>}>
          <Menu.MenuItem>Nanning</Menu.MenuItem>
          <Menu.MenuItem>Liuzhou</Menu.MenuItem>
          <Menu.MenuItem>Guilin</Menu.MenuItem>
        </Menu.SubMenu>
      </Menu.SubMenu>
    </Menu>
  </div>
);
```

`title` 子菜单显示的标题。

### ⚙ icon

- `[Icon]`

```tsx
import React from 'react';
import { Menu, Icon } from '@xinleibird/bird-ui';

export default () => (
  <div style={{ width: '20rem' }}>
    <Menu direction="vertical">
      <Menu.SubMenu title={<span>China</span>} icon={<Icon.Table />}>
        <Menu.MenuItem>Beijing</Menu.MenuItem>
        <Menu.MenuItem>Shanghai</Menu.MenuItem>
        <Menu.MenuItem>Guangzhou</Menu.MenuItem>
        <Menu.MenuItem>Shenzhen</Menu.MenuItem>
        <Menu.SubMenu title={<span>Guangxi</span>} icon={<Icon.Setting />}>
          <Menu.MenuItem>Nanning</Menu.MenuItem>
          <Menu.MenuItem>Liuzhou</Menu.MenuItem>
          <Menu.MenuItem>Guilin</Menu.MenuItem>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.SubMenu title={<span>China</span>} icon={<Icon.Table />}>
        <Menu.MenuItem>Beijing</Menu.MenuItem>
        <Menu.MenuItem>Shanghai</Menu.MenuItem>
        <Menu.MenuItem>Guangzhou</Menu.MenuItem>
        <Menu.MenuItem>Shenzhen</Menu.MenuItem>
        <Menu.SubMenu title={<span>Guangxi</span>} icon={<Icon.Setting />}>
          <Menu.MenuItem>Nanning</Menu.MenuItem>
          <Menu.MenuItem>Liuzhou</Menu.MenuItem>
          <Menu.MenuItem>Guilin</Menu.MenuItem>
        </Menu.SubMenu>
      </Menu.SubMenu>
    </Menu>
  </div>
);
```

`title` 子菜单显示的图标。

### ⚙ disabled

- `[boolean]`

```tsx
import React from 'react';
import { Menu, Icon } from '@xinleibird/bird-ui';

export default () => (
  <div style={{ width: '20rem' }}>
    <Menu direction="vertical">
      <Menu.SubMenu disabled title={<span>China</span>} icon={<Icon.Table />}>
        <Menu.MenuItem>Beijing</Menu.MenuItem>
        <Menu.MenuItem>Shanghai</Menu.MenuItem>
        <Menu.MenuItem>Guangzhou</Menu.MenuItem>
        <Menu.MenuItem>Shenzhen</Menu.MenuItem>
        <Menu.SubMenu title={<span>Guangxi</span>} icon={<Icon.Setting />}>
          <Menu.MenuItem>Nanning</Menu.MenuItem>
          <Menu.MenuItem>Liuzhou</Menu.MenuItem>
          <Menu.MenuItem>Guilin</Menu.MenuItem>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.SubMenu disabled title={<span>China</span>} icon={<Icon.Table />}>
        <Menu.MenuItem>Beijing</Menu.MenuItem>
        <Menu.MenuItem>Shanghai</Menu.MenuItem>
        <Menu.MenuItem>Guangzhou</Menu.MenuItem>
        <Menu.MenuItem>Shenzhen</Menu.MenuItem>
        <Menu.SubMenu title={<span>Guangxi</span>} icon={<Icon.Setting />}>
          <Menu.MenuItem>Nanning</Menu.MenuItem>
          <Menu.MenuItem>Liuzhou</Menu.MenuItem>
          <Menu.MenuItem>Guilin</Menu.MenuItem>
        </Menu.SubMenu>
      </Menu.SubMenu>
    </Menu>
  </div>
);
```

`disabled` 禁用子菜单。

## 📦 Menu.MenuItem

### ⚙ icon

- `[Icon]`

```tsx
import React from 'react';
import { Menu, Icon } from '@xinleibird/bird-ui';

export default () => (
  <div style={{ width: '20rem' }}>
    <Menu direction="vertical">
      <Menu.SubMenu title={<span>China</span>} icon={<Icon.Table />}>
        <Menu.MenuItem icon={<Icon.Setting />}>Beijing</Menu.MenuItem>
        <Menu.MenuItem icon={<Icon.Setting />}>Shanghai</Menu.MenuItem>
        <Menu.MenuItem icon={<Icon.Setting />}>Guangzhou</Menu.MenuItem>
        <Menu.MenuItem icon={<Icon.Setting />}>Shenzhen</Menu.MenuItem>
      </Menu.SubMenu>
    </Menu>
  </div>
);
```

`icon` 菜单项显示的图标。

### ⚙ disabled

- `[boolean]`

```tsx
import React from 'react';
import { Menu, Icon } from '@xinleibird/bird-ui';

export default () => (
  <Menu>
    <Menu.SubMenu title={<span>SubMenu</span>}>
      <Menu.MenuItem disabled>Beijing</Menu.MenuItem>
      <Menu.MenuItem disabled>Shanghai</Menu.MenuItem>
      <Menu.MenuItem disabled>Guangzhou</Menu.MenuItem>
      <Menu.MenuItem disabled>Shenzhen</Menu.MenuItem>
    </Menu.SubMenu>
  </Menu>
);
```
