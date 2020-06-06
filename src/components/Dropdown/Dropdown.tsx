import cxs from 'classnames';
import React, { FunctionComponent, HtmlHTMLAttributes, useEffect, useRef } from 'react';
import { prefix } from '../';

interface BaseDropdownProps {
  onClickOutside: (e: MouseEvent) => void;
}

export type DropdownProps = Partial<HtmlHTMLAttributes<HTMLDivElement> & BaseDropdownProps>;

const Dropdown: FunctionComponent<DropdownProps> = ({
  className,
  onClickOutside = () => {},
  children,
  ...args
}) => {
  const ref = useRef(null as any);

  useEffect(() => {
    const documentClickListener = (e: MouseEvent) => {
      const div = ref.current as HTMLDivElement;
      const tar = e.target as HTMLElement;

      if (div.contains(tar)) {
        return;
      }
      onClickOutside(e);
    };
    window.addEventListener('click', documentClickListener);

    return () => {
      window.removeEventListener('click', documentClickListener);
    };
  }, [onClickOutside]);

  const classes = cxs(`${prefix}-dropdown`, className);
  return (
    <div
      className={classes}
      ref={(r) => {
        ref.current = r;
      }}
      {...args}
    >
      {children}
    </div>
  );
};

export default Dropdown;
