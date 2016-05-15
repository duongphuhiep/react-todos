jest.unmock("../reducers")
jest.unmock("../actions")

import {createStore} from "redux"
import {Map} from "immutable"
import rootReducer from "../reducers"
import {addTodo, toggleTodo, removeTodo} from "../actions"

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

  var store;

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


