import React, { FunctionComponent } from 'react';
import Icon, { IconProps } from '../Icon';
import svg from './assets/error.svg';

const IconError: FunctionComponent<IconProps> = ({ ...restProps }) => {
  return <Icon src={svg} {...restProps} />;
};

export default IconError;
