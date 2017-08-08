import React from "react";
import styles from "./SubmitButton.css";

const SubmitButton = ({name, onClick}) => <button onClick={onClick} className={styles.submitButton}>{name}</button>;
export default SubmitButton;
