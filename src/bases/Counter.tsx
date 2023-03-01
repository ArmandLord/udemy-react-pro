import { useState } from "react";

interface Props {
  initialValue: number;
}

const Counter = ({ initialValue }: Props) => {
  const [counter, setCounter] = useState(initialValue);

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      <div>Counter: {counter}</div>
      <button onClick={handleClick}>click</button>
    </>
  );
};

export default Counter;
