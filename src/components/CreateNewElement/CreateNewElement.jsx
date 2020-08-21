import React from "react";
import "./CreateNewElement.scss";

const CreateNewElement = () => {
  return (
    <div className="new-task">
      <input
        type="text"
        id="new-task-input"
        placeholder="Write down a new task..."
      />
      <button id="new-task-button">Add</button>
    </div>
  );
};

export default CreateNewElement;
