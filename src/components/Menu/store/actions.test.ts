import { setItemActiveIndex, toggleSubMenuShowIndex, ActionType } from './actions';

describe('test Menu redux actions', () => {
  it('setItemActiveIndex() should create ActionType.SET_ACTIVE_INDEX action', () => {
    expect(setItemActiveIndex('5')).toEqual({
      type: ActionType.SET_ACTIVE_INDEX,
      index: '5',
    });
  });

  it('toggleSubMenuShowIndex() should create ActionType.TOGGLE_SHOW_INDEX action', () => {
    expect(toggleSubMenuShowIndex('5')).toEqual({
      type: ActionType.TOGGLE_SHOW_INDEX,
      index: '5',
    });
  });
});
