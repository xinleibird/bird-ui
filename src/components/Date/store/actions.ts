export enum ACTIONS {
  UPDATE_DATE,
}

export const updateDate = (inputValue: string) => {
  return {
    type: ACTIONS.UPDATE_DATE,
    inputValue,
  };
};
