export const ackermann: F2<number, number, number> = (m, n) =>
  m === 0 ? n + 1 : ackermann(m - 1, n === 0 ? 1 : ackermann(m, n - 1))
