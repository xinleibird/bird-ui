import { AnchorHTMLAttributes, FunctionComponent, ReactNode } from 'react';
interface BaseLinkProps {
    size?: 'large' | 'small';
    children?: ReactNode;
    disabled?: boolean;
}
export declare type LinkProps = Partial<AnchorHTMLAttributes<HTMLElement> & BaseLinkProps>;
declare const Link: FunctionComponent<LinkProps>;
export default Link;
