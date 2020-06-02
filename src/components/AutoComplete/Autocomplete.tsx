import cxs from 'classnames';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { DefaultRootState, Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';
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
}

const Autocomplete: FunctionComponent<AutocompleteProps> = ({
  className,
  data = [],
  size = 40,
  onKeyPress,
}) => {
  const classes = cxs(className, `${prefix}-autocomplete`);

  const suggestions = useSelector((state: DefaultRootState & { finder: SuggestionsType }) => {
    return state.finder.suggestions;
  });

  const keyword = useSelector((state: DefaultRootState & { finder: SuggestionsType }) => {
    return state.finder.keyword;
  });

  const [inputEmpty, setInputEmpty] = useState(true);

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

  return (
    <div className={classes}>
      <Input
        inputSize="small"
        value={keyword}
        onKeyPress={onKeyPress}
        size={size}
        onChange={(e) => {
          const target = e.target as EventTarget & HTMLInputElement;
          if (target.value) {
            setInputEmpty(false);
          } else {
            setInputEmpty(true);
          }
          dispatch(updateSuggestions(target.value));
        }}
      />
      <Transition in={!inputEmpty}>
        <List data={filtered} />
      </Transition>
    </div>
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
