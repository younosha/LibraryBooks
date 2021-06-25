import React from "react";
import Styles from "./ButtonOk.module.css";

export const ButtonOk = ({ addFunc, disabled }) => {
  return (
    <button
      className={disabled? Styles.buttonWrappDis : Styles.buttonWrapp}
      onClick={addFunc}
      disabled={disabled}
    >
      OK
    </button>
  );
};
