import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {removeTodo} from '../actions'

require('./TodoItem.css');

const TodoItem = ({ onClick, complete, text, id, dispatch} ) => {
  return (
    <li className="TodoItem" id={id}>
      <span
        onClick={onClick}
        style={{
              textDecoration: complete ? 'line-through' : 'none'
            }}
      >
        {text}
      </span>
      <button className="remove" onClick={()=>dispatch(removeTodo(id))}>X</button>
    </li>
  )
}

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  complete: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default connect()(TodoItem);
