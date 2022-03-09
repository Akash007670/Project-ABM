import React from "react";
import ReactDom from "react-dom";
import Styles from "./modal.module.css";

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className={Styles["overlay-styles"]} />
      <div className={Styles["modal-styles"]}>
        <button onClick={onClose} className={Styles["button-close"]}>
          x
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
