import cxs from 'classnames';
import React, { CSSProperties, FunctionComponent, ReactElement, useMemo } from 'react';
import { DefaultRootState, useDispatch, useSelector } from 'react-redux';
import { setItemActiveIndex } from './store/actions';

export interface MenuItemProps {
  className?: string;
  index?: string;
  disabled?: boolean;
  style?: CSSProperties;
  icon?: ReactElement;
  children: string;
}

const MenuItem: FunctionComponent<MenuItemProps> = ({
  className,
  disabled = false,
  children,
  style,
  icon,
  index = '',
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
        onClick={(e) => {
          e.preventDefault();
          if (!disabled) {
            dispatch(setItemActiveIndex(index));
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

export default MenuItem;
