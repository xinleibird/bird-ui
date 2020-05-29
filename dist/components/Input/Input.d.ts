import { FunctionComponent, InputHTMLAttributes, ReactElement } from 'react';
interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    size?: 'large' | 'small';
    icon?: ReactElement;
    disabled?: boolean;
    prepand?: string | ReactElement;
    append?: string | ReactElement;
}
declare const Input: FunctionComponent<InputProps>;
export default Input;
