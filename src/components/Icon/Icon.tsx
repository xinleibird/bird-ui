import cxs from 'classnames';
import React, { FunctionComponent, SVGProps } from 'react';
import { prefix } from '../index';
import './Icon.scss';

export interface BaseIconProps {
  className?: string;
  component?: FunctionComponent<SVGProps<SVGSVGElement>>;
  size?: 'large' | 'small';
}

export type IconProps = Partial<SVGProps<SVGSVGElement> & BaseIconProps>;

const Icon: FunctionComponent<IconProps> = ({ className, component, size, ...restArgs }) => {
  const classes = cxs(className, `${prefix}-icon`, {
    'icon-lg': size === 'large',
    'icon-sm': size === 'small',
  });
  const Svg = component as FunctionComponent<SVGProps<SVGSVGElement>>;

  return <Svg className={classes} {...restArgs} />;
};

export default Icon;
