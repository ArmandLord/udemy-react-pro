import { useReducer, useState } from "react";

interface InitialState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: InitialState = {
  counter: 10,
  previous: 0,
  changes: 0,
};

type CounterAction =
  | { type: "incrementBy"; payload: { value: number } }
  | { type: "reset" };

const counterReducerFunciton = (
  state: InitialState,
  action: CounterAction
): InitialState => {
  let { counter, changes } = state;
  switch (action.type) {
    case "reset":
      return {
        counter: 0,
        previous: 0,
        changes: 0,
      };
    case "incrementBy":
      return {
        counter: counter + action.payload.value,
        previous: counter,
        changes: changes + 1,
      };
    default:
      return state;
  }
};
const CounterReducer = () => {
  const [{ counter, previous, changes }, dispatch] = useReducer(
    counterReducerFunciton,
    INITIAL_STATE
  );

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  const handleClick = (value: number) => {
    dispatch({ type: "incrementBy", payload: { value } });
  };

  return (
    <>
      <div>Counter Reducer: {counter}</div>
      <div>Counter Previus: {previous}</div>
      <div>Counter Changes: {changes}</div>
      <button onClick={handleReset}>reset</button>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(2)}>+2</button>
      <button onClick={() => handleClick(5)}>+5</button>
      <button onClick={() => handleClick(10)}>+10</button>
    </>
  );
};

export default CounterReducer;
