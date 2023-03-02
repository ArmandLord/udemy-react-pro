import Counter from "./bases/Counter";
import CounterBy from "./bases/CounterBy";
import CounterEffect from "./bases/CounterEffect";
import CounterHook from "./bases/CounterHook";
import CounterReducer from "./counter-reducer/CounterReducer";

function App() {
  return (
    <div>
      {/* <Counter initialValue={15} /> */}
      {/* <CounterBy initialValue={18} /> */}
      {/* <CounterEffect initialValue={0} /> */}
      {/* <CounterHook initialValue={0} /> */}
      <CounterReducer />
    </div>
  );
}

export default App;
