import { useCounter } from "../hooks/useCounter";
interface Props {
  initialValue: number;
}
const CounterHook = ({ initialValue }: Props) => {
  const { counter, counterElement, handleClick } = useCounter(initialValue, 10);
  return (
    <>
      <h1>CounterHook:</h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handleClick}>click</button>
    </>
  );
};

export default CounterHook;
