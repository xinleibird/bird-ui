import cxs from 'classnames';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItemActiveIndex } from './store/actions';
var MenuItem = function (_a) {
    var className = _a.className, _b = _a.disabled, disabled = _b === void 0 ? false : _b, children = _a.children, style = _a.style, icon = _a.icon, _c = _a.index, index = _c === void 0 ? '' : _c;
    var activeIndex = useSelector(function (state) {
        return state.index.active;
    });
    var dispatch = useDispatch();
    var classes = cxs(className, 'menu-item', {
        disabled: disabled,
        active: activeIndex === index,
    });
    return useMemo(function () {
        return (React.createElement("li", { onClick: function (e) {
                e.preventDefault();
                if (!disabled) {
                    dispatch(setItemActiveIndex(index));
                }
            }, className: classes, style: style },
            icon,
            children));
    }, [children, classes, disabled, dispatch, icon, index, style]);
};
MenuItem.defaultProps = {
    menuCheckId: 'MenuItem',
};
export default MenuItem;
//# sourceMappingURL=MenuItem.js.map