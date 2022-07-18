import "./App.css";
import { useState } from "react";

function Input({ render }) {
  cons [value,setValue]=useState("");
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      placeholder="Temp in °C"
    />
  );
}

function App() {

  return (
    <div className="App">
      <h1>☃️ Temperature Converter 🌞</h1>
      <Input render={value=>(<>
        <Kelvin value={value} />
      <Fahrenheit value={value} />
      </>)}/>
     
    </div>
  );
}
function Kelvin({ value = 0 }) {
  return <div className="temp">{value + 273.15}K</div>;
}

function Fahrenheit({ value = 0 }) {
  return <div className="temp">{(value * 9) / 5 + 32}°F</div>;
}
export default App;
