export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    }
  ],
  currentView: "all"
};

export const titleReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      console.log(`added`);
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            item: action.payload,
            completed: false,
            id: (state.id += Date.now())
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
