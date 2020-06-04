import React, { FunctionComponent } from 'react';
import { Menu, Autocomplete } from './main';

const ShowComponents: FunctionComponent = () => {
  return (
    <>
      <Autocomplete data={['a', 'ab', 'abc']} />
    </>
  );
};

export default ShowComponents;
