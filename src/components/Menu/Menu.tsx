import cxs from 'classnames';
import React, {
  CSSProperties,
  FunctionComponent,
  FunctionComponentElement,
  ReactNode,
} from 'react';
import { Provider, useDispatch } from 'react-redux';
import { createStore } from 'redux';
import prefix from '../prefix';
import { MenuItemProps } from './MenuItem';
import { setItemActiveIndex, toggleSubMenuShowIndex } from './store/actions';
import reducers from './store/reducers';
import { SubMenuProps } from './SubMenu';

export const renderChildren = (children: ReactNode, index = '') => {
  return React.Children.map(children, (child, i) => {
    const itemElement = (child as unknown) as FunctionComponentElement<MenuItemProps>;
    if (itemElement.type.name === 'MenuItem' || itemElement.type.displayName === 'MenuItem') {
      return React.cloneElement(itemElement, {
        index: index ? `${index}-${i}` : `${i}`,
        key: index ? `${index}-${i}` : `${i}`,
      });
    }

    const subElement = (child as unknown) as FunctionComponentElement<SubMenuProps>;
    if (subElement.type.name === 'SubMenu' || itemElement.type.displayName === 'SubMenu') {
      return React.cloneElement(subElement, {
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
