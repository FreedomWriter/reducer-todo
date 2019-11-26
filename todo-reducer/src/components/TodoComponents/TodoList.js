import React, { useContext } from "react";
import Todo from "./Todo";
import { TodoContext } from "../../contexts/todoContext";
//get rid of props
const TodoList = props => {
  const { state } = useContext(TodoContext);
  //   console.log(`TodoList.js: state: `, state);
  //   console.log(`TodoList.js: props: `, props);
  //   let test = JSON.parse(localStorage.getItem("tasks"));

  const handleClick = e => {
    // console.log(`TodoList.js: handleClick: props, e`, props, e);
    props.clearComplete();
  };
  return (
    <div className="list">
      {state.todo.length !== 0 ? (
        <h4>Cross It Off</h4>
      ) : (
        <h4>Really, Nothing?</h4>
      )}
      {state.todo &&
        state.todo.map(item => {
          return (
            <Todo
              toggleComplete={props.toggleComplete}
              key={item.id}
              item={item}
              //   toggleComplete={props.toggleComplete}
            />
          );
        })}
      <button className="clear-button" onClick={handleClick}>
        Make Room
      </button>
    </div>
  );
};

export default TodoList;
