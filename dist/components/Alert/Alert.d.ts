import { FunctionComponent } from 'react';
export interface AlertProps {
    className?: string;
    message?: string;
    description?: string;
    type?: 'success' | 'info' | 'warning' | 'error';
    closeable?: boolean;
    banner?: boolean;
    onClose?: () => void;
}
declare const Alert: FunctionComponent<AlertProps>;
export default Alert;
