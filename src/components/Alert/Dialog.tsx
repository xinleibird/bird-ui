import cxs from 'classnames';
import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { Button, Transition } from '../main';
import prefix from '../prefix';

export interface DialogProps {
  className?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const Dialog: FunctionComponent<DialogProps> = ({
  className,
  children,
  onConfirm = () => {},
  onCancel = () => {},
}) => {
  const [couldShow, setShow] = useState(true);

  const classes = cxs(`${prefix}-dialog`, className);

  useEffect(() => {
    document.body.style.position = 'relative';
    return () => {
      document.body.style.position = '';
    };
  });

  return useMemo(() => {
    return (
      <Transition in={couldShow} animationClassName="fade-in" timeout={300}>
        <div className={classes}>
          <div className="dialog-background"></div>
          <div className="dialog-container">
            <div className="dialog-content">{children}</div>
            <div className="dialog-button">
              <Button.Link
                onClick={(e) => {
                  setShow(false);
                  onCancel();
                }}
              >
                CANCEL
              </Button.Link>
              <Button.Link
                onClick={(e) => {
                  setShow(false);
                  onConfirm();
                }}
              >
                CONFIRM
              </Button.Link>
            </div>
          </div>
        </div>
      </Transition>
    );
  }, [children, classes, couldShow, onCancel, onConfirm]);
};

export default Dialog;
