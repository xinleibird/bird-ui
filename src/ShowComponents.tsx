import React, { FunctionComponent } from 'react';
import { Menu, Icon, Button } from './main';

const ShowComponents: FunctionComponent = () => {
  return (
    <>
      <Menu>
        <Menu.SubMenu
          title={
            <span>
              <Icon.Table />
              子菜单 1
            </span>
          }
        >
          <Menu.MenuItem>菜单项 1</Menu.MenuItem>
          <Menu.MenuItem>菜单项 2</Menu.MenuItem>
          <Menu.MenuItem>菜单项 3</Menu.MenuItem>
          <Menu.MenuItem>菜单项 4</Menu.MenuItem>
          <Menu.SubMenu title={<span>子菜单 1-1</span>}>
            <Menu.MenuItem>菜单项 1</Menu.MenuItem>
            <Menu.MenuItem>菜单项 2</Menu.MenuItem>
            <Menu.MenuItem>菜单项 3</Menu.MenuItem>
            <Menu.MenuItem>菜单项 4</Menu.MenuItem>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.SubMenu title={<span>子菜单 1</span>}>
          <Menu.MenuItem>菜单项 1</Menu.MenuItem>
          <Menu.MenuItem>菜单项 2</Menu.MenuItem>
          <Menu.MenuItem>菜单项 3</Menu.MenuItem>
          <Menu.MenuItem>菜单项 4</Menu.MenuItem>
          <Menu.SubMenu title={<span>子菜单 1-1</span>}>
            <Menu.MenuItem>菜单项 1</Menu.MenuItem>
            <Menu.MenuItem>菜单项 2</Menu.MenuItem>
            <Menu.MenuItem>菜单项 3</Menu.MenuItem>
            <Menu.MenuItem>菜单项 4</Menu.MenuItem>
          </Menu.SubMenu>
        </Menu.SubMenu>
      </Menu>
      <Menu direction="vertical">
        <Menu.SubMenu
          title={
            <span>
              <Icon.Info />
              子菜单 1
            </span>
          }
        >
          <Menu.MenuItem>菜单项 1</Menu.MenuItem>
          <Menu.MenuItem>菜单项 2</Menu.MenuItem>
          <Menu.MenuItem>菜单项 3</Menu.MenuItem>
          <Menu.MenuItem>菜单项 4</Menu.MenuItem>
          <Menu.SubMenu title={<span>子菜单 1-1</span>}>
            <Menu.MenuItem>菜单项 1</Menu.MenuItem>
            <Menu.MenuItem>菜单项 2</Menu.MenuItem>
            <Menu.MenuItem>菜单项 3</Menu.MenuItem>
            <Menu.MenuItem>菜单项 4</Menu.MenuItem>
            <Menu.SubMenu title={<span>子菜单 1-1</span>}>
              <Menu.MenuItem>菜单项 1</Menu.MenuItem>
              <Menu.MenuItem>菜单项 2</Menu.MenuItem>
              <Menu.MenuItem>菜单项 3</Menu.MenuItem>
              <Menu.MenuItem>菜单项 4</Menu.MenuItem>
            </Menu.SubMenu>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.SubMenu title={<span>子菜单 1</span>}>
          <Menu.MenuItem>菜单项 1</Menu.MenuItem>
          <Menu.MenuItem>菜单项 2</Menu.MenuItem>
          <Menu.MenuItem>菜单项 3</Menu.MenuItem>
          <Menu.MenuItem>菜单项 4</Menu.MenuItem>
          <Menu.SubMenu title={<span>子菜单 1-1</span>}>
            <Menu.MenuItem>菜单项 1</Menu.MenuItem>
            <Menu.MenuItem>菜单项 2</Menu.MenuItem>
            <Menu.MenuItem>菜单项 3</Menu.MenuItem>
            <Menu.MenuItem>菜单项 4</Menu.MenuItem>
          </Menu.SubMenu>
        </Menu.SubMenu>
      </Menu>
      <Button btnType="primary" loading>
        Hello
      </Button>
    </>
  );
};

export default ShowComponents;
