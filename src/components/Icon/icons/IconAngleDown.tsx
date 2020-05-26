import React, { FunctionComponent } from 'react';
import Icon, { IconProps } from '../Icon';
import svg from './assets/angle-down.svg';

const IconAngleDown: FunctionComponent<IconProps> = ({ ...restProps }) => {
  return <Icon src={svg} {...restProps} />;
};

export default IconAngleDown;
