import React, { FunctionComponent } from 'react';
import Icon, { IconProps } from '../Icon';
import svg from './assets/angle-left.svg';

const IconAngleLeft: FunctionComponent<IconProps> = ({ ...restProps }) => {
  return <Icon src={svg} {...restProps} />;
};

IconAngleLeft.defaultProps = {
  rendersign: 'Icon',
};

export default IconAngleLeft;
