import { Action } from './actions';
export declare const index: (state: {
    active: string;
    show: string[];
}, action: Action) => {
    active: any;
    show: string[];
};
declare const _default: import("redux").Reducer<import("redux").CombinedState<{
    index: {
        active: any;
        show: string[];
    };
}>, import("redux").AnyAction>;
export default _default;
