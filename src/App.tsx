import React from 'react';
import Alert from './components/Alert';
import Button, { Link } from './components/Button';
import { IconAngleDown, IconSetting, IconTable } from './components/Icon';
import Menu, { MenuItem, SubMenu } from './components/Menu';

function App() {
  return (
    <>
      <Button>Default</Button>
      <Button btnType="primary">Primary</Button>
      <Button btnType="secondary">Secondary</Button>
      <Button btnType="danger">Danger</Button>
      <Link>Link</Link>
      <br />
      <Button disabled>Default</Button>
      <Button disabled btnType="primary">
        Primary
      </Button>
      <Button disabled btnType="secondary">
        Secondary
      </Button>
      <Button disabled btnType="danger">
        Danger
      </Button>
      <Link disabled>Link</Link>
      <br />
      <Button size="small">Default</Button>
      <Button size="small" btnType="primary">
        Primary
      </Button>
      <Button size="small" btnType="secondary">
        Secondary
      </Button>
      <Button size="small" btnType="danger">
        Danger
      </Button>
      <Link size="small">Link</Link>
      <br />
      <Button size="small" disabled>
        Default
      </Button>
      <Button size="small" disabled btnType="primary">
        Primary
      </Button>
      <Button size="small" disabled btnType="secondary">
        Secondary
      </Button>
      <Button size="small" disabled btnType="danger">
        Danger
      </Button>
      <Link size="small" disabled>
        Link
      </Link>
      <br />
      <Button size="large">Default</Button>
      <Button size="large" btnType="primary">
        Primary
      </Button>
      <Button size="large" btnType="secondary">
        Secondary
      </Button>
      <Button size="large" btnType="danger">
        Danger
      </Button>
      <Link size="large">Link</Link>
      <br />
      <Button size="large" disabled>
        Default
      </Button>
      <Button size="large" disabled btnType="primary">
        Primary
      </Button>
      <Button size="large" disabled btnType="secondary">
        Secondary
      </Button>
      <Button size="large" disabled btnType="danger">
        Danger
      </Button>
      <Link size="large" disabled>
        Link
      </Link>
      <Menu direction="horizontal" defaultIndex="1" sticky>
        <MenuItem disabled>Item 1</MenuItem>
        <SubMenu title={<span>SUB 1</span>} icon={<IconTable />}>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 1</MenuItem>
          <SubMenu title={<span>SUB 1</span>}>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 1</MenuItem>
            <SubMenu title={<span>SUB 1</span>}>
              <MenuItem>Item 1</MenuItem>
              <MenuItem>Item 1</MenuItem>
              <MenuItem>Item 1</MenuItem>
            </SubMenu>
          </SubMenu>
        </SubMenu>
        <SubMenu title={<span>SUB 1</span>}>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 1</MenuItem>
          <SubMenu title={<span>SUB 1</span>}>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 1</MenuItem>
            <SubMenu title={<span>SUB 1</span>}>
              <MenuItem>Item 1</MenuItem>
              <MenuItem>Item 1</MenuItem>
              <MenuItem>Item 1</MenuItem>
            </SubMenu>
          </SubMenu>
        </SubMenu>
      </Menu>
      <Menu direction="vertical" defaultIndex="1">
        <MenuItem>Item 1</MenuItem>
        <MenuItem icon={<IconSetting />}>SUB 1</MenuItem>
        <SubMenu title={<span>SUB 1</span>} icon={<IconSetting />}>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 1</MenuItem>
          <SubMenu title={<span>SUB 1</span>}>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 1</MenuItem>
            <SubMenu title={<span>SUB 1</span>}>
              <MenuItem>Item 1</MenuItem>
              <MenuItem>Item 1</MenuItem>
              <MenuItem>Item 1</MenuItem>
            </SubMenu>
          </SubMenu>
        </SubMenu>
        <SubMenu title={<span>SUB 1</span>}>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 1</MenuItem>
          <SubMenu title={<span>SUB 1</span>}>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 1</MenuItem>
            <SubMenu title={<span>SUB 1</span>}>
              <MenuItem>Item 1</MenuItem>
              <MenuItem>Item 1</MenuItem>
              <MenuItem>Item 1</MenuItem>
            </SubMenu>
          </SubMenu>
        </SubMenu>
      </Menu>
      <Alert message="注意，成功了" description="hehf" closeable />
      <Alert message="注意，成功了" description="hehf" type="info" />
      <Alert message="注意，成功了" description="hehf" type="warning" />
      <Alert message="注意，成功了" description="hehf" type="error" />
      <br />
      <IconAngleDown size="small" />
    </>
  );
}

export default App;
