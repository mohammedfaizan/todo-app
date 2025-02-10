export function TodoItem({ todo }) {
  return (
    <div className="todo-item">
      <p>{todo}</p>
      <button>Delete</button>
    </div>
  );
}
