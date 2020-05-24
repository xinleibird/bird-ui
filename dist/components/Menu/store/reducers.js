var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { combineReducers } from 'redux';
import { ActionType } from './actions';
export var index = function (state, action) {
    if (state === void 0) { state = { active: '0', show: [] }; }
    switch (action.type) {
        case ActionType.SET_ACTIVE_INDEX:
            return __assign({ active: action.index, show: state.show });
        case ActionType.TOGGLE_SHOW_INDEX:
            state.show = state.show.filter(function (element) {
                if (element === action.index) {
                    action.index = '';
                    return false;
                }
                return true;
            });
            if (action.index) {
                state.show.push(action.index);
            }
            return __assign({ active: state.active, show: state.show });
        default:
            return state;
    }
};
export default combineReducers({ index: index });
//# sourceMappingURL=reducers.js.map