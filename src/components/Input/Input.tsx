import cxs from 'classnames';
import React, { FunctionComponent, InputHTMLAttributes, ReactElement, useMemo } from 'react';
import prefix from '../prefix';

interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  size?: 'large' | 'small';
  icon?: ReactElement;
  disabled?: boolean;
  prepand?: string | ReactElement;
  append?: string | ReactElement;
}

const Input: FunctionComponent<InputProps> = ({
  className,
  size,
  icon,
  disabled,
  prepand,
  append,
  ...restArgs
}) => {
  const groupClasses = cxs(className, {
    [`${prefix}-input-group`]: prefix,
    disabled,
  });
  const inputClasses = cxs({
    [`${prefix}-input`]: prefix,
    'input-lg': size === 'large',
    'input-sm': size === 'small',
  });
  const prepandClasses = cxs('prepand', {
    'prepand-lg': size === 'large',
    'prepand-sm': size === 'small',
  });
  const appendClasses = cxs('append', {
    'append-lg': size === 'large',
    'append-sm': size === 'small',
  });
  return useMemo(() => {
    return (
      <span className={groupClasses}>
        {prepand && <button className={prepandClasses}>{prepand}</button>}
        <span className={`icon-anchor${size ? '-' + size : ''}`}>
          <input className={inputClasses} {...restArgs} />
          {icon}
        </span>
        {append && <button className={appendClasses}>{append}</button>}
      </span>
    );
  }, [
    append,
    appendClasses,
    groupClasses,
    icon,
    inputClasses,
    prepand,
    prepandClasses,
    restArgs,
    size,
  ]);
};

export default Input;
