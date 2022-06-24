import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

export default function InputRow({ addTodoItem }) {
  const [input, setInput] = useState("");

  function addTodo() {
    addTodoItem(input);
    setInput("");
  }
  return (
    <div>
      <form>
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <Button onClick={addTodo} color="primary" variant="outlined">
          Add Item
        </Button>
      </form>
    </div>
  );
}
