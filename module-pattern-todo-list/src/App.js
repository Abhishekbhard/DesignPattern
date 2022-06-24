import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
