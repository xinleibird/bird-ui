import cxs from 'classnames';
import React, { FunctionComponent, ReactNode, useMemo } from 'react';
import { DefaultRootState, useDispatch, useSelector } from 'react-redux';
import Icon from '../Icon';
import Transition from '../Transition';
import { renderChildren } from './Menu';
import { toggleSubMenuShowIndex } from './store/actions';

export interface SubMenuProps {
  className?: string;
  index?: string;
  title: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
}

const SubMenu: FunctionComponent<SubMenuProps> = ({
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
    showIndex.findIndex((element) => {
      return element === index;
    }) === -1
      ? false
      : true;

  const subMenuClasses = cxs(className, 'menu-item', 'submenu', {
    disabled,
  });
  const subMenuChildrenClasses = cxs('submenu-item');
  const menuIconDrawer = cxs('menu-icon-drawer', {
    'rotate-90': subMenuOpened,
  });

  const dispatch = useDispatch();

  const rendered = renderChildren(children, index);

  return useMemo(() => {
    return (
      <li className={subMenuClasses}>
        <div
          className="submenu-title"
          onClick={(e) => {
            e.preventDefault();
            dispatch(toggleSubMenuShowIndex(index!));
          }}
        >
          {icon}
          {title}
          <Icon.AngleRight className={menuIconDrawer} />
        </div>
        <Transition in={subMenuOpened}>
          <ul className={subMenuChildrenClasses}>{rendered}</ul>
        </Transition>
      </li>
    );
  }, [
    subMenuClasses,
    icon,
    title,
    menuIconDrawer,
    subMenuOpened,
    subMenuChildrenClasses,
    rendered,
    dispatch,
    index,
  ]);
};

export default SubMenu;
