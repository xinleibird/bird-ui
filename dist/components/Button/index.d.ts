import { FunctionComponent } from 'react';
import { ButtonProps } from './Button';
import { LinkProps } from './Link';
export declare type ButtonComponent = FunctionComponent<ButtonProps> & {
    Link: FunctionComponent<LinkProps>;
};
declare const ReferButton: ButtonComponent;
export default ReferButton;
