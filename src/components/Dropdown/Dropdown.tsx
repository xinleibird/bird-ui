import React, { FunctionComponent, useEffect, useRef, HtmlHTMLAttributes } from 'react';
import prefix from '../prefix';

interface BaseDropdownProps {
  onClickOutside?: (e: MouseEvent) => void;
}

export type DropdownProps = Partial<HtmlHTMLAttributes<HTMLDivElement> & BaseDropdownProps>;

const Dropdown: FunctionComponent<DropdownProps> = ({
  onClickOutside = () => {},
  children,
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

  return (
    <div
      className={`${prefix}-dropdown`}
      ref={(r) => {
        ref.current = r;
      }}
    >
      {children}
    </div>
  );
};

export default Dropdown;
