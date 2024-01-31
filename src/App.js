import "./reset.css";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import CheckAllAndRemaining from "./components/CheckAllAndRemaining.js";
import TodoFliter from "./components/TodoFliter.js";
import CleanCompletedBTN from "./components/CleanCompletedBTN.js";
import { useEffect, useState } from "react";

function App() {
  let [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((todos) => {
        setTodos(todos);
      });
  }, []);
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        {/* TodoForm */}
        <TodoForm />
        {/* TodoList */}
        <TodoList todos={todos} />
        {/* TodoFliter */}
        <CheckAllAndRemaining />
        <div className="other-buttons-container">
          {/* TodoFliter */}
          <TodoFliter />
          {/* CleanCompletedBTN */}
          <CleanCompletedBTN />
        </div>
      </div>
    </div>
  );
}

export default App;
