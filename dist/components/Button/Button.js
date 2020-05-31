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
import React, { useMemo, useState, } from 'react';
import Icon from '../Icon';
import prefix from '../prefix';
import Transition from '../Transition';
var Button = function (_a) {
    var _b;
    var className = _a.className, size = _a.size, btnType = _a.btnType, children = _a.children, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.type, type = _d === void 0 ? 'button' : _d, loading = _a.loading, _e = _a.onBtnClick, onBtnClick = _e === void 0 ? function () { } : _e, _f = _a.onLoading, onLoading = _f === void 0 ? function () { } : _f, onlyIcon = _a.onlyIcon, restProps = __rest(_a, ["className", "size", "btnType", "children", "disabled", "type", "loading", "onBtnClick", "onLoading", "onlyIcon"]);
    var _g = useState(loading), isLoading = _g[0], setLoading = _g[1];
    var classes = cxs(className, prefix + "-btn", (_b = {
            'btn-lg': size === 'large',
            'btn-sm': size === 'small'
        },
        _b["btn-" + btnType] = btnType,
        _b.loading = isLoading,
        _b));
    return useMemo(function () {
        return (React.createElement("button", __assign({ className: classes, disabled: disabled || isLoading, type: type }, restProps, { onClick: function (e) {
                e.preventDefault();
                onBtnClick(e);
                return new Promise(function (resolve) {
                    resolve(onLoading(setLoading));
                });
            } }),
            React.createElement(Transition, { in: isLoading, animationClassName: "fade-in" },
                React.createElement(Icon.CircleNotch, { animate: "spin", size: size })),
            onlyIcon ? (React.createElement("span", { className: "btn-only-icon" }, children)) : (React.createElement("span", { className: "btn-inner-text" }, children))));
    }, [
        classes,
        disabled,
        isLoading,
        type,
        restProps,
        size,
        onlyIcon,
        children,
        onBtnClick,
        onLoading,
    ]);
};
export default Button;
//# sourceMappingURL=Button.js.map