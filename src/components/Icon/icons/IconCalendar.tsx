import React, { FunctionComponent } from 'react';
import Icon, { IconProps } from '../Icon';
import svg from './assets/calendar.svg';

const IconCalendar: FunctionComponent<IconProps> = ({ ...restProps }) => {
  return <Icon src={svg} {...restProps} />;
};

IconCalendar.defaultProps = {
  rendersign: 'Icon',
};

export default IconCalendar;
