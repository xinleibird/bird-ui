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
  onBtnClick?: () => void;
  onLoading?: (setLoadingCallback: SetLoadingStateCallback) => void;
  onlyIcon?: boolean;
}

export type ButtonProps = Partial<ButtonHTMLAttributes<HTMLElement> & BaseButtonProps>;

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
  onlyIcon,
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
        onClick={(e) => {
          e.preventDefault();
          onBtnClick();
          return new Promise((resolve) => {
            resolve(onLoading(setLoading));
          });
        }}
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
  }, [
    classes,
    disabled,
    isLoading,
    type,
    restProps,
    size,
    onlyIcon,
    children,
    onBtnClick,
    onLoading,
  ]);
};

export default Button;
