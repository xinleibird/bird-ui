import React, { ReactElement, ReactNode } from 'react';

export const debounce = (fn: Function, timeout: number, context?: ThisType<any>) => {
  let timmer: NodeJS.Timeout | number | null = null;

  return (...args: any[]) => {
    if (timmer) {
      return;
    } else {
      fn.apply(context, args);
      timmer = setTimeout(() => {
        timmer = null;
      }, timeout);
    }
  };
};

export const renderChildren = (
  children: ReactNode,
  renderSigns: string[],
  preIndex?: string
) => {
  return React.Children.map(children, (child, index) => {
    const itemElement = child as ReactElement;
    for (const sign of renderSigns) {
      if (itemElement.props.renderSign === sign) {
        // console.log(itemElement.props.renderSign);
        return React.cloneElement(itemElement, {
          index: preIndex ? `${preIndex}-${index}` : `${index}`,
          key: preIndex ? `${preIndex}-${index}` : `${index}`,
        });
      }
    }
    console.warn(
      `Component just accept ${renderSigns} component, other element could not be rendered.`
    );
  });
};
