export type CounterAction =
  | { type: "incrementBy"; payload: { value: number } }
  | { type: "reset" };

export const doReset = (): CounterAction => ({
  type: "reset",
});

export const doIncrementBy = (value: number): CounterAction => ({
  type: "incrementBy",
  payload: { value },
});
