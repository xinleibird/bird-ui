import { FunctionComponent } from 'react';
import Menu, { MenuProps } from './Menu';
import MenuItem, { MenuItemProps } from './MenuItem';
import SubMenu, { SubMenuProps } from './SubMenu';

export type { MenuProps, MenuItemProps, SubMenuProps };

type MenuComponent = FunctionComponent<MenuProps> & {
  MenuItem: FunctionComponent<MenuItemProps>;
  SubMenu: FunctionComponent<SubMenuProps>;
};

const ReferMenu = Menu as MenuComponent;
ReferMenu.MenuItem = MenuItem;
ReferMenu.SubMenu = SubMenu;

export default ReferMenu;
