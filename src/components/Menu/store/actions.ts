export enum ACTION_TYPE {
  SET_ACTIVE_INDEX,
  TOGGLE_SHOW_INDEX,
}

export interface Action {
  type: ACTION_TYPE;
  index: string;
}

export const setItemActiveIndex = (index: string) => {
  return {
    type: ACTION_TYPE.SET_ACTIVE_INDEX,
    index,
  };
};

export const toggleSubMenuShowIndex = (index: string) => {
  return {
    type: ACTION_TYPE.TOGGLE_SHOW_INDEX,
    index,
  };
};
