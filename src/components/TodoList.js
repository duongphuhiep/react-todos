import React, {PropTypes} from "react"
import {connect} from "react-redux"
import TodoItem from "./TodoItem"
import {toggleTodo} from "../actions"

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      <TodoItem
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

/*Bind presentational component to redux to get a Container component*/

const mapStateToProps = (state)=>{
  return { todos: state.get("todos") }
}
const mapDispatchToProps = (dispatch)=>{
  return { onTodoClick: (id) => dispatch(toggleTodo(id)) }
}

const BindedTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export {TodoList, BindedTodoList as default}
