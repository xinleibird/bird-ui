import React, { FunctionComponent } from 'react';
import Icon, { IconProps } from '../Icon';
import svg from './assets/close.svg';

const IconClose: FunctionComponent<IconProps> = ({ ...restProps }) => {
  return <Icon src={svg} {...restProps} />;
};

export default IconClose;
