import React, { FunctionComponent, useState } from 'react';
import { Button, Icon } from './main';
// import Auto from './components/AutoComplete';

const ShowComponents: FunctionComponent = () => {
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
      {showBlock && (
        <div style={{ background: '#b8b8b8', width: '128px', height: '128px' }}></div>
      )}
    </>
  );
};

export default ShowComponents;
