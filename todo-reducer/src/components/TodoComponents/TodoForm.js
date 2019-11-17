import React, { useState } from "react";

export default function TodoForm(props) {
  //   console.log(`TodoForm.js: state: `, state);
  //   console.log(`TodoForm.js: props: `, props);
  const [newItem, setNewItem] = useState("");
  const handleChanges = e => {
    setNewItem(e.target.value);
    // console.log(`TodoForm.js: handleChanges: newItem `, newItem);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (newItem !== "") {
      console.log(newItem);
      props.addTask(newItem);
    }
    setNewItem("");
    // console.log(`TodoForm.js: handleSubmit: localState: newItem: `, newItem);
  };

  return (
    <section className="form-container">
      <label forhtml="to do list" hidden />
      <form id="to do list" onSubmit={handleSubmit} className="form">
        <input
          className="input"
          placeholder="What else?"
          onChange={handleChanges}
          type="text"
          name="item"
          value={newItem}
        />
        <button className="add-button">Do More</button>
      </form>
    </section>
  );
}
