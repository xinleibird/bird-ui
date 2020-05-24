import React, { CSSProperties, FunctionComponent, ReactNode } from 'react';
import { MenuItemProps } from './MenuItem';
import { SubMenuProps } from './SubMenu';
export declare const renderChildren: (children: React.ReactNode, index?: string) => (React.FunctionComponentElement<MenuItemProps> | React.FunctionComponentElement<SubMenuProps>)[];
export interface MenuProps {
    className?: string;
    defaultIndex?: string;
    defaultSubMenuIndex?: string | string[];
    direction?: 'horizontal' | 'vertical';
    sticky?: boolean;
    style?: CSSProperties;
    children: ReactNode;
}
declare const Menu: FunctionComponent<MenuProps>;
export default Menu;
