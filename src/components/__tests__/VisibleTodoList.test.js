"use strict";
jest.unmock("../VisibleTodoList");

import VisibleTodoList from '../VisibleTodoList';

describe("getVisibleTodos", ()=>{
  //let VisibleTodoList = require("../VisibleTodoList");
  let getVisibleTodos = VisibleTodoList.__get__("getVisibleTodos");

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

  it("show all item", ()=>{
    let todos = getVisibleTodos(TodoData, "SHOW_ALL");
    expect(todos).toEqual(TodoData);
  });

  it("show completed item", ()=>{
    let todos = getVisibleTodos(TodoData, "SHOW_COMPLETED");
    expect(todos).toEqual([{
      id: 1,
      text: "completed",
      completed: true
    }]);
  });

  it("show active item", ()=>{
    let todos = getVisibleTodos(TodoData, "SHOW_ACTIVE");
    expect(todos).toEqual([{
      id: 2,
      text: "incompleted",
      completed: false
    }]);
  });


})