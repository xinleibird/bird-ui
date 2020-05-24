import cxs from 'classnames';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconAngleRight } from '../Icon';
import Transition from '../Transition';
import { renderChildren } from './Menu';
import { toggleSubMenuShowIndex } from './store/actions';
var SubMenu = function (_a) {
    var className = _a.className, index = _a.index, title = _a.title, disabled = _a.disabled, icon = _a.icon, children = _a.children;
    var showIndex = useSelector(function (state) {
        return state.index.show;
    });
    var subMenuOpened = showIndex.findIndex(function (element) {
        return element === index;
    }) === -1
        ? false
        : true;
    var subMenuClasses = cxs(className, 'menu-item', 'submenu', {
        disabled: disabled,
    });
    var subMenuChildrenClasses = cxs('submenu-item');
    var menuIconDrawer = cxs('menu-icon-drawer', {
        'rotate-90': subMenuOpened,
    });
    var dispatch = useDispatch();
    var rendered = renderChildren(children, index);
    return useMemo(function () {
        return (React.createElement("li", { className: subMenuClasses },
            React.createElement("div", { className: "submenu-title", onClick: function (e) {
                    e.preventDefault();
                    dispatch(toggleSubMenuShowIndex(index));
                } },
                icon,
                title,
                React.createElement(IconAngleRight, { className: menuIconDrawer })),
            React.createElement(Transition, { in: subMenuOpened },
                React.createElement("ul", { className: subMenuChildrenClasses }, rendered))));
    }, [
        subMenuClasses,
        icon,
        title,
        menuIconDrawer,
        subMenuOpened,
        subMenuChildrenClasses,
        rendered,
        dispatch,
        index,
    ]);
};
export default SubMenu;
//# sourceMappingURL=SubMenu.js.map