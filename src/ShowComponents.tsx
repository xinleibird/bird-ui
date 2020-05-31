import React, { FunctionComponent } from 'react';
import MenuItem from './components/Menu/MenuItem';
import { Menu } from './main';
// import Auto from './components/AutoComplete';

const ShowComponents: FunctionComponent = () => {
  return (
    <Menu>
      <MenuItem>hello</MenuItem>
      <MenuItem>hello</MenuItem>
      <MenuItem>hello</MenuItem>
      <Menu.SubMenu title="hello">
        <MenuItem>hello</MenuItem>
        <MenuItem>hello</MenuItem>
        <MenuItem>hello</MenuItem>
      </Menu.SubMenu>
      <Menu.SubMenu title="hello"></Menu.SubMenu>
    </Menu>
  );
};

export default ShowComponents;
