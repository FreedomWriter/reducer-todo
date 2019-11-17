import React, { useState, useContext } from "react";
import "../src/components/TodoComponents/Todo.css";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import { TodoContext } from "./contexts/todoContext";
// import TodoSearch from "./components/TodoComponents/TodoSearch";

function App() {
  const { state, setState } = useContext(TodoContext);
  const addTask = todoItem => {
    // setState({
    //   todo: [
    //     ...state.todo,
    //     {
    //       item: todoItem,
    //       id: Date.now(),
    //       completed: false,
    //       isProcrastinating: false
    //     }
    //   ]
    // });
  };

  const toggleComplete = taskID => {
    setState({
      todo: state.todo.map(task => {
        if (task.id === taskID)
          return {
            ...task,
            complete: !task.complete
          };
        return task;
      })
    });
  };

  const clearComplete = () => {
    console.log(`you clicked clear`);
    setState({
      todo: state.todo.filter(task => {
        return !task.complete;
      })
    });
  };

  // console.log(`${state.todo.task}`);
  return (
    <div className="app">
      <h2>Are You Done?</h2>
      <TodoForm />
      <TodoList
        todo={state.todo}
        clearComplete={clearComplete}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
