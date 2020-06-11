import { combineReducers } from 'redux';

import { ACTION_TYPE } from './actions';

interface StateType {
  selected: { key: string; value: string };
  list: {
    key: string;
    node: string;
    marked: boolean;
  }[];
}

interface ActionType {
  type: ACTION_TYPE;
  list: {
    key: string;
    node: string;
    marked: boolean;
  }[];
  index: string;
}

export const options = (
  state: StateType = { selected: { key: '', value: '' }, list: [] },
  action: ActionType
) => {
  switch (action.type) {
    case ACTION_TYPE.INIT_LIST: {
      let selectedKey = '';
      let selectedValue = '';
      const tmpList = action.list.map((item) => {
        if (item.marked) {
          selectedKey = item.key;
          selectedValue = item.node;
          return { key: item.key, node: item.node, marked: true };
        }
        return { key: item.key, node: item.node, marked: false };
      });
      return { selected: { key: selectedKey, value: selectedValue }, list: [...tmpList] };
    }

    case ACTION_TYPE.UPDATE_LIST: {
      let selectedValue = '';
      const tmpList = action.list.map((item) => {
        if (item.key === action.index) {
          selectedValue = item.node;
          return { key: item.key, node: item.node, marked: true };
        }
        return { key: item.key, node: item.node, marked: false };
      });
      return { selected: { key: action.index, value: selectedValue }, list: [...tmpList] };
    }

    case ACTION_TYPE.UPDATE_SELECTED: {
      let selectedValue = '';
      const tmpList = state.list.map((item) => {
        if (item.key === action.index) {
          selectedValue = item.node;
          return { key: item.key, node: item.node, marked: true };
        }
        return { key: item.key, node: item.node, marked: false };
      });
      return { selected: { key: action.index, value: selectedValue }, list: [...tmpList] };
    }

    default:
      return state;
  }
};

export default combineReducers({ options });
