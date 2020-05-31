import cxs from 'classnames';
import React, { FunctionComponent, HTMLAttributes, LiHTMLAttributes, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { updateSuggestions } from '../AutoComplete/store/actions';
import prefix from '../prefix';

export const Ul: FunctionComponent<HTMLAttributes<HTMLElement>> = ({
  className,
  children,
  ...args
}) => {
  const classes = cxs(className, `${prefix}-ul`);
  return useMemo(() => {
    return (
      <ul className={classes} {...args}>
        {children}
      </ul>
    );
  }, [classes, args, children]);
};

export const Li: FunctionComponent<LiHTMLAttributes<HTMLElement>> = ({
  className,
  children,
  ...args
}) => {
  const classes = cxs(className, `${prefix}-li`);
  return useMemo(() => {
    return (
      <li className={classes} {...args}>
        {children}
      </li>
    );
  }, [classes, args, children]);
};

export interface ListItem {
  key: string;
  value: string;
}

export interface ListProps {
  className?: string;
  data: ListItem[];
}

const List: FunctionComponent<ListProps> = ({ className, data = [], ...args }) => {
  const classes = cxs(className, `${prefix}-list`);

  const dispatch = useDispatch();

  return (
    <Ul className={classes} {...args}>
      {data.map((item) => {
        return (
          <Li
            onClick={(e) => {
              dispatch(updateSuggestions(item.value));
            }}
            key={item.key}
          >
            {item.value}
          </Li>
        );
      })}
    </Ul>
  );
};

export default List;
