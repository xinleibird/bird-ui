import { FunctionComponent } from 'react';
import Icon, { IconProps } from './Icon';
import IconAngleDown from './icons/IconAngleDown';
import IconAngleLeft from './icons/IconAngleLeft';
import IconAngleRight from './icons/IconAngleRight';
import IconAngleUp from './icons/IconAngleUp';
import IconCalendar from './icons/IconCalendar';
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
import IconUndo from './icons/IconUndo';

export type { IconProps };

type IconComponent = FunctionComponent<IconProps> & {
  AngleUp: FunctionComponent<IconProps>;
  AngleRight: FunctionComponent<IconProps>;
  AngleDown: FunctionComponent<IconProps>;
  AngleLeft: FunctionComponent<IconProps>;
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
  Calendar: FunctionComponent<IconProps>;
  Undo: FunctionComponent<IconProps>;
};

const ReferIcon = Icon as IconComponent;
ReferIcon.AngleUp = IconAngleUp;
ReferIcon.AngleRight = IconAngleRight;
ReferIcon.AngleDown = IconAngleDown;
ReferIcon.AngleLeft = IconAngleLeft;
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
ReferIcon.Calendar = IconCalendar;
ReferIcon.Undo = IconUndo;

export default ReferIcon;
