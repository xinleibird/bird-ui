import React, { FunctionComponent } from 'react';
interface AutocompleteProps {
    className?: string;
    data: string[];
    size?: number;
    onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
declare const AutocompleteWrapper: FunctionComponent<AutocompleteProps>;
export default AutocompleteWrapper;
