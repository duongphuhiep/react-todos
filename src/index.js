import React, {Component} from 'react'
import { render } from 'react-dom'
import {TodoList} from './components/index'
import {createStore} from "redux"
import {Map} from "immutable"

let todoList = Map({
  "1": Map({
    id: "1",
    complete: true,
    text: "foo"
  }),
  "2": Map({
    id: "2",
    complete: false,
    text: "bar"
  })
})

class App extends Component {
  render() {
    return (
      <div>
        <TodoList onTodoClick={(id) => alert(id)} todos={todoList.toArray()} />
      </div>
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