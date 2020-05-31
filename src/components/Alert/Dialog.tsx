import cxs from 'classnames';
import React, { FunctionComponent, useMemo, useState, useEffect } from 'react';
import prefix from '../prefix';
import Transition from '../Transition';
import Button from '../Button';

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

  const classes = cxs(className, `${prefix}-dialog`);

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
