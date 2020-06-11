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
  rendersigns: string[],
  preIndex?: string,
  unionProps?: Object
) => {
  return React.Children.map(children, (child, index) => {
    const itemElement = child as ReactElement;

    for (const sign of rendersigns) {
      if (itemElement.props.rendersign === sign) {
        return React.cloneElement(
          itemElement,
          Object.assign(
            {},
            {
              index: preIndex ? `${preIndex}-${index}` : `${index}`,
              key: preIndex ? `${preIndex}-${index}` : `${index}`,
            },
            unionProps
          )
        );
      }
    }
    console.warn(
      `Component just accept ${rendersigns} component, but got a <${itemElement.type}> element, this could not be rendered.`
    );
  });
};

export const renderElement = (
  element: ReactElement,
  rendersigns: string[],
  unionProps?: Object
) => {
  for (const sign of rendersigns) {
    if (element.props.rendersign === sign) {
      return React.cloneElement(element, Object.assign({}, unionProps));
    }
  }
  console.warn(
    `Component just accept ${rendersigns} component, but got a <${element.type}> element, this could not be rendered.`
  );
};

export const getChildrenStructure = (children: ReactNode, rendersigns: string[]) => {
  let isFirstMasked = true;
  return React.Children.map(children, (child, index) => {
    const itemElement = child as ReactElement;

    for (const sign of rendersigns) {
      if (
        itemElement.props.rendersign === sign &&
        typeof itemElement.props.children === 'string'
      ) {
        const marked = (itemElement.props.selected ? true : false) && isFirstMasked;

        const item = {
          key: `${index}`,
          node: itemElement.props.children,
          marked,
        };

        if (itemElement.props.selected) {
          isFirstMasked = false;
        }

        return item;
      }
    }
  });
};
