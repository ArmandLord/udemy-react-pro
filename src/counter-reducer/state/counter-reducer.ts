import { CounterAction } from "../actions/actions";
import { InitialState } from "../interfaces/counter-interface";

export const counterReducerFunciton = (
  state: InitialState,
  action: CounterAction
): InitialState => {
  console.log("counterReducerFunciton", state, action);

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
