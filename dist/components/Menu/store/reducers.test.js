import { index } from './reducers';
import { ACTION_TYPE } from './actions';
describe('test Menu redux reducers', function () {
    it('should handle initial state', function () {
        expect(index(undefined, { type: ACTION_TYPE.SET_ACTIVE_INDEX, index: '0' })).toEqual({
            active: '0',
            show: [],
        });
    });
    it('should handle setItemActiveIndex()', function () {
        expect(index({ active: '2', show: [] }, { type: ACTION_TYPE.SET_ACTIVE_INDEX, index: '5' })).toEqual({ active: '5', show: [] });
    });
    it('should handle toggleSubMenuShowIndex()', function () {
        expect(index({ active: '1', show: ['2', '3'] }, { type: ACTION_TYPE.TOGGLE_SHOW_INDEX, index: '3' })).toEqual({ active: '1', show: ['2'] });
    });
});
//# sourceMappingURL=reducers.test.js.map