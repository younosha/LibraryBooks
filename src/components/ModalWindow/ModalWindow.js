import React, { useState } from "react";
import Styles from "./ModalWindow.module.css";
import { Input } from "../Input/Input";
import { ButtonOk } from "../ButtonOk/ButtonOk";
import { ButtonCancel } from "../ButtonCancel/ButtonCancel";

export const ModalWindow = ({ close, arr }) => {
  const [book, setBook] = useState({
    id: "",
    name: "",
    year: "",
    description: "",
  });

  const addFunc = () => {
    const id = new Date().getUTCMilliseconds();
    arr.push({ ...book, id: id });
    setBook({ id: "", name: "", year: "", description: "" });
    close();
  };
  const chechDis = () => {
    if (
      book.name.length > 0 &&
      book.year.length > 0 &&
      book.description.length > 0
    ) {
      return false;
    }
    return true;
  };

  return (
    <div className={Styles.background} onClick={close}>
      <div
        className={Styles.contentWrapp}
        onClick={(event) => event.stopPropagation()}
      >
        <h2>Добавление книги</h2>
        <h5>Название книги</h5>
        <Input
          value={book.name}
          onChange={(e) => {
            setBook({ ...book, name: e.target.value });
          }}
        />
        <h5>Год выпуска</h5>
        <Input
          value={book.year}
          onChange={(e) => {
            setBook({ ...book, year: e.target.value });
          }}
        />
        <h5>Описание</h5>
        <Input
          value={book.description}
          onChange={(e) => {
            setBook({ ...book, description: e.target.value });
          }}
        />
        <div className={Styles.buttonsWrapp}>
          <ButtonOk addFunc={addFunc} disabled={chechDis()} />
          <ButtonCancel close={close} />
        </div>
      </div>
    </div>
  );
};
