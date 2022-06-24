function TodoItemList({ todoItems }) {
  function handleRemove(i) {
    console.log(i, "Remove");
  }
  return (
    <div>
      {todoItems.map((item, i) => {
        return (
          <div key={i} className="todoItems">
            <h5>{item}</h5>
            <div className="remove">
              <input type="button" value="Remove" onClick={handleRemove(i)} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TodoItemList;
