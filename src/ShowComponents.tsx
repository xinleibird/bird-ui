import React, { FunctionComponent } from 'react';
import Select, { Option } from './components/Select/Select';
import { Autocomplete } from './main';

const ShowComponents: FunctionComponent = () => {
  return (
    <>
      <Select>
        <Option>hello1</Option>
        <Option>hello2</Option>
        <Option selected>hello3</Option>
        <Option>hello4</Option>
        <Option>hello5</Option>
      </Select>
      <br />
      hello
      <br />
      <Autocomplete data={['a', 'b']} />
    </>
  );
};

export default ShowComponents;
