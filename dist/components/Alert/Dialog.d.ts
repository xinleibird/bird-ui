import { FunctionComponent } from 'react';
export interface DialogProps {
    className?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
}
declare const Dialog: FunctionComponent<DialogProps>;
export default Dialog;
