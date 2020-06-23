# Autocomplete

## ⚙ name | id

- `[string]`

`name | id` form input 元素的 name 和 id。

<hr />
<br />
<br />

## ⚙ data

- `string[]`

```js
const data = ['a', 'ab', 'abc', 'abcd', 'abcde', 'abcdef', 'abcdefg'];
```

```tsx
import React from 'react';
import { Autocomplete } from '@xinleibird/bird-ui';

export default () => {
  const data = ['a', 'ab', 'abc', 'abcd', 'abcde', 'abcdef', 'abcdefg'];
  return <Autocomplete data={data} />;
};
```

`data` autocomplete 的数据源数组。

<hr />
<br />
<br />

## ⚙ size

- `[number]`

```tsx
import React from 'react';
import { Autocomplete } from '@xinleibird/bird-ui';

export default () => {
  const data = ['a', 'ab', 'abc', 'abcd', 'abcde', 'abcdef', 'abcdefg'];
  return <Autocomplete data={data} size={20} />;
};
```

`size` input 元素的 size 属性，决定 input 的字符宽度。

<hr />
<br />
<br />

## ⚙ onKeyPress

- `(event: React.KeyboardEvent<HTMLInputElement>) => void`

```tsx
import React, { useState } from 'react';
import { Autocomplete, Alert } from '@xinleibird/bird-ui';

export default () => {
  const data = ['a', 'ab', 'abc', 'abcd', 'abcde', 'abcdef', 'abcdefg'];
  const [showDialog, setShow] = useState(false);
  const [userInput, setInput] = useState('');
  return (
    <>
      <Autocomplete
        data={data}
        onKeyPress={e => {
          const tar = e.target as React.KeyboardEvent & HTMLInputElement;
          if (e.key === 'Enter' && tar.value && !showDialog) {
            setInput(tar.value);
            tar.value = '';
            setShow(true);
          }
        }}
      />
      {showDialog && (
        <Alert.Dialog
          onConfirm={() => {
            setShow(false);
          }}
          onCancel={() => {
            setShow(false);
          }}
        >
          <h3>Your Input is</h3>
          <p>{userInput}</p>
        </Alert.Dialog>
      )}
    </>
  );
};
```

`onKeyPress` 向内部的 Input 组件传递 onKeyPress 事件函数，可以监听 input 中的输入进行操作。
**上面的例子里，输入回车后会将前面输入的内容显示到 dialog 中**。
