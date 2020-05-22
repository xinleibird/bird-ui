import cxs from 'classnames';
import React, {
  CSSProperties,
  FunctionComponent,
  FunctionComponentElement,
  ReactNode,
  useMemo,
} from 'react';
import { DefaultRootState, Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';
import { IconAngleDown, IconAngleRight } from '../Icon';
import { prefix } from '../index';
import Transition from '../Transition';
import './Menu.scss';
import { setItemActiveIndex, toggleSubMenuShowIndex } from './store/actions';
import reducers from './store/reducers';

const renderChildren = (children: ReactNode, index = '') => {
  return React.Children.map(children, (child, i) => {
    const itemElement = (child as unknown) as FunctionComponentElement<MenuItemProps>;
    if (itemElement.type.name === 'MenuItem') {
      return React.cloneElement(itemElement, {
        index: index ? `${index}-${i}` : `${i}`,
        key: index ? `${index}-${i}` : `${i}`,
      });
    }

    const subElement = (child as unknown) as FunctionComponentElement<SubMenuProps>;
    if (subElement.type.name === 'SubMenu') {
      return React.cloneElement(subElement, {
        index: index ? `${index}-${i}` : `${i}`,
        key: index ? `${index}-${i}` : `${i}`,
      });
    }
  });
};

interface MenuItemProps {
  className?: string;
  index?: string;
  disabled?: boolean;
  style?: CSSProperties;
  icon?: ReactNode;
  children: string;
}

export const MenuItem: FunctionComponent<MenuItemProps> = ({
  className,
  disabled = false,
  children,
  style,
  icon,
  index,
}) => {
  const activeIndex = useSelector(
    (state: DefaultRootState & { index: { active: string } }) => {
      return state.index.active;
    }
  );
  const dispatch = useDispatch();

  const classes = cxs(className, 'menu-item', {
    disabled: disabled,
    active: activeIndex === index,
  });

  return useMemo(() => {
    return (
      <li
        onClick={e => {
          e.preventDefault();
          if (!disabled) {
            dispatch(setItemActiveIndex(index!));
          }
        }}
        className={classes}
        style={style}
      >
        {icon}
        {children}
      </li>
    );
  }, [children, classes, disabled, dispatch, icon, index, style]);
};

interface MenuProps {
  className?: string;
  defaultIndex?: string;
  defaultSubMenuIndex?: string | string[];
  direction?: 'horizontal' | 'vertical';
  sticky?: boolean;
  style?: CSSProperties;
  children: ReactNode;
}

const MenuInner: FunctionComponent<MenuProps> = ({
  className,
  direction = 'horizontal',
  sticky,
  style,
  defaultIndex,
  defaultSubMenuIndex,
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
      defaultSubMenuIndex.forEach(ele => {
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

interface SubMenuProps {
  className?: string;
  index?: string;
  title: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
}

export const SubMenu: FunctionComponent<SubMenuProps> = ({
  className,
  index,
  title,
  disabled,
  icon,
  children,
}) => {
  const showIndex = useSelector((state: DefaultRootState & { index: { show: string[] } }) => {
    return state.index.show;
  });

  let subMenuOpened =
    showIndex.findIndex(element => {
      return element === index;
    }) === -1
      ? false
      : true;
  const subMenuClasses = cxs(className, 'menu-item', 'submenu', {
    disabled,
  });
  const subMenuChildrenClasses = cxs('submenu-item');

  const dispatch = useDispatch();

  const rendered = renderChildren(children, index);

  return useMemo(() => {
    return (
      <li className={subMenuClasses}>
        <div
          className="submenu-title"
          onClick={e => {
            e.preventDefault();
            dispatch(toggleSubMenuShowIndex(index!));
          }}
        >
          {icon}
          {title}
          {subMenuOpened ? (
            <IconAngleDown className="menu-icon-drawer" />
          ) : (
            <IconAngleRight className="menu-icon-drawer" />
          )}
        </div>
        <Transition in={subMenuOpened}>
          <ul className={subMenuChildrenClasses}>{rendered}</ul>
        </Transition>
      </li>
    );
  }, [
    dispatch,
    icon,
    index,
    rendered,
    subMenuChildrenClasses,
    subMenuClasses,
    title,
    subMenuOpened,
  ]);
};

const Menu: FunctionComponent<MenuProps> = ({ ...args }) => {
  const store = createStore(reducers);
  return (
    <Provider store={store}>
      <MenuInner {...args} />
    </Provider>
  );
};

export default Menu;
