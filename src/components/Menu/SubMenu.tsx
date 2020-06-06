import cxs from 'classnames';
import React, { FunctionComponent, ReactElement, ReactNode, useMemo } from 'react';
import { DefaultRootState, useDispatch, useSelector } from 'react-redux';
import { Icon, renderChildren, Transition } from '../';
import { toggleSubMenuShowIndex } from './store/actions';

export interface SubMenuProps {
  className?: string;
  index?: string;
  title: string | ReactElement;
  disabled?: boolean;
  icon?: ReactElement;
  children?: ReactNode;
  readonly renderSign?: 'SubMenu';
}

const SubMenu: FunctionComponent<SubMenuProps> = ({
  className,
  index = '',
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

  const subMenuClasses = cxs('submenu', className, {
    disabled,
    opened: subMenuOpened,
  });
  const subMenuChildrenClasses = cxs('submenu-item');
  const menuIconDrawer = cxs('menu-icon-drawer', {
    'rotate-90': subMenuOpened,
  });

  const dispatch = useDispatch();

  const rendered = renderChildren(children, ['MenuItem', 'SubMenu'], index);

  return useMemo(() => {
    return (
      <li className={subMenuClasses}>
        <div
          className="submenu-title"
          onClick={(e) => {
            e.preventDefault();
            dispatch(toggleSubMenuShowIndex(index));
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

SubMenu.defaultProps = {
  renderSign: 'SubMenu',
};

export default SubMenu;
