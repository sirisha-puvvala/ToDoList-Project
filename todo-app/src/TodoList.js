// import React from "react";

// function TodoList({ todos, toggleTodo, deleteTodo }) {
//   return (
//     <ul>
//       {todos.map((todo) => (
//         <li key={todo.id} className="flex justify-between items-center bg-white p-2 mb-2 rounded shadow">
//           <span
//             onClick={() => toggleTodo(todo.id)}
//             className={`cursor-pointer ${todo.completed ? "line-through text-gray-400" : ""}`}
//           >
//             {todo.title}
//           </span>
//           <button
//             onClick={() => deleteTodo(todo.id)}
//             className="bg-red-500 text-white px-2 rounded hover:bg-red-600"
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default TodoList;
import React from "react";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center mb-2 p-2 bg-blue-100 rounded shadow"
        >
          <span
            onClick={() => toggleTodo(todo.id)}
            className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
          >
            {todo.title}
          </span>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
