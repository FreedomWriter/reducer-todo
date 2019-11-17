import React, { useState } from "react";
import { TodoContext } from "../contexts/todoContext";

const TodoProvider = props => {
  const todoItems = JSON.parse(localStorage.getItem("tasks"));
  const [state, setState] = useState({
    todo: todoItems ? todoItems : ""
    //Todo Array
  }); //State

  localStorage.setItem("tasks", JSON.stringify(state.todo));
  const setStateItem = item => {
    console.log("TodoProvider: setStateItem: item: ", item);
    setState(() => {
      return item;
    });
  };

  return (
    <TodoContext.Provider value={{ state, setState: setStateItem }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
