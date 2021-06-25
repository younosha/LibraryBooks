import React from "react";
import Styles from "./Input.module.css";

export const Input = ({ value, onChange }) => {
  return <input value={value} onChange={onChange} className={Styles.input} type="textarea"/>;
};
