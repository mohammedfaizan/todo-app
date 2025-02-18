import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./Header";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function deleteTodo(index) {
    const filteredTodos = todos.filter(
      (actualTodo, indexTodo) => index !== indexTodo
    );
    setTodos(filteredTodos);
  }

  return (
    <div>
      <Header />
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
