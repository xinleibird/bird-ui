import React, { FunctionComponent, KeyboardEvent, HtmlHTMLAttributes } from 'react';
import MenuItem from './components/Menu/MenuItem';
import { Menu, Autocomplete } from './main';
// import Auto from './components/AutoComplete';

const ShowComponents: FunctionComponent = () => {
  return (
    <Autocomplete
      data={['a', 'ab', 'abc']}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          const tar = e.target as React.KeyboardEvent & HTMLInputElement;
          tar.value = '';
        }
      }}
    />
  );
};

export default ShowComponents;
