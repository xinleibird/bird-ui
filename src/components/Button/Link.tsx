import cxs from 'classnames';
import React, { AnchorHTMLAttributes, FunctionComponent, ReactNode, useMemo } from 'react';
import prefix from '../prefix';
import './Button.scss';

interface BaseLinkProps {
  size?: 'large' | 'small';
  children?: ReactNode;
  disabled?: boolean;
}

export type LinkProps = Partial<AnchorHTMLAttributes<HTMLElement> & BaseLinkProps>;

const Link: FunctionComponent<LinkProps> = ({
  className,
  size,
  children,
  disabled = false,
  ...restProps
}) => {
  const classes = cxs(className, `${prefix}-btn`, 'link', {
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

export default Link;
