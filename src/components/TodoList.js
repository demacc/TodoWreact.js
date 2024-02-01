import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, deleteTodo }) {
  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}
