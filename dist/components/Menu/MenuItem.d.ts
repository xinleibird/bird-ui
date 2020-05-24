import { CSSProperties, FunctionComponent, ReactNode } from 'react';
export interface MenuItemProps {
    className?: string;
    index?: string;
    disabled?: boolean;
    style?: CSSProperties;
    icon?: ReactNode;
    children: string;
}
declare const MenuItem: FunctionComponent<MenuItemProps>;
export default MenuItem;
