import { FunctionComponent, InputHTMLAttributes, ReactElement } from 'react';
interface InputProps extends Partial<InputHTMLAttributes<HTMLElement>> {
    inputSize?: 'large' | 'small';
    icon?: ReactElement;
    disabled?: boolean;
    prepand?: string | ReactElement;
    append?: string | ReactElement;
}
declare const Input: FunctionComponent<InputProps>;
export default Input;
