import { combineReducers } from 'redux';
import { ACTION_TYPE } from './actions';

export interface SuggestionsType {
  data: string[];
  suggestions: { suggestion: string; isSuggested: boolean; key: string }[];
  keyword: string;
}

interface Action {
  type: ACTION_TYPE;
  list: string[];
  keyword: string;
}

export const finder = (
  state: SuggestionsType = { data: [], suggestions: [], keyword: '' },
  action: Action
) => {
  switch (action.type) {
    case ACTION_TYPE.INIT_SUGGESTIONS:
      const initData = action.list.map((item, index) => {
        return { suggestion: item, isSuggested: false, key: index.toString() };
      });

      return { data: action.list, suggestions: [...initData], keyword: action.keyword };

    case ACTION_TYPE.UPDATE_SUGGESTIONS:
      const tarList = state.data.map((item, index) => {
        if (item.indexOf(action.keyword) !== -1) {
          return { suggestion: item, isSuggested: true, key: index.toString() };
        }
        return { suggestion: item, isSuggested: false, key: index.toString() };
      });

      return { data: state.data, suggestions: [...tarList], keyword: action.keyword };

    default:
      return state;
  }
};

export default combineReducers({ finder });
