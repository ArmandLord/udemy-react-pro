import { useState } from "react";

interface Props {
  initialValue: number;
}
interface PropsState {
  counter: number;
  clicks: number;
}

const CounterBy = ({ initialValue }: Props) => {
  const [{ counter, clicks }, setCounter] = useState<PropsState>({
    counter: initialValue,
    clicks: 0,
  });

  const handleClick = (increment: number) => {
    setCounter(({ counter, clicks }) => ({
      counter: increment + counter,
      clicks: clicks + 1,
    }));
  };

  return (
    <>
      <div>Counter: {counter}</div>
      <div>Click: {clicks}</div>
      <button onClick={() => handleClick(1)}>click</button>
      <button onClick={() => handleClick(5)}>click</button>
    </>
  );
};

export default CounterBy;
