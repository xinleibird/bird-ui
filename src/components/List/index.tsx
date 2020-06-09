import { FunctionComponent } from 'react';
import List, { Li, LiProps, ListProps, Ul, UlProps } from './List';

export type { LiProps, ListProps, UlProps };

type ListComponent = FunctionComponent<ListProps> & {
  Ul: FunctionComponent<UlProps>;
  Li: FunctionComponent<LiProps>;
};

const ReferList = List as ListComponent;

ReferList.Ul = Ul;
ReferList.Li = Li;

export default ReferList;
