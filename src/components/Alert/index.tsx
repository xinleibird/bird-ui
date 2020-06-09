import { FunctionComponent } from 'react';
import Alert, { AlertProps } from './Alert';
import Dialog, { DialogProps } from './Dialog';

export type { AlertProps, DialogProps };

type AlertComponent = FunctionComponent<AlertProps> & {
  Dialog: FunctionComponent<DialogProps>;
};

const ReferAlert = Alert as AlertComponent;

ReferAlert.Dialog = Dialog;

export default ReferAlert;
