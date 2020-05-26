import React, { FunctionComponent } from 'react';
import Icon, { IconProps } from '../Icon';
import svg from './assets/info.svg';

const IconInfo: FunctionComponent<IconProps> = ({ ...restProps }) => {
  return <Icon src={svg} {...restProps} />;
};

export default IconInfo;
