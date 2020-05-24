import cxs from 'classnames';
import React, { useState } from 'react';
import { IconClose, IconError, IconInfo, IconSuccess, IconWarning } from '../Icon';
import prefix from '../prefix';
import Transition from '../Transition';
var Alert = function (_a) {
    var _b;
    var className = _a.className, message = _a.message, description = _a.description, _c = _a.type, type = _c === void 0 ? 'success' : _c, closeable = _a.closeable, _d = _a.banner, banner = _d === void 0 ? false : _d, onClose = _a.onClose;
    var _e = useState(true), couldShow = _e[0], setShow = _e[1];
    var classes = cxs(className, prefix + "-alert", (_b = {},
        _b["alert-" + type] = type,
        _b));
    var alertIcon;
    switch (type) {
        case 'success':
            alertIcon = React.createElement(IconSuccess, { className: "alert-icon-success" });
            break;
        case 'info':
            alertIcon = React.createElement(IconInfo, { className: "alert-icon-info" });
            break;
        case 'warning':
            alertIcon = React.createElement(IconWarning, { className: "alert-icon-warning" });
            break;
        case 'error':
            alertIcon = React.createElement(IconError, { className: "alert-icon-error" });
            break;
        default:
            alertIcon = React.createElement(IconSuccess, { className: "alert-icon-success" });
            break;
    }
    return (React.createElement(Transition, { in: couldShow },
        React.createElement("div", { className: classes },
            alertIcon,
            React.createElement("div", { className: "alert-message-wrapper" },
                closeable && (React.createElement(IconClose, { className: "alert-close-btn", onClick: function () {
                        onClose && onClose();
                        setShow(false);
                    }, "data-testid": "alert-close-btn" })),
                message,
                description && React.createElement("div", { className: "alert-desc" }, description)))));
};
export default Alert;
//# sourceMappingURL=Alert.js.map