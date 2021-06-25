import React from "react";
import Styles from "./Book.module.css";

export const Book = ({ name, year, description, id, deleteFunc }) => {
  return (
    <div className={Styles.bookWrapp}>
      <div className={Styles.bookItem}>
        <div className={Styles.bookItemName}>Название книги:</div>{" "}
        <div>{name}</div>
      </div>
      <div className={Styles.bookItem}>
        <div className={Styles.bookItemName}>Год выпуска:</div>{" "}
        <div>{year}</div>
      </div>
      <div className={Styles.bookItem}>
        <div className={Styles.bookItemName}>Описание:</div>
        <div
          dangerouslySetInnerHTML={{ __html: `${description}` }}
        ></div>
      </div>
      <div className={Styles.trash} onClick={() => deleteFunc(id)}>
        X
      </div>
    </div>
  );
};
