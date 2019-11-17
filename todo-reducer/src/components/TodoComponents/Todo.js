import React from "react";

const Todo = props => {
  //   console.log(`Todo.js: props.item from TodoList.js: `, props.item);
  //   console.log(`Todo.js: state: `);
  //   const map = state.todo.map(item => item.item);
  //   console.log(`Todo.js: state.todo.map: `, map);

  const handleClick = e => {
    props.toggleComplete(props.item.id);
  };
  return (
    <div
      onClick={handleClick}
      className={`task${props.item.completed ? " complete" : ""}`}
    >
      <p>{props.item.item}</p>
    </div>
  );
};

export default Todo;
