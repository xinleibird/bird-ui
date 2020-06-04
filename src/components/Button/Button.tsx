import cxs from 'classnames';
import React, {
  ButtonHTMLAttributes,
  FunctionComponent,
  ReactNode,
  useMemo,
  useState,
} from 'react';
import Icon from '../Icon';
import prefix from '../prefix';
import Transition from '../Transition';

type SetLoadingStateCallback = (loadingState: boolean) => void;
interface BaseButtonProps {
  size?: 'large' | 'small';
  btnType?: 'primary' | 'secondary' | 'danger';
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onLoading?: (setLoadingCallback: SetLoadingStateCallback) => void;
  onlyIcon?: boolean;
}

export type ButtonProps = Partial<ButtonHTMLAttributes<HTMLButtonElement> & BaseButtonProps>;

const Button: FunctionComponent<ButtonProps> = ({
  className,
  size,
  btnType,
  children,
  disabled = false,
  type = 'button',
  loading,
  onLoading = () => {},
  onlyIcon,
  ...restProps
}) => {
  const [isLoading, setLoading] = useState(loading);

  const classes = cxs(`${prefix}-btn`, className, {
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
        onClickCapture={(e) => {
          e.preventDefault();
          return new Promise((resolve) => {
            resolve(onLoading(setLoading));
          });
        }}
        onSubmitCapture={(e) => {
          e.preventDefault();
        }}
        {...restProps}
      >
        <Transition in={isLoading} animationClassName="fade-in">
          <Icon.CircleNotch animate="spin" size={size} />
        </Transition>
        {onlyIcon ? (
          <span className="btn-only-icon">{children}</span>
        ) : (
          <span className="btn-inner-text">{children}</span>
        )}
      </button>
    );
  }, [classes, disabled, isLoading, type, restProps, size, onlyIcon, children, onLoading]);
};

export default Button;
