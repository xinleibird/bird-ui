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
import React, { useMemo } from 'react';
import { CSSTransition } from 'react-transition-group';
var Transition = function (_a) {
    var _b = _a.animationClassName, animationClassName = _b === void 0 ? 'zoom-in-top' : _b, children = _a.children, restProps = __rest(_a, ["animationClassName", "children"]);
    return useMemo(function () {
        return (React.createElement(CSSTransition, __assign({ timeout: 300, classNames: animationClassName, mountOnEnter: true, unmountOnExit: true }, restProps), children));
    }, [animationClassName, children, restProps]);
};
export default Transition;
//# sourceMappingURL=Transition.js.map