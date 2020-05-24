import { FunctionComponent, SVGProps } from 'react';
export interface BaseIconProps {
    className?: string;
    component?: FunctionComponent<SVGProps<SVGSVGElement>>;
    size?: 'large' | 'small';
    animate?: 'spin' | 'beat';
}
export declare type IconProps = Partial<SVGProps<SVGSVGElement> & BaseIconProps>;
declare const Icon: FunctionComponent<IconProps>;
export default Icon;
