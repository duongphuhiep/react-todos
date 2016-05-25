import React, {Component} from 'react'
import {render} from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import {Map} from "immutable"
import TodoList from './components/TodoList'
import rootReducer from  "./reducers"
import AddTodo from './components/AddTodo'
import InvokeThunk from './components/InvokeThunk'

let initialState = Map({
  todos: Map({
    "a": Map({
      id: "a",
      complete: true,
      text: "fooo"
    }),
    "b": Map({
      id: "b",
      complete: false,
      text: "bar"
    })
  })
})

// let store = createStore(rootReducer, initialState, applyMiddleware(
//   //thunkMiddleware, // lets us dispatch() functions
//   loggerMiddleware // neat middleware that logs actions
// ))

// store.subscribe(()=>{
//   console.info(store.getState());
// })

let loggerMiddleware = createLogger({
  collapsed: true,
  stateTransformer: state => state.toJS() //transform immutable object to a more readable format in log
});

let store = createStore(rootReducer, initialState,
  applyMiddleware(
    //loggerMiddleware,
    thunkMiddleware
  )
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <AddTodo />
          <TodoList />
          <InvokeThunk />
        </div>
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