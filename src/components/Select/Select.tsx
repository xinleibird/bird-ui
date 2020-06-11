import cxs from 'classnames';
import React, { FunctionComponent, SelectHTMLAttributes, useEffect, useState } from 'react';
import { DefaultRootState, Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';
import { getChildrenStructure } from '../../libs';
import Dropdown from '../Dropdown';
import Input from '../Input';
import List, { ListItemType } from '../List';
import { prefix } from '../prefix';
import Transition from '../Transition';
import { initList, updateSelected } from './store/actions';
import reducers from './store/reducers';

interface BaseSelectProps {
  className?: string;
  size?: number;
}

export type SelectProps = Partial<SelectHTMLAttributes<HTMLSelectElement> & BaseSelectProps>;

const Select: FunctionComponent<SelectProps> = ({ className, size, children }) => {
  const [showList, setShow] = useState(false);

  const selected = useSelector(
    (state: DefaultRootState & { options: { selected: { key: string; value: string } } }) => {
      return state.options.selected;
    }
  );

  const data = useSelector(
    (
      state: DefaultRootState & {
        options: { list: { key: string; node: string; marked: boolean }[] };
      }
    ) => {
      return state.options.list;
    }
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const list = getChildrenStructure(children, ['Option']);

    dispatch(initList(list as any));

    dispatch(updateSelected('0'));

    for (const item of list || []) {
      if (item.marked) {
        dispatch(updateSelected(item.key));
        break;
      }
    }
  }, [children, dispatch]);

  const classes = cxs(`${prefix}-select`, className);

  const clickMethod = (item: ListItemType) => {
    dispatch(updateSelected(item.key.toString()));
  };

  return (
    <Dropdown
      onClickOutside={(e) => {
        setShow(false);
      }}
      style={{ display: 'inline' }}
    >
      <div className={classes}>
        <Input
          value={selected.value}
          onChange={(e) => {}}
          size={size}
          onFocus={() => {
            setShow(true);
          }}
        />
        <Transition in={showList} animationClassName="fade-in">
          <List data={data} className="select-ul" clickMethod={clickMethod} />
        </Transition>
      </div>
    </Dropdown>
  );
};

const SelectWrapper: FunctionComponent<SelectProps> = ({ ...args }) => {
  const store = createStore(reducers);
  return (
    <Provider store={store}>
      <Select {...args} />
    </Provider>
  );
};

export interface OptionProps {
  selected?: boolean;
  key?: string;
  readonly rendersign?: string;
}

export const Option: FunctionComponent<OptionProps> = ({ rendersign, selected, ...args }) => {
  return <List.Li marked={selected ? true : false} {...args}></List.Li>;
};

Option.defaultProps = {
  rendersign: 'Option',
};

export default SelectWrapper;
