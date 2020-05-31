import React, { ButtonHTMLAttributes, FunctionComponent, ReactNode } from 'react';
declare type SetLoadingStateCallback = (loadingState: boolean) => void;
interface BaseButtonProps {
    size?: 'large' | 'small';
    btnType?: 'primary' | 'secondary' | 'danger';
    children?: ReactNode;
    disabled?: boolean;
    loading?: boolean;
    onBtnClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onLoading?: (setLoadingCallback: SetLoadingStateCallback) => void;
    onlyIcon?: boolean;
}
declare type WithOnClickButtonProps = Partial<ButtonHTMLAttributes<HTMLElement> & BaseButtonProps>;
export interface ButtonProps extends Omit<WithOnClickButtonProps, 'onClick'> {
}
declare const Button: FunctionComponent<ButtonProps>;
export default Button;
