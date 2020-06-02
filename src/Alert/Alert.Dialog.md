# Alert.Dialog

## ⚙ onConfirm, onCancel

- `"[Function]"`

```tsx
import React, { useState } from 'react';
import { Alert, Button } from '@xinleibird/bird-ui';

export default () => {
  const [showDialog, setShow] = useState(false);
  return (
    <>
      <Button
        onLoading={() => {
          setShow(!showDialog);
        }}
      >
        Show Dialog
      </Button>
      {showDialog && (
        <Alert.Dialog
          onConfirm={() => {
            console.log('Dialog will confirm and exit');
            setShow(false);
          }}
          onCancel={() => {
            console.log('Dialog will cancel and exit');
            setShow(false);
          }}
        >
          <h2 align="center">FBI Warning!</h2>
          <p>
            <strong>
              FBI Warning Federal law provides severe civil and criminal penalties for the
              unauthorized reproduction,distribution,or exhibition of copyrighted motion
              prictures(Title 17, United States Code, Sections 501 and 508). The federal bureau
              of Investigation investigate allegations of criminal copyright infringement.
            </strong>
          </p>
          <p>
            <b>(Title 17, United States Code, Section 506)</b>
          </p>
        </Alert.Dialog>
      )}
    </>
  );
};
```

`onConfirm, onCancel` 对话框确认或者取消时的事件函数。
