let nextTodoId = 0;
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
};

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
};

export const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  }
};

export const startFetch = (url) => {
  return {
    type: "START_FETCH",
    url
  }
}

export const endFetch = () => {
  return {
    type: "END_FETCH"
  }
}

export const addThunkItem = () => {
  return (dispatch) => {
    let newItemName = "Thunk start"

    let promise = new Promise((resolve, reject) => {
      setTimeout(
        ()=> {
          let newItemName = "Thunk end"
          dispatch(addTodo(newItemName))
          resolve(newItemName)
        }
        , 1000)
    })

    dispatch(addTodo(newItemName))

    return promise
  }
}
