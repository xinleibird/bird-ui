import cxs from 'classnames';
import React, { useState } from 'react';
import { IconClose } from '../Icon';
import { prefix } from '../index';
import './Alert.scss';

interface AlertProps {
  className?: string;
  message?: string;
  description?: string;
  type?: 'success' | 'info' | 'warning' | 'error';
  closeable?: boolean;
}

const Alert = ({
  className,
  message,
  description,
  type = 'success',
  closeable,
}: AlertProps) => {
  const [couldShow, setShow] = useState(true);
  const classes = cxs(className, `${prefix}-alert`, {
    [`alert-${type}`]: type,
    hide: !couldShow,
  });
  return (
    <div className={classes}>
      {closeable && (
        <IconClose
          className="alert-close-btn"
          onClick={() => {
            setShow(false);
          }}
          data-testid="close-btn"
        />
      )}
      {message}
      {description && <div className="alert-desc">{description}</div>}
    </div>
  );
};

export default Alert;
