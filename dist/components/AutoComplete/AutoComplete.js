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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import cxs from 'classnames';
import React, { useEffect, useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';
import { Input } from '../../main';
import List from '../List';
import prefix from '../prefix';
import { initSuggestions, updateSuggestions } from './store/actions';
import reducers from './store/reducers';
import Transition from '../Transition';
var AutoComplete = function (_a) {
    var className = _a.className, _b = _a.data, data = _b === void 0 ? [] : _b, _c = _a.size, size = _c === void 0 ? 40 : _c, _d = _a.inputSize, inputSize = _d === void 0 ? 'small' : _d, onKeyPress = _a.onKeyPress;
    var classes = cxs(className, prefix + "-autocomplete");
    var suggestions = useSelector(function (state) {
        return state.finder.suggestions;
    });
    var keyword = useSelector(function (state) {
        return state.finder.keyword;
    });
    var _e = useState(true), inputEmpty = _e[0], setInputEmpty = _e[1];
    var dispatch = useDispatch();
    useEffect(function () {
        dispatch(initSuggestions(data));
    }, [data, dispatch]);
    var filtered = suggestions
        .filter(function (item) {
        return item.isSuggested;
    })
        .map(function (item) {
        return { key: item.key, value: item.suggestion };
    });
    return (React.createElement("div", { className: classes },
        React.createElement(Input, { inputSize: inputSize, value: keyword, onKeyPress: onKeyPress, size: size, onChange: function (e) {
                var target = e.target;
                if (target.value) {
                    setInputEmpty(false);
                }
                else {
                    setInputEmpty(true);
                }
                dispatch(updateSuggestions(target.value));
            } }),
        React.createElement(Transition, { in: !inputEmpty },
            React.createElement(List, { data: filtered }))));
};
var AutoCompleteWrapper = function (_a) {
    var args = __rest(_a, []);
    var store = createStore(reducers);
    return (React.createElement(Provider, { store: store },
        React.createElement(AutoComplete, __assign({}, args))));
};
export default AutoCompleteWrapper;
//# sourceMappingURL=AutoComplete.js.map