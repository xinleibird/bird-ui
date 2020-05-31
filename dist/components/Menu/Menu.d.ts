import React, { CSSProperties, FunctionComponent, ReactNode } from 'react';
import { MenuItemProps } from './MenuItem';
import { SubMenuProps } from './SubMenu';
export declare const renderChildren: (children: React.ReactNode, index?: string) => React.ReactElement<SubMenuProps & MenuItemProps, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>[];
export interface MenuProps {
    className?: string;
    defaultIndex?: string;
    defaultSubMenuIndex?: string | string[];
    direction?: 'horizontal' | 'vertical';
    sticky?: boolean;
    style?: CSSProperties;
    children: ReactNode;
}
declare const MenuWrapper: FunctionComponent<MenuProps>;
export default MenuWrapper;
