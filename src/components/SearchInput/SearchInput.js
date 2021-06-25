import React from "react";
import Styles from "./SearchInput.module.css";

export const SearchInput = ({ value, onChange }) => {
  return (
    <div className={Styles.wrapper}>
      <h5>Поиск по описанию</h5>
      <input value={value} onChange={onChange} className={Styles.input} />
    </div>
  );
};
