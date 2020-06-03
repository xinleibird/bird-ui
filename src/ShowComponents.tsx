import React, { FunctionComponent, useState } from 'react';
import { Button, Autocomplete } from './main';

const data = ['a', 'ab', 'abc', 'abcd', 'abcde'];
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
      <form action="" method="post">
        <Autocomplete data={data} name="test" />
        <input type="text" name="okok" />
        <button type="submit">ok</button>
      </form>
    </>
  );
};

export default ShowComponents;
