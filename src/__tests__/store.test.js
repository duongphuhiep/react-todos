jest.unmock("../reducers")
jest.unmock("../actions")

import {createStore} from "redux"
import {Map} from "immutable"
import rootReducer from "../reducers"
import {addTodo, toggleTodo} from "../actions"

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

const store = createStore(rootReducer, initialState);

describe("raw dispatcher", ()=>{
  // let unsubscribe = store.subscribe(()=>{
  //   console.info(store.getState());
  // })

  it("should toggle item", ()=>{
    store.dispatch(toggleTodo("b"));
    expect(store.getState().get("todos").get("b").get("complete")).toBe(true);
  })

  it("should add item", ()=>{
    store.dispatch(addTodo("hello"));
    store.dispatch(addTodo("world"));
    expect(store.getState().get("todos").size).toBe(4);
  })

  //unsubscribe()
})


