import Menu, { MenuProps } from './Menu';
import MenuItem, { MenuItemProps } from './MenuItem';
import SubMenu, { SubMenuProps } from './SubMenu';
import { FunctionComponent } from 'react';

export type MenuComponent = FunctionComponent<MenuProps> & {
  MenuItem: FunctionComponent<MenuItemProps>;
  SubMenu: FunctionComponent<SubMenuProps>;
};

const ReferMenu = Menu as MenuComponent;
ReferMenu.MenuItem = MenuItem;
ReferMenu.SubMenu = SubMenu;

export default ReferMenu;
