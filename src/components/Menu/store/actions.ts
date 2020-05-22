export enum ActionType {
  SET_ACTIVE_INDEX,
  TOGGLE_SHOW_INDEX,
}

export interface Action {
  type: ActionType;
  [anyKey: string]: any;
}

export const setItemActiveIndex = (index: string) => {
  return {
    type: ActionType.SET_ACTIVE_INDEX,
    index,
  };
};

export const toggleSubMenuShowIndex = (index: string) => {
  return {
    type: ActionType.TOGGLE_SHOW_INDEX,
    index,
  };
};
