import React, {PropTypes} from 'react'
import {Map} from "immutable"
//import FilterLink from '../containers/FilterLink'

//--



//--

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