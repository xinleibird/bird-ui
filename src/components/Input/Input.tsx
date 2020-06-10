import cxs from 'classnames';
import React, {
  FunctionComponent,
  FunctionComponentElement,
  InputHTMLAttributes,
  ReactElement,
  useMemo,
} from 'react';
import { renderChildren } from '../../libs';
import { IconProps } from '../Icon';
import { prefix } from '../prefix';

interface BaseInputProps extends Partial<InputHTMLAttributes<HTMLElement>> {
  inputSize?: 'large' | 'small';
  icon?: ReactElement;
  disabled?: boolean;
  prepand?: string | ReactElement;
  append?: string | ReactElement;
}

export type InputProps = Partial<InputHTMLAttributes<HTMLElement>> & BaseInputProps;

const Input: FunctionComponent<InputProps> = ({
  className,
  size,
  inputSize,
  icon,
  disabled,
  prepand,
  append,
  ...restArgs
}) => {
  const groupClasses = cxs(`${prefix}-input-group`, className, {
    disabled,
  });

  const inputClasses = cxs({
    [`${prefix}-input`]: prefix,
    'input-lg': inputSize === 'large',
    'input-sm': inputSize === 'small',
  });

  const prepandClasses = cxs('prepand', {
    'prepand-lg': inputSize === 'large',
    'prepand-sm': inputSize === 'small',
  });

  const appendClasses = cxs('append', {
    'append-lg': inputSize === 'large',
    'append-sm': inputSize === 'small',
  });

  const Icon = icon as FunctionComponentElement<IconProps>;
  const iconAttr = inputSize ? { size: inputSize } : {};

  const renderedIcon = icon && renderChildren(Icon, ['Icon'], iconAttr);

  return useMemo(() => {
    return (
      <span className={groupClasses}>
        {prepand && <button className={prepandClasses}>{prepand}</button>}
        <span className={`icon-anchor${inputSize ? '-' + inputSize : ''}`}>
          <input
            className={inputClasses}
            size={size}
            onSubmitCapture={(e) => {
              e.preventDefault();
            }}
            {...restArgs}
          />
          {renderedIcon}
        </span>
        {append && <button className={appendClasses}>{append}</button>}
      </span>
    );
  }, [
    groupClasses,
    prepand,
    prepandClasses,
    inputSize,
    inputClasses,
    size,
    restArgs,
    renderedIcon,
    append,
    appendClasses,
  ]);
};

export default Input;
