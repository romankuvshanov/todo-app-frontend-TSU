import React from "react";
import styles from "./Input.module.scss";

export default function Input({ title, id, ...inputProps }) {
  return (
    <div className={styles["input__container"]}>
      {title && <label htmlFor={id}>{title}</label>}
      <input className={styles["input__component"]} {...inputProps} />
    </div>
  );
}
