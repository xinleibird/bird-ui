import React, { FunctionComponent } from 'react';
import Icon, { IconProps } from '../Icon';
import svg from './assets/setting.svg';

const IconSetting: FunctionComponent<IconProps> = ({ ...restProps }) => {
  return <Icon src={svg} {...restProps} />;
};

export default IconSetting;
