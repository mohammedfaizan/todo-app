import { useState } from "react";

export function TodoForm({ setTodos }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
   e.preventDefault();
   if (todo.trim()) {
    setTodos((todos) => [...todos, todo])
    setTodo("")
   }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="inputTodo"
          placeholder="Add an Item"
          value={todo} // Controlled input
          onChange={(e) => setTodo(e.target.value)} // Update state on change
        />
        <button>Add</button>
      </form>
    </div>
  );
}