import React from "react";
import Styles from "./MainList.module.css";
import { Book } from "../Book/Book";

export const MainList = ({ data, deleteFunc }) => {
  return (
    <div className={Styles.container}>
      {data.map((el) => {
        return (
          <Book
            name={el.name}
            year={el.year}
            description={el.description}
            id={el.id}
            deleteFunc={deleteFunc}
          />
        );
      })}
    </div>
  );
};
