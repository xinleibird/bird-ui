import cxs from 'classnames';
import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FunctionComponent,
  ReactNode,
  useMemo,
} from 'react';
import { prefix } from '../index';
import './Button.scss';

interface BaseButtonProps {
  size?: 'large' | 'small';
  btnType?: 'primary' | 'secondary' | 'danger';
  children?: ReactNode;
  disabled?: boolean;
}

type ButtonProps = Partial<ButtonHTMLAttributes<HTMLElement> & BaseButtonProps>;

const Button: FunctionComponent<ButtonProps> = ({
  className,
  size,
  btnType,
  children,
  disabled = false,
  type = 'button',
  ...restProps
}) => {
  const classes = cxs(className, `${prefix}-btn`, {
    'btn-lg': size === 'large',
    'btn-sm': size === 'small',
    [`btn-${btnType}`]: btnType,
  });

  const btn = useMemo(() => {
    return (
      <button className={classes} disabled={disabled} type={type} {...restProps}>
        {children}
      </button>
    );
  }, [children, classes, disabled, restProps, type]);

  return btn;
};

interface BaseLinkProps {
  size?: 'large' | 'small';
  children?: ReactNode;
  disabled?: boolean;
}

type LinkProps = Partial<AnchorHTMLAttributes<HTMLElement> & BaseLinkProps>;

export const Link: FunctionComponent<LinkProps> = ({
  className,
  size,
  children,
  disabled = false,
  ...restProps
}) => {
  const classes = cxs(className, 'btn', 'link', {
    'btn-lg': size === 'large',
    'btn-sm': size === 'small',
    disabled,
  });

  const anchor = useMemo(() => {
    return (
      <a className={classes} {...restProps}>
        {children}
      </a>
    );
  }, [children, classes, restProps]);
  return anchor;
};

export default Button;
