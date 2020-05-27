import { FunctionComponent, InputHTMLAttributes } from 'react';
interface BaseInputProps {
    name: string;
}
declare type InputProps = Partial<InputHTMLAttributes<HTMLElement> & BaseInputProps>;
declare const Input: FunctionComponent<InputProps>;
export default Input;
