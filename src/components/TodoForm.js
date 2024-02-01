import React, { useState } from "react";

export default function TodoForm({ addTodo }) {
  let [title, setTitle] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    // addForm
    let todo = {
      id: Math.random(),
      title,
      completed: false,
    };

    addTodo(todo);
    // clearForm
    setTitle("");
  };
  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="What do you need to do?"
          // two way data binary
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </form>
    </div>
  );
}
