jest.unmock("../reducers")
jest.unmock("../actions")
jest.unmock('timers')

import {createStore, applyMiddleware} from "redux"
import {Map} from "immutable"
import rootReducer from "../reducers"
import {addTodo, toggleTodo, removeTodo} from "../actions"
import thunkMiddleware from "redux-thunk"
import {setTimeout} from "timers"

let initialState = Map({
  "todos": Map({
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



describe("raw dispatcher", ()=>{
  // let unsubscribe = store.subscribe(()=>{
  //   console.info(store.getState());
  // })

  let store;

  beforeEach(() => store = createStore(rootReducer, initialState))

  it("should toggle item", ()=>{
    store.dispatch(toggleTodo("b"));
    expect(store.getState().get("todos").get("b").get("complete")).toBe(true);
  })

  it("should add item", ()=>{
    store.dispatch(addTodo("hello"));
    store.dispatch(addTodo("world"));
    expect(store.getState().get("todos").size).toBe(4);
  })

  it("should remove item", ()=>{
    store.dispatch(removeTodo("a"))
    expect(store.getState().get("todos").size).toBe(1)
    expect(store.getState().get("todos").first().get("id")).toBe("b");
  })

  //unsubscribe()
})

describe("Use thunk", ()=>{
  let store;

  beforeEach(() => store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware)))


  /* a thunk action creator, it will add a item "Thunk start" to the list first
   * then return a promise which add "Thunk end" to the list after 50ms
   */
  const addThunkItem = () => {
    return (dispatch) => {
      let newItemName = "Thunk start"

      let promise = new Promise((resolve, reject) => {
        setTimeout(
          ()=> {
            let newItemName = "Thunk end"
            dispatch(addTodo(newItemName))
            resolve(newItemName)
          }
          , 50)
      })

      dispatch(addTodo(newItemName))

      return promise
    }
  }

  pit("should add thunk items", ()=>{
    let addItems = store.dispatch(addThunkItem())

    addItems.then(() => {
      let todoList = store.getState().get("todos")
      expect(todoList.size).toBe(4)
      expect(todoList.last().get("text")).toEqual("Thunk end")
    })

    let todoList = store.getState().get("todos");
    expect(todoList.size).toBe(3)
    expect(todoList.last().get("text")).toEqual("Thunk start")

    return addItems
  })

})




