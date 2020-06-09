import React, { FunctionComponent } from 'react';
import Icon, { IconProps } from '../Icon';
import svg from './assets/circle-notch.svg';

const IconCircleNotch: FunctionComponent<IconProps> = ({ ...restProps }) => {
  return <Icon src={svg} {...restProps} />;
};

IconCircleNotch.defaultProps = {
  rendersign: 'Icon',
};

export default IconCircleNotch;
