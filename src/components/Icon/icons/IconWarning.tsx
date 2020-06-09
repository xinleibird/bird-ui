import React, { FunctionComponent } from 'react';
import Icon, { IconProps } from '../Icon';
import svg from './assets/warning.svg';

const IconWarning: FunctionComponent<IconProps> = ({ ...restProps }) => {
  return <Icon src={svg} {...restProps} />;
};

IconWarning.defaultProps = {
  rendersign: 'Icon',
};

export default IconWarning;
