import { CSSProperties, FunctionComponent, ReactElement } from 'react';
export interface MenuItemProps {
    className?: string;
    index?: string;
    disabled?: boolean;
    style?: CSSProperties;
    icon?: ReactElement;
    children: string;
    readonly menuCheckId?: 'MenuItem';
}
declare const MenuItem: FunctionComponent<MenuItemProps>;
export default MenuItem;
