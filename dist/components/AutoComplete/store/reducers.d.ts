import { ACTION_TYPE } from './actions';
export interface SuggestionsType {
    data: string[];
    suggestions: {
        suggestion: string;
        isSuggested: boolean;
        key: string;
    }[];
    keyword: string;
}
interface Action {
    type: ACTION_TYPE;
    list: string[];
    keyword: string;
}
export declare const finder: (state: SuggestionsType, action: Action) => SuggestionsType;
declare const _default: import("redux").Reducer<import("redux").CombinedState<{
    finder: SuggestionsType;
}>, import("redux").AnyAction>;
export default _default;
