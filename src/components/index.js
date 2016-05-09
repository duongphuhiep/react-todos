import React, {PropTypes} from 'react'
import {Map} from "immutable"
//import FilterLink from '../containers/FilterLink'

//--
export const Todo = ({ onClick, complete, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: complete ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  complete: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};


//--
export const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.get("id")}
        complete={todo.get("complete")}
        text={todo.get("text")}
        onClick={() => onTodoClick(todo.get("id"))}
      />
    )}
  </ul>
);

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired
};

/*
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    complete: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
};
*/


//--
export const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </a>
  )
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

//--
// export const Footer = () => (
//   <p>
//     Show:
//     {" "}
//     <FilterLink filter="SHOW_ALL">
//       All
//     </FilterLink>
//     {", "}
//     <FilterLink filter="SHOW_ACTIVE">
//       Active
//     </FilterLink>
//     {", "}
//     <FilterLink filter="SHOW_complete">
//       complete
//     </FilterLink>
//   </p>
// );