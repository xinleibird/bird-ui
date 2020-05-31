import { Action } from './actions';
export declare const index: (state: {
    active: string;
    show: string[];
}, action: Action) => {
    active: string;
    show: string[];
};
declare const _default: import("redux").Reducer<import("redux").CombinedState<{
    index: {
        active: string;
        show: string[];
    };
}>, import("redux").AnyAction>;
export default _default;
