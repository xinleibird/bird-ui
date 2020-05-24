import cxs from 'classnames';
import React, {
  ButtonHTMLAttributes,
  FunctionComponent,
  ReactNode,
  useMemo,
  useState,
} from 'react';
import { IconCircleNotch } from '../Icon';
import { prefix } from '../index';
import Transition from '../Transition';
import './Button.scss';

interface SetLoadingStateCallback {
  (loadingState: boolean): void;
}
export interface BaseButtonProps {
  size?: 'large' | 'small';
  btnType?: 'primary' | 'secondary' | 'danger';
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onBtnClick?: () => void;
  onLoading?: (setLoadingCallback: SetLoadingStateCallback) => void;
}

type ButtonProps = Partial<ButtonHTMLAttributes<HTMLElement> & BaseButtonProps>;

const Button: FunctionComponent<ButtonProps> = ({
  className,
  size,
  btnType,
  children,
  disabled = false,
  type = 'button',
  loading,
  onBtnClick = () => {},
  onLoading = () => {},
  ...restProps
}) => {
  const [isLoading, setLoading] = useState(loading);

  const classes = cxs(className, `${prefix}-btn`, {
    'btn-lg': size === 'large',
    'btn-sm': size === 'small',
    [`btn-${btnType}`]: btnType,
    loading: isLoading,
  });

  return useMemo(() => {
    return (
      <button
        className={classes}
        disabled={disabled || isLoading}
        type={type}
        {...restProps}
        onClick={e => {
          e.preventDefault();
          onBtnClick();
          return new Promise(resolve => {
            resolve(onLoading(setLoading));
          });
        }}
      >
        <Transition in={isLoading} animationClassName="fade-in">
          <IconCircleNotch animate="spin" size={size} />
        </Transition>
        <span className="btn-inner-text">{children}</span>
      </button>
    );
  }, [children, classes, disabled, restProps, type, size, isLoading, onLoading, onBtnClick]);

};

export default Button;
