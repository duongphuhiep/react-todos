import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {removeTodo} from '../actions'

require('./TodoItem.css');

const TodoItem = ({ onClick, removeClick, complete, text, id}) => (
  <li className="TodoItem" id={id}>
    <span
          onClick={onClick}
          style={{
            //display: "inline-block",
            textDecoration: complete ? 'line-through' : 'none'
          }}
    >
      {text}
    </span>
    <button className="remove" onClick={()=>removeClick(id)}>X</button>
  </li>
)

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  complete: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return { removeClick: (id)=>dispatch(removeTodo(id)) }
}


export default connect(null, mapDispatchToProps)(TodoItem);