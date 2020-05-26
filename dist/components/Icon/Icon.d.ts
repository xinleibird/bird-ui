import { FunctionComponent } from 'react';
import { IProps as SVGProps } from 'react-inlinesvg';
export interface BaseIconProps {
    className?: string;
    src: string;
    size?: 'large' | 'small';
    animate?: 'spin' | 'beat';
}
export declare type IconProps = Partial<SVGProps & BaseIconProps>;
declare const Icon: FunctionComponent<IconProps>;
export default Icon;
