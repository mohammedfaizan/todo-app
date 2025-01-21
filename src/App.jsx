import { useState } from "react";
import "./App.css";
import { Header } from "./Header";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

function App() {
  const [todos, setTodos] = useState([])
  return (
    <div>
      <Header />
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
