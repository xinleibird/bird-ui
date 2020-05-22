import React, { FunctionComponent } from 'react';
import Icon, { IconProps } from '../Icon';
import { ReactComponent as Svg } from './assets/slider.svg';

const IconSlider: FunctionComponent<IconProps> = ({ ...restProps }) => {
  return <Icon component={Svg} {...restProps} />;
};

export default IconSlider;
