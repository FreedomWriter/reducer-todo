import React, { useContext, useEffect } from "react";
import "../src/components/TodoComponents/Todo.css";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import { TodoContext } from "./contexts/todoContext";

function App() {
  const { state, dispatch } = useContext(TodoContext);
  // console.log(`App.js: state: `, state);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.todo));
  }, [state]);
  const addTask = newItem => {
    console.log(`App.js: addTask: newItem: `, newItem);
    dispatch({ type: "ADD", payload: newItem });

    // localStorage.setItem("tasks", JSON.stringify([...state.todo]));
  };

  const toggleComplete = taskID => {
    console.log(
      `App.js: toggleComplete: You reached toggleComplete, here is the taskID (also payload): `,
      taskID
    );
    dispatch({ type: "TOGGLE_COMPLETED", payload: taskID });
  };

  const clearComplete = item => {
    console.log(`App.js: clerComplete: item`, item);
    // setState({
    //   todo: state.todo.filter(task => {
    //     return !task.complete;
    //   })
    // });
    dispatch({ type: "REMOVE_COMPLETED", payload: item });
  };

  // console.log(`${state.todo.task}`);
  return (
    <div className="app">
      <h2>Are You Done?</h2>
      <TodoForm addTask={addTask} />
      <TodoList
        // todo={state.todo}
        clearComplete={clearComplete}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
