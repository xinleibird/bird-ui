import cxs from 'classnames';
import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { prefix } from '../prefix';
import Transition from '../Transition';
import Button from '../Button';

export interface DialogProps {
  className?: string;
  title?: string;
  confirm?: string;
  cancel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const Dialog: FunctionComponent<DialogProps> = ({
  className,
  title,
  confirm = 'CONFIRM',
  cancel = 'CANCEL',
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
            <div className="dialog-title">
              <h2>{title}</h2>
            </div>
            <div className="dialog-content">{children}</div>
            <div className="dialog-button">
              <Button.Link
                onClick={(e) => {
                  setShow(false);
                  onCancel();
                }}
              >
                {cancel}
              </Button.Link>
              <Button.Link
                onClick={(e) => {
                  setShow(false);
                  onConfirm();
                }}
              >
                {confirm}
              </Button.Link>
            </div>
          </div>
        </div>
      </Transition>
    );
  }, [cancel, children, classes, confirm, couldShow, onCancel, onConfirm, title]);
};

export default Dialog;
