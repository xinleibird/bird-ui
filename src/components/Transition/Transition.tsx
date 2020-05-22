import React, { FunctionComponent, CSSProperties } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

import './Transition.scss';

interface BaseTransitionProps {
  animation?: CSSProperties;
}

type TransitionProps = Partial<CSSTransitionProps & BaseTransitionProps>;
const Transition: FunctionComponent<TransitionProps> = ({
  classNames = 'zoom-in-top',
  children,
  ...restProps
}) => {
  return (
    <CSSTransition
      timeout={300}
      classNames={classNames}
      mountOnEnter
      unmountOnExit
      {...restProps}
    >
      {children}
    </CSSTransition>
  );
};

export default Transition;
