export function Count({ count, increment, decrement }) {
  return (
    <div className="counter">
      <div className="btns">
        <button onClick={(e) => increment()}>+</button>
        <button onClick={(e) => decrement()}>-</button>
      </div>
      <p>Current count: {count}</p>
    </div>
  );
}
