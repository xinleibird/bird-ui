import React, { FunctionComponent } from 'react';
import Icon, { IconProps } from '../Icon';
import svg from './assets/undo.svg';

const IconUndo: FunctionComponent<IconProps> = ({ ...restProps }) => {
  return <Icon src={svg} {...restProps} />;
};

IconUndo.defaultProps = {
  rendersign: 'Icon',
};

export default IconUndo;
