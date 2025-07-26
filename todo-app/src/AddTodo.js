import React, { useState } from "react";

function AddTodo({ addTodo }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        className="border border-gray-300 p-2 flex-grow rounded-l"
        placeholder="Add new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600">
        Add
      </button>
    </form>
  );
}

export default AddTodo;
