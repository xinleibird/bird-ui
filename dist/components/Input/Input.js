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
import React, { useMemo, } from 'react';
import prefix from '../prefix';
var Input = function (_a) {
    var _b, _c;
    var className = _a.className, size = _a.size, inputSize = _a.inputSize, icon = _a.icon, disabled = _a.disabled, prepand = _a.prepand, append = _a.append, restArgs = __rest(_a, ["className", "size", "inputSize", "icon", "disabled", "prepand", "append"]);
    var Icon = icon;
    var renderedIcon = icon && React.cloneElement(Icon, { inputSize: inputSize });
    var groupClasses = cxs(className, (_b = {},
        _b[prefix + "-input-group"] = prefix,
        _b.disabled = disabled,
        _b));
    var inputClasses = cxs((_c = {},
        _c[prefix + "-input"] = prefix,
        _c['input-lg'] = inputSize === 'large',
        _c['input-sm'] = inputSize === 'small',
        _c));
    var prepandClasses = cxs('prepand', {
        'prepand-lg': inputSize === 'large',
        'prepand-sm': inputSize === 'small',
    });
    var appendClasses = cxs('append', {
        'append-lg': inputSize === 'large',
        'append-sm': inputSize === 'small',
    });
    return useMemo(function () {
        return (React.createElement("span", { className: groupClasses },
            prepand && React.createElement("button", { className: prepandClasses }, prepand),
            React.createElement("span", { className: "icon-anchor" + (inputSize ? '-' + inputSize : '') },
                React.createElement("input", __assign({ className: inputClasses, size: size }, restArgs)),
                renderedIcon),
            append && React.createElement("button", { className: appendClasses }, append)));
    }, [
        append,
        appendClasses,
        groupClasses,
        inputClasses,
        prepand,
        prepandClasses,
        renderedIcon,
        restArgs,
        size,
        inputSize,
    ]);
};
export default Input;
//# sourceMappingURL=Input.js.map