import { useContext } from "react";

const { state, setState } = useContext(TodoContext);

export const initialState = state;

export const titleReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      console.log(`added`);
      return {
        todo: [
          ...state.todo,
          {
            item: action.payload,
            id: Date.now(),
            completed: false,
            isProcrastinating: false
          }
        ]
      };
    case "REMOVE_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter(item => item !== action.payload)
      };
    case "TOGGLE_COMPLETED":
      return {
        ...state,
        todos: state.todos.map(item, index => {
          if (index === item[index]) {
            console.log(`you dispatched toggle_complete`);
          }
        })
      };
    default:
      return state;
  }
};
