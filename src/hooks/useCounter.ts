import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

export const useCounter = (initialValue: number, maxCounter: number) => {
  const [counter, setCounter] = useState(initialValue);
  // useRef solo hace referencia a un unico elemento del DOM
  const counterElement = useRef<any>(null);
  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, maxCounter));
  };
  // Almacenamos la referencia del timeline para que solo se cree una vez
  const tl = useRef(gsap.timeline());

  useLayoutEffect(() => {
    if (!counterElement.current) return;
    tl.current
      .to(counterElement.current, {
        y: -10,
        duration: 0.5,
        repeat: 1,
        yoyo: true,
      })
      .to(counterElement.current, {
        x: 10,
        duration: 0.5,
      })
      .pause();
  }, []);

  useEffect(() => {
    if (counter < maxCounter) return;
    tl.current.play(0);
  }, [counter]);

  return {
    counter,
    counterElement,
    handleClick,
  };
};
