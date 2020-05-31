import React, { FunctionComponent } from 'react';
interface AutoCompleteProps {
    className?: string;
    data: string[];
    size?: number;
    inputSize?: 'large' | 'small';
    onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
declare const AutoCompleteWrapper: FunctionComponent<AutoCompleteProps>;
export default AutoCompleteWrapper;
