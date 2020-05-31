import { FunctionComponent, HTMLAttributes, LiHTMLAttributes } from 'react';
export declare const Ul: FunctionComponent<HTMLAttributes<HTMLElement>>;
export declare const Li: FunctionComponent<LiHTMLAttributes<HTMLElement>>;
export interface ListItem {
    key: string;
    value: string;
}
export interface ListProps {
    className?: string;
    data: ListItem[];
}
declare const List: FunctionComponent<ListProps>;
export default List;
