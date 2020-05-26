import cxs from 'classnames';
import React, { FunctionComponent } from 'react';
import SVG, { IProps as SVGProps } from 'react-inlinesvg';
import prefix from '../prefix';

export interface BaseIconProps {
  className?: string;
  src: string;
  size?: 'large' | 'small';
  animate?: 'spin' | 'beat';
}

export type IconProps = Partial<SVGProps & BaseIconProps>;

const Icon: FunctionComponent<IconProps> = ({
  className,
  src = '',
  size,
  animate,
  ...restArgs
}) => {
  const classes = cxs(className, `${prefix}-icon`, {
    'icon-lg': size === 'large',
    'icon-sm': size === 'small',
    [`animate-${animate}`]: animate,
  });

  return <SVG src={src} className={classes} {...restArgs} />;
};

export default Icon;
