import React from "react";
import Modal from "../Modal/Modal";

export default function FormModal({ open, onClose }) {
  return (
    <>
      <Modal open={open} onClose={onClose}>
        Modal
      </Modal>
    </>
  );
}
