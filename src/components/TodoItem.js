import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

function TodoItem({ todo }) {
  return (
    <li>
      <input type="checkbox" checked={todo.completed} readOnly />
      {todo.text}
    </li>
  );
}

// PropTypes validation for the todo prop
TodoItem.propTypes = {
  todo: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default TodoItem;
