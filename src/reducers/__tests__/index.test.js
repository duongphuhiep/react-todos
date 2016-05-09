jest.unmock("../")

import {Map} from "immutable"
import ReducersModule from "../"

describe("TodoItem", ()=> {
  let todoItem = Map({
      id: "2",
      complete: true,
      text: "foo"
    }
  );

  it("is toggled", ()=> {
    let toggleItem = ReducersModule.__get__("toggleItem");
    let updated = toggleItem(todoItem);

    expect(updated).toEqual(Map({
        id: "2",
        complete: false,
        text: "foo"
      }
    ))
  })

})

describe("TodoList", ()=> {
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

  it("should toggle by Id", ()=> {
    let toggleItemInList = ReducersModule.__get__("toggleItemInList");
    let updated = toggleItemInList(todoList, "2");
    expect(updated.get("2").get("complete")).toBe(true);
  })
})
