import cxs from 'classnames';
import React, { useState, FunctionComponent } from 'react';
import { IconClose, IconError, IconInfo, IconSuccess, IconWarning } from '../Icon';
import prefix from '../prefix';
import Transition from '../Transition';

interface AlertProps {
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

  const classes = cxs(className, `${prefix}-alert`, {
    [`alert-${type}`]: type,
  });
  let alertIcon;

  switch (type) {
    case 'success':
      alertIcon = <IconSuccess className="alert-icon-success" />;
      break;

    case 'info':
      alertIcon = <IconInfo className="alert-icon-info" />;
      break;

    case 'warning':
      alertIcon = <IconWarning className="alert-icon-warning" />;
      break;

    case 'error':
      alertIcon = <IconError className="alert-icon-error" />;
      break;

    default:
      alertIcon = <IconSuccess className="alert-icon-success" />;
      break;
  }

  return (
    <Transition in={couldShow}>
      <div className={classes}>
        {alertIcon}
        <div className="alert-message-wrapper">
          {closeable && (
            <IconClose
              className="alert-close-btn"
              onClick={() => {
                onClose && onClose();
                setShow(false);
              }}
              data-testid="alert-close-btn"
            />
          )}
          {message}
          {description && <div className="alert-desc">{description}</div>}
        </div>
      </div>
    </Transition>
  );
};

export default Alert;
