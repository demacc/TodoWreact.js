import "./reset.css";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import CheckAllAndRemaining from "./components/CheckAllAndRemaining.js";
import TodoFliter from "./components/TodoFliter.js";
import CleanCompletedBTN from "./components/CleanCompletedBTN.js";

function App() {
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        {/* TodoForm */}
        <TodoForm />
        {/* TodoList */}
        <TodoList />
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
