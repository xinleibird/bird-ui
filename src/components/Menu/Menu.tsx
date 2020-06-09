import cxs from 'classnames';
import React, { CSSProperties, FunctionComponent, ReactNode } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { createStore } from 'redux';
import { renderChildren } from '../libs';
import { Dropdown } from '../main';
import prefix from '../prefix';
import { closeAllSubMenu, setItemActiveIndex, toggleSubMenuShowIndex } from './store/actions';
import reducers from './store/reducers';

export interface MenuProps {
  className?: string;
  defaultIndex?: string;
  defaultSubMenuIndex?: string | string[];
  direction?: 'horizontal' | 'vertical';
  sticky?: boolean;
  style?: CSSProperties;
  children: ReactNode;
}

const Menu: FunctionComponent<MenuProps> = ({
  className,
  direction = 'horizontal',
  sticky,
  style,
  defaultIndex = '',
  defaultSubMenuIndex = '',
  children,
}) => {
  const dispatch = useDispatch();

  if (defaultIndex) {
    dispatch(setItemActiveIndex(defaultIndex));
  }

  if (defaultSubMenuIndex) {
    if (typeof defaultSubMenuIndex === 'string') {
      dispatch(toggleSubMenuShowIndex(defaultSubMenuIndex));
    } else {
      defaultSubMenuIndex.forEach((ele) => {
        dispatch(toggleSubMenuShowIndex(ele));
      });
    }
  }
  const classes = cxs(`${prefix}-menu`, className, {
    vertical: direction === 'vertical',
    horizontal: direction === 'horizontal',
    sticky,
  });

  const rendered = renderChildren(children, ['MenuItem', 'SubMenu']);

  if (direction === 'horizontal') {
    return (
      <Dropdown
        className={sticky ? 'sticky' : ''}
        onClickOutside={(e) => {
          dispatch(closeAllSubMenu());
        }}
      >
        <ul className={classes} style={style}>
          {rendered}
        </ul>
      </Dropdown>
    );
  }

  return (
    <ul className={classes} style={style}>
      {rendered}
    </ul>
  );
};

const MenuWrapper: FunctionComponent<MenuProps> = ({ ...args }) => {
  const store = createStore(reducers);
  return (
    <Provider store={store}>
      <Menu {...args} />
    </Provider>
  );
};

export default MenuWrapper;
