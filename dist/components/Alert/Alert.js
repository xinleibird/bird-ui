import cxs from 'classnames';
import React, { useMemo, useState } from 'react';
import Icon from '../Icon';
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
            alertIcon = React.createElement(Icon.Success, { className: "alert-icon-success" });
            break;
        case 'info':
            alertIcon = React.createElement(Icon.Info, { className: "alert-icon-info" });
            break;
        case 'warning':
            alertIcon = React.createElement(Icon.Warning, { className: "alert-icon-warning" });
            break;
        case 'error':
            alertIcon = React.createElement(Icon.Error, { className: "alert-icon-error" });
            break;
        default:
            alertIcon = React.createElement(Icon.Success, { className: "alert-icon-success" });
            break;
    }
    return useMemo(function () {
        return (React.createElement(Transition, { in: couldShow },
            React.createElement("div", { className: classes },
                alertIcon,
                React.createElement("div", { className: "alert-message-wrapper" },
                    closeable && (React.createElement(Icon.Close, { "data-testid": "alert-close-btn", className: "alert-close-btn", onClick: function () {
                            onClose === null || onClose === void 0 ? void 0 : onClose();
                            setShow(false);
                        } })),
                    message,
                    description && React.createElement("div", { className: "alert-desc" }, description)))));
    }, [alertIcon, classes, closeable, couldShow, description, message, onClose]);
};
export default Alert;
//# sourceMappingURL=Alert.js.map