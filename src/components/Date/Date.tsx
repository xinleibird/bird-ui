import cxs from 'classnames';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { DefaultRootState, Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';
import { getCurrentDateString, testDateChar, testDatePattern } from '../../libs';
import Dropdown from '../Dropdown';
import Icon from '../Icon';
import Input from '../Input';
import { prefix } from '../prefix';
import Transition from '../Transition';
import DatePicker from './DatePicker';
import { updateDate } from './store/actions';
import reducers, { DateStateType } from './store/reducers';

export interface DateProps {
  className?: string;
  size?: number;
}

const LDate: FunctionComponent<DateProps> = ({ className, size }) => {
  const [isValid, setValid] = useState(true);

  const [pickerIsVisiable, setPickerVisiable] = useState(false);

  const { dateString } = useSelector((state: DefaultRootState & { date: DateStateType }) => {
    return state.date;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const currentdateString = getCurrentDateString();
    dispatch(updateDate(currentdateString));
  }, [dispatch]);

  useEffect(() => {
    if (testDatePattern(dateString)) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [dateString]);

  const inputCls = cxs({
    invalid: !isValid,
  });

  const classes = cxs(`${prefix}-date-group`, className);
  return (
    <Dropdown
      style={{ display: 'inline' }}
      onClickOutside={() => {
        setPickerVisiable(false);
      }}
    >
      <div className={classes}>
        <Input
          type="input"
          size={size}
          className={inputCls}
          value={dateString}
          onInput={(e) => {
            const tar = e.target as EventTarget & HTMLInputElement;

            if (testDateChar(tar.value)) {
              dispatch(updateDate(tar.value));
            }

            if (testDatePattern(tar.value)) {
              setValid(true);
            } else {
              setValid(false);
            }
          }}
          onChange={(e) => {
            const tar = e.target as EventTarget & HTMLInputElement;
            if (testDateChar(tar.value)) {
              dispatch(updateDate(tar.value));
            }
          }}
          onKeyPress={(e) => {
            const tar = e.target as EventTarget & HTMLInputElement;
            if (e.key === 'Enter') {
              dispatch(updateDate(tar.value));

              if (testDatePattern(tar.value)) {
                setValid(true);
              } else {
                setValid(false);
              }

              tar.blur();
            }
          }}
          onBlur={(e) => {
            const tar = e.target as EventTarget & HTMLInputElement;
            dispatch(updateDate(tar.value));
            if (testDatePattern(tar.value)) {
              setValid(true);
            } else {
              setValid(false);
            }

            if (isValid) {
              dispatch(updateDate(tar.value));
            }
          }}
          icon={<Icon.Close />}
          iconBtn={<Icon.Calendar />}
          iconBtnOnClick={() => {
            setPickerVisiable(!pickerIsVisiable);
          }}
          onInputReset={() => {
            dispatch(updateDate(getCurrentDateString()));
          }}
        />
        <Transition in={pickerIsVisiable}>
          <DatePicker />
        </Transition>
      </div>
    </Dropdown>
  );
};

const DateWrapper: FunctionComponent<DateProps> = ({ ...args }) => {
  const store = createStore(reducers);
  return (
    <Provider store={store}>
      <LDate {...args} />
    </Provider>
  );
};

export default DateWrapper;
