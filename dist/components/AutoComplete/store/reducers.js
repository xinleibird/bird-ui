var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { combineReducers } from 'redux';
import { ACTION_TYPE } from './actions';
export var finder = function (state, action) {
    if (state === void 0) { state = { data: [], suggestions: [], keyword: '' }; }
    switch (action.type) {
        case ACTION_TYPE.INIT_SUGGESTIONS:
            var initData = action.list.map(function (item, index) {
                return { suggestion: item, isSuggested: false, key: index.toString() };
            });
            return { data: action.list, suggestions: __spreadArrays(initData), keyword: action.keyword };
        case ACTION_TYPE.UPDATE_SUGGESTIONS:
            var tarList = state.data.map(function (item, index) {
                if (item.indexOf(action.keyword) !== -1) {
                    return { suggestion: item, isSuggested: true, key: index.toString() };
                }
                return { suggestion: item, isSuggested: false, key: index.toString() };
            });
            return { data: state.data, suggestions: __spreadArrays(tarList), keyword: action.keyword };
        default:
            return state;
    }
};
export default combineReducers({ finder: finder });
//# sourceMappingURL=reducers.js.map