import React, { FunctionComponent } from 'react';
import Icon, { IconProps } from '../Icon';
import svg from './assets/search.svg';

const IconSearch: FunctionComponent<IconProps> = ({ ...restProps }) => {
  return <Icon src={svg} {...restProps} />;
};

IconSearch.defaultProps = {
  rendersign: 'Icon',
};

export default IconSearch;
