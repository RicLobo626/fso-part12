const Todo = ({ todo, onDelete, onComplete }) => {
  const handleDelete = () => {
    onDelete(todo);
  };
  const handleComplete = () => onComplete(todo);

  return (
    <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "70%", margin: "auto" }}>
      <span>{todo.text}</span>
      <span>This todo is {todo.done ? "" : "not"} done</span>
      <span>
        <button onClick={handleDelete}> Delete </button>
        {!todo.done && <button onClick={handleComplete}> Set as done </button>}
      </span>
    </div>
  );
};

export default Todo;
