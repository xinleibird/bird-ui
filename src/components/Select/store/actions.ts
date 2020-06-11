export enum ACTION_TYPE {
  INIT_LIST,
  UPDATE_LIST,
  UPDATE_SELECTED,
}

export const initList = (list: { key: string; node: string; marked: boolean }[]) => {
  return {
    type: ACTION_TYPE.UPDATE_LIST,
    list,
  };
};

export const updateList = (
  list: { key: string; node: string; marked: boolean }[],
  index: string
) => {
  return {
    type: ACTION_TYPE.UPDATE_LIST,
    list,
    index,
  };
};

export const updateSelected = (index: string) => {
  return {
    type: ACTION_TYPE.UPDATE_SELECTED,
    index,
  };
};
