import { useState } from "react";

export function TodoForm({ setTodos }) {
  const [todo, setTodo] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    setTodo(document.getElementById('inputTodo').value)
    if (todo) {
      setTodos((todos) => [... todos, todo])
    }
    console.log(todo)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" id="inputTodo" placeholder="Add an Item" />
      <button>Add</button>
      </form>
    </div>
  );
}
