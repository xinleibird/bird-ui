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
import { Provider, useDispatch } from 'react-redux';
import { createStore } from 'redux';
import prefix from '../prefix';
import { setItemActiveIndex, toggleSubMenuShowIndex } from './store/actions';
import reducers from './store/reducers';
export var renderChildren = function (children, index) {
    if (index === void 0) { index = ''; }
    return React.Children.map(children, function (child, i) {
        var itemElement = child;
        if (itemElement.type.name === 'MenuItem') {
            return React.cloneElement(itemElement, {
                index: index ? index + "-" + i : "" + i,
                key: index ? index + "-" + i : "" + i,
            });
        }
        var subElement = child;
        if (subElement.type.name === 'SubMenu') {
            return React.cloneElement(subElement, {
                index: index ? index + "-" + i : "" + i,
                key: index ? index + "-" + i : "" + i,
            });
        }
    });
};
var MenuInner = function (_a) {
    var className = _a.className, _b = _a.direction, direction = _b === void 0 ? 'horizontal' : _b, sticky = _a.sticky, style = _a.style, defaultIndex = _a.defaultIndex, defaultSubMenuIndex = _a.defaultSubMenuIndex, children = _a.children;
    var dispatch = useDispatch();
    if (defaultIndex) {
        dispatch(setItemActiveIndex(defaultIndex));
    }
    if (defaultSubMenuIndex) {
        if (typeof defaultSubMenuIndex === 'string') {
            dispatch(toggleSubMenuShowIndex(defaultSubMenuIndex));
        }
        else {
            defaultSubMenuIndex.forEach(function (ele) {
                dispatch(toggleSubMenuShowIndex(ele));
            });
        }
    }
    var classes = cxs(className, prefix + "-menu", {
        vertical: direction === 'vertical',
        horizontal: direction === 'horizontal',
        sticky: sticky,
    });
    var rendered = renderChildren(children);
    return (React.createElement("ul", { className: classes, style: style }, rendered));
};
var Menu = function (_a) {
    var args = __rest(_a, []);
    var store = createStore(reducers);
    return (React.createElement(Provider, { store: store },
        React.createElement(MenuInner, __assign({}, args))));
};
export default Menu;
//# sourceMappingURL=Menu.js.map