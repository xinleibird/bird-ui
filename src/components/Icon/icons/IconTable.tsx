import React, { FunctionComponent } from 'react';
import Icon, { IconProps } from '../Icon';
import svg from './assets/table.svg';

const IconTable: FunctionComponent<IconProps> = ({ ...restProps }) => {
  return <Icon src={svg} {...restProps} />;
};

IconTable.defaultProps = {
  rendersign: 'Icon',
};

export default IconTable;
