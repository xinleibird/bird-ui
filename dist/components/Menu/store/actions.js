export var ACTION_TYPE;
(function (ACTION_TYPE) {
    ACTION_TYPE[ACTION_TYPE["SET_ACTIVE_INDEX"] = 0] = "SET_ACTIVE_INDEX";
    ACTION_TYPE[ACTION_TYPE["TOGGLE_SHOW_INDEX"] = 1] = "TOGGLE_SHOW_INDEX";
})(ACTION_TYPE || (ACTION_TYPE = {}));
export var setItemActiveIndex = function (index) {
    return {
        type: ACTION_TYPE.SET_ACTIVE_INDEX,
        index: index,
    };
};
export var toggleSubMenuShowIndex = function (index) {
    return {
        type: ACTION_TYPE.TOGGLE_SHOW_INDEX,
        index: index,
    };
};
//# sourceMappingURL=actions.js.map