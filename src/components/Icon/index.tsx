import { FunctionComponent } from 'react';
import Icon, { IconProps } from './Icon';
import IconAngleDown from './icons/IconAngleDown';
import IconAngleRight from './icons/IconAngleRight';
import IconCircleNotch from './icons/IconCircleNotch';
import IconClose from './icons/IconClose';
import IconError from './icons/IconError';
import IconInfo from './icons/IconInfo';
import IconSearch from './icons/IconSearch';
import IconSetting from './icons/IconSetting';
import IconSlider from './icons/IconSlider';
import IconSuccess from './icons/IconSuccess';
import IconTable from './icons/IconTable';
import IconWarning from './icons/IconWarning';

export type { IconProps };

type IconComponent = FunctionComponent<IconProps> & {
  AngleDown: FunctionComponent<IconProps>;
  AngleRight: FunctionComponent<IconProps>;
  Close: FunctionComponent<IconProps>;
  Setting: FunctionComponent<IconProps>;
  Table: FunctionComponent<IconProps>;
  Slider: FunctionComponent<IconProps>;
  Info: FunctionComponent<IconProps>;
  Error: FunctionComponent<IconProps>;
  Warning: FunctionComponent<IconProps>;
  Success: FunctionComponent<IconProps>;
  CircleNotch: FunctionComponent<IconProps>;
  Search: FunctionComponent<IconProps>;
};

const ReferIcon = Icon as IconComponent;
ReferIcon.AngleDown = IconAngleDown;
ReferIcon.AngleRight = IconAngleRight;
ReferIcon.Close = IconClose;
ReferIcon.Setting = IconSetting;
ReferIcon.Table = IconTable;
ReferIcon.Slider = IconSlider;
ReferIcon.Info = IconInfo;
ReferIcon.Error = IconError;
ReferIcon.Warning = IconWarning;
ReferIcon.Success = IconSuccess;
ReferIcon.CircleNotch = IconCircleNotch;
ReferIcon.Search = IconSearch;

export default ReferIcon;
