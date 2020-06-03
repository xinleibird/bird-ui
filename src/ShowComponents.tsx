import React, { FunctionComponent } from 'react';
import { Menu } from './main';

const ShowComponents: FunctionComponent = () => {
  return (
    <Menu direction="vertical">
      <Menu.SubMenu title="okok">
        <Menu.MenuItem>item1</Menu.MenuItem>
        <Menu.MenuItem>item1</Menu.MenuItem>
        <Menu.MenuItem>item1</Menu.MenuItem>
        <Menu.MenuItem>item1</Menu.MenuItem>
        <Menu.MenuItem>item1</Menu.MenuItem>
      </Menu.SubMenu>
      <Menu.SubMenu title="okok">
        <Menu.MenuItem>item1</Menu.MenuItem>
        <Menu.MenuItem>item1</Menu.MenuItem>
        <Menu.MenuItem>item1</Menu.MenuItem>
        <Menu.MenuItem>item1</Menu.MenuItem>
        <Menu.MenuItem>item1</Menu.MenuItem>
      </Menu.SubMenu>
      <Menu.SubMenu title="okok">
        <Menu.MenuItem>item1</Menu.MenuItem>
        <Menu.MenuItem>item1</Menu.MenuItem>
        <Menu.MenuItem>item1</Menu.MenuItem>
        <Menu.MenuItem>item1</Menu.MenuItem>
        <Menu.MenuItem>item1</Menu.MenuItem>
      </Menu.SubMenu>
    </Menu>
  );
};

export default ShowComponents;
