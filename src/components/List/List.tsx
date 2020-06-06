import cxs from 'classnames';
import React, { FunctionComponent, HTMLAttributes, LiHTMLAttributes, useMemo } from 'react';
import { prefix } from '../';

export type UlProps = HTMLAttributes<HTMLElement>;
export const Ul: FunctionComponent<UlProps> = ({ className, children, ...args }) => {
  const classes = cxs(`${prefix}-ul`, className);
  return useMemo(() => {
    return (
      <ul className={classes} {...args}>
        {children}
      </ul>
    );
  }, [classes, args, children]);
};

export type LiProps = LiHTMLAttributes<HTMLElement>;
export const Li: FunctionComponent<LiProps> = ({ className, children, ...args }) => {
  const classes = cxs(`${prefix}-li`, className);
  return useMemo(() => {
    return (
      <li className={classes} {...args}>
        {children}
      </li>
    );
  }, [classes, args, children]);
};

export interface ListItemType {
  key: string;
  value: string;
}

export interface ListProps {
  className?: string;
  data: ListItemType[];
  clickMethod?: (value: string) => any;
}

const List: FunctionComponent<ListProps> = ({
  className,
  data = [],
  clickMethod = () => {},
  ...args
}) => {
  const classes = cxs(`${prefix}-list`, className);

  return (
    <Ul className={classes} {...args}>
      {data.map((item) => {
        return (
          <Li
            onClickCapture={(e) => {
              clickMethod(item.value);
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
