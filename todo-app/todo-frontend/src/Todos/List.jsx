import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onDelete = (todo) => () => {
    deleteTodo(todo);
  };

  const onComplete = (todo) => () => {
    completeTodo(todo);
  };

  return (
    <>
      {todos
        .map((todo) => <Todo onDelete={onDelete} onComplete={onComplete} todo={todo} />)
        .reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </>
  );
};

export default TodoList;
