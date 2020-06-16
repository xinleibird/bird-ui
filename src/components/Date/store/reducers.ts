import { combineReducers } from 'redux';
import { ACTIONS } from './actions';
import { formatDateString, testDatePattern } from '../../../libs';

export interface DateStateType {
  date: Date;
  year: number;
  month: number;
  day: number;
  daysOfMonth: number;
  firstDayOfWeek: number;
  dateString: string;
}
interface ActionType {
  type: ACTIONS;
  inputValue: string;
}
export const date = (
  state: DateStateType = {
    date: (null as unknown) as Date,
    year: NaN,
    month: NaN,
    day: NaN,
    daysOfMonth: 0,
    firstDayOfWeek: NaN,
    dateString: '',
  },
  action: ActionType
) => {
  switch (action.type) {
    case ACTIONS.UPDATE_DATE: {
      const date = testDatePattern(action.inputValue)
        ? new Date(action.inputValue)
        : state.date;

      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      const daysOfMonth = new Date(year, month + 1, 0).getDate();
      let firstDayOfWeek = new Date(year, month, 1).getDay();

      // let any week's first day is Monday
      if (firstDayOfWeek === 0) {
        firstDayOfWeek = 6;
      } else {
        firstDayOfWeek -= 1;
      }

      return {
        date,
        year,
        month,
        day,
        daysOfMonth,
        firstDayOfWeek,
        dateString: formatDateString(action.inputValue),
      };
    }

    default:
      return state;
  }
};

export default combineReducers({ date });
