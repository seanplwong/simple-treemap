export const map = <T, R, K extends keyof T>(
  subject: T,
  iteratee: (value: T[K], key: K) => R,
) => Object.keys(subject).map((key) => iteratee(subject[key as K], key as K));
