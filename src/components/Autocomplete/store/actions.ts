export enum ACTION_TYPE {
  INIT_SUGGESTIONS,
  UPDATE_SUGGESTIONS,
}

export const initSuggestions = (list: string[] = []) => {
  return {
    type: ACTION_TYPE.INIT_SUGGESTIONS,
    list,
    keyword: '',
  };
};

export const updateSuggestions = (keyword: string = '') => {
  return {
    type: ACTION_TYPE.UPDATE_SUGGESTIONS,
    list: [],
    keyword,
  };
};
