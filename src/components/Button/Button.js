import React from "react";
import styles from "./Button.css";

const Button = ({name}) => <button className={styles.baseButton}>{name}</button>;
export default Button;
