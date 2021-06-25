import React from "react";
import Styles from "./ButtonCancel.module.css";

export const ButtonCancel = ({close}) => {
  return <button className={Styles.buttonWrapp} onClick={close}>Cancel</button>;
};
