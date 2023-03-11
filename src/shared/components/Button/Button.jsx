import { classNames } from "../../lib/classNames";
import styles from "./Button.module.scss";

export default function Button({ children, className, ...props }) {
  return (
    <button className={classNames(styles.button, className)} {...props}>
      {children}
    </button>
  );
}
