import React from "react";
import styles from "./BaseFormError.module.scss";

export default function BaseFormError({ message }) {
  return <p className={styles["base-error"]}>{message}</p>;
}
