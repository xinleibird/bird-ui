import cxs from 'classnames';
import React, { useMemo, useState, useEffect } from 'react';
import prefix from '../prefix';
import Transition from '../Transition';
import Button from '../Button';
var Dialog = function (_a) {
    var className = _a.className, children = _a.children, _b = _a.onConfirm, onConfirm = _b === void 0 ? function () { } : _b, _c = _a.onCancel, onCancel = _c === void 0 ? function () { } : _c;
    var _d = useState(true), couldShow = _d[0], setShow = _d[1];
    var classes = cxs(className, prefix + "-dialog");
    useEffect(function () {
        document.body.style.position = 'relative';
        return function () {
            document.body.style.position = '';
        };
    });
    return useMemo(function () {
        return (React.createElement(Transition, { in: couldShow, animationClassName: "fade-in", timeout: 300 },
            React.createElement("div", { className: classes },
                React.createElement("div", { className: "dialog-background" }),
                React.createElement("div", { className: "dialog-container" },
                    React.createElement("div", { className: "dialog-content" }, children),
                    React.createElement("div", { className: "dialog-button" },
                        React.createElement(Button.Link, { onClick: function (e) {
                                setShow(false);
                                onCancel();
                            } }, "CANCEL"),
                        React.createElement(Button.Link, { onClick: function (e) {
                                setShow(false);
                                onConfirm();
                            } }, "CONFIRM"))))));
    }, [children, classes, couldShow, onCancel, onConfirm]);
};
export default Dialog;
//# sourceMappingURL=Dialog.js.map