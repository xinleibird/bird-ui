import cxs from 'classnames';
import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { DefaultRootState, useDispatch, useSelector } from 'react-redux';
import { testDatePattern } from '../../libs';
import Button from '../Button';
import Icon from '../Icon';
import { prefix } from '../prefix';
import { updateDate } from './store/actions';
import { DateStateType } from './store/reducers';

interface DateItemProps {
  className?: string;
  date?: Date;
}
const DateItem: FunctionComponent<DateItemProps> = ({ className, children }) => {
  const dispatch = useDispatch();
  const { year, month, day } = useSelector(
    (state: DefaultRootState & { date: DateStateType }) => {
      return state.date;
    }
  );

  const classes = cxs(`${prefix}-date-item`, className, {
    active: children?.toString() === day.toString(),
  });

  return useMemo(() => {
    return (
      <span
        className={classes}
        onClick={() => {
          if (children) {
            dispatch(updateDate(`${year}/${month + 1}/${children}`));
          }
        }}
      >
        {children}
      </span>
    );
  }, [children, classes, dispatch, month, year]);
};

export interface DatePickerProps {}
const DatePicker: FunctionComponent<DatePickerProps> = () => {
  const { year, month, day, daysOfMonth, firstDayOfWeek } = useSelector(
    (state: DefaultRootState & { date: DateStateType }) => {
      return state.date;
    }
  );
  const dispatch = useDispatch();

  const currentPicker = useCallback(() => {
    const picker = [];
    for (let item = 0, currentDay = 0; item < 42; item++) {
      if (item < firstDayOfWeek || item >= firstDayOfWeek + daysOfMonth) {
        picker.push(<DateItem key={`${year}-${month}+${item}`}></DateItem>);
      } else {
        currentDay += 1;
        picker.push(<DateItem key={`${year}-${month}-${currentDay}`}>{currentDay}</DateItem>);
      }
    }
    return <div className={`${prefix}-date-picker`}>{picker}</div>;
  }, [daysOfMonth, firstDayOfWeek, month, year]);

  return (
    <div>
      <div className={`${prefix}-date-picker-wrapper`}>
        <div className={`${prefix}-date-picker-title`}>
          <div className={`${prefix}-date-picker-title-year`}>
            <Button
              onlyIcon
              size="tinny"
              onClick={() => {
                if (testDatePattern(`${year - 1}/${month + 1}/${day}`)) {
                  dispatch(updateDate(`${year - 1}/${month + 1}/${day}`));
                } else {
                  dispatch(updateDate(`${year - 1}/${month}/1`));
                }
              }}
            >
              <Icon.AngleLeft />
            </Button>
            {year ? year : ''} 年
            <Button
              onlyIcon
              size="tinny"
              onClick={() => {
                if (testDatePattern(`${year + 1}/${month + 1}/${day}`)) {
                  dispatch(updateDate(`${year + 1}/${month + 1}/${day}`));
                } else {
                  dispatch(updateDate(`${year + 1}/${month}/1`));
                }
              }}
            >
              <Icon.AngleRight />
            </Button>
          </div>
          <div className={`${prefix}-date-picker-title-month`}>
            <Button
              onlyIcon
              size="tinny"
              onClick={() => {
                if (testDatePattern(`${year}/${month}/${day}`)) {
                  dispatch(updateDate(`${year}/${month}/${day}`));
                } else {
                  if (month === 0) {
                    dispatch(updateDate(`${year - 1}/${11}/${day ? day : '1'}`));
                  } else {
                    dispatch(updateDate(`${year}/${month}/1`));
                  }
                }
              }}
            >
              <Icon.AngleLeft />
            </Button>
            {month + 1} 月
            <Button
              onlyIcon
              size="tinny"
              onClick={() => {
                if (testDatePattern(`${year}/${month + 2}/${day}`)) {
                  dispatch(updateDate(`${year}/${month + 2}/${day}`));
                } else {
                  if (month === 11) {
                    dispatch(updateDate(`${year + 1}/${1}/${day ? day : '1'}`));
                  } else {
                    dispatch(updateDate(`${year}/${month + 2}/1`));
                  }
                }
              }}
            >
              <Icon.AngleRight />
            </Button>
          </div>
        </div>
        <div className={`${prefix}-date-picker-header`}>
          <span>一</span>
          <span>二</span>
          <span>三</span>
          <span>四</span>
          <span>五</span>
          <span>六</span>
          <span>日</span>
        </div>
        {currentPicker()}
        <div className={`${prefix}-date-picker-footer`}>
          {`${year} 年
            ${(month + 1).toString().padStart(2, '0')} 月
            ${day.toString().padStart(2, '0')} 日`}
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
