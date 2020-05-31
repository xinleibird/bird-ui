export declare enum ACTION_TYPE {
    SET_ACTIVE_INDEX = 0,
    TOGGLE_SHOW_INDEX = 1
}
export interface Action {
    type: ACTION_TYPE;
    [anyKey: string]: any;
}
export declare const setItemActiveIndex: (index: string) => {
    type: ACTION_TYPE;
    index: string;
};
export declare const toggleSubMenuShowIndex: (index: string) => {
    type: ACTION_TYPE;
    index: string;
};
