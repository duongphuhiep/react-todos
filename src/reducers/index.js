import {Map} from "immutable"

const toggleItem = (todoItem) => {
  return todoItem.set("complete", !todoItem.get("complete"));
}

const toggleItemInList = (todoList, id) => {
  let item = todoList.get(id);
  if (item) {
    return todoList.set(id, toggleItem(item));
  }
  return todoList;
}


const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TODO":
    {
      let todoItem = Map({
        id: action.id,
        complete: false,
        text: action.text
      })
      let todoList = state.get("todos")
      let updatedTodos = todoList.set(action.id, todoItem);
      return state.set("todos", updatedTodos);
    }
    case "TOGGLE_TODO":
    {
      let todoList = state.get("todos")
      let updatedTodos = toggleItemInList(todoList, action.id);
      return state.set("todos", updatedTodos);
    }
    default:
      return state;
  }

}

export default rootReducer;

