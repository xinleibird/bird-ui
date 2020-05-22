import React from 'react';
import Menu, { MenuItem, SubMenu } from './Menu';
import { IconTable } from '../Icon';
import { storiesOf } from '@storybook/react';

const MenuItemTest = () => {
  return (
    <Menu direction="horizontal" defaultIndex="1">
      <MenuItem>Item 1</MenuItem>
      <MenuItem>Item 2</MenuItem>
      <MenuItem disabled>Item 3</MenuItem>
      <MenuItem>Item 4</MenuItem>
      <MenuItem>Item 5</MenuItem>
    </Menu>
  );
};
const SubMenuTest = () => {
  return (
    <Menu>
      <SubMenu title={<span>Sub Menu</span>} icon={<IconTable />}>
        <MenuItem icon={<IconTable />}>Item 1</MenuItem>
        <MenuItem icon={<IconTable />}>Item 2</MenuItem>
        <MenuItem icon={<IconTable />}>Item 3</MenuItem>
        <MenuItem icon={<IconTable />}>Item 4</MenuItem>
      </SubMenu>
    </Menu>
  );
};

storiesOf('Menu', module)
  .addDecorator((story) => {
    return <div style={{ margin: '3rem' }}>{story()}</div>;
  })
  .add('MenuItem', () => {
    return MenuItemTest();
  })
  .add('SubMenu', () => {
    return SubMenuTest();
  });
