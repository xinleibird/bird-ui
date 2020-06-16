import cxs from 'classnames';
import React, {
  FunctionComponent,
  FunctionComponentElement,
  InputHTMLAttributes,
  ReactElement,
  useMemo,
} from 'react';
import { renderElement } from '../../libs';
import Icon, { IconProps } from '../Icon';
import { prefix } from '../prefix';

interface BaseInputProps extends Partial<InputHTMLAttributes<HTMLElement>> {
  inputSize?: 'large' | 'small';
  icon?: ReactElement;
  iconBtn?: ReactElement;
  iconBtnOnClick?: () => void;
  disabled?: boolean;
  prepand?: string | ReactElement;
  append?: string | ReactElement;
  onInputReset?: () => void;
}

export type InputProps = Partial<InputHTMLAttributes<HTMLElement>> & BaseInputProps;

const Input: FunctionComponent<InputProps> = ({
  className,
  size,
  inputSize,
  icon,
  iconBtn,
  iconBtnOnClick,
  disabled,
  prepand,
  append,
  onInputReset,
  ...restArgs
}) => {
  const groupClasses = cxs(`${prefix}-input-group`, {
    disabled,
  });

  const inputClasses = cxs(`${prefix}-input`, className, {
    'input-lg': inputSize === 'large',
    'input-sm': inputSize === 'small',
    'has-icon': icon || iconBtn,
  });

  const prepandClasses = cxs('prepand', {
    'prepand-lg': inputSize === 'large',
    'prepand-sm': inputSize === 'small',
  });

  const appendClasses = cxs('append', {
    'append-lg': inputSize === 'large',
    'append-sm': inputSize === 'small',
  });

  const IconOrigin = icon as FunctionComponentElement<IconProps>;
  const IconBtn = iconBtn as FunctionComponentElement<IconProps>;

  const iconAttr = inputSize ? { size: inputSize } : {};
  const iconBtnAttr = inputSize ? { size: inputSize } : {};

  const renderedIcon = icon && renderElement(IconOrigin, ['Icon'], iconAttr);
  const renderedIconBtn = iconBtn && renderElement(IconBtn, ['Icon'], iconBtnAttr);

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
          {onInputReset && (
            <span
              className={`${prefix}-input-reset`}
              onClick={() => {
                onInputReset();
              }}
            >
              <Icon.Undo size="tinny" />
            </span>
          )}
          {renderedIconBtn ? (
            <span className={`${prefix}-icon-btn`} onClick={iconBtnOnClick}>
              {renderedIconBtn}
            </span>
          ) : (
            renderedIcon
          )}
        </span>
        {append && <button className={appendClasses}>{append}</button>}
      </span>
    );
  }, [
    append,
    appendClasses,
    groupClasses,
    iconBtnOnClick,
    inputClasses,
    inputSize,
    onInputReset,
    prepand,
    prepandClasses,
    renderedIcon,
    renderedIconBtn,
    restArgs,
    size,
  ]);
};

export default Input;
