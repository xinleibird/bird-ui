import React, { FunctionComponent } from 'react';
import Icon, { IconProps } from '../Icon';
import svg from './assets/success.svg';

const IconSuccess: FunctionComponent<IconProps> = ({ ...restProps }) => {
  return <Icon src={svg} {...restProps} />;
};

IconSuccess.defaultProps = {
  rendersign: 'Icon',
};

export default IconSuccess;
