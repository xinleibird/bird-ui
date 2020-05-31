import React, { FunctionComponent } from 'react';
interface AutoCompleteProps {
    className?: string;
    data: string[];
    size?: number;
    onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
declare const AutoCompleteWrapper: FunctionComponent<AutoCompleteProps>;
export default AutoCompleteWrapper;
