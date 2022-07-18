import { useState } from "react";

export default function useCounter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  }
  return { increment, decrement, count };
}
