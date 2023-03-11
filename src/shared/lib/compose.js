export const compose =
  (...functions) =>
  (value) =>
    functions.reduceRight((result, currentFunc) => currentFunc(result), value);
