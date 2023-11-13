import React from "react";
import style from "./Button.module.scss";

const Button = ({ label, onClick }) => {
  return (
    <button className={style.customButton} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
