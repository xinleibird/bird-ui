import { ButtonProps } from './Button';
import { LinkProps } from './Link';
import { FunctionComponent } from 'react';
export declare type ButtonComponent = FunctionComponent<ButtonProps> & {
    Link: FunctionComponent<LinkProps>;
};
declare const ReferButton: ButtonComponent;
export default ReferButton;
