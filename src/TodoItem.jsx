export function TodoItem({ todo, index, deleteTodo }) {
  return (
    <div className="todo-item">
      <p>{todo}</p>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  );
}
