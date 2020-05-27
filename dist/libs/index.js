export var debounce = function (fn, timeout, context) {
    var timmer = null;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timmer) {
            return;
        }
        else {
            fn.apply(context, args);
            timmer = setTimeout(function () {
                timmer = null;
            }, timeout);
        }
    };
};
//# sourceMappingURL=index.js.map