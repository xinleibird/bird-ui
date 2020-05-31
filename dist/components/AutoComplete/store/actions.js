export var ACTION_TYPE;
(function (ACTION_TYPE) {
    ACTION_TYPE[ACTION_TYPE["INIT_SUGGESTIONS"] = 0] = "INIT_SUGGESTIONS";
    ACTION_TYPE[ACTION_TYPE["UPDATE_SUGGESTIONS"] = 1] = "UPDATE_SUGGESTIONS";
})(ACTION_TYPE || (ACTION_TYPE = {}));
export var initSuggestions = function (list) {
    if (list === void 0) { list = []; }
    return {
        type: ACTION_TYPE.INIT_SUGGESTIONS,
        list: list,
        keyword: '',
    };
};
export var updateSuggestions = function (keyword) {
    if (keyword === void 0) { keyword = ''; }
    return {
        type: ACTION_TYPE.UPDATE_SUGGESTIONS,
        list: [],
        keyword: keyword,
    };
};
//# sourceMappingURL=actions.js.map