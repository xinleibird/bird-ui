import cxs from 'classnames';
import React, {
  FunctionComponent,
  HTMLAttributes,
  LiHTMLAttributes,
  ReactNode,
  useMemo,
} from 'react';
import { prefix } from '../prefix';

interface BaseUlProps {
  readonly rendersign?: string;
}

export type UlProps = Partial<HTMLAttributes<HTMLElement> & BaseUlProps>;
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

Ul.defaultProps = {
  rendersign: 'Ul',
};

interface BaseLiProps {
  readonly rendersign?: string;
}

export type LiProps = Partial<LiHTMLAttributes<HTMLElement> & BaseLiProps>;
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

Li.defaultProps = {
  rendersign: 'Li',
};

export interface ListItemType {
  key: string;
  node: ReactNode;
}

export interface ListProps {
  className?: string;
  data: ListItemType[];
  clickMethod?: (item: ListItemType) => any;
}

const List: FunctionComponent<ListProps> = ({
  className,
  data,
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
              clickMethod(item);
            }}
            key={item.key}
          >
            {item.node}
          </Li>
        );
      })}
    </Ul>
  );
};

export default List;
