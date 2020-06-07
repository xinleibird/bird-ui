import React, { FunctionComponent } from 'react';
import { Select, List, Autocomplete, Menu } from './main';

const test = [
  {
    key: '1',
    node: (
      <>
        <span>hello: </span>
        <span>ok</span>
      </>
    ),
  },
  {
    key: '1',
    node: (
      <>
        <span>hello: </span>
        <span>ok</span>
      </>
    ),
  },
];
const ShowComponents: FunctionComponent = () => {
  return (
    <>
      <Autocomplete data={['a', 'ab', 'abc']} />
      <Select>
        <List.Ul>
          <List.Li>hello</List.Li>
          <List.Li>hello</List.Li>
          <List.Li>hello</List.Li>
          <List.Li>hello</List.Li>
        </List.Ul>
      </Select>

      <Menu>
        <p>1</p>
        <Menu.SubMenu title="hello">
          <span>1</span>
          <Menu.MenuItem>hello</Menu.MenuItem>
          <Menu.MenuItem>hello</Menu.MenuItem>
          <Menu.MenuItem>hello</Menu.MenuItem>
          <Menu.MenuItem>hello</Menu.MenuItem>
          <Menu.MenuItem>hello</Menu.MenuItem>
        </Menu.SubMenu>
      </Menu>
      <Menu direction="vertical">
        <p>1</p>
        <Menu.SubMenu title="hello">
          <span>1</span>
          <Menu.MenuItem>hello</Menu.MenuItem>
          <Menu.MenuItem>hello</Menu.MenuItem>
          <Menu.MenuItem>hello</Menu.MenuItem>
          <Menu.MenuItem>hello</Menu.MenuItem>
          <Menu.MenuItem>hello</Menu.MenuItem>
        </Menu.SubMenu>
      </Menu>
      <List data={test} />
    </>
  );
};

export default ShowComponents;
