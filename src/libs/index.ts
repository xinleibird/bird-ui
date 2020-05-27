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
