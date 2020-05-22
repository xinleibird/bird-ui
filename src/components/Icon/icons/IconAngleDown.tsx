import React, { FunctionComponent } from 'react';
import Icon, { IconProps } from '../Icon';
import { ReactComponent as Svg } from './assets/angle-down.svg';

const IconAngleDown: FunctionComponent<IconProps> = ({ ...restProps }) => {
  return <Icon component={Svg} {...restProps} />;
};

export default IconAngleDown;
