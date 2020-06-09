import React, { FunctionComponent } from 'react';
import Icon, { IconProps } from '../Icon';
import svg from './assets/slider.svg';

const IconSlider: FunctionComponent<IconProps> = ({ ...restProps }) => {
  return <Icon src={svg} {...restProps} />;
};

IconSlider.defaultProps = {
  rendersign: 'Icon',
};

export default IconSlider;
