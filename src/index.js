import React, {Component} from 'react'
import { render } from 'react-dom'
import {TodoList} from './components/index'
import {createStore} from "redux"

let TodoData = [
  {
    id: 1,
    text: "completed",
    completed: true
  },
  {
    id: 2,
    text: "incompleted",
    completed: false
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <TodoList onTodoClick={(id) => alert(id)} todos={TodoData} />
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