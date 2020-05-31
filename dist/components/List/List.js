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
import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { updateSuggestions } from '../Autocomplete/store/actions';
import prefix from '../prefix';
export var Ul = function (_a) {
    var className = _a.className, children = _a.children, args = __rest(_a, ["className", "children"]);
    var classes = cxs(className, prefix + "-ul");
    return useMemo(function () {
        return (React.createElement("ul", __assign({ className: classes }, args), children));
    }, [classes, args, children]);
};
export var Li = function (_a) {
    var className = _a.className, children = _a.children, args = __rest(_a, ["className", "children"]);
    var classes = cxs(className, prefix + "-li");
    return useMemo(function () {
        return (React.createElement("li", __assign({ className: classes }, args), children));
    }, [classes, args, children]);
};
var List = function (_a) {
    var className = _a.className, _b = _a.data, data = _b === void 0 ? [] : _b, args = __rest(_a, ["className", "data"]);
    var classes = cxs(className, prefix + "-list");
    var dispatch = useDispatch();
    return (React.createElement(Ul, __assign({ className: classes }, args), data.map(function (item) {
        return (React.createElement(Li, { onClick: function (e) {
                dispatch(updateSuggestions(item.value));
            }, key: item.key }, item.value));
    })));
};
export default List;
//# sourceMappingURL=List.js.map