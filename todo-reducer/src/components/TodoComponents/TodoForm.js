import React, { useState, useContext } from "react";
import { TodoContext } from "../../contexts/todoContext";
///after converting to class - work on adding an ADD dispatch to onSubmit
export default function TodoForm() {
  //   constructor() {
  //     super();
  //     this.state = {
  //       todoItem: ""
  //     };
  //   }

  const { state, setState } = useContext(TodoContext);
  console.log(state);
  const [newItem, setNewItem] = useState("");
  const handleChanges = e => {
    setNewItem(e.target.value);
  };

  const handleSubmit = e => {
    if (newItem !== "") {
      console.log(newItem);
      dispatchEvent({ type: "ADD", payload: newItem });
    }
  };

  return (
    <section className="form-container">
      <label forhtml="to do list" hidden />
      <form
        id="to do list"
        onSubmit={newItem => dispatchEvent({ type: "ADD", payload: newItem })}
        className="form"
      >
        <input
          className="input"
          placeholder="What else?"
          onChange={handleChanges}
          type="text"
          name="item"
          value={state.todoItem}
        />
        <button className="add-button">Do More</button>
      </form>
    </section>
  );
}
