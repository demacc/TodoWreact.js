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

  let addTodo = (todo) => {
    // update data at server site
    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    // update data at client site
    setTodos((preState) => [...preState, todo]);
  };
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        {/* TodoForm */}
        <TodoForm addTodo={addTodo} />
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
