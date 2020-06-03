import cxs from 'classnames';
import React, { CSSProperties, FunctionComponent, ReactElement, ReactNode } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { createStore } from 'redux';
import prefix from '../prefix';
import { MenuItemProps } from './MenuItem';
import { setItemActiveIndex, toggleSubMenuShowIndex, closeAllSubMenu } from './store/actions';
import reducers from './store/reducers';
import { SubMenuProps } from './SubMenu';
import Dropdown from '../Dropdown';

export const renderChildren = (children: ReactNode, index = '') => {
  return React.Children.map(children, (child, i) => {
    const itemElement = child as ReactElement<SubMenuProps & MenuItemProps>;
    if (
      itemElement.props.menuCheckId === 'MenuItem' ||
      itemElement.props.menuCheckId === 'SubMenu'
    ) {
      return React.cloneElement(itemElement, {
        index: index ? `${index}-${i}` : `${i}`,
        key: index ? `${index}-${i}` : `${i}`,
      });
    }
  });
};

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
  const classes = cxs(className, `${prefix}-menu`, {
    vertical: direction === 'vertical',
    horizontal: direction === 'horizontal',
    sticky,
  });

  const rendered = renderChildren(children);

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
