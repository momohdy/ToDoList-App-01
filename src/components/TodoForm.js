import React, { useState } from "react";
import shortid from "shortid";

function TodoForm(props) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo({
        id : shortid.generate(),
        text : text,
        complete : false,
    })
    setText("")

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input-field"
        onChange={(e) => {
          setText(e.target.value); 
        }}
        value={text}
      />
      <button className="btn" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
