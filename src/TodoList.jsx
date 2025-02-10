import { TodoItem } from "./TodoItem";

export function TodoList( {todos} ) {
  return (
    <div>
      {todos && todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} />
      ))}
    </div>
  );
}
