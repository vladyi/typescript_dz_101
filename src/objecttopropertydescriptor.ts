type ObjectToPropertyDescriptor<T> = {
    [K in keyof T]: {
      value: T[K];
      writable: boolean;
      enumerable: boolean;
      configurable: boolean;
    };
};
  