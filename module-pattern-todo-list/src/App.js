import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TodoItemList from "./TodoItemList";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [todoText, setTodoText] = useState("");
  function handleTextChange(e) {
    setTodoText(e.target.value);
  }

  function handButtonClick() {
    const tempList = [...todoItems];
    tempList.push(todoText);
    setTodoItems(tempList);
  }
  console.log(todoItems);

  return (
    <div className="app">
      <input type="text" value={todoText} onChange={handleTextChange} />
      <input type="button" value="ADD" onClick={handButtonClick} />
      <TodoItemList todoItems={todoItems} />
    </div>
  );
}

export default App;
