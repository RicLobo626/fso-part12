import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const handleDelete = (todo) => deleteTodo(todo);
  const handleComplete = (todo) => completeTodo(todo);

  return (
    <>
      {todos
        .map((todo) => <Todo onDelete={handleDelete} onComplete={handleComplete} todo={todo} />)
        .reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </>
  );
};

export default TodoList;
