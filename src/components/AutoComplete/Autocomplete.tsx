import cxs from 'classnames';
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { DefaultRootState, Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';
import Dropdown from '../Dropdown';
import Input from '../Input';
import List from '../List';
import prefix from '../prefix';
import Transition from '../Transition';
import { initSuggestions, updateSuggestions } from './store/actions';
import reducers, { SuggestionsType } from './store/reducers';

interface AutocompleteProps {
  className?: string;
  data: string[];
  size?: number;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
}

const Autocomplete: FunctionComponent<AutocompleteProps> = ({
  className,
  data = [],
  size = 40,
  onKeyPress,
  name,
  id,
}) => {
  const classes = cxs(`${prefix}-autocomplete`, className);

  const suggestions = useSelector((state: DefaultRootState & { finder: SuggestionsType }) => {
    return state.finder.suggestions;
  });

  const keyword = useSelector((state: DefaultRootState & { finder: SuggestionsType }) => {
    return state.finder.keyword;
  });

  const [inputEmpty, setInputEmpty] = useState(true);

  const inputRef = useRef((null as unknown) as EventTarget & HTMLInputElement);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initSuggestions(data));
  }, [data, dispatch]);

  const filtered = suggestions
    .filter((item) => {
      return item.isSuggested;
    })
    .map((item) => {
      return { key: item.key, value: item.suggestion };
    });

  const liClickMethod = (item: string) => {
    dispatch(updateSuggestions(item));
    inputRef.current.focus();
  };

  return (
    <Dropdown
      style={{ display: 'inline' }}
      onClickOutside={() => {
        setInputEmpty(true);
      }}
    >
      <div className={classes}>
        <Input
          name={name}
          id={id}
          inputSize="small"
          value={keyword}
          onKeyPress={onKeyPress}
          size={size}
          onFocus={() => {
            if (keyword) {
              setInputEmpty(false);
            }
          }}
          onChange={(e) => {
            const target = e.target as EventTarget & HTMLInputElement;

            inputRef.current = target;

            if (target.value) {
              setInputEmpty(false);
            } else {
              setInputEmpty(true);
            }
            dispatch(updateSuggestions(target.value));
          }}
        />
        <Transition in={!inputEmpty}>
          <List data={filtered} clickMethod={liClickMethod} />
        </Transition>
      </div>
    </Dropdown>
  );
};

const AutocompleteWrapper: FunctionComponent<AutocompleteProps> = ({ ...args }) => {
  const store = createStore(reducers);
  return (
    <Provider store={store}>
      <Autocomplete {...args} />
    </Provider>
  );
};

export default AutocompleteWrapper;
