import React, { FunctionComponent } from 'react';
import { Select, Autocomplete, Menu } from './main';

const ShowComponents: FunctionComponent = () => {
  return (
    <>
      <Autocomplete data={['a', 'ab', 'abc']} />
      <Select />

      <Menu>
        <p>1</p>
        <Menu.SubMenu title="hello">
          <Menu.MenuItem>hello</Menu.MenuItem>
          <Menu.MenuItem>hello</Menu.MenuItem>
          <Menu.MenuItem>hello</Menu.MenuItem>
          <Menu.MenuItem>hello</Menu.MenuItem>
          <Menu.MenuItem>hello</Menu.MenuItem>
        </Menu.SubMenu>
      </Menu>
    </>
  );
};

export default ShowComponents;
