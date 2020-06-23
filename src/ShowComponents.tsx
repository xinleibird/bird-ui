import React, { FunctionComponent } from 'react';
import Date from './components/Date/Date';
import Select, { Option } from './components/Select/Select';
import { Icon, Slider } from './main';

const ShowComponents: FunctionComponent = () => {
  return (
    <>
      <Select size={8} icon={<Icon.Success />}>
        <Option>hello1</Option>
        <Option>hello2</Option>
        <Option selected>hello3</Option>
        <Option>hello4</Option>
        <Option>hello5</Option>
      </Select>
      <Date />
      <Date size={40} />
      <br />
      <br />
      <br />
      <br />
      <span>hello</span>
      <Slider defaultValue={10} range={100} />
    </>
  );
};

export default ShowComponents;
