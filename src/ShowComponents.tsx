import React, { FunctionComponent } from 'react';
import { Icon, Slider, Select, Date, Alert } from './main';

const ShowComponents: FunctionComponent = () => {
  return (
    <>
      <Alert message="Warnning, this is a Warning" />
      <Alert type="info" message="Warnning, this is a Warning" />
      <Alert type="warning" message="Warnning, this is a Warning" />
      <Alert type="error" message="Warnning, this is a Warning" />
      <Select size={8} icon={<Icon.Success />}>
        <Select.Option>hello1</Select.Option>
        <Select.Option>hello2</Select.Option>
        <Select.Option selected>hello3</Select.Option>
        <Select.Option>hello4</Select.Option>
        <Select.Option>hello5</Select.Option>
      </Select>
      <Date />
      <Date size={40} />
      <br />
      <br />
      <br />
      <br />
      <span>hello</span>
      <Slider range={10} />
    </>
  );
};

export default ShowComponents;
