// src/components/TodoItem.js
import React from 'react';

function TodoItem({ todo }) {
  return (
    <li>
      <input type="checkbox" checked={todo.completed} readOnly />
      {todo.text}
    </li>
  );
}

export default TodoItem;