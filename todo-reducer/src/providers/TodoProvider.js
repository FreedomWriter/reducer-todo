import React, { useReducer } from "react";
import { TodoContext } from "../contexts/todoContext";

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      console.log(`todoReducer: switch: case ADD: state `, state);
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            item: action.payload,
            completed: false,
            id: Date.now()
          }
        ]
      };
    case "REMOVE_COMPLETED":
      return {
        ...state,
        todo: state.todo.filter(item => {
          return !item.completed;
        })
      };
    case "TOGGLE_COMPLETED":
      //   console.log(`TodoProvider.js: switch: case: 'TOGGLE_COMPLETED`, state);
      //   console.log(
      //     `TodoProvider: switch: case "TOGGLE_COMPETED": action.payload:  `,
      //     action.payload
      //   );
      return {
        ...state,

        todo: state.todo.map(task => {
          //   console.log(
          //     `TodoProvider: switch: case "TOGGLE_COMPETED": state.todo.map: task:  `,
          //     task
          //   );

          if (task.id === action.payload)
            // console.log(
            //   `TodoProvider: TOGGLE_COMPLETED: task.complete`,
            //   task.completed
            // );
            return {
              ...task,
              completed: !task.completed
            };
          return task;
        })
      };
    default:
      return state;
  }
};

const todoItems = JSON.parse(localStorage.getItem("tasks"));

export const initialState = {
  todo: todoItems
    ? todoItems
    : [
        {
          item: "Learn about reducers",
          completed: false,
          id: 3892987589
        }
      ]
};

export const TodoProvider = props => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};
