import React from "react";
import HeaderComponent from "../../shared/components/Header";
import styles from "./BaseLayout.module.scss";

export default function BaseLayout({ children }) {
  return (
    <div className={styles.container}>
      <HeaderComponent />
      {children}
    </div>
  );
}
