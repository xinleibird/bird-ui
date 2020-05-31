import { FunctionComponent } from 'react';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
interface BaseTransitionProps {
    animationClassName?: 'zoom-in-top' | 'fade-in';
}
declare type TransitionProps = Partial<CSSTransitionProps & BaseTransitionProps>;
declare const Transition: FunctionComponent<TransitionProps>;
export default Transition;
