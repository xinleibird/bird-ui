// export { default } from './List';

import List, { Li, Ul, ListProps } from './List';
import { FunctionComponent, HTMLAttributes, LiHTMLAttributes } from 'react';

export type ListComponent = FunctionComponent<ListProps> & {
  Ul: FunctionComponent<LiHTMLAttributes<HTMLElement>>;
  Li: FunctionComponent<HTMLAttributes<HTMLElement>>;
};

const ReferList = List as ListComponent;

ReferList.Ul = Ul;
ReferList.Li = Li;

export default ReferList;
