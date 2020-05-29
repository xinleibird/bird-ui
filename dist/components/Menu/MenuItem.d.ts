import { CSSProperties, FunctionComponent, ReactElement } from 'react';
export interface MenuItemProps {
    className?: string;
    index?: string;
    disabled?: boolean;
    style?: CSSProperties;
    icon?: ReactElement;
    children: string;
}
declare const MenuItem: FunctionComponent<MenuItemProps>;
export default MenuItem;
