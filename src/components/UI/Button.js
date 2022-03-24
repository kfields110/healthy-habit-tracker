import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {

  // Custom button to make sure all buttons on app are similar styles and functionality
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
        {props.children}
        </button>
  );
};

export default Button;
