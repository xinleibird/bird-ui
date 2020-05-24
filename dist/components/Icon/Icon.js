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
import React from 'react';
import prefix from '../prefix';
var Icon = function (_a) {
    var _b;
    var className = _a.className, component = _a.component, size = _a.size, animate = _a.animate, restArgs = __rest(_a, ["className", "component", "size", "animate"]);
    var classes = cxs(className, prefix + "-icon", (_b = {
            'icon-lg': size === 'large',
            'icon-sm': size === 'small'
        },
        _b["animate-" + animate] = animate,
        _b));
    var Svg = component;
    return React.createElement(Svg, __assign({ className: classes }, restArgs));
};
export default Icon;
//# sourceMappingURL=Icon.js.map