type UpperCaseKeys<T> = {
    [K in keyof T as Uppercase<K & string>]: T[K];
};
  