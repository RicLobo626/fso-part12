const Todo = ({ todo, onDelete, onComplete }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "70%", margin: "auto" }}>
      <span>{todo.text}</span>
      <span>This todo is {todo.done ? "" : "not"} done</span>
      <span>
        <button onClick={onDelete(todo)}> Delete </button>
        {!todo.done && <button onClick={onComplete(todo)}> Set as done </button>}
      </span>
    </div>
  );
};

export default Todo;
