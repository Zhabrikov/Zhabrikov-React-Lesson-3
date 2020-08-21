import React from "react";
import "./ToDoListItem.scss";

class ToDoListItem extends React.Component {
  state = {
    done: false,
  };

  toggleDone() {
    //this.state.done = true;

    this.setState((prevState) => {
      return {
        done: !prevState.done,
      };
    });
  }

  removeHandler() {
    this.props.onDelete();
  }

  importantHandler() {
    this.props.onImportant();
  }

  render() {
    const { message } = this.props;
    let classNameText = "task-text";

    if (this.state.done) {
      classNameText += " task_is_done";
    }

    return (
      <div className="task-item">
        <span className={classNameText} onClick={() => this.toggleDone()}>
          {message}
        </span>
        <div className="controls">
          <i className="fa fa-trash" onClick={() => this.removeHandler()} />
          <i className="fa fa-star" onClick={() => this.importantHandler()}/>
        </div>
      </div>
    );
  }
}

export default ToDoListItem;
