import { setItemActiveIndex, toggleSubMenuShowIndex, ACTION_TYPE } from './actions';
describe('test Menu redux actions', function () {
    it('setItemActiveIndex() should create ActionType.SET_ACTIVE_INDEX action', function () {
        expect(setItemActiveIndex('5')).toEqual({
            type: ACTION_TYPE.SET_ACTIVE_INDEX,
            index: '5',
        });
    });
    it('toggleSubMenuShowIndex() should create ActionType.TOGGLE_SHOW_INDEX action', function () {
        expect(toggleSubMenuShowIndex('5')).toEqual({
            type: ACTION_TYPE.TOGGLE_SHOW_INDEX,
            index: '5',
        });
    });
});
//# sourceMappingURL=actions.test.js.map