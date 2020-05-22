import React, { FunctionComponent } from 'react';
import Icon, { IconProps } from '../Icon';
import { ReactComponent as Svg } from './assets/close.svg';

const IconClose: FunctionComponent<IconProps> = ({ ...restProps }) => {
  return <Icon component={Svg} {...restProps} />;
};

export default IconClose;
