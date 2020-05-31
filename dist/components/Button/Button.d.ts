import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from 'react';
declare type SetLoadingStateCallback = (loadingState: boolean) => void;
interface BaseButtonProps {
    size?: 'large' | 'small';
    btnType?: 'primary' | 'secondary' | 'danger';
    children?: ReactNode;
    disabled?: boolean;
    loading?: boolean;
    onLoading?: (setLoadingCallback: SetLoadingStateCallback) => void;
    onlyIcon?: boolean;
}
export declare type ButtonProps = Partial<ButtonHTMLAttributes<HTMLElement> & BaseButtonProps>;
declare const Button: FunctionComponent<ButtonProps>;
export default Button;
