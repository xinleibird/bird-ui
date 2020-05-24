import { FunctionComponent, ReactNode } from 'react';
export interface SubMenuProps {
    className?: string;
    index?: string;
    title: ReactNode;
    disabled?: boolean;
    icon?: ReactNode;
    children?: ReactNode;
}
declare const SubMenu: FunctionComponent<SubMenuProps>;
export default SubMenu;
