import React, { FunctionComponent, SelectHTMLAttributes } from 'react';
import { Input, List, renderChildren } from '../';
// import { Input, List } from '../';

interface BaseSelectProps {
  className?: string;
  native?: boolean;
}

export type SelectProps = Partial<SelectHTMLAttributes<HTMLSelectElement> & BaseSelectProps>;

const Select: FunctionComponent<SelectProps> = ({ className, native, children }) => {
  // const classes = cxs(`${prefix}-select`, className);
  const rendered = renderChildren(children, ['Ul', 'Li']);
  return (
    <>
      <Input />
      <List.Ul>{rendered}</List.Ul>
      {/* <List.Ul className={classes}>{rendered}</List.Ul> */}
    </>
  );
};

export default Select;
