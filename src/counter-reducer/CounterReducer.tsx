import { useReducer } from "react";
import { InitialState } from "./interfaces/counter-interface";
import { counterReducerFunciton } from "./state/counter-reducer";
import * as CounterAction from "./actions/actions";

const INITIAL_STATE: InitialState = {
  counter: 10,
  previous: 0,
  changes: 0,
};

const CounterReducer = () => {
  const [{ counter, previous, changes }, dispatch] = useReducer(
    counterReducerFunciton,
    INITIAL_STATE
  );

  const handleReset = () => {
    dispatch(CounterAction.doReset());
  };

  const handleClick = (value: number) => {
    dispatch(CounterAction.doIncrementBy(value));
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
