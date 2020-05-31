import { FunctionComponent, ReactElement, ReactNode } from 'react';
export interface SubMenuProps {
    className?: string;
    index?: string;
    title: string | ReactElement;
    disabled?: boolean;
    icon?: ReactElement;
    children?: ReactNode;
    readonly menuCheckId?: 'SubMenu';
}
declare const SubMenu: FunctionComponent<SubMenuProps>;
export default SubMenu;
