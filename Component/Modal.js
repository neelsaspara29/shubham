import React from "react";
import styles from "../styles/Home.module.css";

const Modal = (props) => {
  return (
    <>
      <h1 className={styles.modal}>{props.children}</h1>
    </>
  );
};

export default Modal;
