import React, { FunctionComponent } from 'react';
import Icon, { IconProps } from '../Icon';
import { ReactComponent as Svg } from './assets/table.svg';

const IconTable: FunctionComponent<IconProps> = ({ ...restProps }) => {
  return <Icon component={Svg} {...restProps} />;
};

export default IconTable;
