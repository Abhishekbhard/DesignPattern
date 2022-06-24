import InputRow from "./InputRow";
import Button from "./Button";
import { useState } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  function addTodoItem(todo) {
    todo.length && setTodos([...todos, todo]);
  }
  function removeTodo(i) {
    todos.splice(i, 1);

    setTodos([...todos]);
  }
  return (
    <div className="todo-list">
      <h1>Todo Items</h1>
      <InputRow addTodoItem={addTodoItem} />
      <List>
        {todos.map((todo, i) => (
          <ListItem key={`${todo}-${i}`}>
            <ListItemText>{todo}</ListItemText>
            <Button onClick={() => removeTodo(i)} color="secondary">
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
