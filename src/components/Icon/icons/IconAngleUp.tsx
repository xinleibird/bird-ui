import React, { FunctionComponent } from 'react';
import Icon, { IconProps } from '../Icon';
import svg from './assets/angle-up.svg';

const IconAngleUp: FunctionComponent<IconProps> = ({ ...restProps }) => {
  return <Icon src={svg} {...restProps} />;
};

IconAngleUp.defaultProps = {
  rendersign: 'Icon',
};

export default IconAngleUp;
