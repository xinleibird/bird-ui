import React, { FunctionComponent } from 'react';
import Icon, { IconProps } from '../Icon';
import svg from './assets/angle-right.svg';

const IconAngleRight: FunctionComponent<IconProps> = ({ ...restProps }) => {
  return <Icon src={svg} {...restProps} />;
};

IconAngleRight.defaultProps = {
  rendersign: 'Icon',
};

export default IconAngleRight;
