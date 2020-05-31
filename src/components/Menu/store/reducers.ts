import { combineReducers } from 'redux';
import { ACTION_TYPE, Action } from './actions';

export const index = (
  state: { active: string; show: string[] } = { active: '0', show: [] },
  action: Action
) => {
  switch (action.type) {
    case ACTION_TYPE.SET_ACTIVE_INDEX:
      return { ...{ active: action.index, show: state.show } };

    case ACTION_TYPE.TOGGLE_SHOW_INDEX:
      state.show = state.show.filter((element) => {
        if (element === action.index) {
          action.index = '';
          return false;
        }
        return true;
      });

      if (action.index) {
        state.show.push(action.index);
      }
      return { active: state.active, show: state.show };

    default:
      return state;
  }
};

export default combineReducers({ index });
