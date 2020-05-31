import { FunctionComponent } from 'react';
import { AlertProps } from './Alert';
import { DialogProps } from './Dialog';
export declare type AlertComponent = FunctionComponent<AlertProps> & {
    Dialog: FunctionComponent<DialogProps>;
};
declare const ReferAlert: AlertComponent;
export default ReferAlert;
