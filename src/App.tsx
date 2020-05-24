import React from 'react';
import Alert from './components/Alert';
import Button, { Link } from './components/Button';
import { IconAngleDown, IconSetting, IconTable, IconCircleNotch } from './components/Icon';
import Menu, { MenuItem, SubMenu } from './components/Menu';

function App() {
  return (
    <>
      <Button
        onClick={() => {
          console.log('hello');
        }}
        onLoading={async (setLoading) => {
          setLoading(true);
          const res = await fetch('https://dog.ceo/api/breeds/image/random');
          const json = await res.json();
          console.log(json);
          setLoading(false);
        }}
      >
        Default
      </Button>
      <Button
        btnType="primary"
        onLoading={async (setLoading) => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 3000);
        }}
      >
        Primary
      </Button>
      <Button btnType="secondary" loading>
        Secondary
      </Button>
      <Button btnType="danger">Danger</Button>
      <Link href="http://www.baidu.com" target="_blank">
        Link
      </Link>
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
      <Button size="small" loading>
        Default
      </Button>
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
      <Button size="large" loading>
        Default
      </Button>
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
      <IconAngleDown animate="spin" />
      <IconCircleNotch animate="spin" />
    </>
  );
}

export default App;
