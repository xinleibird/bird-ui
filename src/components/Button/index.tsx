import { FunctionComponent } from 'react';
import Button, { ButtonProps } from './Button';
import Link, { LinkProps } from './Link';

export type ButtonComponent = FunctionComponent<ButtonProps> & {
  Link: FunctionComponent<LinkProps>;
};

const ReferButton = Button as ButtonComponent;

ReferButton.Link = Link;

export default ReferButton;
