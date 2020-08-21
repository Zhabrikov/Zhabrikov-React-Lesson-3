import React from "react";
import "./Header.scss";
import s from "./Header.module.css";

function Header() {
  return (
    <h1 className={s["app-header"]}>
      <i className="fa fa-list-ul" />
      ToDoList
    </h1>
  );
}
export default Header;
