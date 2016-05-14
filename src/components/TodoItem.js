import React, {PropTypes} from 'react'

require('./TodoItem.css');

const TodoItem = ({ onClick, complete, text }) => (
  <li className="TodoItem">
    <span
          onClick={onClick}
          style={{
            //display: "inline-block",
            textDecoration: complete ? 'line-through' : 'none'
          }}
    >
      {text}
    </span>
    <button className="remove">X</button>
  </li>
);

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  complete: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default TodoItem