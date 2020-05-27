import React, { FunctionComponent, InputHTMLAttributes } from 'react';

interface BaseInputProps {
  name: string;
}

type InputProps = Partial<InputHTMLAttributes<HTMLElement> & BaseInputProps>;

const Input: FunctionComponent<InputProps> = ({ ...restArgs }) => {
  return <input {...restArgs} onChange={(e) => {}} />;
};

export default Input;
