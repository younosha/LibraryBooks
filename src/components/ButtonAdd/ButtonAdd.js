import React from "react";
import Styles from "./ButtonAdd.module.css";

export const ButtonAdd = ({ open }) => {
  return (
    <button className={Styles.buttonWrapp} onClick={open}>
      Добавить книгу
    </button>
  );
};
