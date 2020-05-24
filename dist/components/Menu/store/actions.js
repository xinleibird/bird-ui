export var ActionType;
(function (ActionType) {
    ActionType[ActionType["SET_ACTIVE_INDEX"] = 0] = "SET_ACTIVE_INDEX";
    ActionType[ActionType["TOGGLE_SHOW_INDEX"] = 1] = "TOGGLE_SHOW_INDEX";
})(ActionType || (ActionType = {}));
export var setItemActiveIndex = function (index) {
    return {
        type: ActionType.SET_ACTIVE_INDEX,
        index: index,
    };
};
export var toggleSubMenuShowIndex = function (index) {
    return {
        type: ActionType.TOGGLE_SHOW_INDEX,
        index: index,
    };
};
//# sourceMappingURL=actions.js.map