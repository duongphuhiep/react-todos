import React, {PropTypes} from "react"
import {connect} from "react-redux"
import TodoItem from "./TodoItem"
import {toggleTodo} from "../actions"

const TodoList = ({ todosData, onTodoClick }) => (
  <ul>
    {todosData.map(todoItemData =>
      <TodoItem
        key={todoItemData.get("id")}
        complete={todoItemData.get("complete")}
        text={todoItemData.get("text")}
        onClick={() => onTodoClick(todoItemData.get("id"))}
      />
    )}
  </ul>
);

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired
};

/*Bind presentational component to redux to get a Container component*/

/*
 [mapStateToProps(state, [ownProps]): stateProps] (Function): If specified, the component will subscribe
 to Redux store updates. Any time it updates, mapStateToProps will be called. Its result must be a plain object*,
 and it will be merged into the component’s props. If you omit it, the component will not be subscribed to the Redux store.
 If ownProps is specified as a second argument, its value will be the props passed to your component,
 and mapStateToProps will be re-invoked whenever the component receives new props.
*/
const mapStateToProps = (state)=>{
  return { todosData: state.get("todos") } //todosData is merge with the component properties
}

/*
 [mapDispatchToProps(dispatch, [ownProps]): dispatchProps] (Object or Function):

 If an object is passed, each function inside it will be assumed to be a Redux action creator. An object with the same
 function names, but with every action creator wrapped into a dispatch call so they may be invoked directly,
 will be merged into the component’s props.

 If a function is passed, it will be given dispatch. It’s up to you to return an object that somehow uses dispatch
 to bind action creators in your own way. (Tip: you may use the bindActionCreators() helper from Redux.)

 If you omit it, the default implementation just injects dispatch into your component’s props.

 If ownProps is specified as a second argument, its value will be the props passed to your component, and
 mapDispatchToProps will be re-invoked whenever the component receives new props.
 */
const mapDispatchToProps = (dispatch)=>{
  return { onTodoClick: (id) => dispatch(toggleTodo(id)) }
}



export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
