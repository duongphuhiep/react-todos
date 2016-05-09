import React, {Component} from 'react'
import {render} from 'react-dom'
import {createStore} from "redux"
import {Provider} from "react-redux"
import {Map} from "immutable"
import BindedTodoList from './components/TodoList'
import rootReducer from  "./reducers"

let initialState = Map({
  todos: Map({
    "a": Map({
      id: "a",
      complete: true,
      text: "foo"
    }),
    "b": Map({
      id: "b",
      complete: false,
      text: "bar"
    })
  })
})

let store = createStore(rootReducer, initialState)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BindedTodoList />
      </Provider>
    );
  }
}

// import AddTodo from './AddTodo'
// import VisibleTodoList from './VisibleTodoList'
//
// const App = () => (
//   <div>
//     <AddTodo />
//     <VisibleTodoList />
//     <Footer />
//   </div>
// )

render(<App />, document.getElementById("root"));