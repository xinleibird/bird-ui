import cxs from 'classnames';
import React, { FunctionComponent, useMemo, useState } from 'react';
import { Icon, prefix, Transition } from '../';

export interface AlertProps {
  className?: string;
  message?: string;
  description?: string;
  type?: 'success' | 'info' | 'warning' | 'error';
  closeable?: boolean;
  banner?: boolean;
  onClose?: () => void;
}

const Alert: FunctionComponent<AlertProps> = ({
  className,
  message,
  description,
  type = 'success',
  closeable,
  banner = false,
  onClose,
}) => {
  const [couldShow, setShow] = useState(true);

  const classes = cxs(`${prefix}-alert`, className, {
    [`alert-${type}`]: type,
  });
  let alertIcon: {} | null | undefined;

  switch (type) {
    case 'success':
      alertIcon = <Icon.Success className="alert-icon-success" />;
      break;

    case 'info':
      alertIcon = <Icon.Info className="alert-icon-info" />;
      break;

    case 'warning':
      alertIcon = <Icon.Warning className="alert-icon-warning" />;
      break;

    case 'error':
      alertIcon = <Icon.Error className="alert-icon-error" />;
      break;

    default:
      alertIcon = <Icon.Success className="alert-icon-success" />;
      break;
  }

  return useMemo(() => {
    return (
      <Transition in={couldShow}>
        <div className={classes}>
          {alertIcon}
          <div className="alert-message-wrapper">
            {closeable && (
              <Icon.Close
                data-testid="alert-close-btn"
                className="alert-close-btn"
                onClick={() => {
                  onClose?.();
                  setShow(false);
                }}
              />
            )}
            {message}
            {description && <div className="alert-desc">{description}</div>}
          </div>
        </div>
      </Transition>
    );
  }, [alertIcon, classes, closeable, couldShow, description, message, onClose]);
};

export default Alert;
