import { ListProps } from './List';
import { FunctionComponent, HTMLAttributes, LiHTMLAttributes } from 'react';
export declare type ListComponent = FunctionComponent<ListProps> & {
    Ul: FunctionComponent<LiHTMLAttributes<HTMLElement>>;
    Li: FunctionComponent<HTMLAttributes<HTMLElement>>;
};
declare const ReferList: ListComponent;
export default ReferList;
