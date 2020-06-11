import { FunctionComponent } from 'react';

import Select, { Option, SelectProps, OptionProps } from './Select';

export type { OptionProps, SelectProps };

type SelectComponent = FunctionComponent<SelectProps> & {
  Option: FunctionComponent<OptionProps>;
};

const ReferSelect = Select as SelectComponent;

ReferSelect.Option = Option;

export default ReferSelect;
