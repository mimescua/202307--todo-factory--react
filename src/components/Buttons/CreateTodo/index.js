import React from "react";
import { TodoContext } from "../../../context";
import './CreateTodo.css'

function CreateTodo(props) {
  const { setOpenPanel, } = React.useContext(TodoContext);
  const handleopenPanel = (event) => {
    setOpenPanel(prevModal => !prevModal)
  }
  return (
    <button className="create-todo" onClick={handleopenPanel}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    </button>
  );
}

export { CreateTodo }