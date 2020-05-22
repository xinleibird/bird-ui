import React, { FunctionComponent } from 'react';
import Icon, { IconProps } from '../Icon';
import { ReactComponent as Svg } from './assets/angle-right.svg';

const IconAngleRight: FunctionComponent<IconProps> = ({ ...restProps }) => {
  return <Icon component={Svg} {...restProps} />;
};

export default IconAngleRight;
