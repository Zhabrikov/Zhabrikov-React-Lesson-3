import React from "react";
import Header from "./components/Header";
import InputSearch from "./components/InputSearch";
import TaskFilter from "./components/TaskFilter";
import ToDoList from "./components/ToDoList";
import CreateNewElement from "./components/CreateNewElement";
import Statistics from "./components/Statistics";

import "./app.scss";

class App extends React.Component {
  state = {
    todolist: [
      { message: "Task 1", important: false, done: false, id: 1 },
      { message: "Task 2", important: false, done: false, id: 2 },
      { message: "Task 3", important: false, done: false, id: 3 },
    ],
  };

  onDelete(id) {
    console.log("Delete " + id);
  }

  onImportant(id) {
    console.log("Important " + id)
  }

  render() {
    const { todolist } = this.state;

    return (
      <div className="wrapper">
        <Header />
        <hr />
        <InputSearch />
        <TaskFilter />
        <ToDoList todos={todolist} onDelete={this.onDelete} onImportant={this.onImportant}/>
        <CreateNewElement />
        <hr />
        <Statistics />
      </div>
    );
  }
}

export default App;
