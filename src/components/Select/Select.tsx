import React, { FunctionComponent, SelectHTMLAttributes } from 'react';
// import { prefix, Input, List } from '../';
import { Input, List } from '../';

interface BaseSelectProps {
  className?: string;
  native?: boolean;
}

export type SelectProps = Partial<SelectHTMLAttributes<HTMLSelectElement> & BaseSelectProps>;

const Select: FunctionComponent<SelectProps> = ({ className, native, children }) => {
  return (
    <>
      <Input />
      <List.Ul>
        <List.Ul></List.Ul>
        <List.Li>hello</List.Li>
        <List.Li>hello</List.Li>
        <List.Li>hello</List.Li>
        <List.Li>hello</List.Li>
      </List.Ul>
    </>
  );
};

export default Select;
