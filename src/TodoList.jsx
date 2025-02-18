import { TodoItem } from "./TodoItem";

export function TodoList({ todos, deleteTodo }) {
  return (
    <div>
      {todos &&
        todos.map((todo, index) => (
          <TodoItem
            todo={todo}
            index={index}
            key={index}
            deleteTodo={deleteTodo}
          />
        ))}
    </div>
  );
}
