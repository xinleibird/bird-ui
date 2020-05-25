import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from 'react';
interface BaseButtonProps {
    size?: 'large' | 'small';
    btnType?: 'primary' | 'secondary' | 'danger';
    children?: ReactNode;
    disabled?: boolean;
    loading?: boolean;
    onBtnClick?: () => void;
}
export declare type ButtonProps = Partial<ButtonHTMLAttributes<HTMLElement> & BaseButtonProps>;
declare const Button: FunctionComponent<ButtonProps>;
export default Button;
