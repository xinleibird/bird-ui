export declare enum ActionType {
    SET_ACTIVE_INDEX = 0,
    TOGGLE_SHOW_INDEX = 1
}
export interface Action {
    type: ActionType;
    [anyKey: string]: any;
}
export declare const setItemActiveIndex: (index: string) => {
    type: ActionType;
    index: string;
};
export declare const toggleSubMenuShowIndex: (index: string) => {
    type: ActionType;
    index: string;
};
