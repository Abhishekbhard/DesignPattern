import logo from "./logo.svg";
import "./App.css";
import { Count } from "./Count";
import { Width } from "./Width";
import useCounter from "./useCounter";
import useWidth from "./useWidth";

function App() {
  const counter = useCounter();
  const width = useWidth();
  return (
    <div className="App">
      <Count
        count={counter.count}
        increment={counter.increment}
        decrement={counter.decrement}
      />
      <div id="divider" />
      <Width width={width} />
    </div>
  );
}

export default App;
