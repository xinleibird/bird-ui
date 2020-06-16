import cxs from 'classnames';
import React, { FunctionComponent } from 'react';
import Svg, { IProps as SVGProps } from 'react-inlinesvg';
import { prefix } from '../prefix';

export interface IconProps extends Partial<SVGProps> {
  className?: string;
  src?: string;
  size?: 'large' | 'small' | 'tinny';
  animate?: 'spin' | 'beat';
  color?: string;
  readonly rendersign?: 'Icon';
}

const Icon: FunctionComponent<IconProps> = ({
  className,
  src = '',
  size,
  animate,
  color = '',
  ...restArgs
}) => {
  const classes = cxs(`${prefix}-icon`, className, {
    'icon-lg': size === 'large',
    'icon-sm': size === 'small',
    'icon-tn': size === 'tinny',
    [`animate-${animate}`]: animate,
  });

  return <Svg src={src} className={classes} style={{ fill: color }} {...restArgs} />;
};

Icon.defaultProps = {
  rendersign: 'Icon',
};

export default Icon;
