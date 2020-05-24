import React, { FunctionComponent, useMemo } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
import './Transition.scss';

interface BaseTransitionProps {
  animationClassName?: 'zoom-in-top' | 'fade-in' | 'fade-in-out' | 'fade-out-in';
}

type TransitionProps = Partial<CSSTransitionProps & BaseTransitionProps>;
const Transition: FunctionComponent<TransitionProps> = ({
  animationClassName = 'zoom-in-top',
  children,
  ...restProps
}) => {
  return useMemo(() => {
    return (
      <CSSTransition
        timeout={300}
        classNames={animationClassName}
        mountOnEnter
        unmountOnExit
        {...restProps}
      >
        {children}
      </CSSTransition>
    );
  }, [animationClassName, children, restProps]);
};

export default Transition;
