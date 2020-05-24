import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import Menu from './index';

const { MenuItem, SubMenu } = Menu;

describe('test Menu component', () => {
  it('test <Menu> <SubMenu> <MenuItem> should be render by default', () => {
    render(
      <Menu>
        <SubMenu title={<span>SubMenu 1</span>}>
          <MenuItem>MenuItem 1-1</MenuItem>
          <MenuItem>MenuItem 1-2</MenuItem>
          <MenuItem>MenuItem 1-3</MenuItem>
        </SubMenu>
        <SubMenu title={<span>SubMenu 2</span>}>
          <MenuItem>MenuItem 2-1</MenuItem>
          <MenuItem>MenuItem 2-2</MenuItem>
          <MenuItem>MenuItem 2-3</MenuItem>
        </SubMenu>
      </Menu>
    );
    fireEvent.click(screen.getByText('SubMenu 1'));
    fireEvent.click(screen.getByText('MenuItem 1-1'));
    fireEvent.click(screen.getByText('MenuItem 1-3'));
    expect(screen.getByText('MenuItem 1-3')).toHaveClass('active');
  });
});
