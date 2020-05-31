import { FunctionComponent } from 'react';
import { MenuProps } from './Menu';
import { MenuItemProps } from './MenuItem';
import { SubMenuProps } from './SubMenu';
export declare type MenuComponent = FunctionComponent<MenuProps> & {
    MenuItem: FunctionComponent<MenuItemProps>;
    SubMenu: FunctionComponent<SubMenuProps>;
};
declare const ReferMenu: MenuComponent;
export default ReferMenu;
