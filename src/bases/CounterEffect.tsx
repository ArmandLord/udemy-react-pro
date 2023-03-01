import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface Props {
  initialValue: number;
}
const MAXIMUN_COUNTER = 10;
const CounterEffect = ({ initialValue }: Props) => {
  const [counter, setCounter] = useState(initialValue);

  // useRef solo hace referencia a un unico elemento del DOM
  const counterElement = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (counter >= 10) {
      const tl = gsap.timeline();

      tl.to(counterElement.current, {
        y: -10,
        duration: 0.5,
        repeat: 1,
        yoyo: true,
      }).to(counterElement.current, {
        x: 10,
        duration: 0.5,
      });
    }
  }, [counter]);

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNTER));
  };

  return (
    <>
      <h1>Counter:</h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handleClick}>click</button>
    </>
  );
};

export default CounterEffect;
