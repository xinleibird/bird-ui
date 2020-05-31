export declare enum ACTION_TYPE {
    INIT_SUGGESTIONS = 0,
    UPDATE_SUGGESTIONS = 1
}
export declare const initSuggestions: (list?: string[]) => {
    type: ACTION_TYPE;
    list: string[];
    keyword: string;
};
export declare const updateSuggestions: (keyword?: string) => {
    type: ACTION_TYPE;
    list: any[];
    keyword: string;
};
