import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch todos from backend
  useEffect(() => {
    axios.get("http://localhost:8080/api/todos")
         .then((res) => setTodos(res.data))
         .catch((err) => console.error("Error fetching todos:", err));
  }, []);

  // Add a new todo
  const addTodo = (title) => {
    axios.post("http://localhost:8080/api/todos", { title, completed: false })
         .then((res) => setTodos([...todos, res.data]))
         .catch((err) => console.error("Error adding todo:", err));
  };

  // Toggle todo completion
  const toggleTodo = (id) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    axios.put(`http://localhost:8080/api/todos/${id}`, { ...todo, completed: !todo.completed })
         .then((res) => {
           setTodos(todos.map((t) => (t.id === id ? res.data : t)));
         })
         .catch((err) => console.error("Error updating todo:", err));
  };

  // Delete todo
  const deleteTodo = (id) => {
    axios.delete(`http://localhost:8080/api/todos/${id}`)
         .then(() => {
           setTodos(todos.filter((t) => t.id !== id));
         })
         .catch((err) => console.error("Error deleting todo:", err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96 rounded shadow-lg">
        {/* Header */}
        <div className="bg-blue-500 text-white p-4 rounded-t">
          <h1 className="text-2xl font-bold text-center">To-Do App</h1>
        </div>

        {/* Content */}
        <div className="bg-green-100 p-6 rounded-b">
          <AddTodo addTodo={addTodo} />
          <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
